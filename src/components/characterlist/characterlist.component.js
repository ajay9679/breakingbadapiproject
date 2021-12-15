import React from 'react';
import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchSingleCharacter} from '../../redux/characters/character.actions.js';

const CharacterList = ({id, name, img, occupation, birthday, status, history, fetchSingleCharacter}) => {
	return <React.Fragment>
		<div className='main__box' >
			<img alt='api images' onClick={() => {
				history.push(`/detail/${id}`);
				return fetchSingleCharacter(id)} 
			} className='main__image' src={img} />
			<div className='main__details'>
				<span>{name}</span>
				<span>{occupation}</span>
				<span>{birthday==='Unknown' ? <h3>N/A</h3> : birthday}</span>
				<span>{status}</span>
			</div>
		</div>
	</React.Fragment>
};

const mapDispatchToProps = dispatch => ({
	fetchSingleCharacter: id => dispatch(fetchSingleCharacter(id)),
});

export default withRouter(connect(null, mapDispatchToProps)(CharacterList));
