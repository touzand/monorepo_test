import { useEffect, useState } from "react";
import { UserListWrapper } from "./style";
import axios from "axios";
import { UserDelete } from "../../util/formFunc";
import ListPropsInterface from "../../@types/listProps";

type User = {
  username: string;
  id: number;
  email: string;
};

const UserList = (props: ListPropsInterface) => {
  const {
    setUserUpdate,
    loading,
    setLoading,
    setUpdateSubmit,
    setUserUpdateUsername,
  } = props;

  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/users").then((response) => {
      const data = response.data;
      setUserList(data);
    });
    setLoading(false);
  }, [loading]);

  const handleUpdate = (user: User) => {
    setUserUpdate(user);
    setUpdateSubmit(true);
    setUserUpdateUsername(user.username);
  };

  return (
    <UserListWrapper>
      <article>
        {userList && userList.length <= 0 ? (
          <p>Here you will see some users when you have it</p>
        ) : (
          userList.length > 0 &&
          userList.map((user, index) => (
            <div key={index}>
              <span>{user.username}</span>
              <span>{user.email}</span>
              <div>
                <button onClick={() => handleUpdate(user)}>U</button>
                <button
                  id={user.id.toString()}
                  onClick={(e) => UserDelete(e, setLoading)}
                >
                  D
                </button>
              </div>
            </div>
          ))
        )}
      </article>
    </UserListWrapper>
  );
};

export default UserList;
