import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {IlustrationRegister, IconBack} from '../../assets';
import {Input} from '../../components';
import {colors} from '../../utils';

const widthDimension = Dimensions.get('window').width;
const heightDimension = Dimensions.get('window').height;

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <IconBack width={25} height={25} />
      <IlustrationRegister
        width={widthDimension * 0.3}
        height={heightDimension * 0.16}
        style={styles.ilustration}
      />
      <Text style={styles.text.desc}>
        Mohon mengisi beberapa data untuk proses daftar anda
      </Text>
      <View style={styles.space(64)} />
      <Input placeholder="Nama Lengkap" />
      <View style={styles.space(33)} />
      <Input placeholder="Email" />
      <View style={styles.space(33)} />
      <Input placeholder="Password" />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 20},
  },
  iconBack: {
    width: 25,
    height: 25,
    backgroundColor: 'blue',
    color: 'black',
  },
  ilustration: {
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: (value) => {
    return {height: value};
  },
};

export default Register;
