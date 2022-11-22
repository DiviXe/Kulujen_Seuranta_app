import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomImageBackground from "../Components/ImageBackground";
//context usage?
export const Settings = () => {
  const background = {
    uri: "https://i.imgur.com/AizUHEf.png",
  };

  return (
    <CustomImageBackground>
      <Text style={styles.Title}>Change background here</Text>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Logger")}
        >
          <Text>Change background (Cyan) </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Settings")}
        >
          <Text>Change background (Blue)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Settings")}
        >
          <Text>Change background (Red)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Settings")}
        >
          <Text>Change background (Green)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Settings")}
        >
          <Text>Change background (Gray)</Text>
        </TouchableOpacity>
      </View>
    </CustomImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  Title: {
    fontSize: 15,
    color: "#0008",
    fontWeight: "bold",
    alignItems: "center",
  },

  button: {
    borderRadius: 2,
    backgroundColor: "gray",
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 5,
    marginVertical: 20,
    borderRadius: 30,
  },
});

export default Settings;
