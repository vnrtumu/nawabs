import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ImageBackground,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const Onboarding = ({navigation}) => {
  const [showHomeScreen, setShowHomeScreen] = useState(false);

  const onDone = () => {
    navigation.navigate('Landing');
  };
  const onSkip = () => {
    navigation.navigate('Landing');
  };

  const RenderItem = ({item}) => {
    return (
      <ImageBackground source={item.bgImg} style={styles.bgImg}>
        <View style={styles.container}>
          <Text style={styles.introTitleStyle}>{item.title}</Text>
          <Text style={styles.introTextStyle}>{item.text}</Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onSkip}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    />
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 100,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    justifyContent: 'flex-end',
    paddingVertical: 30,
  },

  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  dotStyle: {
    backgroundColor: 'red',
  },
  activeDotStyle: {
    backgroundColor: '#fff',
  },
});

const slides = [
  {
    key: 's1',
    text: "One place destination for all biriyani's",
    title: 'Welcome to Nawabs Food',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#000',
    bgImg: require('../../onboarding1.jpeg'),
  },
  {
    key: 's2',
    title: 'Best Biriyani is waiting for you',
    text: 'Lorem Ipsum is simply dummy text',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#000',
    bgImg: require('../../onboarding2.jpeg'),
  },
  {
    key: 's3',
    title: 'Get food to your door step',
    text: 'Lorem Ipsum is simply dummy text',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
    },
    backgroundColor: '#000',
    bgImg: require('../../onboarding3.jpeg'),
  },
];
