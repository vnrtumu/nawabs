import React from 'react';

import {ScrollView, View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Profile = ({navigation}) => {
    return(
        <ScrollView>
            <ImageBackground source={require('../assets/images/home.jpeg')} style={styles.imgBG}>
                <View style={styles.profileWrapper}>
                    <Image source={images.avatar_5}  style={{height: 100, width:100, borderRadius: 50}} />
                    <Text style={[styles.profileName, {...FONTS.h2}]}>Venkat Reddy</Text>
                    <View style={styles.locatioWrapper}>
                        <Image source={icons.location}  style={{height: 30, width:30, tintColor: COLORS.white }} />
                        <Text style={[styles.profileLoc, {...FONTS.h4}]}>BTM Layout I stage</Text>
                    </View>
                </View>
                <View></View>

            </ImageBackground>
            <View>
                <Text >This is the profile screen</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imgBG: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        // opacity: 0.8,
    },

    profileWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent:  'flex-start',
        paddingTop: 70,
        alignItems: 'center'
    },
    profileName: {
        marginTop: 20,
        color: '#fff',
    },
    profileLoc: {
        color: '#fff',
        // marginTop: 5,
        margin: 5
    },
    locatioWrapper: {
        flexDirection: 'row',
        marginVertical: 20
    },
     
})


export default Profile;