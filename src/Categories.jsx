import React from 'react';

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        };
        this.categoriesName = {
            business: 'business',
            entertainment: 'entertainment',
            general: 'general',
            health: 'health',
            science: 'science',
            sports: 'sports',
            technology: 'technology',
        }
        
        this.handleChange = this.handleChange.bind(this)
    }
    
    // control editing select
    handleChange(event) {
        
        this.props.categorie(event.target.value);
    }

    render() {
        const optionTag = [];
        for(let key in this.categoriesName) {
            if (key === 'general') {
                optionTag.push(
                    <option key={key} value={key} selected>{this.categoriesName[key]}</option>
                );
            } else {
                optionTag.push(
                    <option key={key} value={key}>{ this.categoriesName[key] }</option>
                );
            }
        }
        return (
            <div className="form-group">
                <label htmlFor="categories">Category</label>
                <select className="form-control text-capitalize" id="categories" name='categories' onChange={this.handleChange}>
                    { optionTag }
                </select>
            </div>
        );
    }
}

export default Categories;