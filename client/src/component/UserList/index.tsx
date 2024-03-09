import { useEffect, useState } from "react";
import { UserListWrapper } from "./style";
import axios from "axios";
import { UserDelete, UserUpdate } from "../../util/formFunc";

type User = {
  username: string;
  id: number;
  email: string;
};

const UserList = ({ setUserUpdate, setLoading, loading, setUpdateSubmit, setUserUpdateUsername}) => {
  const [userList, setUserList] = useState<User[] | number>(0);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/users").then((response) => {
      const data = response.data;
      setUserList(data);
    });
    setLoading(false);
  }, [loading]);

  const handleUpdate = (user) => {
    setUserUpdate(user);
    setUpdateSubmit(true)
    setUserUpdateUsername(user.username)
  };

  return (
    <UserListWrapper>
      <article>
        {userList.length <= 0 ? (
          <p>Here you will see some users when you have it</p>
          )
        : userList.length > 0 && (
          userList.map((user, index) => (
            <div key={index}>
              <span>{user.username}</span>
              <span>{user.email}</span>
              <div>
                <button onClick={() => handleUpdate(user,setLoading)}>U</button>
                <button id={user.id} onClick={(e) => UserDelete(e, setLoading)}>
                  D
                </button>
              </div>
            </div>
            )))
          }
      </article>
    </UserListWrapper>
  );
};

export default UserList;
