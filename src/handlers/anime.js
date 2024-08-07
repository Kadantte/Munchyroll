const corsLink = process.env.NEXT_PUBLIC_CORS_REQUEST_LINK;
const apiLink = process.env.NEXT_PUBLIC_CONSUMET_API;

export const getAnimeDetails = async (id, provider = "zoro") => {
  const data = await fetch(apiLink + `/meta/anilist/data/${id}?provider=${provider}`)
  return await data.json();
};

export const getAnimeEpisodeData = async (id, provider = "zoro") => {
  const data = await fetch(apiLink + `/meta/anilist/episodes/${id}?provider=${provider}`)
  const episodeData = await data.json();
  if (Object.keys(episodeData).length === 0) {
    const data = await fetch(apiLink + `/meta/anilist/episodes/${id}`)
    return await data.json();
  }
  return episodeData;
}

export const getAnimeEpisodeLinks = async (animeId, provider = "zoro") => {
  const data = await fetch(apiLink + `/meta/anilist/watch/${animeId}?provider=${provider}`)
  return await data.json();
}

export const getAnimeSearch = async (query, count) => {
  const data = await fetch(apiLink + `/meta/anilist/${query}?page=1&perPage=${count}`)
  return await data.json();
}

export const getTopAnime = async (count) => {
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?sort=["SCORE_DESC"]&perPage=${count}`)
  const episodeData = await data.json();
  return episodeData;
}
export const getAnimeTrending = async (count) => {
  const data = await fetch(apiLink + `/meta/anilist/trending?page=1&perPage=${count}`)
  return await data.json();
}

export const getAnimePopular = async (count) => {
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?sort=["POPULARITY_DESC"]&perPage=${count}`)
  return await data.json();
}

export const getAnimeNew = async (count) => {
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?type=ANIME&sort=["POPULARITY_DESC"]&status=RELEASING&perPage=${count}`)
  return await data.json();
}

export const getAnimeGenre = async (genre, count) => {
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?sort=["TRENDING_DESC"]&genres=["${genre}"]&page=1&perPage=${count}`)
  return await data.json();
}

export const getUpcomingAnime = async (count) => {
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?sort=["POPULARITY_DESC"]&status=NOT_YET_RELEASED&page=1&perPage=${count}`)
  return await data.json();
}

export const getExternalLink = async (episodeId) => {
  const data = await fetch(apiLink + `/anime/gogoanime/watch/${episodeId}?server=gogocdn`)
  return await data.json();
}