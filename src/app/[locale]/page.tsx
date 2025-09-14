import CvPage from "../../components/CvPage";

export function generateStaticParams() {
  return [{ locale: "sv" }, { locale: "en" }];
}

export default function Page() {
  return <CvPage />;
}
