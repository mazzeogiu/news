import React from 'react';
import defaultImg from './images/default_news.jpg';
import Moment from 'moment';


class Articles extends React.Component {
    
    render() {
        const articles = this.props.articles;
        const showArticles = [];
        let img = "";
        for (let x in articles) {
            if (articles[x].urlToImage === null) {
                img = defaultImg;
            } else {
                img = articles[x].urlToImage;
            }
            showArticles.push(
                <div key={x} className="px-3">
                    <div className="card">
                        <div className="row">
                            <div className="col-4 text-center">
                                <img className="img-articles"src={img} alt={x}/>
                            </div>
                            <div className="col-8">
                                <a className="text-dark text-decoration-none" href={articles[x].url} target="_blank" rel="noopener noreferrer"><h4>{articles[x].title}</h4></a>
                                <p className="text-muted">{articles[x].source.name} - { Moment(articles[x].publishedAt).format('d MMMM Y HH:mm') }</p>
                                <p>{articles[x].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {showArticles}
            </div>
        );
    }
}

export default Articles;