import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=0e1b8bcd2dc50536e9574db39bfca638';
  const _offsetBase = 530;

  const { isLoading, request, error, clearError } = useHttp();

  const getAllCharacters = async (offset = 0) => {
    return await request(
      `${_apiBase}characters?limit=9&offset=${_offsetBase + offset}&${_apiKey}`
    )
      .then(res =>
        res.data.results.map(resource => _transformCharacterData(resource))
      )
      .then(res => {
        this._resources = res;
        return res;
      });
  };

  const getCharacter = async id => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacterData(res.data.results[0]);
  };

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

  const getComics = async id => {
    return await request(
      `${_apiBase}characters/${id}/comics?limit=10&${_apiKey}`
    );
  };

  const getRandomId = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return {
    isLoading,
    error,
    clearError,
    getAllCharacters,
    getCharacter,
    getComics,
    getRandomId,
  };
};
export default useMarvelService;
