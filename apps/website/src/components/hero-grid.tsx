'use client'

import { useEffect, useRef, useState } from 'react'

// Uniform dark-teal board; tiles are brighter teal shades, amber is a rare accent.
const BG = '#0b2e29'
const COLORS = ['#176055', '#1f6f5e', '#2a8a74', '#3fa38a', '#6fc2ad', '#d9960d']
const LIGHT = [3, 4] // palette indices used when the tiles form the logo

const COLS = 10
const ROWS = 5

const MODULES = ['DEVIS', 'FACTURES', 'CLIENTS', 'STOCK', 'MARGE', 'PLANNING', 'ACHATS']

// Pixel "M" (Mestier mark) on the 10×5 grid — two legs + a centre V.
//   X........X
//   XX......XX
//   X.X....X.X
//   X..X..X..X
//   X...XX...X
const LOGO: Array<[number, number]> = [
  [0, 0], [9, 0],
  [0, 1], [1, 1], [8, 1], [9, 1],
  [0, 2], [2, 2], [7, 2], [9, 2],
  [0, 3], [3, 3], [6, 3], [9, 3],
  [0, 4], [4, 4], [5, 4], [9, 4],
]
const N = LOGO.length
const STEP_MS = 440
const EASE = 'cubic-bezier(0.65, 0, 0.35, 1)'
const LOGO_TICKS = 15 // ~time spent forming + holding the M
const SCATTER_TICKS = 8 // ~time spent dispersed before re-forming

interface Tile {
  id: number
  c: number
  r: number
  pc: number // previous cell (to forbid immediate reversal → no circling)
  pr: number
  color: number
}

// Deterministic scattered start (mix), so SSR and first client render match.
function initialTiles(): Tile[] {
  const all: Array<[number, number]> = []
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) all.push([c, r])
  all.sort((a, b) => ((a[0] * 31 + a[1] * 17) % 97) - ((b[0] * 31 + b[1] * 17) % 97))
  return all.slice(0, N).map(([c, r], i) => ({ id: i, c, r, pc: -1, pr: -1, color: LIGHT[i % LIGHT.length] }))
}

function scatterCells(): Array<[number, number]> {
  const all: Array<[number, number]> = []
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) all.push([c, r])
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[all[i], all[j]] = [all[j], all[i]]
  }
  return all.slice(0, N)
}

// Greedy nearest matching, re-run every tick so assignments adapt to positions.
function assignTargets(tiles: Tile[], cells: Array<[number, number]>): Array<[number, number]> {
  const taken = new Array(cells.length).fill(false)
  const res: Array<[number, number]> = new Array(tiles.length)
  for (let i = 0; i < tiles.length; i++) {
    let best = -1
    let bestD = Infinity
    for (let j = 0; j < cells.length; j++) {
      if (taken[j]) continue
      const d = Math.abs(cells[j][0] - tiles[i].c) + Math.abs(cells[j][1] - tiles[i].r)
      if (d < bestD) {
        bestD = d
        best = j
      }
    }
    taken[best] = true
    res[i] = cells[best]
  }
  return res
}

const sign = (n: number) => (n > 0 ? 1 : n < 0 ? -1 : 0)
const inBounds = (c: number, r: number) => c >= 0 && c < COLS && r >= 0 && r < ROWS

