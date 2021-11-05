import React from "react";
import { View, Text, StyleSheet, Button, } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

const CategoriyMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Categorey Meals Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go to Details!" onPress={() => {
        props.navigation.navigate({ routeName: 'MealDetail' });
      }} />
    </View>
  );
};

CategoriyMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriyMealsScreen;