import {CharacterActionTypes} from './character.types.js';

export const fetchCharactersStart = () => ({
	type: CharacterActionTypes.FETCH_CHARACTERS_START,
});

export const fetchCharactersSuccess = characters => ({
	type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
	payload: characters,
});

export const fetchCharactersFailure = error => ({
	type: CharacterActionTypes.FETCH_CHARACTERS_FAILURE,
	payload: error,
});

export const fetchCharacterAsync = () => {
	return async dispatch => {
		const fetchCharacter = async () => {
			const res = await fetch(`https://www.breakingbadapi.com/api/characters`);
			if(!res.ok) throw new Error(`could not fetch`);
			const data = await res.json();
			return data;
		};

		try{
			dispatch(fetchCharactersStart());
			const store = await fetchCharacter();
			dispatch(fetchCharactersSuccess(store));
		}catch(err){
			console.error(err.message);
			dispatch(fetchCharactersFailure(err.message));
		}
	};
};

export const singleCharacter = character => ({
	type: CharacterActionTypes.SINGLE_CHARACTER,
	payload: character,
});

export const fetchSingleCharacter = id => {
	return async dispatch => {
		const fetchSingle = async () => {
			const res = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`);
			if(!res.ok) throw new Error('could not fetch single user');
			const data = await res.json();
			return data;
		};

		try{
			dispatch(fetchCharactersStart());
			const store = await fetchSingle();
			dispatch(singleCharacter(store));
		}catch(err){
			console.error(err.message);
			dispatch(fetchCharactersFailure(err.message));
		}
	}
}

export const searchCharacter = query => {
	return async dispatch => {
		const fetchSearchCharacter = async () => {
			const res = await fetch(`https://www.breakingbadapi.com/api/characters/?name=${query.toLowerCase()}`);
			if(!res.ok) throw new Error('could not fetch');
			const data = await res.json();
			return data;
		};
		try{
			dispatch(fetchCharactersStart());
			const store = await fetchSearchCharacter();
			dispatch(fetchCharactersSuccess(store));
		}catch(err){
			console.error(err.message);
		}
	}
};

export const filterByCategory = filterString => {
	return async dispatch => {
		const filterCat = async () => {
			console.log(filterString);
			console.log(`https://www.breakingbadapi.com/api/characters/?category=${filterString}`)
			const res = await fetch(`https://www.breakingbadapi.com/api/characters/?category=${filterString}`);
			if(!res.ok) throw new Error('could not filter category');
			const data = await res.json();
			return data;
		};

		try{
			dispatch(fetchCharactersStart());
			const store = await filterCat();
			dispatch(fetchCharactersSuccess(store));
		}catch(err){
			console.error(err.message);
		}
	}
}

