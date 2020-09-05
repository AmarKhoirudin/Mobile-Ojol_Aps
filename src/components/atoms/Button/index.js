import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {colors} from '../../../utils';
import PropTypes from 'prop-types';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    component: {
      backgroundColor: colors.default,
      borderRadius: 25,
      paddingVertical: 13,
    },
  },
  text: {
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
