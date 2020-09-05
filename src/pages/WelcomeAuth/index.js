import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import ActionButton from './ActionButton';
import {colors} from '../../utils';
import {welcomeAuth} from '../../assets';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen)
  }
  return (
    <View style={styles.wraper.page}>
      <Image source={welcomeAuth} style={styles.wraper.ilustration} />
      <Text style={styles.text.welcome}>Selamat Datang di O-JOL</Text>
      <ActionButton
        desc="Silahkan masuk, jika anda suda memiliki akun"
        title="Masuk"
        onPress={() => handleGoTo("Login")}
      />
      <ActionButton
        desc="atau silahkan daftar jika anda belum memiliki akun"
        title="Daftar"
        onPress={() => handleGoTo("Register")}
      />
    </View>
  );
};

export default WelcomeAuth;

const styles = {
  wraper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
    },
    ilustration: {
      width: 219,
      height: 117,
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 76,
    },
  },
};
