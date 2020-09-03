import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Button} from '../../components';
import {colors} from '../../utils';

const widthDimension = Dimensions.get('window').width;

const ActionButton = ({desc, title}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} />
    </View>
  );
};

export default ActionButton;

const styles = {
  wrapper: {
    component: {marginBottom: 43, maxWidth: 225},
  },
  text: {
    desc: {
      fontSize: 10,
      color: colors.text.default,
      textAlign: 'center',
      paddingHorizontal: widthDimension * 0.15,
      marginBottom: 6,
    },
  },
};
