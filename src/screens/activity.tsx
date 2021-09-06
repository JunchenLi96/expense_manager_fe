import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';
import {NavProps} from '../navigations/navParams';
import {Routes} from '../navigations/route';

const ActivityScreen: FC = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.container}>
      <Text>Activity Screen</Text>
      <Button
        title="Add Transaction"
        onPress={() => navigation.navigate(Routes.NewTransaction)}
        loading={false}
      />
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
