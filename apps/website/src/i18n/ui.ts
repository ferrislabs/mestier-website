export const defaultLang = 'fr' as const

export const ui = {
  fr: {
    // Navbar
    'nav.features': 'Fonctionnalités',
    'nav.usecases': "Cas d'usage",
    'nav.performance': 'Performance',
    'nav.pricing': 'Tarifs',
    'nav.github': 'GitHub',
    'nav.getStarted': 'Démarrer',

    // Hero
    'hero.badge': 'Open source · La suite tout-en-un',
    'hero.title1': 'Votre entreprise,',
    'hero.title2': 'connectée.',
    'hero.description':
      "Mestier réunit gestion, communication, projets, support et RH dans une seule plateforme open-source.",
    'hero.primaryAction': 'Démarrer gratuitement',
    'hero.secondaryAction': 'Voir sur GitHub',
    'hero.trust1': 'Backend Rust',
    'hero.trust2': 'PostgreSQL',
    'hero.trust3': 'Licence open source',
    'hero.news.label': 'À la une',
    'hero.news.tag': 'Nouveauté',
    'hero.news.title': 'Mestier arrive en version 1.0.',
    'hero.statement': "Mestier réunit tous les outils de votre entreprise au même endroit.",

    // Product preview
    'preview.label': 'Une interface, pas un tableur',
    'preview.title': "Votre activité d'un coup d'œil.",

    // Sectors
    'sectors.label': 'Adopté par les startups, agences, PME et artisans',

    // Features
    'features.label': 'Une plateforme, toute votre activité',
    'features.title': 'Tout gérer avec Mestier.',
    'features.description':
      "Fini les tableurs éparpillés et les logiciels qui ne se parlent pas. Mestier réunit la gestion de votre activité dans une seule interface.",
    'features.crm.title': 'CRM clients',
    'features.crm.description':
      "Centralisez contacts, projets et historique. Chaque échange, devis et facture rattaché au bon client.",
    'features.quotes.title': 'Devis & factures',
    'features.quotes.description':
      "Créez des devis en quelques clics, convertissez-les en factures, suivez les paiements et exportez en PDF conforme.",
    'features.inventory.title': 'Stock & matériaux',
    'features.inventory.description':
      "Suivez vos matières et fournitures en temps réel. Décompte automatique à chaque projet.",
    'features.profitability.title': 'Rentabilité',
    'features.profitability.description':
      "Marge par projet, par client, par mois. Les calculs sont faits côté serveur : une seule source de vérité.",
    'features.multiorg.title': 'Multi-organisation',
    'features.multiorg.description':
      "Gérez plusieurs entités, équipes et rôles. Permissions fines pour chaque membre de l'équipe.",
    'features.auth.title': 'Sécurité & SSO',
    'features.auth.description':
      "Authentification moderne (WebAuthn / FIDO2) via Ferriskey. Vos données restent chez vous.",

    // Platform (the connected suite)
    'platform.label': 'La plateforme',
    'platform.title': 'Tous vos outils, connectés.',
    'platform.description':
      "Pas un énième logiciel de gestion, mais une suite connectée pour toute votre entreprise. La gestion est là aujourd'hui. Communication, projets, support et RH arrivent. Le tout open-source, au même endroit.",
    'platform.soon': 'Bientôt',
    'platform.available': 'Disponible',
    'platform.gestion.title': 'Gestion',
    'platform.gestion.description': 'Devis, factures, clients, stock et rentabilité.',
    'platform.comms.title': 'Communication',
    'platform.comms.description': "Chat d'équipe façon Discord et visioconférence.",
    'platform.projects.title': 'Projets',
    'platform.projects.description': 'Planning, tâches et suivi de projets.',
    'platform.support.title': 'Support',
    'platform.support.description': 'Boîte de réception partagée et support e-mail.',
    'platform.hr.title': 'Ressources humaines',
    'platform.hr.description': 'Congés, paie, notes de frais et recrutement.',

    // Showcase
    'showcase.label': 'Du devis au paiement',
    'showcase.title': 'Votre activité, pilotée en temps réel.',
    'showcase.description':
      "Chaque action met à jour vos indicateurs instantanément. Plus besoin d'attendre la fin du mois pour savoir où vous en êtes.",
    'showcase.action': 'Démarrer',
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
      "Pas un n-ième SaaS lourd. Mestier est un logiciel libre, léger et fait pour durer, dont vous pouvez auditer et héberger le code vous-même.",
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
    'usecases.label': 'Quelle que soit votre équipe',
    'usecases.title': 'Un outil pour chaque équipe.',
    'usecases.description': "Mestier s'adapte à votre façon de travailler, pas l'inverse.",
    'usecases.cta': 'Découvrir',
    'usecases.1.tag': 'Startups & tech',
    'usecases.1.title': 'De la première vente à la série A, un seul outil.',
    'usecases.2.tag': 'Agences & studios',
    'usecases.2.title': 'Projets, temps passé et factures au même endroit.',
    'usecases.3.tag': 'Artisans & PME',
    'usecases.3.title': 'Du devis au chantier livré, sans ressaisie.',

    // Testimonials
    'testimonials.label': "Ils l'utilisent au quotidien",
    'testimonials.title': 'Adopté par toutes les équipes.',
    'testimonials.description': 'Ce que startups, agences, PME et artisans en disent.',
    'testimonials.1.body':
      "Clients, facturation et projets au même endroit. Pour une petite équipe, c'est exactement ce qu'il nous fallait.",
    'testimonials.2.body':
      "Enfin un outil qui calcule ma marge réelle par projet. Je sais quels clients sont rentables.",
    'testimonials.3.body':
      "Temps passé, projets et factures sont reliés. Facturer au forfait ou au temps est enfin simple.",
    'testimonials.4.body':
      "Rapide, même avec des milliers de lignes. On sent que c'est du solide derrière.",
    'testimonials.5.body':
      "Open source et auto-hébergé : nos données restent chez nous, et on l'adapte à nos process.",
    'testimonials.6.body':
      "L'interface est claire, mon équipe l'a prise en main en une après-midi.",
    'testimonials.7.body':
      "Du devis à la facture payée, tout est relié. On ne ressaisit plus rien.",
    'testimonials.8.body':
      "Je facture mes missions et suis ma trésorerie sans Excel. Parfait pour un indépendant.",

    // Pricing
    'pricing.label': 'Tarifs',
    'pricing.title': 'Simple et transparent.',
    'pricing.description':
      "Auto-hébergez gratuitement, passez au cloud géré, ou optez pour une instance dédiée. Toute la plateforme, sans options cachées.",
    'pricing.selfhost.name': 'Auto-hébergé',
    'pricing.selfhost.price': 'Gratuit',
    'pricing.selfhost.desc': 'Hébergez Mestier sur votre propre infrastructure, pour toujours.',
    'pricing.selfhost.f1': 'Toute la plateforme, sans limite',
    'pricing.selfhost.f2': 'Code source 100 % ouvert',
    'pricing.selfhost.f3': 'Vos données, sur votre infrastructure',
    'pricing.selfhost.f4': 'Support communautaire',
    'pricing.selfhost.cta': 'Auto-héberger',
    'pricing.cloud.name': 'Cloud',
    'pricing.cloud.badge': 'Recommandé',
    'pricing.cloud.unit': '/ utilisateur / mois',
    'pricing.cloud.desc': "On héberge, sauvegarde et met à jour. Vous utilisez, c'est tout.",
    'pricing.cloud.f1': 'Toute la plateforme, sans limite',
    'pricing.cloud.f2': 'Hébergement géré pour vous',
    'pricing.cloud.f3': 'Sauvegardes & mises à jour automatiques',
    'pricing.cloud.f4': 'Support prioritaire',
    'pricing.cloud.cta': 'Démarrer',
    'pricing.dedicated.name': 'Dédié',
    'pricing.dedicated.price': 'Sur devis',
    'pricing.dedicated.desc': 'Une instance Mestier rien qu’à vous, sur notre cloud ou votre infra.',
    'pricing.dedicated.f1': 'Toute la plateforme, sans limite',
    'pricing.dedicated.f2': 'Instance 100 % dédiée',
    'pricing.dedicated.f3': 'Sur notre cloud ou votre infra',
    'pricing.dedicated.f4': 'Support & accompagnement dédiés',
    'pricing.dedicated.cta': 'Nous contacter',
    'pricing.note': 'Toute la plateforme incluse, tous les modules. Sans engagement.',

    // Founders
    'founders.label': "L'équipe",
    'founders.title': 'Les membres fondateurs.',
    'founders.description':
      "Mestier est porté par trois fondateurs qui construisent l'outil qu'ils auraient voulu avoir.",
    'founders.role': 'Co-fondateur',

    // Footer
    'footer.tagline':
      "L'entreprise, connectée. La suite open-source qui réunit tous vos outils au même endroit.",
    'footer.starUs': 'Star sur GitHub',
    'footer.col.product': 'Produit',
    'footer.col.resources': 'Ressources',
    'footer.col.community': 'Communauté',
    'footer.link.platform': 'La plateforme',
    'footer.link.features': 'Fonctionnalités',
    'footer.link.pricing': 'Tarifs',
    'footer.link.github': 'GitHub',
    'footer.link.changelog': 'Nouveautés',
    'footer.link.issues': 'Signaler un bug',
    'footer.link.discussions': 'Discussions',
    'footer.link.contributing': 'Contribuer',
    'footer.license': 'Logiciel libre.',
    'footer.builtBy': 'Construit par',

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
    'nav.usecases': 'Use cases',
    'nav.performance': 'Performance',
    'nav.pricing': 'Pricing',
    'nav.github': 'GitHub',
    'nav.getStarted': 'Get started',

    // Hero
    'hero.badge': 'Open source · The all-in-one suite',
    'hero.title1': 'Your business,',
    'hero.title2': 'connected.',
    'hero.description':
      'Mestier brings operations, communication, projects, support and HR together in one open-source platform.',
    'hero.primaryAction': 'Start for free',
    'hero.secondaryAction': 'View on GitHub',
    'hero.trust1': 'Rust backend',
    'hero.trust2': 'PostgreSQL',
    'hero.trust3': 'Open-source license',
    'hero.news.label': 'Featured',
    'hero.news.tag': 'New',
    'hero.news.title': 'Mestier 1.0 is on the way.',
    'hero.statement': 'Mestier brings every tool your business needs into one place.',

    // Product preview
    'preview.label': 'An interface, not a spreadsheet',
    'preview.title': 'Your business at a glance.',

    // Sectors
    'sectors.label': 'Trusted by startups, agencies, SMEs and artisans',

    // Features
    'features.label': 'One platform, your whole business',
    'features.title': 'Run it all with Mestier.',
    'features.description':
      "No more scattered spreadsheets and tools that don't talk to each other. Mestier brings your whole business into one interface.",
    'features.crm.title': 'Customer CRM',
    'features.crm.description':
      'Centralize contacts, projects and history. Every exchange, quote and invoice tied to the right customer.',
    'features.quotes.title': 'Quotes & invoices',
    'features.quotes.description':
      'Create quotes in a few clicks, convert them to invoices, track payments and export compliant PDFs.',
    'features.inventory.title': 'Inventory & materials',
    'features.inventory.description':
      'Track your materials and supplies in real time. Automatically deducted on every project.',
    'features.profitability.title': 'Profitability',
    'features.profitability.description':
      'Margin by project, by customer, by month. Calculations run server-side, so there is a single source of truth.',
    'features.multiorg.title': 'Multi-organization',
    'features.multiorg.description':
      'Manage multiple entities, teams and roles. Fine-grained permissions for every team member.',
    'features.auth.title': 'Security & SSO',
    'features.auth.description':
      'Modern authentication (WebAuthn / FIDO2) via Ferriskey. Your data stays with you.',

    // Platform (the connected suite)
    'platform.label': 'The platform',
    'platform.title': 'All your tools, connected.',
    'platform.description':
      'Not another management app, but a connected suite for your whole company. Operations are here today. Communication, projects, support and HR are on the way. All open-source, in one place.',
    'platform.soon': 'Soon',
    'platform.available': 'Available',
    'platform.gestion.title': 'Operations',
    'platform.gestion.description': 'Quotes, invoices, customers, inventory and margins.',
    'platform.comms.title': 'Communication',
    'platform.comms.description': 'Discord-style team chat and video calls.',
    'platform.projects.title': 'Projects',
    'platform.projects.description': 'Planning, tasks and project tracking.',
    'platform.support.title': 'Support',
    'platform.support.description': 'Shared inbox and email support.',
    'platform.hr.title': 'Human resources',
    'platform.hr.description': 'Leave, payroll, expenses and recruitment.',

    // Showcase
    'showcase.label': 'From quote to payment',
    'showcase.title': 'Your business, steered in real time.',
    'showcase.description':
      "Every action updates your metrics instantly. No more waiting for month-end to know where you stand.",
    'showcase.action': 'Get started',
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
      'Not another heavy SaaS. Mestier is free, lightweight software whose open code you can audit and host yourself.',
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
    'usecases.label': 'Whatever your team',
    'usecases.title': 'A tool for every team.',
    'usecases.description': "Mestier adapts to the way you work, not the other way around.",
    'usecases.cta': 'Explore',
    'usecases.1.tag': 'Startups & tech',
    'usecases.1.title': 'From first sale to Series A, one tool.',
    'usecases.2.tag': 'Agencies & studios',
    'usecases.2.title': 'Projects, time tracked and invoices in one place.',
    'usecases.3.tag': 'Artisans & SMEs',
    'usecases.3.title': 'From quote to delivered job, no double entry.',

    // Testimonials
    'testimonials.label': 'They use it every day',
    'testimonials.title': 'Trusted by every team.',
    'testimonials.description': 'What startups, agencies, SMEs and artisans say about Mestier.',
    'testimonials.1.body':
      "Customers, billing and projects in one place. For a small team, it's exactly what we needed.",
    'testimonials.2.body':
      'Finally a tool that computes my real margin per project. I know which customers are profitable.',
    'testimonials.3.body':
      'Time tracked, projects and invoices are linked. Billing fixed-price or by the hour is finally simple.',
    'testimonials.4.body':
      "Fast, even with thousands of rows. You can tell there's solid engineering behind it.",
    'testimonials.5.body':
      'Open source and self-hosted: our data stays with us, and we adapt it to our process.',
    'testimonials.6.body':
      'The interface is clear, my team picked it up in an afternoon.',
    'testimonials.7.body':
      'From quote to paid invoice, everything is connected. We never re-enter anything.',
    'testimonials.8.body':
      'I bill my engagements and track cash flow without Excel. Perfect for a freelancer.',

    // Pricing
    'pricing.label': 'Pricing',
    'pricing.title': 'Simple and transparent.',
    'pricing.description':
      'Self-host it for free, move to managed cloud, or get a dedicated instance. The full platform, no hidden options.',
    'pricing.selfhost.name': 'Self-hosted',
    'pricing.selfhost.price': 'Free',
    'pricing.selfhost.desc': 'Host Mestier on your own infrastructure, forever.',
    'pricing.selfhost.f1': 'The whole platform, no limits',
    'pricing.selfhost.f2': '100% open source',
    'pricing.selfhost.f3': 'Your data, on your infrastructure',
    'pricing.selfhost.f4': 'Community support',
    'pricing.selfhost.cta': 'Self-host',
    'pricing.cloud.name': 'Cloud',
    'pricing.cloud.badge': 'Recommended',
    'pricing.cloud.unit': '/ user / month',
    'pricing.cloud.desc': 'We host, back up and update it. You just use it.',
    'pricing.cloud.f1': 'The whole platform, no limits',
    'pricing.cloud.f2': 'Fully managed hosting',
    'pricing.cloud.f3': 'Automatic backups & updates',
    'pricing.cloud.f4': 'Priority support',
    'pricing.cloud.cta': 'Get started',
    'pricing.dedicated.name': 'Dedicated',
    'pricing.dedicated.price': 'Custom',
    'pricing.dedicated.desc': 'A Mestier instance just for you, on our cloud or your own infra.',
    'pricing.dedicated.f1': 'The whole platform, no limits',
    'pricing.dedicated.f2': '100% dedicated instance',
    'pricing.dedicated.f3': 'On our cloud or your infra',
    'pricing.dedicated.f4': 'Dedicated support & onboarding',
    'pricing.dedicated.cta': 'Contact us',
    'pricing.note': 'Whole platform included, every module. No commitment.',

    // Founders
    'founders.label': 'The team',
    'founders.title': 'The founding members.',
    'founders.description':
      "Mestier is built by three founders making the tool they wish they'd had.",
    'founders.role': 'Co-founder',

    // Footer
    'footer.tagline':
      'Your business, connected. The open-source suite that brings all your tools into one place.',
    'footer.starUs': 'Star on GitHub',
    'footer.col.product': 'Product',
    'footer.col.resources': 'Resources',
    'footer.col.community': 'Community',
    'footer.link.platform': 'The platform',
    'footer.link.features': 'Features',
    'footer.link.pricing': 'Pricing',
    'footer.link.github': 'GitHub',
    'footer.link.changelog': "What's new",
    'footer.link.issues': 'Report a bug',
    'footer.link.discussions': 'Discussions',
    'footer.link.contributing': 'Contributing',
    'footer.license': 'Free & open source.',
    'footer.builtBy': 'Built by',

    // CTA
    'cta.title': 'Take back control of your operations.',
    'cta.description':
      'Set up Mestier in minutes. Free, open source, and entirely yours.',
    'cta.action': 'Start now',
    'cta.secondary': 'View the code',
  },
} as const

export type UiKey = keyof (typeof ui)['fr']
