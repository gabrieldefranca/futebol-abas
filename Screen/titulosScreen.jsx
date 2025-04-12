import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Title } from 'react-native-paper';

const titulos = [
  { nome: "La Liga", anos: [ 2017, 2020, 2022] },
  { nome: "UEFA Champions League", anos: [2011, 2014, 2023] },
  { nome: "Supercopa da Espanha", anos: [2017, 2020, 2022] },
];

export default function TitulosScreen() {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Accordion
          title={item.nome}
          description={`Anos: ${item.anos.join(', ')}`}
        >
          <View style={styles.itemContainer}>
            {item.anos.map((ano) => (
              <Title key={ano}>{ano}</Title>
            ))}
          </View>
        </List.Accordion>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingLeft: 16,
  },
});