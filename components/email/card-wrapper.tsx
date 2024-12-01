"use client";

import { Header } from "@/components/email/header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  header: string;
  headerLabel?: string;
  headerDates?: string;
  headerTeachers?: string;

};

export function CardWrapper({
  children,
  header,
  headerLabel,
  headerDates,
  headerTeachers,
}: CardWrapperProps) {
  return (
    <Card className="w-[300px] sm:w-[400px] md:w-[500px] shadow-md">
      <CardHeader>
        <Header header={header} label={headerLabel} dates={headerDates} teachers={headerTeachers} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
