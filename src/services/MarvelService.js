import { useCallback } from 'react';
import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=0e1b8bcd2dc50536e9574db39bfca638';
  const _apiNewComics =
    'comics?noVariants=true&dateDescriptor=thisMonth&limit=12&';
  const _offsetBase = 530;

  const { loading, request, error, clearError } = useHttp();

  const getAllCharacters = useCallback(
    async (offset = 0) => {
      const res = await request(
        `${_apiBase}characters?limit=9&offset=${
          _offsetBase + offset
        }&${_apiKey}`
      );
      return res.data.results.map(it => _transformCharacterData(it));
    },
    [request]
  );

  const getCharacter = useCallback(
    async id => {
      const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
      if (res.status >= 400) {
        throw new Error(`Suddenly an error occurred - ${res.statusText}`);
      }
      return _transformCharacterData(res.data.results[0]);
    },
    [request]
  );

  function _transformCharacterData(resource) {
    return {
      name: resource.name,
      description:
        resource.description ||
        `We are do not posses a short description for that character`,
      thumbnail: resource.thumbnail,
      urls: resource.urls,
      id: resource.id,
    };
  }
  function _transformNewComicsData(resource) {
    return {
      id: resource.id,
      title: resource.title,
      thumbnail: resource.thumbnail,
      price:
        resource.prices[0].price === 0
          ? 'Price is unknown for the moment'
          : resource.prices[0].price,
    };
  }
  function _transformSingleComics(resource) {
    return {
      id: resource.id,
      pages: resource.pageCount,
      title: resource.title,
      thumbnail: resource.thumbnail,
      description:
        resource.description || "Author hasn't  provided any description",
      langs: resource.langs || 'EN-US',
      price: resource.prices[0].price
        ? resource.prices[0].price
        : "This comic book is brand new to the market, and pricing hasn't been finalized or announced yet.",
    };
  }
  const getComics = useCallback(
    async id => {
      return await request(
        `${_apiBase}characters/${id}/comics?limit=10&${_apiKey}`
      );
    },
    [request]
  );

  const getNewComics = useCallback(
    async (offset = 0) => {
      const res = await request(
        `${_apiBase}${_apiNewComics}&offset=${offset}&${_apiKey}`
      );
      return res.data.results.map(item => _transformNewComicsData(item));
    },
    [request]
  );
  const getRandomId = useCallback((max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  }, []);

  const getSingleComics = useCallback(
    async id => {
      const response = await request(`${_apiBase}comics/${id}?${_apiKey}`);
      return _transformSingleComics(response.data.results[0]);
    },
    [request]
  );

  return {
    loading,
    error,
    clearError,
    getAllCharacters,
    getCharacter,
    getComics,
    getRandomId,
    getNewComics,
    getSingleComics,
  };
};
export default useMarvelService;
