import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = (events) => {
        events.preventDefault();
        this.props.onSearched(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" placeholder="Image Name" value={this.state.term} onChange={(event) => {
                            this.setState({ term: event.target.value.toLowerCase() });
                        }} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;