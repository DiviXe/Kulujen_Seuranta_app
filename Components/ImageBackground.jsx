import { ImageBackground, StyleSheet } from "react-native";

const background = {
  uri: "https://i.imgur.com/yEK9iUz.png",
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
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
  },
});

export default CustomImageBackground;
