import PersonContainer from "@/components/PersonContainer";

export function generateStaticParams() {
  return [{ locale: "sv" }, { locale: "en" }];
}

export default function Page() {
  return <PersonContainer />;
}
