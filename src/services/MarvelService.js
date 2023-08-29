class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=0e1b8bcd2dc50536e9574db39bfca638';
	_offsetBase = 530;
	_resources = null;
	get resources() {
		return this._resources;
	}
	getResource = async path => {
		try {
			const response = await fetch(path);
			if (!response.ok) {
				throw new Error(
					` Error code: ${response.status}` +
						` Server respond : ${response.statusText}`
				);
			}
			return await response.json();
		} catch (error) {
			console.log(error);
		}
	};

	getAllCharacters = async (offset = 0) => {
		return await this.getResource(
			`${this._apiBase}characters?limit=9&offset=${this._offsetBase + offset}&${
				this._apiKey
			}`
		)
			.then(res =>
				res.data.results.map(resource => this._transformCharacterData(resource))
			)
			.then(res => {
				this._resources = res;
				return res;
			});
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
				`We are do not posses a short description for this character`,
			thumbnail: resource.thumbnail,
			urls: resource.urls,
			id: resource.id,
		};
	}

	getComics = async id => {
		return await fetch(
			`${this._apiBase}characters/${id}/comics?limit=10&${this._apiKey}`
		);
	};

	getRandomId = (max, min) => Math.floor(Math.random() * (max - min) + min);
}
export default MarvelService;
