import { UserFormWrapper } from "./style";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { onSubmit, onUpdate } from "../../util/formFunc";

const UserSchema = z.object({
  username: z.string(),
  email: z.string().email({ message: "Error locochon" }),
});

const UserForm = ({ userUpdate, setLoading, updateSubmit, setUpdateSubmit, setUserUpdate, userUpdateUsername }) => {
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

  const handleOnUpdate = (data:any) => {
    setUpdateSubmit(false)
    setUserUpdate({username:'',email:''})
    onUpdate(data,userUpdateUsername)
    reset();

    setTimeout(() => {
      setLoading(true);
    }, 500);
  }

  return (
    <UserFormWrapper>
    <form onSubmit={updateSubmit ? handleSubmit(handleOnUpdate) : handleSubmit(handleOnSubmit)}>
        <input {...register("username")} defaultValue={userUpdate.username} placeholder="Username"/>
        <input {...register("email")} defaultValue={userUpdate.email} placeholder="Email"/>
        {
          //{errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
          //{errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        }
        <button type="submit">Submit</button>
      </form>
    </UserFormWrapper>
  );
};

export default UserForm;
