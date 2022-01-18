import {makeAutoObservable} from 'mobx';
import {UsersData} from '../constants/data';
import {UserDataType} from '../models';
import {addUser} from './actions/user';

class User {
  users: UserDataType[] = [...UsersData];
  newUser: UserDataType = {} as UserDataType;
  constructor() {
    makeAutoObservable(this);
  }
  create() {
    this.users = addUser(this.users, this.newUser);
    this.newUser = {} as UserDataType;
  }
}
const user = new User();
export default user;
