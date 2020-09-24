import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const menuItems = [
  {
    id: 1,
    name: '홈',
    require: require('../../assets/main/icn_home_on.png'),
  },
  {
    id: 2,
    name: '팔로우',
    require: require('../../assets/main/icn_follow_off.png'),
  },
  {
    id: 3,
    name: '커스텀 리그',
    require: require('../../assets/main/icn_custom_off.png'),
  },
  {
    id: 4,
    name: '설정',
    require: require('../../assets/main/icn_setting_off.png'),
  },
];

const Menu = ({selectedMenu, menu}) => {
  return (
    <View style={styles.menuContainer}>
      <Image source={menu.require} style={styles.menuIcon} />
      <Text
        style={{
          ...styles.menuText,
          color: menu.id === selectedMenu ? '#4e7dff' : '#9a9a9a',
        }}>
        {menu.name}
      </Text>
    </View>
  );
};
const BottomMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);
  return (
    <View style={styles.bottomContainer}>
      <Menu selectedMenu={selectedMenu} menu={menuItems[0]} />
      <Menu selectedMenu={selectedMenu} menu={menuItems[1]} />
      <Menu selectedMenu={selectedMenu} menu={menuItems[2]} />
      <Menu selectedMenu={selectedMenu} menu={menuItems[3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
    marginTop: 48,
    // marginBottom: 42,
    borderWidth: 1,
    borderColor: '#f2f2f2',
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  menuText: {
    marginTop: 8,
    fontSize: 10,
  },
});

export default BottomMenu;
