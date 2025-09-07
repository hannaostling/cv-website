import CvPage from "@/components/CvPage";

export function generateStaticParams() {
  return [{ locale: "sv" }, { locale: "en" }];
}

export default function Home() {
  return <CvPage />;
}
