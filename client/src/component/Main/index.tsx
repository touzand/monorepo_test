import { useState } from "react";
import UserForm from "../UserForm";
import UserList from "../UserList";
import { MainWrapper } from "./style";
import InputSearch from "./components/InputSearch";

const Main = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userUpdate, setUserUpdate] = useState({ username: "", email: "" });
  const [updateSubmit, setUpdateSubmit] = useState<boolean>(false);
  const [userUpdateUsername, setUserUpdateUsername] = useState<string>("");

  const UserListProps = {
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
      {
        //<div>
        //<InputSearch/>
      }
      <UserList {...UserListProps} />
      <UserForm {...UserFormProps} />
    </MainWrapper>
  );
};

export default Main;
