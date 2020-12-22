import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
  ScrollView,
} from "react-native";
import { Content } from "native-base";
import styles from "./style";
import { Metrics, Images } from "../../Themes";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-community/async-storage";

const MenuItems = [
  {
    id: 0,
    icon:"tree"
  },
  {
    id: 1,
    icon:"man"
  },
];

export default class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstScreen: "FirstScreen",
      LoginHotel: "LoginHotel",
    };
  }
  componentWillMount() {
    console.log("SIDEMENU COMPONENT WILL MOUNT");
  }

  componentDidMount() {
    this.focusListner = this.props.navigation.addListener("didFocus", () => {
      // Update your data
      console.log("sidemenu=====");
      const { navigation } = this.props;

      AsyncStorage.multiGet(["ScreenName"]).then((data) => {
        console.log(data[0][1]);
        console.log("data[0][1]");
        this.setState({
          FirstScreen: data[0][1],
        });
        console.log(this.state.FirstScreen);
        console.log("this.state.FirstScreen ======");
      });
    });
  }

  componentWillUnmount() {
    // remove event listener
    this.focusListner.remove();
  }

  handleBackPress = () => {
    BackHandler.exitApp(); // works best when the goBack is async
    return true;
  };

  componentWillReceiveProps() {
    console.log("Component Will Receive Props");
    const { navigation } = this.props;

    AsyncStorage.multiGet(["ScreenName"]).then((data) => {
      console.log(data[0][1]);
      console.log("data[0][1]");

      this.setState({
        FirstScreen: data[0][1],
      });

      console.log(this.state.FirstScreen);

      console.log("this.state.FirstScreen ======");
    });
  }

  menuItemClickHandle(index) {
    if (this.state.FirstScreen == "FirstScreen") {
      if (index == 1) {
        this.props.navigation.navigate("FallingCalculator");
      } else if (index == 0) {
        this.props.navigation.navigate("StandingCalculator");
      } 
      this.props.navigation.closeDrawer();
    } else if (this.state.LoginHotel == "LoginHotel") {
      if (index == 1) {
        this.props.navigation.navigate("FallingCalculator");
      } else if (index == 0) {
        this.props.navigation.navigate("StandingCalculator");
      } 
      this.props.navigation.closeDrawer();
    }
  }

  renderName = (index) => {
    console.log("index");
    console.log(index);
    if (this.state.FirstScreen == "FirstScreen"&&false) {
      if (index == 0) {
        return (
          <Text style={[styles.menuName, { color: "#1d262a",fontSize:18 }]}>
            Standing Calculator
          </Text>
        );
      } else if (index == 1) {
        return (<>
          <Text style={[styles.menuName, { color: "#1d262a", fontSize:18 }]}>
          
            Falling Calculator
          </Text>
        </>);
      } 
    } else if (this.state.LoginHotel == "LoginHotel"||true) {
      if (index == 0) {
        return (
          <Text style={[styles.menuName, { color: "#1d262a" }]}>
            <Image
                source={Images.ico_person}
                style={styles.menuIcon}
              />
            Standing Clearance Calculator
          </Text>
        );
      } else if (index == 1) {
        return (
          <Text style={[styles.menuName, { color: "#1d262a" }]}>
            <Image
                source={Images.ico_treefall}
                style={styles.menuIcon}
              />
            Falling Clearance Calculator
          </Text>
        );
      }
    }
  };

  render() {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#7cb342", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <View style={styles.mainView}>
        {this.state.FirstScreen == "FirstScreen" ? (
          <View style={styles.headerView}>
            <TouchableOpacity>
              <Image
                source={Images.mbcda_logo}
                style={styles.imageProfile}
              />
            </TouchableOpacity>
            <View
              style={{
                alignSelf: "center",
                paddingLeft: Metrics.HEIGHT * 0.01,
              }}
            >
              {/* <Text style={styles.nameText}>Hello, There!</Text>

              <Text style={styles.DesText}>You might wanna login first</Text> */}
            </View>
          </View>
        ) : (
          <View style={styles.headerView}>
            <TouchableOpacity>
              <Image
                source={Images.mbcda_logo}
                style={styles.imageProfile}
              />
            </TouchableOpacity>
            <View style={{ paddingLeft: 10 }}>
              {/* <Text style={styles.nameText}>Jim Parsons</Text>
              <View style={{ flexDirection: "row" }}>
                <Entypo name="location-pin" color="#fff" size={18} />
                <Text style={styles.nameTextLocation}>San Francisco, CA</Text>
              </View> */}
              {/* <View style={{ marginTop: Metrics.HEIGHT * 0.002 }}>
                <AntDesign
                  name="mail"
                  size={20}
                  color={"#fff"}
                  style={styles.notificationicon}
                />
                <View style={styles.redcircle} />
              </View> */}
            </View>
          </View>
        )}

        <View style={styles.menuView}>
          <ScrollView>
            {MenuItems.map((item, index) => {
              return (<>
                <TouchableOpacity
                style={{paddingHorizontal:10,marginVertical: Metrics.HEIGHT * 0.02}}
                  key={index}
                  onPress={() => this.menuItemClickHandle(index)}
                >
                  {this.renderName(index)}
                </TouchableOpacity>
                <View style={styles.divider} />
                </>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
