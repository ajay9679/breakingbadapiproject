import React from 'react';
import './header.styles.scss';
import Icons from '../../assets/svg/sprite.svg';
import {withRouter} from 'react-router-dom';

import FormButton from '../form-button/formbutton.component.js';

import {connect} from 'react-redux';
import {searchCharacter} from '../../redux/characters/character.actions.js';
import {createStructuredSelector} from 'reselect';
import {selectAllCharacters} from '../../redux/characters/character.selectors.js';

class Header extends React.Component{
	constructor(){
		super();
		this.state = { q: '' };
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onChangeHandler(e){
		this.setState({q: e.target.value}, () => this.state.q);
	}

	onSubmitHandler(e){
		const {searchCharacter} = this.props;
		e.preventDefault();
		searchCharacter(this.state.q);
	}

	render(){
		const {history} = this.props;
		return <header className='header' >
			<h2 className='heading' onClick={() => history.push('/')} >CharactersList</h2>
			<form onSubmit={this.onSubmitHandler} className='search' method='get' >
				<input type="text" className="search__input" onChange={e => this.onChangeHandler(e)} placeholder="Search Characters" value={this.state.q} />
				<FormButton type='submit' className='search__button' >
					<svg className='search__icon' >
    					<use xlinkHref={`${Icons}#icon-magnifying-glass`} />
    				</svg>
				</FormButton>
			</form>
			<div></div>
		</header>
	}
}

const mapStateToProps = createStructuredSelector({
	selectAllCharacters: selectAllCharacters,
});

const mapDispatchToProps = dispatch => ({
	searchCharacter: query => dispatch(searchCharacter(query)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
