import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import PrimaryBtn from '../components/PrimaryBtn';
const Back = require('../assets/icons/back.png')
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OtpScreen = ({ navigation }) => {
    return (
        <View styles={styles.mainContainer}>
            {/* Header */}
            <View style={styles.headerWrapper}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Image source={Back} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Text for the Description of the Form */}
            <View style={styles.textWrapper}>
                <Text style={styles.headingText} >Enter code sent {"\n"}to your number</Text>
                <Text style={styles.subHeadingText} >We sent it to the number +91 (879)001-09-29</Text>
                
                <View style={styles.otpWrapper}>
                    <TextInput style={styles.otpBox} placeholder="0" maxLength={1} />
                    <TextInput style={styles.otpBox} placeholder="0" maxLength={1} />
                    <TextInput style={styles.otpBox} placeholder="0" maxLength={1} />
                    <TextInput style={styles.otpBox} placeholder="0" maxLength={1} />
                </View>
                
            </View>


            {/* next button */}
            <View style={styles.btnWrapper}>
                <PrimaryBtn 
                    btntext="Submit" 
                    btnPress={() => navigation.navigate('Home')} 
                    parentStyle={styles.conPhoneBtn}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    headerWrapper: {
        height: 80,
        marginTop: 50,
        marginHorizontal: 20,
    },
    backBtn: {
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: 'rgb(255, 255, 255)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: 13,
        width: 13,
        // fontWeight: 'bold',
    },
    textWrapper: {
        marginHorizontal: 20,
    },
    headingText: {
        fontSize: 35,
        // fontWeight: '500',
    },
    subHeadingText: {
        fontSize: 15,
        color: 'gray',
        opacity: 0.8,
        marginVertical: 20,
    },

    otpWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        // marginHorizontal: 20,
    },


    otpBox: { 
        backgroundColor: '#e6e6e6', 
        fontWeight: '600', 
        alignSelf: 'center', 
        textAlign: 'center', 
        fontSize: 20, 
        height: 55, 
        width: '15%',
        borderRadius: 10,
    },
})

export default OtpScreen;
