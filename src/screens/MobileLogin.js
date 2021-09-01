import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import PrimaryBtn from '../components/PrimaryBtn';
const Back = require('../assets/icons/back.png')

const MobileLogin = ({navigation}) => {
    return (
        <View styles={styles.mainContainer}>
            {/* Header */}
            <View style={styles.headerWrapper}>
                <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.goBack() }>
                    <Image source={Back} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Text for the Description of the Form */}
            <View style={styles.textWrapper}>
                <Text style={styles.headingText} >Enter your {"\n"}mobile number</Text>
                <Text style={styles.subHeadingText} >We will send you confirmation code</Text>
                
                {/* Mobile Entering placeholder */}
                <View style={styles.textInputWrapper}>
                    <Text style={styles.contryCode}>+91</Text>
                    <TextInput 
                        style={styles.textInputBox}
                        placeholder="(000) 000-00-00"
                        keyboardtype="numeric"
                        // value={}
                        onChangeText={()=>{}}
                        secureTextEntry={false}
                    />
                </View>
            </View>

            {/* next button */}
            <View style={styles.btnWrapper}>
                <PrimaryBtn 
                    btntext="Next" 
                    btnPress={() => navigation.navigate('otp')} 
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
    textInputWrapper: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    contryCode: {
        fontSize: 30,
        marginRight: 5,
    },
    textInputBox: {
        fontSize: 30,

    },

    btnWrapper: {
        // flex: 2,
        marginVertical: 200,
        // alignContent: 'flex-end',
        // justifyContent: 'flex-end',
    },
});

export default MobileLogin;
