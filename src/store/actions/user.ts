import {UserDataType} from '../../models';
const addUser = (users: UserDataType[], newUser: UserDataType) =>
  [...users, {id: users.length + 1, ...newUser}] as UserDataType[];
interface LoginProps {
  mobileNoOrEmail: string;
  password: string;
}
const authUser = (users: UserDataType[], user: LoginProps) =>
  users.some(
    (data: UserDataType) =>
      (data.mobileNoOrEmail = user.mobileNoOrEmail) &&
      data.password === user.password,
  );

export {addUser, authUser};
