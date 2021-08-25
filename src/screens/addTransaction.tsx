import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';

const NewTransactionScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>New transaction Screen</Text>
      <Button title="back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default NewTransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
