import React from 'react';

import CharacterDetail from '../../components/characterdetail/characterdetail.component.js';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectSingleCharacter} from '../../redux/characters/character.selectors.js';

const CharacterDetailPage = ({selectSingleCharacter, history}) => {
	return <React.Fragment>
		{
			selectSingleCharacter ? selectSingleCharacter.map(({char_id, ...others}) => <CharacterDetail key={char_id} id={char_id} {...others} />) : <center><h1>Loading...</h1></center>
		}
	</React.Fragment>
};

const mapStateToProps = createStructuredSelector({
    selectSingleCharacter: selectSingleCharacter
});

export default connect(mapStateToProps)(CharacterDetailPage);
