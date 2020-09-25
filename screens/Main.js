import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './Home/index.android';
import FollowScreen from './Follow/index.android';

const Tab = createBottomTabNavigator();

const menuIcons = [
  {
    focused: require('../assets/main/icn_home_on.png'),
    unfocused: require('../assets/main/icn_home_off.png'),
  },
  {
    focused: require('../assets/main/icn_follow_on.png'),
    unfocused: require('../assets/main/icn_follow_off.png'),
  },
  {
    focused: require('../assets/main/icn_custom_on.png'),
    unfocused: require('../assets/main/icn_custom_off.png'),
  },
  {
    focused: require('../assets/main/icn_setting_on.png'),
    unfocused: require('../assets/main/icn_setting_off.png'),
  },
];

const Main = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === '홈') {
            iconName = focused ? menuIcons[0].focused : menuIcons[0].unfocused;
          } else if (route.name === '팔로우') {
            iconName = focused ? menuIcons[1].focused : menuIcons[1].unfocused;
          } else if (route.name === '커스텀리그') {
            iconName = focused ? menuIcons[2].focused : menuIcons[2].unfocused;
          } else if (route.name === '설정') {
            iconName = focused ? menuIcons[3].focused : menuIcons[3].unfocused;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{
                width: 20,
                height: 20,
              }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4e7dff',
        inactiveTintColor: '#9a9a9a',
      }}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="팔로우" component={FollowScreen} />
      <Tab.Screen name="커스텀리그" component={FollowScreen} />
      <Tab.Screen name="설정" component={FollowScreen} />
    </Tab.Navigator>
  );
};

export default Main;
