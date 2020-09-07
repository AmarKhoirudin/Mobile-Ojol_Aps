import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {IlustrationLogin} from '../../assets';
import {Button, Input} from '../../components';
import {setForm} from '../../redux';
import {colors, heightDimension, widthDimension} from '../../utils';

const Register = ({navigation}) => {
  const {form} = useSelector((state) => state.LoginReducer);
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
        <Button name="back" type="icon" onPress={() => navigation.goBack()} />
        <IlustrationLogin
          width={widthDimension * 0.3}
          height={heightDimension * 0.16}
          style={styles.ilustration}
        />
        <Text style={styles.text.desc}>
          Silahkan mengisi data anda, untuk masuk ke aplikasi O-OJOL
        </Text>
        <View style={styles.space(64)} />
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
        <Button title="Login" onPress={sendData} />
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
