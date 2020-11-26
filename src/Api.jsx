import React from 'react';
import axios from "axios";

class Api extends React.Component {
    constructor(props) {
        super(props)
        
        this.componentDidMount = this.componentDidMount.bind(this)
        this.setArticles = this.setArticles.bind(this)
    }
    intevalID;
    

    componentDidMount() { // quand le composant charge, on execute la fonction
        this.setArticles()
        
        // Now we need to make it run at a specified interval
        this.intevalID = setInterval(this.setArticles.bind(this), 5000); // runs every 5 seconds.
    }
    
    componentWillUnmount() {
        
        clearInterval(this.intervalID);
    }

    // la fonction est prefixee de `async` car elle a un `await` dedans
    async setArticles() {
        let response
        let apiKey = '';
        if (this.props.search) {
            response = await axios.get('https://newsapi.org/v2/top-headlines?country=' + this.props.country + '&category=' + this.props.categorie + '&q='+ this.props.search +'&apiKey=' + apiKey)

        } else {
            response = await axios.get('https://newsapi.org/v2/top-headlines?country=' + this.props.country + '&category=' + this.props.categorie + '&apiKey=' + apiKey)

        }
        // on `await` la fonction `axios.get` parceque c'est une fonction asynchrone et on veut attendre son resultat
        const articles = response.data.articles;
        
        this.props.newArticles(articles);
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Api;