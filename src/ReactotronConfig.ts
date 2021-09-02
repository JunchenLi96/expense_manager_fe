import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
//import sagaPlugin from 'reactotron-redux-saga';

export default Reactotron.configure({host: 'localhost'})
  .useReactNative({
    storybook: true,
  })
  .use(reactotronRedux())
  .use(networking())
  //.use(sagaPlugin({}))
  .connect();

const log = console.log;
console.log = function (...args: unknown[]) {
  if (Reactotron.log) {
    Reactotron.log(...args);
  }
  return log(...args);
};
