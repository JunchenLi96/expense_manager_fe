import {APIErr} from './../types/errorDTO';
import {ApiResponse} from 'apisauce';
import {UserDTO} from './../types/userTypes';
import api from './base';

const USERS_URL = '/users';

const login = (
  email: string | undefined,
  password: string | undefined,
): Promise<ApiResponse<UserDTO, APIErr>> =>
  api.post(USERS_URL + '/login', {
    email: email,
    password: password,
  });

const signUp = (
  name: string | undefined,
  email: string | undefined,
  password: string | undefined,
): Promise<ApiResponse<UserDTO, APIErr>> =>
  api.post(USERS_URL + '/signup', {
    name: name,
    email: email,
    password: password,
  });

export default {login, signUp};
