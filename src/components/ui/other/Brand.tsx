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
          {/* Favicon as "K" */}
          <Image
            src="/favicon.ico"
            alt="K Logo"
            width={32}
            height={32}
            className="mr-1"
          />

          {/* Arrow (movie / tv toggle color) */}
          <Next
            className={cn("px-[2px] transition-colors", {
              "text-primary": content === "movie",
              "text-warning": content === "tv",
            })}
          />

          {/* Replace text "Flix" with flix.ico */}
          <Image
            src="/icons/flix.ico"
            alt="Flix Logo"
            width={64}   // adjust size as needed
            height={32}
            className="ml-1"
          />
        </span>
      </Link>
    </div>
  );
}
