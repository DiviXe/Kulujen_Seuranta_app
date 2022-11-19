import { ImageBackground, StyleSheet } from "react-native";

const background = {
  uri: "https://i.imgur.com/AizUHEf.png",
};

const CustomImageBackground = (props) => (
  <ImageBackground
    source={background}
    resizeMode="cover"
    style={styles.container}
  >
    {props.children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default CustomImageBackground;
