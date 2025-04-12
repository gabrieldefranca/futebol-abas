import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const escudo = {
  nome: "Real Madrid",
  escudo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Title>{escudo.nome}</Title>
      <Image source={{ uri: escudo.escudo }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
});