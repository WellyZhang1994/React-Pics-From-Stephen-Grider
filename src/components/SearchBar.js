import React from 'react';

class SearchBar extends React.Component{
    state = {term:""};

    //first way
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                         <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({term : e.target.value})}/> 
                    </div> 
                </form>
            </div>
        );
    };
};
export default SearchBar;


    //second way
    //onFormSubmit(event){
    //    constructor(){
    //    }
    //}

    //third way
    // <form onSubmit={(event) => this.onFormSubmit(event)}
