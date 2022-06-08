import { StyleSheet, ImageBackground, Text, View } from "react-native";
import React, { useState } from "react";
import StatusBar from "./components/statusBar";

const newYears = "1 Jan 2023";

export default function App() {
  const [seconds_, setSeconds] = useState(0);
  const [days_, setDays] = useState(0);
  const [hours_, setHours] = useState(0);
  const [minutes_, setMinutes] = useState(0);

  const countdown = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    setDays(Math.floor(totalSeconds / 3600 / 24));
    setHours(Math.floor((totalSeconds / 3600) % 24));
    setMinutes(Math.floor((totalSeconds / 60) % 60));
    setSeconds(Math.floor(totalSeconds % 60));
  };

  setInterval(countdown, 1000);

  return (
    <ImageBackground
      style={styles.img}
      source={require("./assets/newYear.png")}
    >
      <StatusBar />

      <View style={styles.container}>
        <Text style={styles.txt}>New Years Eve</Text>
        <View style={styles.hContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.numbers}>{days_}</Text>
            <Text style={styles.txt}>days</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.numbers}>{hours_}</Text>
            <Text style={styles.txt}>hours</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.numbers}>{minutes_}</Text>
            <Text style={styles.txt}>mins</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.numbers}>{seconds_}</Text>
            <Text style={styles.txt}>seconds</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },

  hContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  timeContainer: {
    margin: 10,
    fontWeight: "bold",
    alignItems: "center",
  },

  numbers: {
    fontSize: 40,
    fontWeight: "bold",
  },

  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },

  img: {
    flex: 1,
    height: null,
    width: null,
  },
});
