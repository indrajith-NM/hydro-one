import { StyleSheet, Platform } from "react-native";
import { Metrics, Fonts, Colors } from "../../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#ececec"
  },

  headerView: {
    height: Metrics.HEIGHT * 0.3,
    backgroundColor: "#ffffff",
    paddingTop: Metrics.WIDTH * 0.05,
    alignItems: "center",
    paddingLeft: 10,
    paddingRight:10,
    flexDirection: "row",
    justifyContent:"center",
    borderBottomColor: '#263238',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  // 263238
  imageProfile: {
    alignSelf:"center",
    height: Metrics.WIDTH * 0.30,
    width: Metrics.WIDTH * 0.45,
    // borderRadius: Metrics.WIDTH * 0.11
  },

  divider: {
    height: 1,
    width: Metrics.WIDTH * 0.8,
    backgroundColor: "#d4d4d4",
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.015,
      },
      android: {
        marginTop: 1,
      },
    }),
  },

  nameText: {
    color: "#fff",
    fontFamily: Fonts.type.LatoBold,
    fontSize: Fonts.moderateScale(25),
    width: Metrics.WIDTH * 0.5,
  },

  nameTextLocation: {
    color: "#fff",
    fontFamily: Fonts.type.LatoBold,
    fontSize: Fonts.moderateScale(13),
    width: Metrics.WIDTH * 0.5
  },

  menuView: {
    height: Metrics.HEIGHT * 0.55,
    // marginTop: Metrics.HEIGHT * 0.03
  },

  menuIcon: {
    width:40,
    height:40,
  },

  menuName: {
    fontFamily: Fonts.type.LatoBold,
    fontSize: Fonts.moderateScale(15),
    paddingVertical: Metrics.WIDTH * 0.04,
    paddingLeft: 15,
  },

  redcircle: {
    backgroundColor: "red",
    height: Metrics.HEIGHT * 0.012,
    width: Metrics.HEIGHT * 0.012,
    borderRadius: Metrics.HEIGHT * 0.006,
    position: "absolute",
    top: 2,
    left: Metrics.HEIGHT * 0.023
  },

  DesText: {
    color: "#fff",
    fontFamily: Fonts.type.LatoRegular,
    fontSize: Fonts.moderateScale(13),
    width: Metrics.WIDTH * 0.5
  }
});

export default styles;
