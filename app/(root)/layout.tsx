import { NavUser } from "@/components/nav-user";
import { getCurrentUser, isAuthenticated } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  const user = await getCurrentUser();

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>

        {/* <SidebarProvider className="w-fit max-h-20"> */}
          <NavUser
            user={{
              name: user?.name || "User name",
              email: user?.email || "user@example.com",
              avatar: "/user-avatar.jpg",
            }}
          />
        {/* </SidebarProvider> */}
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;
