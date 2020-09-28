import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
const {width} = Dimensions.get('window');

export default function Intro({navigation}) {
  const [interval, setInterval] = useState(1);
  const [intervals, setIntervals] = useState(4);
  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          color: interval === i ? '#4e7dff' : '#eaeaea',
        }}>
        &bull;
      </Text>,
    );
  }

  const onScroll = (data) => {
    if (data.nativeEvent.contentOffset.x === 0) {
      setInterval(1);
    } else if (
      data.nativeEvent.contentOffset.x > 0 &&
      data.nativeEvent.contentOffset.x <= width
    ) {
      setInterval(2);
    } else if (
      data.nativeEvent.contentOffset.x > width &&
      data.nativeEvent.contentOffset.x <= width * 2
    ) {
      setInterval(3);
    } else if (
      data.nativeEvent.contentOffset.x > width * 2 &&
      data.nativeEvent.contentOffset.x <= width * 3
    ) {
      setInterval(4);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.bullets}>{bullets}</View>
      <View style={styles.scrollViewContainerStyle}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}>
          <Image
            source={require('../../assets/intro/img_intro_1.png')}
            style={styles.intro}
          />
          <Image
            source={require('../../assets/intro/img_intro_2.png')}
            style={styles.intro}
          />
          <Image
            source={require('../../assets/intro/img_intro_3.png')}
            style={styles.intro}
          />
          <Image
            source={require('../../assets/intro/img_intro_4.png')}
            style={styles.intro}
          />
        </ScrollView>
      </View>
      <Text style={styles.button} onPress={() => navigation.navigate('Main')}>
        시작하기
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // marginTop: StatusBar.currentHeight || 0,
  },
  bullets: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 5,
    height: '11.875%',
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 30,
  },
  intro: {
    resizeMode: 'contain',
    width: width,
    height: '100%',
  },
  button: {
    height: '8.75%',
    backgroundColor: '#6359fa',
    paddingVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  scrollViewContainerStyle: {
    height: '75%',
  },
});
