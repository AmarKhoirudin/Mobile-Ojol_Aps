import React from 'react';
import {IconBack} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      {rest.name === 'back' && <IconBack width={25} height={25} />}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
