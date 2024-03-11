import InputPropsInterface from "../../../../@types/inputProps";
import { User } from "../../../../@types/user";
import { InputSearchWrapper } from "./style";
import axios from "axios";

const InputSearch = (props: InputPropsInterface) => {
  const { userList, setUserList } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let UsuariosFiltrados: User[] = [];

    if (value.trim() === "") {
      axios.get("http://127.0.0.1:5000/users").then((response) => {
        setUserList(response.data);
      });
    } else {
      UsuariosFiltrados = userList.filter((user: User) =>
        user.username.toLowerCase().includes(value.toLowerCase())
      );
    }

    setUserList(UsuariosFiltrados);
  };

  return (
    <InputSearchWrapper>
      <form>
        <input
          type="text"
          placeholder="Alan or alan@gmail.com"
          onChange={handleChange}
        />
      </form>
    </InputSearchWrapper>
  );
};

export default InputSearch;
