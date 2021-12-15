import React from 'react';
import './homepage.styles.scss';

import CharacterList from '../../components/characterlist/characterlist.component.js';
import Pagination from '../../components/pagination/pagination.component.js';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectAllCharacters, selectIsFetching} from '../../redux/characters/character.selectors.js'
import {filterByCategory} from '../../redux/characters/character.actions.js';

class HomePage extends React.Component{
	constructor(){
		super();
		this.state = { 'filter_category': '', currentPage: 1, characterPerPage: 10 };
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.paginate = this.paginate.bind(this);
	}

	onChangeHandler(e){
		const {filterByCategory} = this.props;
		this.setState({filter_category: e.target.value}, () => filterByCategory(this.state.filter_category));
	}

	paginate(pageNumber){
		this.setState({
			...this.state,
			currentPage: pageNumber,
		}, () => console.log(this.state))
	}

	render(){
		const {selectAllCharacters} = this.props;
		const {currentPage, characterPerPage} = this.state;
		const indexOfLastCharacter = currentPage*characterPerPage; //10
		const indexOfFirstCharacter = indexOfLastCharacter - characterPerPage; // 0
		console.log(this.state)
		const currentCharacter = selectAllCharacters ? selectAllCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter) : ''; //10
		return <div className='container'>
			<div className='section-filter'>
				filter By: &nbsp;
				<select onChange={e => this.onChangeHandler(e)}>
					<option default>Select</option>
					<option value='breaking_bad'>Breaking Bad</option>
					<option value='better_call_saul'>Better Call Saul</option>
				</select>
			</div>
			<main className='main' >
				{
					currentCharacter ? currentCharacter.map(({char_id, ...others}) => <CharacterList key={char_id} id={char_id} {...others}  />) : <center><h1>Please wait...</h1></center>
				}
			</main>
			<Pagination characterPerPage={this.state.characterPerPage} totalCharacters={selectAllCharacters ? selectAllCharacters.length : ''} paginate={this.paginate} />
		</div>
	};
}

const mapStateToProps = createStructuredSelector({
    selectAllCharacters: selectAllCharacters,
    selectIsFetching: selectIsFetching,
});

const mapDispatchToProps = dispatch => ({
	filterByCategory: filterCat => dispatch(filterByCategory(filterCat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
