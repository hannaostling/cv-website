import type { Skill } from "@/data/schema";

export const skills: Skill[] = [
  {
    translated: {
      sv: "Programmeringsspråk",
      en: "Programming Languages",
    },
    values: [
      { translated: { universal: "Swift" }, level: "advanced" },
      { translated: { universal: "Kotlin" }, level: "proficient" },
      { translated: { universal: "SwiftUI" }, level: "intermediate" },
      { translated: { universal: "React" }, level: "intermediate" },
      { translated: { universal: "Java" }, level: "basic" },
      { translated: { universal: "Objective-C" }, level: "basic" },
      { translated: { universal: "React Native" }, level: "beginner" },
    ],
  },
  {
    translated: {
      sv: "Verktyg",
      en: "Tools",
    },
    values: [
      { translated: { universal: "iOS (Xcode)" } },
      { translated: { universal: "Android (Android Studio)" } },
      { translated: { universal: "UI/UX (Figma, Sketch, Adobe XD)" } },
      { translated: { universal: "Git (GitHub, Bitbucket, Azure DevOps)" } },
      {
        translated: {
          sv: "Distribution (App Store Connect, Google Play Console)",
          en: "Distribution (App Store Connect, Google Play Console)",
        },
      },
      {
        translated: {
          sv: "Distributionsverktyg (App Center, Firebase App Distribution)",
          en: "Distribution Tools (App Center, Firebase App Distribution)",
        },
      },
      {
        translated: {
          sv: "Agila verktyg (Jira, Trello)",
          en: "Agile tools (Jira, Trello)",
        },
      },
      { translated: { universal: "TestFlight" } },
    ],
  },
  {
    translated: {
      sv: "Arkitektur och designmönster",
      en: "Architecture & Design Patterns",
    },
    values: [
      { translated: { universal: "MVVM" } },
      { translated: { universal: "MVP" } },
      { translated: { universal: "MVC" } },
    ],
  },
  {
    translated: {
      sv: "Säkerhet och autentisering",
      en: "Security & Authentication",
    },
    values: [
      { translated: { universal: "BankID" } },
      { translated: { universal: "OAuth" } },
      { translated: { universal: "SSO" } },
      { translated: { universal: "Keychain / Keystore" } },
      { translated: { universal: "CommonCrypto" } },
      { translated: { universal: "ObjectivePGP" } },
      { translated: { universal: "CocoaPods" } },
    ],
  },
  {
    translated: {
      sv: "iOS-utveckling",
      en: "iOS Development",
    },
    values: [
      { translated: { universal: "UIKit" } },
      { translated: { universal: "Core Data" } },
      { translated: { universal: "Realm" } },
      { translated: { universal: "Xcode Cloud" } },
      { translated: { universal: "CarPlay" } },
      { translated: { universal: "Push Notifications" } },
      { translated: { universal: "Background Fetch" } },
      { translated: { sv: "Tillgänglighet", en: "Accessibility" } },
      { translated: { universal: "XCTest" } },
      { translated: { universal: "Combine" } },
      { translated: { universal: "URLSession" } },
      { translated: { universal: "Swift Package Manager" } },
      { translated: { universal: "Deep Linking" } },
    ],
  },
  {
    translated: {
      sv: "Android-utveckling",
      en: "Android Development",
    },
    values: [
      { translated: { universal: "Gradle" } },
      { translated: { universal: "Jetpack" } },
      { translated: { universal: "AppCompat" } },
      { translated: { universal: "Material Components" } },
      { translated: { universal: "Gson" } },
    ],
  },
  {
    translated: {
      sv: "Data & API:er",
      en: "Data & APIs",
    },
    values: [
      { translated: { universal: "REST" } },
      { translated: { universal: "JSON" } },
      { translated: { universal: "GraphQL" } },
      { translated: { universal: "SQL" } },
      { translated: { universal: "Firebase Realtime Database" } },
      { translated: { universal: "Firebase Cloud Firestore" } },
    ],
  },
  {
    translated: { sv: "Mjuka färdigheter", en: "Soft Skills" },
    values: [
      { translated: { sv: "Noggrann", en: "Detail-oriented" } },
      { translated: { sv: "Driven", en: "Driven" } },
      { translated: { sv: "Engagerad", en: "Committed" } },
      { translated: { sv: "Samarbetsförmåga", en: "Collaboration" } },
      { translated: { sv: "Anpassningsförmåga", en: "Adaptability" } },
      { translated: { sv: "Kommunikativ", en: "Communication" } },
      { translated: { sv: "Problemlösning", en: "Problem Solving" } },
    ],
  },
];
