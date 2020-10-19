import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await Unsplash.get('/search/photos', {
            params: { query: term, color: 'yellow' }
        });
        console.log("this >> ", this)
        this.setState({ images: response.data.results });
        console.log(this.state.images)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <SearchBar onSearched={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;