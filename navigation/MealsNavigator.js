import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import { createAppContainer } from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriyMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoriyMealsScreen,
  },
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons 
          name="ios-restaurant" 
          size={25}
          color={tabInfo.tintColor}
        />
      );
    }
  }},
  Favorites: {screen: FavoritesScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons 
          name="ios-star" 
          size={25}
          color={tabInfo.tintColor}
        />
      );
    }
  }}
}, {
  tabBarOptions: {
    activeTintColor: Colors.secondaryColor
  }
});

export default createAppContainer(MealsFavTabNavigator);