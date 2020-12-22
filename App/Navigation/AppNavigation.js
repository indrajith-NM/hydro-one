import { Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
const { width, height } = Dimensions.get("window");
import { Metrics } from "../Themes";

/* Hotel List START */

import SideMenuHotel from "../Containers/SideMenu/SideMenu";
import FallingCalculator from "../Containers/FallingCalculator";
import StandingCalculator from "../Containers/StandingCalculator";


/* Hotel List END */
/* Hotel Drawer START */

const DrawerStackHotel = createDrawerNavigator(
  {
    FallingCalculator: { screen: FallingCalculator },
    StandingCalculator: { screen: StandingCalculator },
  },
  {
    gesturesEnabled: false,
    contentComponent: SideMenuHotel,
    initialRouteName: "FallingCalculator",
    drawerWidth: Metrics.WIDTH * 0.8,
  }
);

const DrawerNavigationHotel = createStackNavigator(
  {
    DrawerStackHotel: { screen: DrawerStackHotel },
  },
  {
    headerMode: "none",
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
    }),
  }
);

/* Hotel Drawer END */

// main stack

const MainStack = createStackNavigator(
  {
    DrawerStackHotel: { screen: DrawerStackHotel },
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const PrimaryNav = createStackNavigator(
  {
    mainStack: { screen: MainStack },
    DrawerStackHotel: { screen: DrawerStackHotel },
  },
  {
    headerMode: "none",
    initialRouteName: "mainStack",
    gesturesEnabled: false,
  }
);

// const App = createAppContainer(PrimaryNav);

export default createAppContainer(PrimaryNav);
