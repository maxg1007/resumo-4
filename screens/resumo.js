import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";

export default class Resumo extends Component {
  constructor() {
    super();
    this.state = {
      resumos: [],
    };
  }
  render() {
    var materia = this.props.route.params.materia;
    console.log(materia);
    return (
      <View style={Styles.container}>
        <ImageBackground
          source={require("../assets/fundo.jpg")}
          style={Styles.imageBackground}
        >
          <View style={Styles.appTitle}>
            <Text style={Styles.titleText}>Resumos de {materia}</Text>
          </View>
          {!this.state.resumos[0] ? (
            <View>
              <Text>Nenhum resumo disponivel</Text>
            </View>
          ) : (
            <View style={Styles.cardContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.resumos}
                renderItem={this.renderItem}
              />
            </View>
          )}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("criarResumo");
            }}
          >
            <Image source={require("../assets/plus.png")} style={Styles.plus} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  appTitle: {
    flex: 0.1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Sweets-smile",
  },
  materiaText: {
    fontFamily: "Sweets-smile",
    fontSize: 30,
  },
  materiaButton: {
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 20,
    width: 240,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  plus: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
  },
  cardContainer: {
    flex: 0.93,
  },
});
