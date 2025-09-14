import type { Person } from "@/data/schema";

export const hanna: Person = {
  id: "hanna",
  profile: {
    name: "Hanna Östling",
    title: {
      sv: "Apputvecklare",
      en: "App Developer",
    },
    email: "hanna@example.se",
    phone: "0700-00 00 00",
    location: {
      sv: "Mölndal, Sverige",
      en: "Mölndal, Sweden",
    },
    linkedin: "https://linkedin.com/in/example",
    description: {
      sv: "Jag är en erfaren apputvecklare med stark bakgrund inom iOS och Android. Jag bygger skalbara appar med fokus på prestanda, användbarhet och långsiktig underhållbarhet.",
      en: "Experienced app developer with a strong background in iOS and Android. I build scalable, high-quality apps with a focus on performance, usability, and long-term maintainability.",
    },
    image: "/people/profile-light.png",
    imageDarkMode: "/people/profile-dark.png",
  },
  experiences: [
    {
      id: "pinchos",
      title: { sv: "Apputvecklare", en: "App Developer" },
      company: "Pinchos",
      timeStart: "2025-09",
      location: { sv: "Göteborg, Sverige", en: "Gothenburg, Sweden" },
      details: [
        {
          sv: "Arbetar med utveckling och vidareutveckling av Pinchos appar för iOS och Android.",
          en: "Work on the development and improvement of the Pinchos iOS and Android apps.",
        },
        {
          sv: "Bidrar till löpande förbättringar av funktionalitet, prestanda och användarupplevelse.",
          en: "Contribute to continuous improvements in functionality, performance, and user experience.",
        },
      ],
      image: "/companies/Pinchos.png",
    },
    {
      id: "ostling-it",
      title: { sv: "Apputvecklare", en: "App Developer" },
      company: "Östling IT",
      timeStart: "2025-01",
      timeEnd: "2025-09",
      location: { sv: "Göteborg, Sverige", en: "Gothenburg, Sweden" },
      details: [
        {
          sv: "Vidareutveckling av app för digital identitetsverifiering (iOS & Android), med BankID-integration och kryptering.",
          en: "Further developed an iOS and Android app for digital identity verification and secure workplace access, including BankID and encryption.",
        },
        {
          sv: "Vidareutveckling av Hundvänligt (iOS & Android), en app som listar hundvänliga platser i Sverige.",
          en: "Continued development of Hundvänligt (iOS & Android), an app that lists dog-friendly places across Sweden.",
        },
        {
          sv: "Fortsatt utveckling av Hackspett, ett digitalt nyckelhanteringssystem för boende med integration till Shelly.",
          en: "Further developed Hackspett, a digital key management system for residents, integrated with Shelly.",
        },
      ],
      image: "/companies/OstlingIT.png",
    },
    {
      id: "annevo",
      title: { sv: "Apputvecklare", en: "App Developer" },
      company: "Annevo twoday",
      timeStart: "2023-09",
      timeEnd: "2024-12",
      location: { sv: "Göteborg, Sverige", en: "Gothenburg, Sweden" },
      details: [
        {
          sv: "Utveckling av säkerhetsapp för arbetsplatser med backend-integration, GraphQL och kryptering.",
          en: "Developed a workplace safety app with backend integration, GraphQL, and encryption.",
        },
        {
          sv: "Vidareutvecklade en automotive-app med CarPlay, SwiftUI och Kotlin Multiplatform Mobile (KMM).",
          en: "Contributed to an automotive app with CarPlay integration, SwiftUI, and Kotlin Multiplatform Mobile (KMM).",
        },
        {
          sv: "Förbättrade LoopMe, en utbildningsapp, genom att implementera SSO via Microsoft Azure.",
          en: "Enhanced LoopMe, an education app, by implementing Single Sign-On (SSO) via Microsoft Azure.",
        },
      ],
      image: "/companies/Annevo.png",
    },
    {
      id: "bokadirekt",
      title: { sv: "iOS-Utvecklare", en: "iOS Developer" },
      company: "Bokadirekt",
      timeStart: "2023-03",
      timeEnd: "2023-07",
      location: { sv: "Remote (Stockholm, Sverige)", en: "Remote (Stockholm, Sweden)" },
      details: [
        {
          sv: "Vidareutveckling av Bokadirekt-appen för bokning av skönhets- och wellnessbehandlingar.",
          en: "Further developed Bokadirekt, an app for booking beauty and wellness treatments.",
        },
        {
          sv: "Redesignade UI-komponenter för högre flexibilitet och prestanda, med fokus på programmatisk UI.",
          en: "Redesigned UI components for higher flexibility and performance, using programmatic UI.",
        },
        {
          sv: "Arbetade med Firebase, Xcode Cloud, TestFlight och CI/CD-flöden.",
          en: "Worked with Firebase, Xcode Cloud, TestFlight, and CI/CD workflows.",
        },
      ],
      image: "/companies/Bokadirekt.png",
    },
    {
      id: "knowit",
      title: { sv: "Apputvecklare", en: "App Developer" },
      company: "Knowit",
      timeStart: "2019-08",
      timeEnd: "2023-02",
      location: { sv: "Göteborg, Sverige", en: "Gothenburg, Sweden" },
      details: [
        {
          sv: "Förbättrade Västtrafik To Go (iOS) med VoiceOver, dynamisk text och färgkontrast för ökad tillgänglighet.",
          en: "Improved Västtrafik To Go (iOS) with VoiceOver, dynamic text, and color contrast for better accessibility.",
        },
        {
          sv: "Ansvarade för vidareutveckling av SKF Bearing Assist (iOS) för att digitalisera arbetet vid lagermonteringar.",
          en: "Responsible for further development of SKF Bearing Assist (iOS) to digitalize workflows in bearing installations.",
        },
        {
          sv: "Bidrog till Hälsometern (Region Stockholm) genom att implementera en Covid-19-enkät samt funktioner för dataexport.",
          en: "Contributed to Hälsometern (Region Stockholm) by implementing a Covid-19 survey and features for data export.",
        },
        {
          sv: "Byggde Stressgäris, en stödapp med medlemsverifiering via Facebook och API-integration.",
          en: "Built Stressgäris, a support app with Facebook membership verification and API integration.",
        },
        {
          sv: "Utvecklade stora delar av Luna Group appen inom industri och bygg, inklusive EAN-scanning, Firebase-loggning och stöd för dark mode.",
          en: "Developed large parts of the Luna Group app in the industrial and construction sector, including EAN scanning, Firebase logging, and dark mode support.",
        },
      ],
      image: "/companies/Knowit.png",
    },
  ],
  educations: [
    {
      id: "funka-accessibility-documents",
      title: {
        sv: "Digital tillgänglighet",
        en: "Digital Accessibility",
      },
      school: "Funka Academy",
      timeStart: "2025-09",
      location: {
        sv: "Distans",
        en: "Remote",
      },
      description: {
        sv: "Jag läser Tillgänglighetssäkring av dokument och Inkluderande kommunikation och publicering. Två utbildningar på 40 YH-poäng vardera med delvis överlappande innehåll. Kurserna ger kunskap om tillgänglighet och inkludering, lagkrav, klarspråk samt praktisk publicering av tillgängliga dokument och digitalt innehåll.",
        en: "I am studying Document Accessibility and Inclusive Communication and Publishing. Two programs of 40 higher vocational credits each with some overlapping content. The courses provide knowledge of accessibility and inclusion, legal requirements, plain language, and practical publishing of accessible documents and digital content.",
      },
      image: "/companies/Funka.png",
    },
    {
      id: "iths-app-dev-yh-2017-2019",
      title: {
        sv: "YH Apputveckling",
        en: "Higher Vocational Diploma in Application Development",
      },
      school: "IT-Högskolan",
      timeStart: "2017-08",
      timeEnd: "2019-06",
      location: {
        sv: "Göteborg, Sverige",
        en: "Gothenburg, Sweden",
      },
      description: {
        sv: "Yrkeshögskoleexamen i applikationsutveckling med fokus på programmering, agila metoder, databashantering, Git, UX-design och projektledning. Under praktiken arbetade jag med testdriven utveckling och kvalitetsinriktad kodning.",
        en: "Higher vocational diploma in application development, with focus on programming, agile methods, databases, Git, UX design and project management. During the internship I worked with test-driven development and quality-focused coding.",
      },
      image: "/companies/IT-Hogskolan.png",
    },
    {
      id: "iths-intro-java-2016",
      title: {
        sv: "Grundläggande Java",
        en: "Intro to Java Programming",
      },
      school: "IT-Högskolan",
      timeStart: "2016-01",
      timeEnd: "2016-06",
      location: {
        sv: "Distans",
        en: "Remote",
      },
      description: {
        sv: "Lärde mig grunderna i Java-programmering, inklusive sekventiell programmering, datatyper, klasser och metoder.",
        en: "Learned the fundamentals of Java programming, including sequential programming, data types, classes, and methods.",
      },
      image: "/companies/IT-Hogskolan.png",
    },
  ],
  courses: [
    {
      id: "linkedin-github-cicd",
      title: {
        sv: "GitHub Actions for CI/CD",
        en: "GitHub Actions for CI/CD",
      },
      school: "LinkedIn Learning",
      timeEnd: "2025-08-27",
      description: {
        sv: "Praktisk introduktion till GitHub Actions med fokus på automatisering av bygg, test och deployment inom CI/CD.",
        en: "Hands-on introduction to GitHub Actions, focusing on automating build, test, and deployment in CI/CD pipelines.",
      },
      image: "/companies/Linkedin.png",
      certificate: "/certificates/Linkedin-CICD.jpeg",
    },
    {
      id: "linkedin-react",
      title: {
        sv: "React Essential Training",
        en: "React Essential Training",
      },
      school: "LinkedIn Learning",
      timeEnd: "2025-08-26",
      description: {
        sv: "Grundläggande introduktion till React – komponenter, props, state och byggstenar för front-end-utveckling.",
        en: "Essential introduction to React – components, props, state, and core concepts for front-end development.",
      },
      image: "/companies/Linkedin.png",
      certificate: "/certificates/Linkedin-React.jpeg",
    },
    {
      id: "google-dm-2017",
      title: {
        sv: "Digital marknadsföring",
        en: "Digital Marketing",
      },
      school: "Google Digitalakademin",
      timeEnd: "2017-06-29",
      description: {
        sv: "Grundläggande kunskaper i digital marknadsföring – SEO, SEM, sociala medier och webbanalys.",
        en: "Fundamentals of digital marketing – SEO, SEM, social media, and web analytics.",
      },
      image: "/companies/Google.svg",
      certificate: "/certificates/Google-Digital-Marketing.pdf",
    },
    {
      id: "linkedin-ios-wcag",
      title: {
        sv: "iOS App Development: Accessibility",
        en: "iOS App Development: Accessibility",
      },
      school: "LinkedIn Learning",
      timeEnd: "2023-12-01",
      description: {
        sv: "Fördjupning i tillgänglighet för iOS-appar – verktyg, riktlinjer och bästa praxis för att skapa inkluderande användarupplevelser.",
        en: "In-depth training in iOS app accessibility – tools, guidelines, and best practices for creating inclusive user experiences.",
      },
      image: "/companies/Linkedin.png",
      certificate: "/certificates/Linkedin-iOS-Wcag.jpeg",
    },
  ],
  recommendations: [
    {
      id: "fredrik-w-engberg-2025-03-16",
      name: "Fredrik W Engberg",
      title: {
        sv: "Software Developer/Architect",
        en: "Software Developer/Architect",
      },
      relation: {
        sv: "Produktägare",
        en: "Product Owner",
      },
      text: {
        sv: "Jag hade förmånen att, som produktägare och lösningsarkitekt, samarbeta med Hanna under ett mobilutvecklingsprojekt där hon visade både bred teknisk kompetens och problemlösningsförmåga. Projektet omfattade både integrationer med externa autenticeringslösningar och komplexa användarflöden mellan webbläsare och de native-appar som utvecklades.\n\nNär vi inledningsvis arbetade tillsammans, var Hanna en nyckelperson i teamet som utvecklade våra native-appar för både Android och iOS. Senare, när vi behövde vidareutveckla och anpassa apparna till nya versioner av ett tredjepartsbibliotek, tog Hanna sig an uppgiften trots att resten av det ursprungliga teamet inte var tillgängligt.\n\nDet som verkligen imponerade på mig var Hannas förmåga att självständigt hantera hela processen. Hon koordinerade med externa leverantörer, samarbetade med vårt test-team och säkerställde att alla nödvändiga förändringar implementerades korrekt i båda plattformarna. Hennes kommunikationsförmåga var avgörande för att hålla alla intressenter informerade och projektet på rätt spår.\n\nUtöver teknisk skicklighet visade Hanna ett äkta engagemang för projektets framgång. Hon hjälpte till med överlämningen till ett nytt utvecklingsteam genom personliga besök och har fortsatt att vara tillgänglig för att besvara frågor efter projektets slut.\n\nFör organisationer i behov av en skicklig mobilutvecklare med gedigen erfarenhet av både Android och iOS, som dessutom besitter utmärkt samarbetsförmåga och ansvarstagande, kan jag varmt rekommendera Hanna.",
        en: "I had the privilege, as a product owner and solution architect, to collaborate with Hanna during a mobile development project where she demonstrated both broad technical competence and strong problem-solving ability. The project included integrations with external authentication solutions and complex user flows between web browsers and the native apps being developed.\n\nWhen we initially worked together, Hanna was a key member of the team developing our native apps for both Android and iOS. Later, when we needed to further develop and adapt the apps to new versions of a third-party library, Hanna took on the task even though the rest of the original team was no longer available.\n\nWhat truly impressed me was Hanna’s ability to independently manage the entire process. She coordinated with external vendors, collaborated with our test team, and ensured that all necessary changes were correctly implemented on both platforms. Her communication skills were crucial for keeping all stakeholders informed and the project on track.\n\nBeyond her technical skills, Hanna showed a genuine commitment to the project’s success. She assisted with the handover to a new development team through personal visits and has continued to be available to answer questions even after the project’s completion.\n\nFor organizations in need of a skilled mobile developer with solid experience in both Android and iOS, who also possesses excellent collaboration skills and a strong sense of responsibility, I can highly recommend Hanna.",
      },
      image: "/people/fredrik.png",
      date: "2025-03-16",
    },
    {
      id: "hesho-ebrahimzade-2023-02-13",
      name: "Hesho Ebrahimzade",
      title: {
        sv: "Senior Mobile App Developer",
        en: "Senior Mobile App Developer",
      },
      relation: {
        sv: "Jobbade i samma team",
        en: "Worked in the same team",
      },
      text: {
        sv: "Hanna är en ambitiös, ödmjuk och enormt driven utvecklare som flertalet gånger imponerat stort i våra gemensamma projekt. Med hennes erfarenhet i arbetslivet har hon påvisat att hennes driv är en kraftfull pelare. Jag är säker på att hon kommer att komma hur långt som helst i karriären och ser väldigt fram emot hennes utveckling. Hanna har mina absolut varmaste rekommendationer!",
        en: "Hanna is an ambitious, humble, and exceptionally driven developer who has impressed me greatly on several occasions in our joint projects. With her professional experience, she has shown that her drive is a powerful asset. I am confident that she will go very far in her career, and I truly look forward to following her development. Hanna has my absolute warmest recommendations!",
      },
      image: "/people/hesho.png",
      date: "2023-02-13",
    },
    {
      id: "stefanos-papaioannou-2021-02-23",
      name: "Stefanos Papaioannou",
      title: {
        sv: "Sales Lead",
        en: "Sales Lead",
      },
      relation: {
        sv: "Närmsta chef",
        en: "Closest manager",
      },
      text: {
        sv: "Hanna är en av de rekryteringar jag gjort som gett maximal utdelning! Hon har överträffat alla förväntningar som jag/vi hade när hon började hos oss direkt efter studierna. Hon kom snabbt in i rollen som utvecklare och visade framfötterna genom att ta kommandot i de projekt som hon blev delaktig i. Hanna är en person som man kan lämna över något till utan att behöva ha kvar det i bakhuvudet, man vet att det blir gjort och att hon går till botten med det. En vass utvecklare som inte räds att slängas in i nya och utmanande situationer!\n\nJag har fått följa hennes resa som utvecklare och se hur hon har vuxit ur rollen som junior till att ta nästa steg. Hon är en viktig och väldigt uppskattad kollega hos oss och jag vill lämna mina varmaste rekommendationer!",
        en: "Hanna is one of the hires I have made that has delivered the greatest return! She has exceeded every expectation we had when she joined us straight after her studies. She quickly adapted to the role of developer and showed her abilities by taking the lead in the projects she became involved in. Hanna is someone you can hand something over to without having to keep it in the back of your mind—you know it will get done and that she will get to the bottom of it. A sharp developer who is not afraid to be thrown into new and challenging situations!\n\nI have had the privilege to follow her journey as a developer and see how she has grown out of the junior role and taken the next step. She is an important and highly appreciated colleague among us, and I want to give her my warmest recommendations!",
      },
      image: "/people/stefanos.png",
      date: "2021-02-23",
    },
  ],
  skills: [
    {
      id: "programming-languages",
      order: 1,
      title: { sv: "💻 Programmeringsspråk", en: "💻 Programming Languages" },
      items: [
        { value: { sv: "Swift", en: "Swift" }, level: { sv: "Avancerad", en: "Advanced" } },
        { value: { sv: "Kotlin", en: "Kotlin" }, level: { sv: "Duktig", en: "Proficient" } },
        { value: { sv: "SwiftUI", en: "SwiftUI" }, level: { sv: "Medel", en: "Intermediate" } },
        { value: { sv: "React", en: "React" }, level: { sv: "Medel", en: "Intermediate" } },
        { value: { sv: "Java", en: "Java" }, level: { sv: "Grundläggande", en: "Basic" } },
        { value: { sv: "Objective-C", en: "Objective-C" }, level: { sv: "Grundläggande", en: "Basic" } },
        { value: { sv: "React Native", en: "React Native" }, level: { sv: "Nybörjare", en: "Beginner" } },
      ],
    },
    {
      id: "tools",
      order: 2,
      title: { sv: "🛠️ Verktyg", en: "🛠️ Tools" },
      items: [
        { value: { sv: "iOS (Xcode)", en: "iOS (Xcode)" } },
        { value: { sv: "Android (Android Studio)", en: "Android (Android Studio)" } },
        { value: { sv: "UI/UX (Figma, Sketch, Adobe XD)", en: "UI/UX (Figma, Sketch, Adobe XD)" } },
        {
          value: { sv: "Git (GitHub, Bitbucket, Azure DevOps)", en: "Git (GitHub, Bitbucket, Azure DevOps)" },
        },
        {
          value: {
            sv: "Distribution (App Store Connect, Google Play Console)",
            en: "Distribution (App Store Connect, Google Play Console)",
          },
        },
        {
          value: {
            sv: "Distributionsverktyg (App Center, Firebase App Distribution)",
            en: "Distribution Tools (App Center, Firebase App Distribution)",
          },
        },
        { value: { sv: "Agila verktyg (Jira, Trello)", en: "Agile tools (Jira, Trello)" } },
        { value: { sv: "TestFlight", en: "TestFlight" } },
      ],
    },
    {
      id: "soft-skills",
      order: 3,
      title: { sv: "❤️ Mjuka färdigheter", en: "❤️ Soft Skills" },
      items: [
        { value: { sv: "Noggrann", en: "Detail-oriented" } },
        { value: { sv: "Driven", en: "Driven" } },
        { value: { sv: "Engagerad", en: "Committed" } },
        { value: { sv: "Samarbetsförmåga", en: "Collaboration" } },
        { value: { sv: "Anpassningsförmåga", en: "Adaptability" } },
        { value: { sv: "Kommunikativ", en: "Communication" } },
        { value: { sv: "Problemlösning", en: "Problem Solving" } },
      ],
    },
    {
      id: "data-apis",
      order: 4,
      title: { sv: "💾 Data & API:er", en: "💾 Data & APIs" },
      items: [
        { value: { sv: "REST", en: "REST" } },
        { value: { sv: "JSON", en: "JSON" } },
        { value: { sv: "GraphQL", en: "GraphQL" } },
        { value: { sv: "SQL", en: "SQL" } },
        { value: { sv: "Firebase Realtime Database", en: "Firebase Realtime Database" } },
        { value: { sv: "Firebase Cloud Firestore", en: "Firebase Cloud Firestore" } },
      ],
    },
    {
      id: "architecture",
      order: 5,
      title: { sv: "🏗️ Arkitektur och designmönster", en: "🏗️ Architecture & Design Patterns" },
      items: [
        { value: { sv: "MVVM", en: "MVVM" } },
        { value: { sv: "MVP", en: "MVP" } },
        { value: { sv: "MVC", en: "MVC" } },
      ],
    },
    {
      id: "security",
      order: 6,
      title: { sv: "🔒 Säkerhet och autentisering", en: "🔒 Security & Authentication" },
      items: [
        { value: { sv: "BankID", en: "BankID" } },
        { value: { sv: "OAuth", en: "OAuth" } },
        { value: { sv: "SSO", en: "SSO" } },
        { value: { sv: "Keychain / Keystore", en: "Keychain / Keystore" } },
        { value: { sv: "CommonCrypto", en: "CommonCrypto" } },
        { value: { sv: "ObjectivePGP", en: "ObjectivePGP" } },
        { value: { sv: "CocoaPods", en: "CocoaPods" } },
      ],
    },
    {
      id: "ios-development",
      order: 7,
      title: { sv: "🍏 iOS-utveckling", en: "🍏 iOS Development" },
      items: [
        { value: { sv: "UIKit", en: "UIKit" } },
        { value: { sv: "Core Data", en: "Core Data" } },
        { value: { sv: "Realm", en: "Realm" } },
        { value: { sv: "Xcode Cloud", en: "Xcode Cloud" } },
        { value: { sv: "CarPlay", en: "CarPlay" } },
        { value: { sv: "Push Notifications", en: "Push Notifications" } },
        { value: { sv: "Background Fetch", en: "Background Fetch" } },
        { value: { sv: "Tillgänglighet", en: "Accessibility" } },
        { value: { sv: "XCTest", en: "XCTest" } },
        { value: { sv: "Combine", en: "Combine" } },
        { value: { sv: "URLSession", en: "URLSession" } },
        { value: { sv: "Swift Package Manager", en: "Swift Package Manager" } },
        { value: { sv: "Deep Linking", en: "Deep Linking" } },
      ],
    },
    {
      id: "android-development",
      order: 8,
      title: { sv: "🤖 Android-utveckling", en: "🤖 Android Development" },
      items: [
        { value: { sv: "Gradle", en: "Gradle" } },
        { value: { sv: "Jetpack", en: "Jetpack" } },
        { value: { sv: "AppCompat", en: "AppCompat" } },
        { value: { sv: "Material Components", en: "Material Components" } },
        { value: { sv: "Gson", en: "Gson" } },
      ],
    },
  ],
};
