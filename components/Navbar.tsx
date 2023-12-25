"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
{/* import { routes } from "@/constants/index"; */}
import { Menu, Moon, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <main>
      <header className="sm:flex sm:justify-between py-1 px-4 border-b">
        <Container>
          <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
            <div className="flex items-center">
              <Link href="/" className="ml-4 lg:ml-0">
                <h1 className="text-xl font-bold">KZALEWSKI</h1>
              </Link>
            </div>
            {/* <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost">
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav> */}

            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle Theme"
                className="mr-6 md:mr-0"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle Theme</span>
              </Button>
              {/* <Sheet>
              <SheetTrigger>
                <Menu className="h-6 lg:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 pt-5">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                      <DropdownMenuSeparator />
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet> */}
            </div>
          </div>
        </Container>
      </header>
    </main>
  );
};

export default Navbar;
