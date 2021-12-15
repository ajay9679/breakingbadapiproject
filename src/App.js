import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import './index.scss';

import HomePage from './pages/homepage/homepage.component.js';
import CharacterDetailPage from './pages/characterdetailpage/characterdetailpage.component.js';
import Header from './components/header/header.component.js';

import {connect} from 'react-redux';
import {fetchCharacterAsync} from './redux/characters/character.actions.js';

class App extends React.Component{

    componentDidMount(){
        const {fetchCharacterAsync} = this.props;
        fetchCharacterAsync();
    }

    render(){
        return <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/detail/:charId' component={CharacterDetailPage} />
            </Switch>
        </div>        
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCharacterAsync: () => dispatch(fetchCharacterAsync()),
});

export default connect(null, mapDispatchToProps)(App);


