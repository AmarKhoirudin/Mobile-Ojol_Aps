import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import {Button} from '../../components';
import {colors} from '../../utils';

const widthDimension = Dimensions.get('window').width;

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

ActionButton.proptypes = {
  desc: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
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
