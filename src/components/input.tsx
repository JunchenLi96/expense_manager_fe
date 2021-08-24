import React, {FC} from 'react';
import {View, Dimensions, StyleSheet, TextInput} from 'react-native';

const {width} = Dimensions.get('screen');

interface Props {
  placeholder: string;
  value: string | undefined;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        secureTextEntry={props.secureTextEntry || false}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: 'center',
    backgroundColor: '#ffff',
    borderRadius: 5,
    marginVertical: 5,
  },
  input: {
    padding: 15,
  },
});