// Move each off-target tile ONE cell. It prefers steps toward its target, may detour
// sideways to get around a blocker, but never steps straight back where it came from
// (so no circling). Destinations come only from cells empty at the START of the tick and
// are reserved uniquely → tiles never overlap, even mid-transition.
function step(tiles: Tile[], targets: Array<[number, number]>) {
  const startOcc = new Set(tiles.map((t) => `${t.c},${t.r}`))
  const reserved = new Set<string>()
  const order = tiles.map((_, i) => i).sort(() => Math.random() - 0.5)
  for (const i of order) {
    const t = tiles[i]
    const [tc, tr] = targets[i]
    if (t.c === tc && t.r === tr) continue
    const dc = sign(tc - t.c)
    const dr = sign(tr - t.r)
    const toward: Array<[number, number]> = []
    if (Math.abs(tc - t.c) >= Math.abs(tr - t.r)) {
      if (dc) toward.push([dc, 0])
      if (dr) toward.push([0, dr])
    } else {
      if (dr) toward.push([0, dr])
      if (dc) toward.push([dc, 0])
    }
    const others = ([[1, 0], [-1, 0], [0, 1], [0, -1]] as Array<[number, number]>)
      .filter(([mc, mr]) => !toward.some(([a, b]) => a === mc && b === mr))
      .sort(() => Math.random() - 0.5)
    for (const [mc, mr] of [...toward, ...others]) {
      const nc = t.c + mc
      const nr = t.r + mr
      if (!inBounds(nc, nr)) continue
      if (nc === t.pc && nr === t.pr) continue // no immediate reversal
      const key = `${nc},${nr}`
      if (startOcc.has(key) || reserved.has(key)) continue
      reserved.add(key)
      t.pc = t.c
      t.pr = t.r
      t.c = nc
      t.r = nr
      break
    }
  }
}

export function HeroGrid() {
  const [tiles, setTiles] = useState<Tile[]>(initialTiles)
  const phaseCells = useRef<Array<[number, number]>>(LOGO.map(([c, r]) => [c, r]))
  const phase = useRef<'logo' | 'scatter'>('logo')
  const ticks = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      setTiles((prev) => {
        const next = prev.map((t) => ({ ...t }))
        const targets = assignTargets(next, phaseCells.current)
        step(next, targets)
        ticks.current += 1

        // Phases switch on a timer — the loop can never be frozen by a stuck tile.
        const limit = phase.current === 'logo' ? LOGO_TICKS : SCATTER_TICKS
        if (ticks.current >= limit) {
          ticks.current = 0
          if (phase.current === 'logo') {
            phase.current = 'scatter'
            phaseCells.current = scatterCells()
            for (const t of next) t.color = Math.random() < 0.12 ? 5 : Math.floor(Math.random() * 5)
          } else {
            phase.current = 'logo'
            phaseCells.current = LOGO.map(([c, r]) => [c, r])
            next.forEach((t, i) => (t.color = LIGHT[i % LIGHT.length]))
          }
        }
        return next
      })
    }, STEP_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="relative flex aspect-[16/9] w-full flex-col overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* registration / crop marks */}
      <span className="absolute -left-px -top-px z-20 size-2 bg-foreground" aria-hidden="true" />
      <span className="absolute -right-px -top-px z-20 size-2 bg-foreground" aria-hidden="true" />
      <span className="absolute -bottom-px -left-px z-20 size-2 bg-foreground" aria-hidden="true" />
      <span className="absolute -bottom-px -right-px z-20 size-2 bg-foreground" aria-hidden="true" />

      {/* corner tagline — echoes the hero title */}
      <span className="absolute bottom-6 right-3 z-20 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
        Tout connecté
      </span>

      {/* top line: mini squares + module labels */}
      <div className="flex h-6 shrink-0 items-center gap-3 overflow-hidden border-b border-white/10 px-3 sm:h-7">
        {MODULES.map((m, i) => (
          <div key={m} className="flex shrink-0 items-center gap-1.5">
            <span
              className="size-2"
              style={{ backgroundColor: COLORS[i % (COLORS.length - 1)] }}
              aria-hidden="true"
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/55 sm:text-[10px]">
              {m}
            </span>
          </div>
        ))}
      </div>

      {/* main board — tiles walk cell-by-cell to form the Mestier "M", then scatter */}
      <div className="relative flex-1">
        {tiles.map((t) => (
          <div
            key={t.id}
            className="absolute left-0 top-0"
            style={{
              width: `${100 / COLS}%`,
              height: `${100 / ROWS}%`,
              transform: `translate(${t.c * 100}%, ${t.r * 100}%)`,
              backgroundColor: COLORS[t.color],
              transition: `transform ${STEP_MS}ms ${EASE}, background-color 0.6s ease`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
