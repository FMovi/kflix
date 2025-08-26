import { PlayersProps } from "@/types";

/**
 * Generates a list of movie players with their respective titles and source URLs.
 * Each player is constructed using the provided movie ID.
 *
 * @param {string | number} id - The ID of the movie to be embedded in the player URLs.
 * @returns {PlayersProps[]} - An array of objects, each containing
 * the title of the player and the corresponding source URL.
 */
export const getMoviePlayers = (id: string | number): PlayersProps[] => {
  return [
    
    {
      title: "Server 1",
      source: `https://player.vidplus.to/embed/movie/${id}`,
      recommended: true,
      fast: true,
    },
        {
      title: "Server 2",
      source: `https://vidsrc.cc/v3/embed/movie/${id}?autoPlay=false`,
      recommended: true,
      fast: true,
      ads: true,
    },
    {
      title: "Server 3",
      source: `https://kisskh.wiki/embed/${id}/color-15006D`,
      recommended: true,
      fast: true,
      ads: true,
    },
    {
      title: "Server 4",
      source: `https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=false`,
      recommended: true,
      ads: true,
    },
    {
      title: "Server 5",
      source: `https://vidsrc.icu/embed/movie/${id}`,
      ads: true,
    },
    {
      title: "Server 6",
      source: `https://moviesapi.club/movie/${id}`,
      ads: true,
    },
    {
      title: "Server 7",
      source: `https://vidlink.pro/movie/${id}?primaryColor=006fee&autoplay=false`,
      ads: true,
    },
  ];
};

/**
 * Generates a list of TV show players with their respective titles and source URLs.
 * Each player is constructed using the provided TV show ID, season, and episode.
 *
 * @param {string | number} id - The ID of the TV show to be embedded in the player URLs.
 * @param {string | number} [season] - The season number of the TV show episode to be embedded.
 * @param {string | number} [episode] - The episode number of the TV show episode to be embedded.
 * @returns {PlayersProps[]} - An array of objects, each containing
 * the title of the player and the corresponding source URL.
 */
export const getTvShowPlayers = (
  id: string | number,
  season: number,
  episode: number,
): PlayersProps[] => {
  return [
    {
      title: "Server 1",
      source: `https://player.vidplus.to/embed/tv/${id}/${season}/${episode}`,
      recommended: true,
      fast: true,
      ads: true,
    },
        {
      title: "Server 2",
      source: `https://vidsrc.cc/v3/embed/tv/${id}/${season}/${episode}?autoPlay=false`,
      recommended: true,
      fast: true,
      ads: true,
    },
        {
      title: "Server 3",
      source: `https://kisskh.wiki/embed/tv/${id}/${season}/${episode}`,
      recommended: true,
      fast: true,
      ads: true,
    },
    {
      title: "Server 4",
      source: `https://vidsrc.cc/v2/embed/tv/${id}/${season}/${episode}?autoPlay=false`,
      recommended: true,
      ads: true,
    },
    {
      title: "Server 5",
      source: `https://vidsrc.icu/embed/tv/${id}/${season}/${episode}`,
      ads: true,
    },
    {
      title: "Server 6",
      source: `https://moviesapi.club/tv/${id}-${season}-${episode}`,
      ads: true,
    },
        {
      title: "Server 7",
      source: `https://vidlink.pro/tv/${id}/${season}/${episode}?primaryColor=f5a524&autoplay=false`,
      ads: true,
    },
    {
      title: "Server 8",
      source: `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1&s=${season}&e=${episode}`,
      ads: true,
    },
    {
      title: "Server 9",
      source: `https://filmku.stream/embed/series?tmdb=${id}&sea=${season}&epi=${episode}`,
      ads: true,
    },
    {
      title: "Server 10",
      source: `https://www.NontonGo.win/embed/tv/${id}/${season}/${episode}`,
      ads: true,
    },
  ];
};
