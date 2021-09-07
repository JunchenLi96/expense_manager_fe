import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  loading: boolean;
}

const Button: FC<Props> = props => {
  return (
    <TouchableOpacity
      disabled={props.loading}
      style={styles.container}
      onPress={props.onPress}>
      {!props.loading ? (
        <Text style={styles.text}>{props.title}</Text>
      ) : (
        <ActivityIndicator
          hidesWhenStopped={true}
          size="small"
          color="white"
          animating={props.loading}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '30%',
    backgroundColor: '#000',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingVertical: 0,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
