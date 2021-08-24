import React, {FC, useCallback, useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {Button, Input} from '../components';
const AuthScreen: FC = () => {
  //local states
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [validateStatus, setStatus] = useState<string | null>(null);
  const [validateError, setError] = useState<boolean>(false);
  const [toggleSignUp, setSwitchValue] = useState<boolean>(false);

  // const toggleSwitch = useCallback(() => {
  //   //To handle switch toggle
  //   setSwitchValue(toggleSignUp);
  //   //State changes according to switch
  // }, [toggleSignUp]);

  //use callback hook ** study
  const validate = useCallback(() => {
    //email? == email undefined
    setError(false);
    if (!email?.length) {
      setStatus('Missing email');
      setError(true);
      return;
    }
    if (!password?.length) {
      setStatus('Missing password');
      setError(true);
      return;
    }
    if (toggleSignUp && !name?.length) {
      setStatus('Missing name');
      setError(true);
      return;
    }
  }, [email, name, password, toggleSignUp]);

  return (
    <View style={styles.container}>
      <View>
        {/*Setting the default value of state*/}
        {/*On change of switch onValueChange will be triggered*/}
        <Switch onValueChange={setSwitchValue} value={toggleSignUp} />
      </View>
      <Text>{toggleSignUp ? 'Sign up' : 'Login'} Screen</Text>
      {toggleSignUp ? (
        <Input placeholder="Name" value={name} onChangeText={setName} />
      ) : null}
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title={toggleSignUp ? 'Sign up' : 'Login'} onPress={validate} />
      {validateError ? (
        <Text style={styles.errorMessage}>Sorry! {validateStatus}</Text>
      ) : null}
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: '70%',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
  },
  errorMessage: {
    color: '#ff0033',
  },
});
