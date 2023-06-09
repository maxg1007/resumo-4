import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import * as Font from "expo-font";
import DropDownPicker from "react-native-dropdown-picker";

export default class CriarResumo extends Component {
  constructor() {
    super();
    this.state = {
      materia: "Selecione a materia",
      dropDownHeight: 40,
    };
  }
  addResumo = () => {};
  render() {
    return (
      <View style={Styles.container}>
        <ImageBackground
          source={require("../assets/fundo.jpg")}
          style={Styles.imageBackground}
        >
          <View style={Styles.appTitle}>
            <Text style={Styles.titleText}>Criar resumo</Text>
          </View>
          <ScrollView>
            <View
              style={{
                height: this.state.dropDownHeight,
              }}
            >
              <DropDownPicker
                items={[
                  { label: "historia", value: "historia" },
                  { label: "fisica", value: "fisica" },
                  { label: "quimica", value: "quimica" },
                  { label: "biologia", value: "biologia" },
                  { label: "geografia", value: "geografia" },
                  { label: "matematica", value: "matematica" },
                  { label: "literatura", value: "literatura" },
                  { label: "gramatica", value: "gramatica" },
                  { label: "filosofia", value: "filosofia" },
                  { label: "sociologia", value: "sociologia" },
                  { label: "redacao", value: "redacao" },
                  { label: "ingles", value: "ingles" },
                ]}
                defaultValue={this.state.materia}
                open={this.state.dropDownHeight === 170 ? true : false}
                onOpen={() => {
                  this.setState({ dropDownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropDownHeight: 40 });
                }}
                placeholder={this.state.materia}
                onSelectItem={(item) => {
                  this.setState({ materia: item.value });
                  console.log(this.state.materia);
                }}
                onChangeItem={(item) => {
                  this.setState({ materia: item.value });
                  console.log(this.state.materia);
                }}
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  borderWidth: 4,
                  borderColor: "white",
                  color: "black",
                  marginTop: 20,
                  width: 400,
                  alignItems: "center",
                  alignSelf: "center",
                }}
                textStyle={{
                  color: "black",
                  fontFamily: "Sweets-smile",
                  alignSelf: "center",
                }}
                placeholderStyle={{
                  color: "black",
                }}
                itemStyle={{
                  justifyContent: "center",
                  fontFamily: "Sweets-smile",
                }}
              />
            </View>
            <TextInput style={Styles.imput} placeholder="Titulo" />
            <TextInput
              style={Styles.imputResumo}
              placeholder="Resumo"
              multiline={true}
              numberOfLines={10}
            />
            <TouchableOpacity style={Styles.enviar}>
              <Text style={Styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </ScrollView>
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
    flex: 0.2,
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
  imput: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderWidth: 2,
    borderColor: "white",
    color: "black",
    marginTop: 50,
    width: 400,
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    fontFamily: "Sweets-smile",
    textAlign: "center",
    fontSize: 18,
  },
  imputResumo: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderWidth: 2,
    borderColor: "white",
    color: "black",
    marginTop: 20,
    width: 400,
    minHeight: 40,
    alignItems: "center",
    alignSelf: "center",
    fontFamily: "Sweets-smile",
    textAlign: "center",
    fontSize: 18,
  },
  enviar: {
    alignSelf: "center",
    backgroundColor: "#547FF0",
    marginTop: 20,
    borderRadius: 20,
    width: 200,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "Sweets-smile",
    color: "white",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
});
