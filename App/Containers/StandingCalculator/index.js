import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  I18nManager,
  TextInput,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Image,
} from "react-native";
import {
  Content,
  Header,
  Left,
  Right,
  Body,
  Container,
  Button,
} from "native-base";
import { Fonts, Metrics, Images } from "../../Themes";
import styles from "./style";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import DatePicker from "react-native-datepicker";
import AntDesign from "react-native-vector-icons/AntDesign";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import ModalShow from "react-native-modal";

var temp_latitude = "";
var temp_longitude = "";
var temp_user_location = "";

export default class StandingCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      datetwo: "",
      user_location: "",
      isModalVisible: null,
      showResult:false,
      location: "SAN FRANCISCO, CA",
    };
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("FirstScreen");
    return true;
  };

  _hideModal = () => this.setState({ isModalVisible: null });

  _showModal = (modalid) => this.setState({ isModalVisible: modalid });

  _saveLocation() {
    console.log("this.state.temp_user_location");

    this.setState({
      latitude: temp_latitude,
      longitude: temp_longitude,
      location: temp_user_location,
      isModalVisible: null,
    });

    temp_latitude = "";
    temp_longitude = "";
    temp_user_location = "";
  }

  onsubmit = ()=>{
    this.setState({
      showResult:true
    })
  }

  render() {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#7cb342", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <Container>
        <View style={styles.mainView}>
          <Header style={styles.headerBg}>
            <Left style={styles.left}>
              <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Entypo name="menu" size={35} color="red" />
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.headerText}>Standing Clearance Calculator</Text>
            </Body>
            <Right style={styles.right} />
          </Header>
          <View style={styles.contentView}>
            <View style={styles.MainLocationDateBG}>
              {/* <View style={styles.divider} /> */}
              {/* <View style={styles.divider} /> */}
              <View
                style={{
                  flexDirection: "row",
                  width: Metrics.WIDTH * 0.7,
                  marginTop: Metrics.HEIGHT * 0.02,
                }}
              >

                <TextInput
                  ref="room"
                  style={[
                    styles.infoText,
                    { marginLeft: Metrics.HEIGHT * 0.01 },
                  ]}
                  maxLength={50}
                  selectionColor="black"
                  placeholder="Existing Tree Height"
                  placeholderTextColor="grey"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  returnKeyType="done"
                />
              </View>
              <View style={styles.divider} />
              <View
                style={{
                  flexDirection: "row",
                  width: Metrics.WIDTH * 0.7,
                  marginTop: Metrics.HEIGHT * 0.02,
                }}
              >

                <TextInput
                  ref="room"
                  style={[
                    styles.infoText,
                    { marginLeft: Metrics.HEIGHT * 0.01 },
                  ]}
                  maxLength={50}
                  selectionColor="black"
                  placeholder="Required Clearance & Growth Allowance"
                  placeholderTextColor="grey"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  returnKeyType="done"
                />
              </View>
              <View style={styles.divider} />
              <View
                style={{
                  flexDirection: "row",
                  width: Metrics.WIDTH * 0.7,
                  marginTop: Metrics.HEIGHT * 0.02,
                }}
              >

                <TextInput
                  ref="room"
                  style={[
                    styles.infoText,
                    { marginLeft: Metrics.HEIGHT * 0.01 },
                  ]}
                  maxLength={50}
                  selectionColor="black"
                  placeholder="Conductor Height (under maximum rating)"
                  placeholderTextColor="grey"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  returnKeyType="done"
                />
              </View>
              <View style={styles.divider} />
              <View
                style={{
                  flexDirection: "column",
                  width: "100%",
                  marginTop: Metrics.HEIGHT * 0.02,
                  alignSelf:"center",
                  justifyContent:"center",
                }}
              >
                {this.state.showResult&&<Text style={{
                  fontSize:18,
                  color:"red",
                  marginTop:20
                }}>
                  Maximum Allowed Height of Vegetation at location : 2.09
                </Text>}
                {this.state.showResult&&<Text style={{
                  fontSize:18,
                  color:"red",
                  marginTop:20
                }}>
                  Current Clearance : 2.09
                </Text>}
              </View>
              {/* <View
                style={{
                  flexDirection: "row",
                  width: Metrics.WIDTH * 0.7,
                  marginTop: Metrics.HEIGHT * 0.02,
                }}
              >

                <TextInput
                  ref="room"
                  style={[
                    styles.infoText,
                    { marginLeft: Metrics.HEIGHT * 0.01 },
                  ]}
                  maxLength={50}
                  selectionColor="black"
                  placeholder="Maximum Allowed Height of Vegetation at location"
                  placeholderTextColor="grey"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  returnKeyType="done"
                />
              </View> */}
              {/* <View style={styles.divider} /> */}
              {/* <View
                style={{
                  flexDirection: "row",
                  width: Metrics.WIDTH * 0.7,
                  marginTop: Metrics.HEIGHT * 0.02,
                }}
              >

                <TextInput
                  ref="room"
                  style={[
                    styles.infoText,
                    { marginLeft: Metrics.HEIGHT * 0.01 },
                  ]}
                  maxLength={50}
                  selectionColor="black"
                  placeholder="Current Clearance"
                  placeholderTextColor="grey"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  returnKeyType="done"
                />
              </View> */}
              {/* <View style={styles.divider} /> */}
            </View>

            <TouchableOpacity
              style={styles.MainSearchHotelBG}
              onPress={() =>
                this.onsubmit()
              }
            >
              <Image
                source={Images.beliconheader}
                style={styles.SearchHotelIcon}
              />
              <Text style={styles.SraechHotelText}>Standing Clearance Calculator</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ModalShow
          isVisible={this.state.isModalVisible === 1}
          onBackdropPress={() => this._hideModal()}
          onBackButtonPress={() => this._hideModal()}
          style={styles.changelocationmodal}
        >
          <View
            style={[
              styles.locationMainModel,
              { paddingBottom: Metrics.HEIGHT * 0.05 },
            ]}
          >
            <ScrollView
              pointerEvents="box-none"
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps="handled"
              style={styles.profilescrollview}
              scrollEventThrottle={200}
              contentInset={{ top: 0 }}
            >
              <View style={{ paddingTop: 20 }}>
                <View>
                  <Text style={styles.locationModelTitle}>Change Location</Text>
                </View>
                <View style={styles.locationModelInput}>
                  <GooglePlacesAutocomplete
                    placeholder={this.state.user_location}
                    minLength={2}
                    autoFocus={false}
                    fetchDetails={true}
                    listViewDisplayed={this.state.listViewDisplayed}
                    returnKeyType={"default"}
                    onPress={(data, details = null) => {
                      console.log(details.formatted_address);
                      temp_latitude = details.geometry.location.lat;
                      temp_longitude = details.geometry.location.lng;
                      temp_user_location = details.formatted_address;
                      this.setState({
                        listViewDisplayed: false,
                        user_location: details.formatted_address,
                      });
                    }}
                    getDefaultValue={() => {
                      return "";
                    }}
                    query={{
                      key: "AIzaSyCo9dMIPnjrc_1cg-qssupeOYiPtPQQlDI",
                      language: "en",
                      types: "(cities)",
                    }}
                    styles={{
                      container: {
                        borderWidth: 1,
                        borderColor: "#979797",
                        borderRadius: 3,
                        paddingBottom: 5,
                      },
                      description: {
                        fontFamily: Fonts.type.light,
                      },
                      textInputContainer: {
                        backgroundColor: "rgba(0,0,0,0)",
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                      },
                      textInput: {
                        fontFamily: Fonts.type.light,
                        color: "#5d5d5d",
                        fontSize: Fonts.size.f18,
                        height: Platform.OS === "ios" ? 28 : 37,
                      },
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    GooglePlacesSearchQuery={{
                      rankby: "distance",
                      types: "food",
                    }}
                    enablePoweredByContainer={false}
                    filterReverseGeocodingByTypes={[
                      "locality",
                      "administrative_area_level_3",
                    ]}
                  />
                </View>
                <View>
                  <Button
                    style={styles.buttonWrapperSaveLocation}
                    onPress={() => {
                      this._saveLocation();
                    }}
                  >
                    <Text style={styles.saveChangeTextStyle}>Save Changes</Text>
                  </Button>
                </View>
              </View>
              <TouchableOpacity
                style={styles.closewindowImage}
                onPress={this._hideModal}
              >
                <AntDesign name="close" size={30} color="#6a6e7c" />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ModalShow>
      </Container>
    );
  }
}
