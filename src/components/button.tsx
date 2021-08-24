import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const Button: FC<Props> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    color: '#fff',
  },
});
