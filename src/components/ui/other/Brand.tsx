"use client";

import Link from "next/link";
import Image from "next/image";
import { Saira } from "@/utils/fonts";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import { cn } from "@/utils/helpers";
import { Next } from "@/utils/icons";

export default function Brand() {
  const [content] = useQueryState(
    "content",
    parseAsStringLiteral(["movie", "tv"]).withDefault("movie"),
  );

  return (
    <div>
      <Link
        href="/"
        aria-label="KFlix Home"
        className={cn(Saira.className, "font-semibold text-[30px]")}
      >
        <span className="flex items-center tracking-widest">
          {/* Favicon as logo */}
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={32}
            height={32}
            className="mr-1"
          />
          <Next
            className={cn("px-[2px] transition-colors", {
              "text-primary": content === "movie",
              "text-warning": content === "tv",
            })}
          />
          <span className={cn(Saira.className, "text-red-500")}>
            Flix
          </span>
        </span>
      </Link>
    </div>
  );
}
