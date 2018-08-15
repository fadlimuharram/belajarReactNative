import React, { Component } from 'react';
import { View, Text } from 'react-native';


class AlbumDetail extends Component {

    render() {
        return (
            <View>
                <Text>{this.props.records.title}</Text>
            </View>
        );
    }

}

export default AlbumDetail;
