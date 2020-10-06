import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Separator from '../../components/Separator/Separator';
import * as Progress from 'react-native-progress';

export default class news extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          title: `와이즈유 "코로나 이후는 웰니스 관광이 대세"`,
          news: '부산일보',
          date: '20.07.27',
        },
        {
          title: `코로나 시대 실속 휴가 ... 스테이케이션 대세`,
          news: '뉴시스',
          date: '20.07.17',
        },
        {
          title: `[길따라 멋따라] 언택트.소규모.웰니스.아웃도어... 코로나 시대의 여행`,
          news: '네이버뉴스',
          date: '20.05.23',
        },
      ],
      badNews: 60,
      goodNews: 40,
    };
  }

  render() {
    const state = this.state;
    const totalNews = state.badNews + state.goodNews;
    return (
      <View style={styles.container}>
        {state.news.map((news, index) => (
          <View
            style={{
              paddingTop: 15,
            }}
            key={index}>
            <Text>{news.title}</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'baseline',
                paddingTop: 5,
                paddingBottom: 15,
              }}>
              <Image source={require('../../assets/common/icn_write.png')} />
              <Text
                style={{
                  fontSize: 10,
                  color: '#9a9a9a',
                  paddingRight: 10,
                  paddingLeft: 3,
                }}>
                {news.news}
              </Text>
              <Image source={require('../../assets/common/icn_clock.png')} />
              <Text
                style={{
                  fontSize: 10,
                  color: '#9a9a9a',
                  paddingRight: 10,
                  paddingLeft: 3,
                }}>
                {news.date}
              </Text>
            </View>
            <Separator />
          </View>
        ))}
        <View
          style={{
            borderWidth: 1,
            borderColor: '#eaeaea',
            borderRadius: 20,
            marginTop: 15,
            marginBottom: 24,
            width: 108,
            height: 28,
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/common/icn_more.png')} />
          <Text style={{fontSize: 11, color: '#cccccc'}}>
            관련 기사 더 보기
          </Text>
        </View>
        <Text style={{fontSize: 16, color: '#3d3f42'}}>인공지능 기사 평가</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{paddingTop: 24, paddingRight: 22}}>
            {state.badNews === state.goodNews ? (
              <>
                <Image
                  style={{paddingTop: 24, alignSelf: 'center', marginBottom: 4}}
                  source={require('../../assets/news/img_neutral.png')}
                />
                <Text style={{fontSize: 13, color: '#cccccc'}}>평가동일</Text>
              </>
            ) : state.badNews > state.goodNews ? (
              <>
                <Image
                  style={{paddingTop: 24, alignSelf: 'center', marginBottom: 4}}
                  source={require('../../assets/news/img_negative.png')}
                />
                <Text style={{fontSize: 13, color: '#9a9a9a'}}>부정적</Text>
              </>
            ) : (
              <>
                <Image
                  style={{paddingTop: 24, alignSelf: 'center', marginBottom: 4}}
                  source={require('../../assets/news/img_positive.png')}
                />
                <Text style={{fontSize: 13, color: '#4e7cff'}}>긍정적</Text>
              </>
            )}
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 12,
                paddingTop: 30,
              }}>
              <Progress.Bar
                progress={state.goodNews / totalNews}
                width={185}
                height={13}
                color={'#4e7cff'}
                borderColor={'#eaeaea'}
                backgroundColor={'#fafafa'}
              />
              <Text style={{fontSize: 12, color: '#4e7cff', paddingLeft: 7}}>
                {state.goodNews}건 긍정
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Progress.Bar
                progress={state.badNews / totalNews}
                width={185}
                height={13}
                color={'#9a9a9a'}
                borderColor={'#eaeaea'}
                backgroundColor={'#fafafa'}
              />
              <Text style={{fontSize: 12, color: '#3d3f42', paddingLeft: 7}}>
                {state.badNews}건 부정
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  head: {
    height: 32,
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#dedede',
    marginBottom: 7,
  },
  text: {margin: 6},
  row: {
    display: 'flex',
    flexDirection: 'row',
    height: 34,
  },
  itemText: {
    margin: 6,
    fontSize: 14,
    color: '#9a9a9a',
    textAlign: 'left',
  },
  constituentText: {
    margin: 6,
    fontSize: 16,
    color: '#7f61fd',
    textAlign: 'right',
  },
  headerText: {
    margin: 6,
    fontSize: 14,
    color: '#3d3f42',
  },
});
