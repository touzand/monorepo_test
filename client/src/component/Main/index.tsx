import { useState } from "react";
import UserForm from "../UserForm";
import UserList from "../UserList";
import { MainWrapper } from "./style";
import InputSearch from "./components/InputSearch";

const Main = () => {
  const [userData, setUserData] = useState<string>();
  const [userUpdate, setUserUpdate] = useState({username:'',email:''});
  const [userUpdateUsername, setUserUpdateUsername] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(false)
  const [updateSubmit,setUpdateSubmit] = useState<boolean>(false)

  return (
    <MainWrapper>
    <div>
    <InputSearch/>
    <UserList setUserUpdate={setUserUpdate} loading={loading} setLoading={setLoading} 
    updateSubmit={updateSubmit} setUpdateSubmit={setUpdateSubmit} setUserUpdateUsername={setUserUpdateUsername}/>
    </div>
      <UserForm setUserUpdate={setUserUpdate} userUpdate={userUpdate} loading={loading} setLoading={setLoading} updateSubmit={updateSubmit} setUpdateSubmit={setUpdateSubmit} userUpdateUsername={userUpdateUsername}/>
    </MainWrapper>
  );
};

export default Main;
