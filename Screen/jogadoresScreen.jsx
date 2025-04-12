import React from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const jogadores = [
  { nome: "Vinícius Júnior", numero: 7, imagem: "https://i.pinimg.com/564x/4e/f7/ed/4ef7edc3120f2ad20fd4f5d005b6aa2d.jpg" },
  { nome: "Jude Bellingham", numero: 5, imagem: "https://i.pinimg.com/564x/e5/39/34/e53934e7f60d03a0e567f7b6ff6c354a.jpg" },
  { nome: "Toni Kroos", numero: 8, imagem: "https://i.pinimg.com/564x/8b/15/d1/8b15d10c659e13f8e52fbc44f4ac9a5f.jpg" },
  { nome: "Luka Modrić", numero: 10, imagem: "https://i.pinimg.com/564x/5f/95/ff/5f95ff295e27ef79f5868c78271f93c9.jpg" },
  { nome: "Éder Militão", numero: 3, imagem: "https://i.pinimg.com/564x/e6/1e/33/e61e33c2a16c8220d352bd8d62293c2d.jpg" },
];

export default function JogadoresScreen() {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.numero.toString()}
      renderItem={({ item }) => (
        <List.Item
          title={`${item.nome} (#${item.numero})`}
          left={() => (
            <Image source={{ uri: item.imagem }} style={styles.avatar} />
          )}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 8,
  },
});