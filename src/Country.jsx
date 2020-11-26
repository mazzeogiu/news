import React from 'react';

class Country extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        };
        this.countryName = {
            ar: 'argentina',
            at: 'austria',
            au: 'australia',
            be: 'belgium',
            br: 'brazil',
            ch: 'switzerland',
            de: 'germany',
            fr: 'france',
            gb: 'united kingdom',
            gr: 'greece',
            ie: 'ireland',
            no: 'norway',
            nz: 'new zealand',
            se: 'sweden',
            us: 'usa',
            ve: 'venezuela',
            it: 'italy',
        }
        
        this.handleChange = this.handleChange.bind(this)
    }
    
    // control editing select
    handleChange(event) {
        
        this.props.country(event.target.value);
    }

    render() {
        const optionTag = [];
        for(let key in this.countryName) {
            if (key === this.props.lang) {
                optionTag.push(
                    <option key={key} value={key} selected>{this.countryName[key]}</option>
                );
            } else {
                optionTag.push(
                    <option key={key} value={key}>{ this.countryName[key] }</option>
                );
            }
        }
        return (
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select className="form-control text-capitalize" id="country" name='country' onChange={this.handleChange}>
                    { optionTag }
                </select>
            </div>
        );
    }
}

export default Country;