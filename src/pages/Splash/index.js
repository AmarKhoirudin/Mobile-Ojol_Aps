import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 3000);
  }, []);
  return (
    <View>
      <Text>Splash Screen Page</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
