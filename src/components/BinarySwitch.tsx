import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

interface Props {
  state: 1 | 2;
  option1: string;
  option2: string;
  onPress1: () => void;
  onPress2: () => void;
}

const BinarySwitch: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={props.state === 1 ? styles.containerSelected : styles.container}
        onPress={props.onPress1}>
        <Text style={styles.text}>{props.option1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={props.state === 2 ? styles.containerSelected : styles.container}
        onPress={props.onPress2}>
        <Text style={styles.text}>{props.option2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BinarySwitch;

const styles = StyleSheet.create({
  containerSelected: {
    backgroundColor: '#fe0000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  container: {
    backgroundColor: '#000',
    flexDirection: 'row',
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
