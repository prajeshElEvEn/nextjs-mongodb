import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="border-t border-gray-500/20">
      <div className="mx-auto py-4">
        <div className="container flex lg:flex-row items-center justify-between flex-col">
          <p className="text-sm text-muted-foreground mb-2 lg:mb-0 lg:mr-4">
            &copy; {new Date().getFullYear()} eleven co
          </p>
          <div className="flex flex-wrap items-center">
            <Button asChild variant="ghost" size="icon">
              <Link
                href={"https://github.com/prajeshElEvEn/nextjs-mongodb"}
                target="_blank"
              >
                <GitHubLogoIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
