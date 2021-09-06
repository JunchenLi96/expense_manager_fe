import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';
import {NavProps} from '../navigations/navParams';

const NewTransactionScreen: FC = () => {
  const navigation = useNavigation<NavProps>();
  return (
    <View style={styles.container}>
      <Text>New transaction Screen</Text>
      <Button
        title="back"
        onPress={() => navigation.goBack()}
        loading={false}
      />
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
