import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/5 backdrop-filter backdrop-blur-lg bg-opacity-100 border-b border-gray-500/20">
      <div className="max-w-5xl mx-auto py-4">
        <div className="flex items-center justify-between container">
          <Link href={"/"}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              CRUD
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
