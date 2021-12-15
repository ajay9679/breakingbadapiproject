import {CharacterActionTypes} from './character.types.js';

const INITIAL_STATE = {
	character: null,
	isFetching: false,
	errorMessage: undefined,
	singleCharacter: null,
};

const characterReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case CharacterActionTypes.FETCH_CHARACTERS_START:
			return {
				...state,
				isFetching: true,
			}

		case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
			return {
				...state,
				isFetching: false,
				character: action.payload,
			}

		case CharacterActionTypes.FETCH_CHARACTERS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			}

		case CharacterActionTypes.SINGLE_CHARACTER:
			return {
				...state,
				singleCharacter: action.payload,
			}

		case CharacterActionTypes.SEARCH_QUERY:
			return{
				...state,
				q: action.payload,
			}

		default:
			return state;
	}
};

export default characterReducer;