export const defaultLang = 'fr' as const

export const ui = {
  fr: {
    // Navbar
    'nav.features': 'Fonctionnalités',
    'nav.usecases': 'Métiers',
    'nav.performance': 'Performance',
    'nav.github': 'GitHub',
    'nav.getStarted': 'Démarrer',

    // Hero
    'hero.badge': 'Open source · ERP & CRM pour artisans',
    'hero.title1': 'Votre entreprise,',
    'hero.title2': 'connectée.',
    'hero.description':
      "Gestion, communication, projets, support, RH — Mestier réunit tous les outils de votre entreprise dans une plateforme open-source.",
    'hero.primaryAction': 'Démarrer gratuitement',
    'hero.secondaryAction': 'Voir sur GitHub',
    'hero.trust1': 'Backend Rust',
    'hero.trust2': 'PostgreSQL',
    'hero.trust3': 'Licence open source',
    'hero.news.label': 'À la une',
    'hero.news.tag': 'Nouveauté',
    'hero.news.title': 'Mestier arrive en version 1.0.',
    'hero.statement': "Du devis à la facture, Mestier pilote toute l'activité des artisans et des PME.",

    // Product preview
    'preview.label': 'Une interface, pas un tableur',
    'preview.title': "Votre activité d'un coup d'œil.",

    // Sectors
    'sectors.label': 'Adopté par les ateliers et les PME de tous métiers',

    // Features
    'features.label': 'Une plateforme, tout votre métier',
    'features.title': 'Tout gérer avec Mestier.',
    'features.description':
      "Fini les tableurs éparpillés et les logiciels qui ne se parlent pas. Mestier réunit la gestion de votre activité dans une seule interface.",
    'features.crm.title': 'CRM clients',
    'features.crm.description':
      "Centralisez contacts, chantiers et historique. Chaque échange, devis et facture rattaché au bon client.",
    'features.quotes.title': 'Devis & factures',
    'features.quotes.description':
      "Créez des devis en quelques clics, convertissez-les en factures, suivez les paiements et exportez en PDF conforme.",
    'features.inventory.title': 'Stock & matériaux',
    'features.inventory.description':
      "Suivez vos matières et fournitures en temps réel. Décompte automatique à chaque chantier.",
    'features.profitability.title': 'Rentabilité',
    'features.profitability.description':
      "Marge par chantier, par client, par mois. Les calculs sont faits côté serveur : une seule source de vérité.",
    'features.multiorg.title': 'Multi-organisation',
    'features.multiorg.description':
      "Gérez plusieurs entités, équipes et rôles. Permissions fines pour chaque membre de l'atelier.",
    'features.auth.title': 'Sécurité & SSO',
    'features.auth.description':
      "Authentification moderne (WebAuthn / FIDO2) via Ferriskey. Vos données restent chez vous.",

    // Platform (the connected suite)
    'platform.label': 'La plateforme',
    'platform.title': 'Tous vos outils, connectés.',
    'platform.description':
      "Pas un énième logiciel de gestion : une suite connectée pour toute votre entreprise. La gestion est là aujourd'hui ; communication, projets, support et RH arrivent — le tout open-source et au même endroit.",
    'platform.soon': 'Bientôt',
    'platform.available': 'Disponible',
    'platform.gestion.title': 'Gestion',
    'platform.gestion.description': 'Devis, factures, clients, stock et rentabilité.',
    'platform.comms.title': 'Communication',
    'platform.comms.description': "Chat d'équipe façon Discord et visioconférence.",
    'platform.projects.title': 'Projets',
    'platform.projects.description': 'Planning, tâches et suivi de chantiers.',
    'platform.support.title': 'Support',
    'platform.support.description': 'Boîte de réception partagée et support e-mail.',
    'platform.hr.title': 'Ressources humaines',
    'platform.hr.description': 'Congés, paie, notes de frais et recrutement.',

    // Showcase
    'showcase.label': 'Du devis au paiement',
    'showcase.title': 'Votre activité, pilotée en temps réel.',
    'showcase.description':
      "Chaque action met à jour vos indicateurs instantanément. Plus besoin d'attendre la fin du mois pour savoir où vous en êtes.",
    'showcase.action': 'Voir la doc',
    'showcase.flow.title': 'Un flux unique, sans ressaisie.',
    'showcase.flow.description':
      "Le devis devient facture, la facture met à jour le stock et la trésorerie. Mestier orchestre chaque étape automatiquement.",
    'showcase.point1': 'Relances de paiement automatiques',
    'showcase.point2': 'Exports comptables et PDF conformes',
    'showcase.point3': 'Tableau de bord temps réel',

    // Performance
    'perf.label': 'Performance & souveraineté',
    'perf.title': 'Construit en Rust. Rapide par conception.',
    'perf.description':
      "Pas un n-ième SaaS lourd. Mestier est un logiciel libre, léger et taillé pour durer — du code ouvert que vous pouvez auditer et héberger.",
    'perf.stat1': 'Réponse API médiane',
    'perf.stat2': 'Requêtes vérifiées à la compilation',
    'perf.stat3': 'Dépendance propriétaire',
    'perf.rust.title': 'Rust, de bout en bout',
    'perf.rust.description':
      "Un backend Axum compilé, sans ramasse-miettes : latences basses et prévisibles même en charge.",
    'perf.sql.title': 'Requêtes sûres',
    'perf.sql.description':
      "SQLx vérifie chaque requête PostgreSQL à la compilation. Pas de surprise en production.",
    'perf.self.title': 'Auto-hébergeable',
    'perf.self.description':
      "Docker Compose et c'est parti. Hébergez Mestier où vous voulez, gardez la maîtrise de vos données.",

    // Use cases
    'usecases.label': 'Pensé pour le terrain',
    'usecases.title': 'Un outil pour chaque métier.',
    'usecases.description': "Mestier s'adapte à votre façon de travailler, pas l'inverse.",
    'usecases.cta': 'Découvrir',
    'usecases.1.tag': 'Menuiserie',
    'usecases.1.title': 'Du métré au chantier livré, sans ressaisie.',
    'usecases.2.tag': 'Plomberie & chauffage',
    'usecases.2.title': 'Interventions, pièces et factures au même endroit.',
    'usecases.3.tag': 'Fabrication & atelier',
    'usecases.3.title': 'La marge réelle de chaque commande, en direct.',

    // Testimonials
    'testimonials.label': "Ils l'utilisent au quotidien",
    'testimonials.title': 'Adopté par les artisans.',
    'testimonials.description': 'Ce que les ateliers et PME disent de Mestier.',
    'testimonials.1.body':
      "On a remplacé trois tableurs et un logiciel de facturation par Mestier. Les devis partent le soir même.",
    'testimonials.2.body':
      "Enfin un outil qui calcule ma marge réelle par chantier. Je sais quels clients sont rentables.",
    'testimonials.3.body':
      "Les relances de paiement automatiques m'ont fait gagner des semaines de trésorerie.",
    'testimonials.4.body':
      "Rapide, même avec des milliers de lignes. On sent que c'est du solide derrière.",
    'testimonials.5.body':
      "Open source et auto-hébergé : mes données restent chez moi, et je peux l'adapter à mon métier.",
    'testimonials.6.body':
      "L'interface est claire, mon équipe l'a prise en main en une après-midi.",
    'testimonials.7.body':
      "Du devis à la facture payée, tout est relié. On ne ressaisit plus rien.",
    'testimonials.8.body':
      "Le suivi de stock évite les ruptures sur les chantiers. Un vrai gain de temps.",

    // Founders
    'founders.label': "L'équipe",
    'founders.title': 'Les membres fondateurs.',
    'founders.description':
      "Mestier est porté par trois fondateurs qui construisent l'outil qu'ils auraient voulu avoir.",
    'founders.role': 'Co-fondateur',

    // CTA
    'cta.title': 'Reprenez la main sur votre gestion.',
    'cta.description':
      'Installez Mestier en quelques minutes. Gratuit, open source, et entièrement le vôtre.',
    'cta.action': 'Démarrer maintenant',
    'cta.secondary': 'Voir le code',
  },
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.usecases': 'Trades',
    'nav.performance': 'Performance',
    'nav.github': 'GitHub',
    'nav.getStarted': 'Get started',

    // Hero
    'hero.badge': 'Open source · ERP & CRM for artisans',
    'hero.title1': 'Your business,',
    'hero.title2': 'connected.',
    'hero.description':
      'Operations, communication, projects, support, HR — Mestier brings every tool your business needs into one open-source platform.',
    'hero.primaryAction': 'Start for free',
    'hero.secondaryAction': 'View on GitHub',
    'hero.trust1': 'Rust backend',
    'hero.trust2': 'PostgreSQL',
    'hero.trust3': 'Open-source license',
    'hero.news.label': 'Featured',
    'hero.news.tag': 'New',
    'hero.news.title': 'Mestier 1.0 is on the way.',
    'hero.statement': 'From quote to invoice, Mestier runs the entire business of artisans and SMEs.',

    // Product preview
    'preview.label': 'An interface, not a spreadsheet',
    'preview.title': 'Your business at a glance.',

    // Sectors
    'sectors.label': 'Trusted by workshops and SMEs across every trade',

    // Features
    'features.label': 'One platform, your whole trade',
    'features.title': 'Run it all with Mestier.',
    'features.description':
      "No more scattered spreadsheets and tools that don't talk to each other. Mestier brings your whole business into one interface.",
    'features.crm.title': 'Customer CRM',
    'features.crm.description':
      'Centralize contacts, jobs and history. Every exchange, quote and invoice tied to the right customer.',
    'features.quotes.title': 'Quotes & invoices',
    'features.quotes.description':
      'Create quotes in a few clicks, convert them to invoices, track payments and export compliant PDFs.',
    'features.inventory.title': 'Inventory & materials',
    'features.inventory.description':
      'Track your materials and supplies in real time. Automatically deducted on every job.',
    'features.profitability.title': 'Profitability',
    'features.profitability.description':
      'Margin by job, by customer, by month. Calculations run server-side — a single source of truth.',
    'features.multiorg.title': 'Multi-organization',
    'features.multiorg.description':
      'Manage multiple entities, teams and roles. Fine-grained permissions for every workshop member.',
    'features.auth.title': 'Security & SSO',
    'features.auth.description':
      'Modern authentication (WebAuthn / FIDO2) via Ferriskey. Your data stays with you.',

    // Platform (the connected suite)
    'platform.label': 'The platform',
    'platform.title': 'All your tools, connected.',
    'platform.description':
      'Not yet another management app: a connected suite for your whole company. Operations are here today; communication, projects, support and HR are coming — all open-source and in one place.',
    'platform.soon': 'Soon',
    'platform.available': 'Available',
    'platform.gestion.title': 'Operations',
    'platform.gestion.description': 'Quotes, invoices, customers, inventory and margins.',
    'platform.comms.title': 'Communication',
    'platform.comms.description': 'Discord-style team chat and video calls.',
    'platform.projects.title': 'Projects',
    'platform.projects.description': 'Planning, tasks and job tracking.',
    'platform.support.title': 'Support',
    'platform.support.description': 'Shared inbox and email support.',
    'platform.hr.title': 'Human resources',
    'platform.hr.description': 'Leave, payroll, expenses and recruitment.',

    // Showcase
    'showcase.label': 'From quote to payment',
    'showcase.title': 'Your business, steered in real time.',
    'showcase.description':
      "Every action updates your metrics instantly. No more waiting for month-end to know where you stand.",
    'showcase.action': 'Read the docs',
    'showcase.flow.title': 'One flow, no double entry.',
    'showcase.flow.description':
      'The quote becomes an invoice, the invoice updates stock and cash flow. Mestier orchestrates every step automatically.',
    'showcase.point1': 'Automatic payment reminders',
    'showcase.point2': 'Accounting exports and compliant PDFs',
    'showcase.point3': 'Real-time dashboard',

    // Performance
    'perf.label': 'Performance & sovereignty',
    'perf.title': 'Built in Rust. Fast by design.',
    'perf.description':
      'Not yet another heavy SaaS. Mestier is free software — lightweight and built to last, with open code you can audit and host.',
    'perf.stat1': 'Median API response',
    'perf.stat2': 'Queries checked at compile time',
    'perf.stat3': 'Proprietary dependencies',
    'perf.rust.title': 'Rust, end to end',
    'perf.rust.description':
      'A compiled Axum backend with no garbage collector: low, predictable latency even under load.',
    'perf.sql.title': 'Safe queries',
    'perf.sql.description':
      'SQLx verifies every PostgreSQL query at compile time. No surprises in production.',
    'perf.self.title': 'Self-hostable',
    'perf.self.description':
      "Docker Compose and you're off. Host Mestier wherever you want and keep control of your data.",

    // Use cases
    'usecases.label': 'Built for the field',
    'usecases.title': 'A tool for every trade.',
    'usecases.description': "Mestier adapts to the way you work, not the other way around.",
    'usecases.cta': 'Explore',
    'usecases.1.tag': 'Carpentry',
    'usecases.1.title': 'From measurement to delivered job, no double entry.',
    'usecases.2.tag': 'Plumbing & heating',
    'usecases.2.title': 'Jobs, parts and invoices in one place.',
    'usecases.3.tag': 'Manufacturing & workshop',
    'usecases.3.title': 'The real margin of every order, live.',

    // Testimonials
    'testimonials.label': 'They use it every day',
    'testimonials.title': 'Trusted by artisans.',
    'testimonials.description': 'What workshops and SMEs say about Mestier.',
    'testimonials.1.body':
      'We replaced three spreadsheets and an invoicing tool with Mestier. Quotes go out the same evening.',
    'testimonials.2.body':
      'Finally a tool that computes my real margin per job. I know which customers are profitable.',
    'testimonials.3.body':
      'The automatic payment reminders saved me weeks of cash flow.',
    'testimonials.4.body':
      "Fast, even with thousands of rows. You can tell there's solid engineering behind it.",
    'testimonials.5.body':
      'Open source and self-hosted: my data stays with me, and I can adapt it to my trade.',
    'testimonials.6.body':
      'The interface is clear, my team picked it up in an afternoon.',
    'testimonials.7.body':
      'From quote to paid invoice, everything is connected. We never re-enter anything.',
    'testimonials.8.body':
      'Inventory tracking prevents shortages on site. A real time-saver.',

    // Founders
    'founders.label': 'The team',
    'founders.title': 'The founding members.',
    'founders.description':
      "Mestier is built by three founders making the tool they wish they'd had.",
    'founders.role': 'Co-founder',

    // CTA
    'cta.title': 'Take back control of your operations.',
    'cta.description':
      'Set up Mestier in minutes. Free, open source, and entirely yours.',
    'cta.action': 'Start now',
    'cta.secondary': 'View the code',
  },
} as const

export type UiKey = keyof (typeof ui)['fr']
