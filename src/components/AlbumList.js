import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbum() {
        return this.state.albums.map((album) => ( 
            <AlbumDetail records={album} />
        ));
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>
        );
    }
}


export default AlbumList;
