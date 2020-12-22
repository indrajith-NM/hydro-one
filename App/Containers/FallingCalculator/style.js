import { Platform, StyleSheet } from "react-native";
import { Fonts, Metrics } from "../../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  headerBg: {
    borderBottomWidth: 0,
    elevation: 0,
    backgroundColor: "transparent",
    marginTop: Metrics.WIDTH * 0.06,
  },

  left: {
    flex: .3,
  },

  body: {
    flex: 3,
    alignItems: "center",
  },

  headerText: {
    color: "red",
    fontWeight:"bold",
    fontFamily: Fonts.type.LatoRegular,
    fontSize: Fonts.moderateScale(18),
  },

  right: {
    flex: .3,
  },

  contentView: {
    flex: 1,
    marginBottom: Metrics.HEIGHT * 0.02,
  },

  MainLocationDateBG: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8,
    marginTop: 10,
  },

  infoText: {
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14),
      },
      android: {
        fontSize: Fonts.moderateScale(15),
      },
    }),

    color: "black",
    fontFamily: Fonts.type.LatoRegular,
    width: Metrics.WIDTH * 0.8,
  },

  divider: {
    height: 1,
    width: Metrics.WIDTH * 0.8,
    backgroundColor: "#666666",
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.015,
      },
      android: {
        marginTop: 1,
      },
    }),
  },

  ToText: {
    color: "#7cb342",
    fontFamily: Fonts.type.LatoRegular,
    fontSize: Fonts.moderateScale(15),
    textAlign: "center",
    alignSelf: "center",
  },

  BedroomIcon: {
    height: Metrics.HEIGHT * 0.04,
    width: Metrics.WIDTH * 0.04,
    alignSelf: "center",
    resizeMode: "contain",
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  MainSearchHotelBG: {
    flexDirection: "row",
    backgroundColor: "#ed0000",
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8,
    height: Metrics.HEIGHT * 0.09,
    borderRadius: 2,
    marginTop: Metrics.HEIGHT * 0.06,
    justifyContent: "center",
  },

  SearchHotelIcon: {
    height: Metrics.HEIGHT * 0.08,
    width: Metrics.WIDTH * 0.08,
    alignSelf: "center",
    resizeMode: "contain",
    justifyContent: "center",
  },

  SraechHotelText: {
    color: "#fff",
    fontWeight:"bold",
    fontFamily: Fonts.type.LatoBold,
    fontSize: Fonts.moderateScale(14),
    fontSize:17,
    textAlign: "center",
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  changelocationmodal: {
    backgroundColor: "transparent",
    width: Metrics.WIDTH,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
  },

  locationMainModel: {
    backgroundColor: "#ffffff",
    marginLeft: Metrics.WIDTH * 0.03,
    marginRight: Metrics.WIDTH * 0.03,
    borderRadius: Metrics.WIDTH * 0.03,
    borderWidth: 1,
    borderColor: "transparent",
  },

  locationModelTitle: {
    textAlign: "center",
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.LatoRegular,
  },

  locationModelInput: {
    margin: Metrics.WIDTH * 0.05,
    zIndex: 1111,
  },

  saveChangeTextStyle: {
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.reguler,
    justifyContent: "center",
    textAlign: "center",
    paddingHorizontal: Metrics.WIDTH * 0.07,
  },

  closewindowImage: {
    position: "absolute",
    top: 5,
    right: 5,
  },

  buttonWrapperSaveLocation: {
    backgroundColor: "#7cb342",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
  },
});

export default styles;
