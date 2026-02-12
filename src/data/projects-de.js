export const projects = [
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automatisierung",
    shortDescription: "Individuelle WhatsApp Business Automatisierung mit KI-gesteuerten Konversationsflows.",
    fullDescription: "WhatsMojo ist die erste WhatsApp Business Automatisierungsplattform in Deutschland, speziell entwickelt für E-Commerce Marken. Die Plattform ermöglicht es Händlern, Kundengespräche in großem Umfang zu automatisieren, abgebrochene Warenkörbe durch rechtzeitige Erinnerungen zurückzugewinnen und Wiederkäufe durch personalisierte Messaging-Flows zu steigern. Sie integriert sich nahtlos mit Shopify und Klaviyo und verwandelt WhatsApp in einen hochkonvertierenden Vertriebskanal.",
    challenge: "E-Commerce Marken hatten Schwierigkeiten, ihre Kundenkommunikation über WhatsApp zu skalieren, ohne zusätzliches Support-Personal einzustellen. Manuelle Antworten nahmen täglich Stunden in Anspruch, die Warenkorbabbruchrate war hoch, und es gab keine Möglichkeit, WhatsApps 98% Öffnungsrate für Marketing-Automatisierung auf dem deutschen Markt zu nutzen.",
    solution: "Entwicklung von WhatsMojo — eine vollständige WhatsApp Business API Plattform mit visuellem Flow-Builder, automatisierten Warenkorb-Rückgewinnungssequenzen und KI-gesteuerter Konversationsbehandlung. Das System integriert sich direkt mit Shopify für Echtzeit-Bestelldaten und Klaviyo für einheitliche Kundenprofile. Features umfassen Broadcast-Kampagnen, interaktive Produktkataloge und automatisierte Support-Antworten.",
    results: [
      "€2M+ Umsatz generiert",
      "2x Wiederkäuferrate",
      "85% weniger Support-Zeit",
      "Erster Anbieter in Deutschland"
    ],
    tags: ["WhatsApp API", "Node.js", "Klaviyo", "KI"],
    category: "Individuelle Software",
    url: "https://whatsmojo.com",
    isOwnProject: true,
    images: {
      thumbnail: "/images/projects/whatsapp-chat.png",
      hero: "/images/projects/whatsapp-dashboard.png",
      gallery: [
        "/images/projects/whatsapp-chat.png",
        "/images/projects/whatsapp-dashboard.png",
        "/images/projects/whatsapp-flow.png"
      ]
    },
    size: "wide",
    year: "2024"
  },
  {
    slug: "time-tracking-system",
    title: "Zeiterfassungssystem",
    shortDescription: "Komplette Mitarbeiterverwaltung mit automatisierter Lohnbuchhaltungs-Integration.",
    fullDescription: "Ein umfassendes Zeiterfassungs- und Workforce-Management-System, entwickelt für eine Agentur mit über 50 Mitarbeitern an mehreren Standorten. Die Plattform verwaltet alles von Ein-/Ausstempeln per Mobil und Desktop, projektbasierter Zeiterfassung, Aufgabenverwaltung bis hin zu automatisierten Genehmigungsworkflows für Stundenzettel. Echtzeit-Dashboards geben Managern sofortigen Einblick in Teamproduktivität, abrechenbare Stunden und Projektrentabilität.",
    challenge: "Die Agentur ertrank in Tabellenkalkulationen — die Zeiterfassung für über 50 Mitarbeiter über Dutzende von Kundenprojekten war fehleranfällig und zeitaufwändig. Die Lohnabrechnung dauerte Tage, Streitigkeiten waren häufig, und Projektmanager hatten keine Echtzeit-Sicht darauf, ob Projekte im Budget lagen. Die bestehenden Standardlösungen konnten ihre komplexen Abrechnungsregeln und Genehmigungsworkflows nicht abbilden.",
    solution: "Entwicklung einer individuellen Zeiterfassungsplattform mit React und Node.js, die ihren tatsächlichen Workflow abbildet. Mitarbeiter stempeln per Mobile App mit GPS-Verifikation oder über das Web-Dashboard ein. Zeiteinträge werden automatisch nach Projekt und Aufgabe kategorisiert, durchlaufen anpassbare Genehmigungsketten und synchronisieren sich direkt mit dem Lohnbuchhaltungsanbieter per API. Hinzu kommen detaillierte Analysen für Projektrentabilität, Mitarbeiterauslastung und Überstundenerfassung.",
    results: [
      "15 Std/Woche gespart",
      "100% Team-Akzeptanz",
      "Null Lohnabrechnungsfehler",
      "Echtzeit-Projekteinblicke"
    ],
    tags: ["React", "PostgreSQL", "Node.js", "Mobile"],
    category: "Interne Tools",
    client: "CAPULET GmbH",
    clientUrl: "https://capulet.de",
    images: {
      thumbnail: "/images/projects/timetracking-dashboard.png",
      hero: "/images/projects/timetracking-reports.png",
      gallery: [
        "/images/projects/timetracking-dashboard.png",
        "/images/projects/timetracking-reports.png",
        "/images/projects/timetracking-tasks.png"
      ]
    },
    size: "wide",
    year: "2023"
  },
  {
    slug: "headless-shopify",
    title: "Headless Shopify Store",
    shortDescription: "Blitzschneller E-Commerce mit individuellem Checkout und Personalisierung.",
    fullDescription: "Toothpaste Drops ist eine nachhaltige Mundpflege-Marke, die ein Premium-E-Commerce-Erlebnis benötigte, das zu ihrem innovativen Produkt passt. Wir haben ihren gesamten Shopify Store als Headless-Architektur mit Next.js neu aufgebaut und liefern Seitenladezeiten unter einer Sekunde, flüssige Animationen und ein auf Conversion optimiertes Checkout-Erlebnis. Die Seite bietet ein Abo-Verwaltungssystem, personalisierte Produktempfehlungen und detailliertes Nachhaltigkeits-Storytelling.",
    challenge: "Das bestehende Shopify Theme konnte das Premium-, schnelle Erlebnis nicht liefern, das die Marke brauchte. Seitenladezeiten waren langsam, die Mobile-Performance war schlecht, und es gab keine Möglichkeit, den individuellen Abo-Flow und den interaktiven Produktkonfigurator umzusetzen, den sich die Marke vorstellte. Die Conversion-Raten litten, besonders auf mobilen Geräten.",
    solution: "Aufbau einer vollständig individuellen Headless-Storefront mit Next.js, deployed auf Vercels Edge-Netzwerk. Implementierung von Shopifys Storefront API mit GraphQL für Echtzeit-Lagerbestand und Preise, ein individuelles Abo-System mit flexiblen Lieferplänen, und ein interaktives Produktquiz, das die perfekte Mundpflege-Routine empfiehlt. Die Seite nutzt fortgeschrittene Bildoptimierung und prädiktives Prefetching für sofortige Seitenübergänge.",
    results: [
      "50% schnellere Seitenladezeit",
      "25% mehr Conversions",
      "40% niedrigere Absprungrate",
      "Nahtloses Mobile-Erlebnis"
    ],
    tags: ["Next.js", "Shopify API", "GraphQL", "Vercel"],
    category: "E-Commerce",
    url: "https://toothpastedrops.com",
    isOwnProject: true,
    images: {
      thumbnail: "/images/projects/shopify-hero.png",
      hero: "/images/projects/shopify-product.png",
      gallery: [
        "/images/projects/shopify-hero.png",
        "/images/projects/shopify-product.png",
        "/images/projects/shopify-sustainability.png"
      ]
    },
    size: "wide",
    year: "2024"
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automatisierung",
    shortDescription: "Automatisiertes Kampagnenmanagement mit individueller Attribution und Optimierung.",
    fullDescription: "Eine umfassende Marketing-Automatisierungsplattform, entwickelt für Performance-Marketer, die hochvolumige Facebook-Werbekampagnen verwalten. Das System konsolidiert Kampagnenmanagement, automatisierte Kommentarmoderation, regelbasierte Optimierung und kontoübergreifende Analysen in einem einzigen Dashboard. Es verwaltet €100k+ tägliches Werbebudget über mehrere Werbekonten, mit Features für automatisierte Gebotsanpassungen, Creative-Performance-Tracking und Echtzeit-Rentabilitätsberichte.",
    challenge: "Das Marketing-Team verwaltete Dutzende von Facebook-Werbekampagnen über mehrere Werbekonten und verbrachte täglich Stunden mit repetitiven Aufgaben: Kommentare moderieren, Gebote anpassen, unterperformende Anzeigen stoppen und Berichte in Tabellenkalkulationen zusammenstellen. Facebooks native Tools konnten nicht die kontoübergreifende Sichtbarkeit oder Automatisierungsregeln bieten, die sie brauchten. Kommentarbereiche wurden von Spam und negativen Kommentaren überrannt, die die Anzeigenperformance beeinträchtigten.",
    solution: "Aufbau eines zentralen Kontrollzentrums, das sich mit der Facebook Marketing API verbindet für einheitliches Kampagnenmanagement. Implementierung automatisierter Kommentarmoderation mit Keyword-Filterung und Auto-Antworten auf häufige Fragen. Hinzufügen einer leistungsstarken Regel-Engine, die automatisch Anzeigen basierend auf CPA-Schwellenwerten pausiert, Gewinner skaliert und Slack-Benachrichtigungen sendet. Das Analytics-Dashboard bietet Echtzeit-GuV über alle Kampagnen mit individuellen Attributionsfenstern und Creative-Level-Performance-Aufschlüsselungen.",
    results: [
      "€100k+ tägliches Budget verwaltet",
      "30% besserer ROAS",
      "Automatisierte Gebotsoptimierung",
      "Echtzeit kanalübergreifende Analysen"
    ],
    tags: ["Meta API", "Python", "Analytics", "Automatisierung"],
    category: "AdTech",
    isOwnProject: true,
    images: {
      thumbnail: "/images/projects/marketing-automation-dashboard.png",
      hero: "/images/projects/marketing-automation-dashboard.png",
      gallery: [
        "/images/projects/marketing-automation-dashboard.png",
        "/images/projects/marketing-automation-analytics.png",
        "/images/projects/marketing-automation-autoresponse.png"
      ]
    },
    size: "tall",
    year: "2023"
  }
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

export function getAllSlugs() {
  return projects.map(p => p.slug);
}

export function getNextProject(currentSlug) {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}

export function getPrevProject(currentSlug) {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  return projects[prevIndex];
}
