import {takeLatest, all} from 'redux-saga/effects';
import {UserActions} from '../redux/userSlice';
import {updateName} from './updateName';

export default function* userSagas() {
  yield all([takeLatest(UserActions.updateName.type, updateName)]);
}
