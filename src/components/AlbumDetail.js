import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Buttom from './Buttom';

class AlbumDetail extends Component {

    render() {
        const { title, artist, image, url } = this.props.records;
        return (
            <Card>
                <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                        style={styles.thumbnailStyle} 
                        source={{ uri: image }} 
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
                </CardSection>

                <CardSection>
                    <Image 
                        style={styles.imageStyle}
                        source={{ uri: image }}
                    />
                </CardSection>

                <CardSection>
                    <Buttom ketikaPress={() => Linking.openURL(url)}>
                        Buy Now
                    </Buttom>
                </CardSection>
            </Card>
        );
    }

}


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
