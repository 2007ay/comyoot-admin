import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "form-signin": {
        "maxWidth": 330,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "form-signin form-signin-heading": {
        "marginBottom": 10
    },
    "form-signin checkbox": {
        "marginBottom": 10,
        "fontWeight": "normal"
    },
    "form-signin form-control": {
        "position": "relative",
        "fontSize": 16,
        "height": "auto",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "form-signin form-control:focus": {
        "zIndex": 2
    },
    "form-signin input[type=\"text\"]": {
        "marginBottom": -1,
        "borderBottomLeftRadius": 0,
        "borderBottomRightRadius": 0
    },
    "form-signin input[type=\"password\"]": {
        "marginBottom": 10,
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0
    },
    "account-wall": {
        "marginTop": 20,
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "backgroundColor": "#f7f7f7",
        "MozBoxShadow": "0px 2px 2px rgba(0, 0, 0, 0.3)",
        "WebkitBoxShadow": "0px 2px 2px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0px 2px 2px rgba(0, 0, 0, 0.3)"
    },
    "login-title": {
        "color": "#555",
        "fontSize": 18,
        "fontWeight": "400",
        "display": "block"
    },
    "profile-img": {
        "width": 96,
        "height": 96,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 10,
        "marginLeft": "auto",
        "display": "block",
        "MozBorderRadius": "50%",
        "WebkitBorderRadius": "50%",
        "borderRadius": "50%"
    },
    "need-help": {
        "marginTop": 10
    },
    "new-account": {
        "display": "block",
        "marginTop": 10
    }
});