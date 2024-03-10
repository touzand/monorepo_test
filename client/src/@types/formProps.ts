export default interface FormPropsInterface {
  setUserUpdate: ({}) => void;
  userUpdate: { username: string; email: string };
  loading: boolean;
  setLoading: (value: boolean) => void;
  updateSubmit: boolean;
  setUpdateSubmit: (value: boolean) => void;
  userUpdateUsername: string;
}
