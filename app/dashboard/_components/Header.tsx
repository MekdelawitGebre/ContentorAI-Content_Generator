"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function Header() {
 
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center text-xl font-bold">
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Image
                src="/logo.png"
                alt="Logo"
                width={170}
                height={100}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="md:flex items-center space-x-4">
            <div className="flex items-center mr-3 scale-140">
              <UserButton />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
