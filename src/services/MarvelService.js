import { useCallback } from 'react';
import { useHttp } from '../hooks/http.hook';
import { element } from 'prop-types';

const useMarvelService = () => {
  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=0e1b8bcd2dc50536e9574db39bfca638';
  const _apiNewComics =
    'comics?noVariants=true&dateDescriptor=lastWeek&limit=12&';
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

  const getComics = useCallback(
    async id => {
      return await request(
        `${_apiBase}characters/${id}/comics?limit=10&${_apiKey}`
      );
    },
    [request]
  );

  const getNewComics = useCallback(async () => {
    const res = await request(`${_apiBase}${_apiNewComics}${_apiKey}`);
    return res.data.results.map(item => _transformNewComicsData(item));
  }, [request]);
  const getRandomId = useCallback((max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  }, []);

  return {
    loading,
    error,
    clearError,
    getAllCharacters,
    getCharacter,
    getComics,
    getRandomId,
    getNewComics,
  };
};
export default useMarvelService;
