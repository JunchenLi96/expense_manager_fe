import React, {FC, useCallback, useMemo, useState} from 'react';
import {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {BinarySwitch, Button, Input} from '../components';
import AppContext from '../components/AppContext';
const AuthScreen: FC = () => {
  //local states
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [validateStatus, setStatus] = useState<string | null>(null);
  const [validateError, setError] = useState<boolean>(false);
  const [toggleState, setToggleState] = useState<1 | 2>(1);
  //example of useMemo
  const isLogin = useMemo(() => {
    return toggleState === 1;
  }, [toggleState]);
  //const isLogin = toggleState === 1;
  const toggleLogin = useCallback(() => {
    //To handle switch toggle
    setToggleState(1);
    //State changes according to switch
  }, []);

  const toggleSignUp = useCallback(() => {
    //To handle switch toggle
    setToggleState(2);
    //State changes according to switch
  }, []);

  const {login} = useContext(AppContext);
  //use callback hook
  const validate = useCallback((): boolean => {
    //email? == email undefined
    setError(false);
    if (!isLogin && !name?.length) {
      setStatus('Missing name');
      setError(true);
      return false;
    }
    if (!email?.length) {
      setStatus('Missing email');
      setError(true);
      return false;
    }
    if (!password?.length) {
      setStatus('Missing password');
      setError(true);
      return false;
    }
    return true;
  }, [email, name, password, isLogin]);

  const handleLogin = useCallback(() => {
    if (validate()) {
      login();
    }
  }, [validate, login]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.rootContainer}>
      <View style={styles.container}>
        <View>
          <BinarySwitch
            state={toggleState}
            option1={'Log In'}
            option2={'Sign Up'}
            onPress1={toggleLogin}
            onPress2={toggleSignUp}
          />
        </View>
        <Text>{!isLogin ? 'Sign up' : 'Login'} Screen</Text>
        {!isLogin ? (
          <Input placeholder="Name" value={name} onChangeText={setName} />
        ) : null}
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        <Button title={!isLogin ? 'Sign up' : 'Login'} onPress={handleLogin} />
        {validateError ? (
          <Text style={styles.errorMessage}>Sorry! {validateStatus}</Text>
        ) : null}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: '50%',
    alignItems: 'center',
  },
  errorMessage: {
    color: '#ff0033',
  },
});
