import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const images = [
  require('../../assets/common/img_app_icon.png'),
  require('../../assets/common/icn_nofollow.png'),
  require('../../assets/common/icn_nocustom.png'),
  require('../../assets/common/img_custom_replace.png'),
];

const wiseSaying = [
  `워렌 퍼핏은 투자에는 중요한 규칙이 있다고 했어요.${'\n'}1번은 "절대 원금을 잃지 말라"${'\n'}2번은 "1번을 잊지 말라`,
  `모든 거래 방법 중에서 '장기투자'야말로${'\n'}최고의 결과를 낳는다는 격언이 있대요!`,
  `어떤 기업에 투자할 때에 적어도 냉장고를${'\n'}고를 때만큼의 시간과 노력을 기울여 보면 어떨까요?`,
  `다른 투자자들이 낙담해서 주식을 팔 때 매수하고,${'\n'}탐욕스럽게 주식을 살 때 매도하려면${'\n'}강인한 정신력이 필요해요.`,
  `우수한 기업은 성공하고, 열등한 기업은 실패해요.${'\n'}각각의 투자자들도 그에 합당한 보상을 받는답니다.`,
  `투자자를 위협하는 가장 큰 적은 뭘까요?${'\n'}바로 감정과 편견입니다.`,
  `헐떡거리면서 말하는 사람에게는${'\n'}어떤 것도 사지 말아야한다는 격언이 있대요`,
  `투자는 패션이 아니기 때문에,${'\n'}유행에 휩쓸리지 않는 것이 중요해요.`,
  `추는 한 방향에 오래 머물지 않아요.${'\n'}영원히 오르는 기업도, 떨어지는 기업도 없답니다.`,
  `투자는 거북이에서 토끼가 되는 순간${'\n'}실패하게 된다고 해요.`,
  `장기적으로 뛰어난 투자 성적을 얻으려면,${'\n'}단기적으로 나쁜 성적을 견뎌야 해요.`,
  `질투는 바보같은 짓이에요. 비교하지 말고 일찌감치${'\n'}질투에서 벗어나면 인생이 훨씬 나아져요!`,
  `투자할 때에는 무엇이 옳고 그른지에 대해 나만의${'\n'}생각과 아이디어, 방향을 가지고 있어야하고,${'\n'}대중에 휩쓸려서 감정적으로 행동하면 안 돼요!`,
  `시장이 가지고 있는 이미지와 실제 사실들 간의${'\n'}차이를 명확하게 구분할 줄 아는 참을성 있는${'\n'}투자자들이 돈을 번다고 해요.`,
  `일관성과 인내심을 가지는 것이 중요해요.${'\n'}참으면 참을수록 복리는 당신 편이 된답니다.`,
];

var icon = images[Math.floor(Math.random() * 4)];
var text = wiseSaying[Math.floor(Math.random() * 15)];

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Image source={icon} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      {/* <Text>1번은 "절대 원금을 잃지 말라"</Text>
      <Text>2번은 "1번을 잊지 말라"</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#000000a3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 72,
    height: 72,
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default Loading;
