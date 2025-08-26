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
        </span>
      </Link>
    </div>
  );
}
