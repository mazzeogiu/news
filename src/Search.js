import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value : "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value : event.target.value});
    }

    handleSubmit(event) {
        this.props.setSearch(this.state.value);
    } 

    render() {
        // console.log(this.state.value)
        return (
            <div className="row mt-2">
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="Search..." onChange={this.handleChange} />
                </div>
                <div className="col-4">
                    <input type="button" className="btn btn-info" value="Search" onClick={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}

export default Search;