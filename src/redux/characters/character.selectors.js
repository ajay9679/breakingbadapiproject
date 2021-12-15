import {createSelector} from 'reselect';

const selectCharacters = state => state.data;

export const selectAllCharacters = createSelector([selectCharacters], character => character.character);

export const selectSingleCharacter = createSelector([selectCharacters], character => character.singleCharacter);

export const selectSearchQuery = createSelector([selectCharacters], character => character.q);

export const selectIsFetching = createSelector([selectCharacters], character => character.isFetching);
