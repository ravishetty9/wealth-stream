"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="./icons/hamburger.svg"
            width={30}
            height={30}
            className="cursor-pointer"
            alt="menu"
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-white" side="left">
          <Link
            href="/"
            className="mb-12 cursor-pointer flex items-center gap-1 px-4"
          >
            <Image
              alt="logo of the app"
              src="/icons/logo.svg"
              width={34}
              height={34}
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              WealthStream
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-4 flex-col gap-4 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathName == link.route ||
                    pathName.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "!text-white": isActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>

            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
