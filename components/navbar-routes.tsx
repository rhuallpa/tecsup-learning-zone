"use client";

import { useRouter } from "next/navigation";
import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isAdmin } from "@/lib/admin";
import { isTeacher } from "@/lib/teacher";
import { SearchInput } from "./search-input";
import { SearchInput1 } from "@/components/admin1";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  const isAdminUser = isAdmin(userId);
  const isTeacherUser = isTeacher(userId);
  const isAdminPage = pathname?.startsWith("/admin1");
  const isAdminPage1 = pathname?.includes("/admin1");
  const isSearchPage1 = pathname?.includes("/admin1");

  const handleAdminClick = () => {
    router.push("/admin1");
  };

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}

      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage || isAdminPage1 ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </Link>
        ) : isAdminUser || isTeacherUser || isSearchPage1 ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Panel del Tutor
            </Button>
          </Link>
        ) : null}
        {isAdminUser && (
          <Button size="sm" variant="ghost" onClick={handleAdminClick}>
            Panel de Admin
          </Button>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
