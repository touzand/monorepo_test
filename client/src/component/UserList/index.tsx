import { UserListWrapper } from "./style";
import { UserDelete } from "../../util/formFunc";
import ListPropsInterface from "../../@types/listProps";
import { User } from "../../@types/user";

const UserList = (props: ListPropsInterface) => {
  const {
    userList,
    setUserUpdate,
    setLoading,
    setUpdateSubmit,
    setUserUpdateUsername,
  } = props;

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
          userList.map((user: User, index: number) => (
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
