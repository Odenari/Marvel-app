class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=0e1b8bcd2dc50536e9574db39bfca638';

	getResource = async path => {
		const response = await fetch(path);
		if (!response.ok) {
			throw new Error(
				'An Error means you need to read you code closely bro =) ' +
					` Error code: ${response.status}` +
					` Server respond : ${response.statusText}`
			);
		}
		return await response.json();
	};

	getAllCharacters = async () => {
		return await this.getResource(
			`${this._apiBase}characters?limit=9&offset=590&${this._apiKey}`
		)
			.then(res =>
				res.data.results.map(resource => this._transformCharacterData(resource))
			)
			.catch(er => window.alert(er));
	};

	getCharacter = async id => {
		const res = await this.getResource(
			`${this._apiBase}characters/${id}?${this._apiKey}`
		);
		return this._transformCharacterData(res.data.results[0]);
	};

	_transformCharacterData(resource) {
		return {
			name: resource.name,
			description:
				resource.description ||
				`We are do not posses a description for this mysterious hero`,
			thumbnail: resource.thumbnail,
			urls: resource.urls,
			id: resource.id,
		};
	}
	getRandomId = (max, min) => Math.floor(Math.random() * (max - min) + min);
}
export default MarvelService;
