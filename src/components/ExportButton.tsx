"use client";

import { usePathname } from "next/navigation";
import { ExportIcon } from "@/components/ExportIcon";

export function ExportButton() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <div className="about-button-wrapper">
      <button
        className="about-button no-print"
        type="button"
        onClick={() => window.print()}
      >
        <ExportIcon />
        {isEnglish ? "Export CV" : "Exportera CV"}
      </button>
    </div>
  );
}
