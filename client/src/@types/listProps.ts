import {User} from "./user";

export default interface ListPropsInterface {
  userList:User[];
  setUserUpdate: ({}) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  updateSubmit: boolean;
  setUpdateSubmit: (value: boolean) => void;
  setUserUpdateUsername: (value: string) => void;
}
