"use client";

import { tmdb } from "@/api/tmdb";
import { DiscoverMoviesFetchQueryType } from "@/types/movie";
import { MovieDiscoverResult } from "tmdb-ts/dist/types/discover";

interface FetchDiscoverMovies {
  page?: number;
  type?: DiscoverMoviesFetchQueryType;
  genres?: string;
}

const useFetchDiscoverMovies = ({
  page = 1,
  type = "discover",
  genres,
}: FetchDiscoverMovies): Promise<MovieDiscoverResult> => {
  const discover = () => tmdb.discover.movie({ page: page, with_genres: genres });
  const todayTrending = () => tmdb.trending.trending("movie", "day", { page: page });
  const thisWeekTrending = () => tmdb.trending.trending("movie", "week", { page: page });
  const popular = () => tmdb.movies.popular({ page: page });
  const nowPlaying = () => tmdb.movies.nowPlaying({ page: page });
  const upcoming = () => tmdb.movies.upcoming({ page: page });
  const topRated = () => tmdb.movies.topRated({ page: page });
  const isUsTvContent = (item: MediaItem): boolean => {
    // For international rows, allow their specific origin countries
    if (internationalRows.includes(rowId)) {
      if (rowId === "kdrama" || rowId === "kdrama-romance") {
        return item.origin_country?.includes("KR") || false;
      }
      if (rowId === "cdrama") {
        return item.origin_country?.includes("JP") || false;
      }
      if (rowId === "anime") {
        return item.origin_country?.includes("GB") || false;
      }
    }
  const queryData = {
    discover,
    todayTrending,
    thisWeekTrending,
    kdrama,
    cdrama,
    anime,
    popular,
    nowPlaying,
    upcoming,
    topRated,
  }[type];

  return queryData();
};

export default useFetchDiscoverMovies;
