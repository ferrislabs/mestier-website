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
      "Une seule plateforme pour remplacer votre stack d'outils. Auto-hébergez gratuitement, ou laissez-nous gérer l'hébergement.",
    'pricing.billing.monthly': 'Mensuel',
    'pricing.billing.annual': 'Annuel',
    'pricing.billing.save': '-20 %',
    'pricing.billing.billedAnnually': 'facturé annuellement',
    'pricing.unit.month': '/ mois',
    'pricing.unit.userMonth': '/ utilisateur / mois',
    'pricing.cta.start': 'Démarrer',
    'pricing.cta.contact': 'Nous contacter',
    // Plans
    'pricing.community.name': 'Community',
    'pricing.community.price': 'Gratuit',
    'pricing.community.desc': 'Auto-hébergé, pour toujours.',
    'pricing.community.cta': 'Auto-héberger',
    'pricing.starter.name': 'Starter',
    'pricing.starter.desc': 'Idéal pour les TPE et artisans.',
    'pricing.business.name': 'Business',
    'pricing.business.desc': 'Pour les équipes qui grandissent.',
    'pricing.business.badge': 'Le plus populaire',
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.price': 'Sur devis',
    'pricing.enterprise.desc': 'Pour les grandes organisations.',
    // Card features
    'pricing.f.selfhost': 'Self-hébergé, illimité',
    'pricing.f.oss': 'Open source (Apache 2.0)',
    'pricing.f.crmBasic': 'CRM de base',
    'pricing.f.collab': 'Messagerie, visio E2EE, projets & docs',
    'pricing.f.communitySupport': 'Support communauté GitHub',
    'pricing.f.upTo10': "Jusqu'à 10 utilisateurs inclus",
    'pricing.f.allCommunity': 'Tout Community, plus :',
    'pricing.f.cloudFr': 'Hébergement cloud géré (France)',
    'pricing.f.crmFull': 'CRM complet + pipeline commercial',
    'pricing.f.hrBasic': 'RH de base (congés, notes de frais)',
    'pricing.f.supportDesk': 'Support client intégré',
    'pricing.f.email48': 'Support email sous 48 h',
    'pricing.f.allStarter': 'Tout Starter, plus :',
    'pricing.f.unlimited': 'Utilisateurs illimités',
    'pricing.f.hrAdvanced': 'RH avancé (paie, onboarding, entretiens)',
    'pricing.f.analytics': 'Analytics & reporting avancés',
    'pricing.f.api': 'API & webhooks',
    'pricing.f.sso': 'SSO, rôles granulaires, audit logs',
    'pricing.f.email24': 'Support prioritaire sous 24 h',
    'pricing.f.allBusiness': 'Tout Business, plus :',
    'pricing.f.dedicated': 'Instance dédiée / on-premise',
    'pricing.f.sla': 'SLA garanti',
    'pricing.f.dedicatedSupport': 'Support dédié, interlocuteur unique',
    'pricing.f.onboarding': 'Onboarding personnalisé',
    'pricing.f.rgpd': 'Conformité RGPD assistée, audit sécurité',
    // Calculator
    'pricing.calc.label': "Calculateur d'économies",
    'pricing.calc.title': 'Combien vous économisez avec Mestier.',
    'pricing.calc.desc':
      'Un stack équivalent (Slack + Axonaut + Lucca + Crisp) revient à environ 160 € par utilisateur et par mois.',
    'pricing.calc.usersLabel': "Nombre d'utilisateurs",
    'pricing.calc.stack': 'Stack classique',
    'pricing.calc.mestier': 'Mestier Business',
    'pricing.calc.perMonth': 'par mois',
    'pricing.calc.savings': 'Vous économisez',
    'pricing.calc.perYear': 'par an',
    // Comparison table
    'pricing.compare.title': 'Comparer les plans en détail.',
    'pricing.compare.feature': 'Fonctionnalité',
    'pricing.grp.platform': 'Plateforme & hébergement',
    'pricing.grp.crm': 'CRM & commercial',
    'pricing.grp.collab': 'Collaboration',
    'pricing.grp.hr': 'RH & support client',
    'pricing.grp.security': 'Sécurité & administration',
    'pricing.grp.support': 'Utilisateurs & support',
    'pricing.r.oss': 'Open source (Apache 2.0)',
    'pricing.r.selfhost': 'Self-hébergement illimité',
    'pricing.r.cloudFr': 'Cloud géré en France',
    'pricing.r.dedicated': 'Instance dédiée / on-premise',
    'pricing.r.autoUpdate': 'Mises à jour automatiques',
    'pricing.r.crmBasic': 'CRM de base',
    'pricing.r.pipeline': 'CRM complet + pipeline',
    'pricing.r.analytics': 'Analytics & reporting avancés',
    'pricing.r.api': 'API & webhooks',
    'pricing.r.chat': 'Messagerie interne',
    'pricing.r.video': 'Visioconférence E2EE',
    'pricing.r.projects': 'Gestion de projets',
    'pricing.r.docs': 'Documentation collaborative',
    'pricing.r.desk': 'Support client intégré',
    'pricing.r.hrBasic': 'RH de base (congés, frais)',
    'pricing.r.hrAdvanced': 'RH avancé (paie, onboarding)',
    'pricing.r.roles': 'Rôles & permissions granulaires',
    'pricing.r.sso': 'SSO (Google, Microsoft)',
    'pricing.r.audit': 'Audit logs',
    'pricing.r.sla': 'SLA garanti',
    'pricing.r.secAudit': 'Audit de sécurité',
    'pricing.r.rgpd': 'Conformité RGPD assistée',
    'pricing.r.users': 'Utilisateurs',
    'pricing.r.support': 'Support',
    'pricing.r.dedicatedManager': 'Interlocuteur dédié',
    'pricing.v.unlimitedSelf': 'Illimités (self-hosted)',
    'pricing.v.upTo10': "Jusqu'à 10",
    'pricing.v.unlimited': 'Illimités',
    'pricing.v.github': 'Communauté GitHub',
    'pricing.v.email48': 'Email 48 h',
    'pricing.v.email24': 'Email prioritaire 24 h',
    'pricing.v.dedicated': 'Téléphone + Slack dédié',
    // FAQ
    'pricing.faq.title': 'Questions fréquentes.',
    'pricing.faq.q1': 'Puis-je migrer depuis Axonaut ou HubSpot ?',
    'pricing.faq.a1':
      'Oui. Mestier importe vos contacts, sociétés, devis et factures depuis Axonaut, HubSpot et la plupart des CRM via CSV ou API. Notre équipe vous accompagne sur les plans Business et Enterprise.',
    'pricing.faq.q2': 'Mes données sont-elles hébergées en France ?',
    'pricing.faq.a2':
      "Oui. L'hébergement cloud géré est situé en France (UE), sur une infrastructure conforme RGPD. En self-hosted ou en instance dédiée, vous choisissez où vivent vos données.",
    'pricing.faq.q3': 'Que se passe-t-il si je dépasse 10 users en Starter ?',
    'pricing.faq.a3':
      "Le plan Starter inclut jusqu'à 10 utilisateurs. Au-delà, vous passez simplement au plan Business (utilisateurs illimités, facturés à l'usage). Aucune coupure, la bascule est proposée automatiquement.",
    'pricing.faq.q4': "Y a-t-il un engagement de durée ?",
    'pricing.faq.a4':
      "Non. Les plans mensuels sont sans engagement, résiliables à tout moment. L'option annuelle (-20 %) couvre douze mois. Et comme le code est open source, vous pouvez toujours repartir avec vos données.",
    'pricing.note':
      "Tous les plans incluent l'ensemble des modules. Sans engagement, sans options cachées.",

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
      'One platform to replace your whole tool stack. Self-host it for free, or let us handle hosting.',
    'pricing.billing.monthly': 'Monthly',
    'pricing.billing.annual': 'Annual',
    'pricing.billing.save': '-20%',
    'pricing.billing.billedAnnually': 'billed annually',
    'pricing.unit.month': '/ month',
    'pricing.unit.userMonth': '/ user / month',
    'pricing.cta.start': 'Get started',
    'pricing.cta.contact': 'Contact us',
    // Plans
    'pricing.community.name': 'Community',
    'pricing.community.price': 'Free',
    'pricing.community.desc': 'Self-hosted, forever.',
    'pricing.community.cta': 'Self-host',
    'pricing.starter.name': 'Starter',
    'pricing.starter.desc': 'Ideal for small businesses and artisans.',
    'pricing.business.name': 'Business',
    'pricing.business.desc': 'For teams that are growing.',
    'pricing.business.badge': 'Most popular',
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.price': 'Custom',
    'pricing.enterprise.desc': 'For larger organizations.',
    // Card features
    'pricing.f.selfhost': 'Self-hosted, unlimited',
    'pricing.f.oss': 'Open source (Apache 2.0)',
    'pricing.f.crmBasic': 'Basic CRM',
    'pricing.f.collab': 'Chat, E2EE video, projects & docs',
    'pricing.f.communitySupport': 'GitHub community support',
    'pricing.f.upTo10': 'Up to 10 users included',
    'pricing.f.allCommunity': 'Everything in Community, plus:',
    'pricing.f.cloudFr': 'Managed cloud hosting (France)',
    'pricing.f.crmFull': 'Full CRM + sales pipeline',
    'pricing.f.hrBasic': 'Basic HR (leave, expenses)',
    'pricing.f.supportDesk': 'Built-in customer support',
    'pricing.f.email48': 'Email support within 48h',
    'pricing.f.allStarter': 'Everything in Starter, plus:',
    'pricing.f.unlimited': 'Unlimited users',
    'pricing.f.hrAdvanced': 'Advanced HR (payroll, onboarding, reviews)',
    'pricing.f.analytics': 'Advanced analytics & reporting',
    'pricing.f.api': 'API & webhooks',
    'pricing.f.sso': 'SSO, granular roles, audit logs',
    'pricing.f.email24': 'Priority support within 24h',
    'pricing.f.allBusiness': 'Everything in Business, plus:',
    'pricing.f.dedicated': 'Dedicated / on-premise instance',
    'pricing.f.sla': 'Guaranteed SLA',
    'pricing.f.dedicatedSupport': 'Dedicated support, single point of contact',
    'pricing.f.onboarding': 'Personalized onboarding',
    'pricing.f.rgpd': 'GDPR assistance, security audit',
    // Calculator
    'pricing.calc.label': 'Savings calculator',
    'pricing.calc.title': 'How much you save with Mestier.',
    'pricing.calc.desc':
      'An equivalent stack (Slack + Axonaut + Lucca + Crisp) costs around €160 per user per month.',
    'pricing.calc.usersLabel': 'Number of users',
    'pricing.calc.stack': 'Typical stack',
    'pricing.calc.mestier': 'Mestier Business',
    'pricing.calc.perMonth': 'per month',
    'pricing.calc.savings': 'You save',
    'pricing.calc.perYear': 'per year',
    // Comparison table
    'pricing.compare.title': 'Compare plans in detail.',
    'pricing.compare.feature': 'Feature',
    'pricing.grp.platform': 'Platform & hosting',
    'pricing.grp.crm': 'CRM & sales',
    'pricing.grp.collab': 'Collaboration',
    'pricing.grp.hr': 'HR & customer support',
    'pricing.grp.security': 'Security & administration',
    'pricing.grp.support': 'Users & support',
    'pricing.r.oss': 'Open source (Apache 2.0)',
    'pricing.r.selfhost': 'Unlimited self-hosting',
    'pricing.r.cloudFr': 'Managed cloud in France',
    'pricing.r.dedicated': 'Dedicated / on-premise instance',
    'pricing.r.autoUpdate': 'Automatic updates',
    'pricing.r.crmBasic': 'Basic CRM',
    'pricing.r.pipeline': 'Full CRM + pipeline',
    'pricing.r.analytics': 'Advanced analytics & reporting',
    'pricing.r.api': 'API & webhooks',
    'pricing.r.chat': 'Internal chat',
    'pricing.r.video': 'E2EE video calls',
    'pricing.r.projects': 'Project management',
    'pricing.r.docs': 'Collaborative docs',
    'pricing.r.desk': 'Built-in customer support',
    'pricing.r.hrBasic': 'Basic HR (leave, expenses)',
    'pricing.r.hrAdvanced': 'Advanced HR (payroll, onboarding)',
    'pricing.r.roles': 'Granular roles & permissions',
    'pricing.r.sso': 'SSO (Google, Microsoft)',
    'pricing.r.audit': 'Audit logs',
    'pricing.r.sla': 'Guaranteed SLA',
    'pricing.r.secAudit': 'Security audit',
    'pricing.r.rgpd': 'GDPR assistance',
    'pricing.r.users': 'Users',
    'pricing.r.support': 'Support',
    'pricing.r.dedicatedManager': 'Dedicated contact',
    'pricing.v.unlimitedSelf': 'Unlimited (self-hosted)',
    'pricing.v.upTo10': 'Up to 10',
    'pricing.v.unlimited': 'Unlimited',
    'pricing.v.github': 'GitHub community',
    'pricing.v.email48': 'Email 48h',
    'pricing.v.email24': 'Priority email 24h',
    'pricing.v.dedicated': 'Phone + dedicated Slack',
    // FAQ
    'pricing.faq.title': 'Frequently asked questions.',
    'pricing.faq.q1': 'Can I migrate from Axonaut or HubSpot?',
    'pricing.faq.a1':
      'Yes. Mestier imports your contacts, companies, quotes and invoices from Axonaut, HubSpot and most CRMs via CSV or API. Our team helps you on the Business and Enterprise plans.',
    'pricing.faq.q2': 'Is my data hosted in France?',
    'pricing.faq.a2':
      'Yes. Managed cloud hosting is located in France (EU), on GDPR-compliant infrastructure. With self-hosting or a dedicated instance, you choose where your data lives.',
    'pricing.faq.q3': 'What happens if I exceed 10 users on Starter?',
    'pricing.faq.a3':
      'The Starter plan includes up to 10 users. Beyond that, you simply move to Business (unlimited users, billed per use). No interruption, the switch is offered automatically.',
    'pricing.faq.q4': 'Is there a minimum commitment?',
    'pricing.faq.a4':
      'No. Monthly plans have no commitment and can be cancelled anytime. The annual option (-20%) covers twelve months. And since the code is open source, you can always leave with your data.',
    'pricing.note':
      'Every plan includes all modules. No commitment, no hidden options.',

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
