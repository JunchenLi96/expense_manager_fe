import React, {FC} from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';

const {width} = Dimensions.get('screen');

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: FC<Props> = props => {
  return (
    <view>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry || false}
        onChangeText={props.onChangeText}
      />
    </view>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: 'center',
  },
  input: {
    padding: 15,
  },
});
