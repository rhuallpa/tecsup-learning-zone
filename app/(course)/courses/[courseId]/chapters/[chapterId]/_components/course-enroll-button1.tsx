"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface CourseEnrollButtonProps {
  courseId: string;
}

export const CourseEnrollButton1 = ({
  courseId,
}: CourseEnrollButtonProps) => {

  return (
    <Link href={`/tutoring-request/${courseId}`}>
      <Button
        size="sm"
        className="w-full md:w-auto"
      >
        Solicitar Tutorías
      </Button>
    </Link>
  );
};
