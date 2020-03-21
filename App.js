import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {

  state = {
    goal: 2000,
    drinked: 0,
    status: 'Ruim',
    progress: 0,
  }

  addWater = () => {
    let { drinked, goal } = this.state;
    drinked += 200;
    let progress = ((drinked / goal) * 100).toFixed(0);
    let status = "Ruim";
    if (progress >= 100) {
      status = "Excelente";
    }
    else if (progress >= 75) {
      status = "Bom";
    }
    else if (progress >= 50) {
      status = "Mediano";
    }
    this.setState({ drinked, status, progress });
  }

  render() {

    const { goal, drinked, status, progress } = this.state;

    return (
      <View style={styles.body}>
        <ImageBackground
          source={require('./assets/waterbg.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.infoArea}>
            <View style={styles.area}>
              <Text style={styles.areaTitle}>Meta</Text>
              <Text style={styles.areaContent}>{goal}ml</Text>
            </View>
            <View style={styles.area}>
              <Text style={styles.areaTitle}>Consumido</Text>
              <Text style={styles.areaContent}>{drinked}ml</Text>
            </View>
            <View style={styles.area}>
              <Text style={styles.areaTitle}>Status</Text>
              <Text style={styles.areaContent}>{status}</Text>
            </View>
          </View>
          <View style={styles.progress}>
            <Text style={styles.progressText}>{progress}%</Text>
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.addWater}
            >
              <Text style={styles.buttonText}>Beber 200ml</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20,
  },
  backgroundImage: {
    flex: 1,
    width: null,
  },
  infoArea: {
    flexGrow: 2,
    flexDirection: 'row',
    marginTop: 70,
  },
  area: {
    flex: 1,
    alignItems: 'center',
  },
  areaTitle: {
    color: '#45b2fc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  areaContent: {
    color: '#2b4274',
    fontSize: 24,
    fontWeight: 'bold',
  },
  progress: {
    flex: 1,
    alignItems: 'center',
  },
  progressText: {
    color: '#fff',
    fontSize: 70,
  },
  buttonArea: {
    flex: 1,
    width: 160,
    alignSelf: 'center',
  },
  button: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#45b2fc',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
