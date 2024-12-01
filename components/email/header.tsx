import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  header: string;
  label?: string;
  dates?: string;
  teachers?: string;
};

export function Header({
  header,
  label,
  dates,
  teachers,
}: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn(
        "text-3xl font-semibold",
        font.className,
      )}
      >
        {header}
      </h1>
      <p className="text-muted-foreground text-md">
        {label}
      </p>
      <p className="text-muted-foreground text-sm">
        {dates}
      </p>
      <p className="text-muted-foreground text-sm">
        {teachers}
      </p>
    </div>
  );
}
