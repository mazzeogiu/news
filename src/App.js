import React from 'react';
import './App.css';
import Api from './Api';
import Articles from './Articles';
import Search from './Search';
import Country from './Country';
import logo from './images/logo.png';
import Categories from './Categories';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country: navigator.language.substr(0, 2),
            categorie: 'general',
            articles: {},
            search: '',
        }
        this.setArticles = this.setArticles.bind(this)
        this.setCountry = this.setCountry.bind(this)
        this.setCategorie = this.setCategorie.bind(this)
        this.setSearch = this.setSearch.bind(this)
    }

    setArticles(articles) {
        this.setState({ articles: articles });
    }

    setCountry(country) {
        this.setState({ country: country });
    }

    setCategorie(categorie) {
        this.setState({ categorie: categorie });
    }

    setSearch(text) {
        this.setState({ search: text });
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Api categorie={this.state.categorie} country={this.state.country} newArticles={this.setArticles} search={this.state.search} />
                    <div className="row bg-light shadow">
                        <div className="col-3">
                            <img src={logo} alt="Logo News"/>
                        </div>
                        <div className="col-9 align-middle">
                            <Search setSearch={this.setSearch}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 pt-5 pl-0">
                            <nav>
                                <ul className="list-groups">
                                    <li className="list-group-item">
                                        <Link className="text-capitalize text-decoration-none text-dark" to="/">à la une</Link>
                                    </li>
                                    
                                    <li className="list-group-item">
                                        <Country country={this.setCountry} lang={this.state.country}/>
                                    </li>
                                    <li className="list-group-item">
                                        <Categories categorie={this.setCategorie} />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-9 pt-5">
                            {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                            <Switch>
                                <Route exact path="/">
                                    <Articles articles={this.state.articles}/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;