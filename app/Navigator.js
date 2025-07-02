import * as React from 'react';
import { Button, Image, TouchableOpacity } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Lineups from './screen/lineup/Lineups';
import MyLineup from './screen/lineup/MyLineup';
import LineupDetails from './screen/lineup/LineupDetails';
import Home from './screen/Home';
import Hello from './screen/Hello';
import Tool from './screen/Tool';
import TradeHome from './screen/trade/TradeHome';
import RosterDetail from './screen/trade/RosterDetail';
import Income from './screen/trade/Income';
import Found from './screen/trade/Found';

const LineupTabBar = createMaterialTopTabNavigator({
  screens: {
    Lineups: Lineups,
    MyLineup: MyLineup,
    LineupDetails: LineupDetails
  },
});

// 阵容模块导航
const HomeTabBar = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: true,
        headerRight: () => (
          <Button title='Home' onPress={() => alert('This is a button!')}></Button>
        ),
        headerLeft: () => (
          <Button title='Home Back' onPress={() => alert('This is a button!')}></Button>
        )
      }
    },
    Hello: {
      screen: Hello,
      options: {
        headerShown: true,
        headerRight: () => (
          <Button title='Hello' onPress={() => alert('This is a button!')}></Button>
        ),
        headerLeft: () => (
          <Button title='Hello Back' onPress={() => alert('This is a button!')}></Button>
        )
      }
    },
    Tool: Tool,
  },
});

function LogoTitle(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation?.goBack && props.navigation.goBack();
      }}
      activeOpacity={0.7}
    >
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./assets/owl.png')}
      />
    </TouchableOpacity>
  );
}


// 交易行模块导航
const TradeTabBar = createBottomTabNavigator({
  screenOptions: {
    headerTitle: (props) => <LogoTitle {...props} />,
  },
  screens: {
    TradeHome: {
      screen: TradeHome,
      options: {
        title: "自选",
        headerShown: true,
        headerRight: () => (
          <Button title='TradeHome' onPress={() => alert('This is a button!')}></Button>
        ),
      }
    },
    Income: {
      screen: Income,
      options: {
        headerShown: true,
        headerRight: () => (
          <Button title='Income' onPress={() => alert('This is a button!')}></Button>
        ),
      }
    },
    Found: {
      screen: Found,
      options: {
        headerShown: true,
        headerRight: () => (
          <Button title='Found' onPress={() => alert('This is a button!')}></Button>
        ),
      }
    },
  },
});

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerBackVisible: true,
    headerBackImageSource: require('./assets/owl.png'),
  },
  screens: {
    HomeTabBar: {
      screen: HomeTabBar,
      options: {
        headerShown: false,
      },
    },
    Lineup: {
      screen: LineupTabBar,
      options: {
        headerShown: false,
      },
    },
    TradeCenter: {
      screen: TradeTabBar,
      options: {
        headerShown: false,
      },
    }
  },
});




export { HomeTabBar, LineupTabBar, RootStack }