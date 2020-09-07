import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {IconBack, IlustrationRegister} from '../../assets';
import {Button, Input} from '../../components';
import {colors, heightDimension, widthDimension} from '../../utils';
import {setForm} from '../../redux';

const Register = ({navigation}) => {
  const {form} = useSelector((state) => state.RegisterReducer);
  const dispatch = useDispatch();

  const sendData = () => {
    console.log('data yang dikirim: ', form);
  };

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        <IlustrationRegister
          width={widthDimension * 0.3}
          height={heightDimension * 0.16}
          style={styles.ilustration}
        />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk proses daftar anda
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="Nama Lengkap"
          value={form.fullName}
          onChangeText={(value) => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Email"
          value={form.email}
          onChangeText={(value) => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={form.password}
          onChangeText={(value) => onInputChange(value, 'password')}
          secureTextEntry
        />
        <View style={styles.space(83)} />
        <Button title="Daftar" onPress={sendData} />
      </ScrollView>
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
