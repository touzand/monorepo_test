import { useEffect, useState } from "react";
import UserForm from "../UserForm";
import UserList from "../UserList";
import { MainWrapper } from "./style";
import InputSearch from "./components/InputSearch";
import axios from "axios";
import { User } from "../../@types/user";
import InputPropsInterface from "../../@types/inputProps";

const Main = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userUpdate, setUserUpdate] = useState({ username: "", email: "" });
  const [updateSubmit, setUpdateSubmit] = useState<boolean>(false);
  const [userUpdateUsername, setUserUpdateUsername] = useState<string>("");

  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/users").then((response) => {
      const data = response.data;
      setUserList(data);
    });
    setLoading(false);
  }, [loading]);

  const InputSearchProps: InputPropsInterface = {
    userList,
    setUserList,
  };

  const UserListProps = {
    userList,
    setUserUpdate,
    loading,
    setLoading,
    updateSubmit,
    setUpdateSubmit,
    setUserUpdateUsername,
  };

  const UserFormProps = {
    setUserUpdate,
    userUpdate,
    loading,
    setLoading,
    updateSubmit,
    setUpdateSubmit,
    userUpdateUsername,
  };

  return (
    <MainWrapper>
      <div>
        <InputSearch {...InputSearchProps} />
        <UserList {...UserListProps} />
      </div>
      <UserForm {...UserFormProps} />
    </MainWrapper>
  );
};

export default Main;
