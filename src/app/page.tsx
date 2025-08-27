"use client";

import ContentTypeSelection from "@/components/ui/other/ContentTypeSelection";
import { siteConfig } from "@/config/site";
import { Spinner } from "@heroui/react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import { Suspense } from "react";

// ✅ Import BannerAd
import BannerAd from "@/components/ads/BannerAd";

const MovieHomeList = dynamic(() => import("@/components/sections/Movie/HomeList"));
const TvShowHomeList = dynamic(() => import("@/components/sections/TV/HomeList"));

const HomePage: NextPage = () => {
  const { movies, tvShows } = siteConfig.queryLists;
  const [content] = useQueryState(
    "content",
    parseAsStringLiteral(["movie", "tv"]).withDefault("movie"),
  );

  return (
    <div className="flex flex-col gap-12">
      <ContentTypeSelection className="justify-center" />
      <Suspense
        fallback={
          <Spinner
            size="lg"
            color={content === "movie" ? "primary" : "warning"}
            className="absolute-center"
            variant="simple"
          />
        }
      >
        <div className="flex flex-col gap-12">
          {content === "movie" &&
            movies.map((movie) => <MovieHomeList key={movie.name} {...movie} />)}
          {content === "tv" && tvShows.map((tv) => <TvShowHomeList key={tv.name} {...tv} />)}
        </div>
      </Suspense>

      {/* ✅ Banner Ad at the bottom */}
      <div className="flex justify-center my-8">
        <BannerAd
          adKey="297ed86b29d181f660479ebab2f97717"
          width={300}
          height={250}
          id="ad-bottom"
        />
      </div>
    </div>
  );
};

export default HomePage;
