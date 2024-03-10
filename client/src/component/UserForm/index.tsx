import { UserFormWrapper } from "./style";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { onSubmit, onUpdate } from "../../util/formFunc";
import FormPropsInterface from "../../@types/formProps";

const UserSchema = z.object({
  username: z.string().nonempty(),
  email: z.string().email({ message: "Error locochon" }),
});

const UserForm = (props: FormPropsInterface) => {
  const {
    userUpdate,
    setLoading,
    updateSubmit,
    setUpdateSubmit,
    userUpdateUsername,
    setUserUpdate,
  } = props;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
  });

  const handleOnSubmit = (data: any) => {
    onSubmit(data);
    reset();

    setTimeout(() => {
      setLoading(true);
    }, 500);
  };

  const handleOnUpdate = (data: any) => {
    setUpdateSubmit(false);
    setUserUpdate({ username: "", email: "" });
    onUpdate(data, userUpdateUsername);
    reset();

    setTimeout(() => {
      setLoading(true);
    }, 500);
  };

  return (
    <UserFormWrapper>
      <form
        onSubmit={
          updateSubmit
            ? handleSubmit(handleOnUpdate)
            : handleSubmit(handleOnSubmit)
        }
      >
        <input
          {...register("username")}
          defaultValue={userUpdate?.username}
          placeholder="Username"
        />
          {errors.username && <p className="error">Erro no username</p>}
        <input
          {...register("email")}
          defaultValue={userUpdate?.email}
          placeholder="Email"
        />
          {errors.email && <p className="error">Erro no email</p>}
        <button type="submit">Submit</button>
      </form>
    </UserFormWrapper>
  );
};

export default UserForm;
