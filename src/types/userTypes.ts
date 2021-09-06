export interface UserDTO {
  name: string;
  email: string;
  token: string; // jwt token with id claim
}

export interface UserLoginDTO {
  password: string;
  email: string;
}

export interface UserSignUpDTO extends UserLoginDTO {
  name: string;
}

export enum OperationStatus {
  Idle = 'idle',
  Pending = 'pending',
  Failed = 'failed',
  Fulfilled = 'fulfilled',
}
