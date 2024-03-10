import axios from "axios";
import { instance } from "./config";

export const onSubmit = (data: any) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  instance.post("/create", data, config);
};

export const onUpdate = (data: any,username:string) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  instance.post(username + "/update", data, config);
};


export const UserDelete = (e: any, setLoading:any) => {
  const id = e.target.id;
  instance.post(id + "/delete");

  setTimeout(() => {
    setLoading(true);
  }, 500);
  //e.target.parentNode.parentNode.remove()
};

export const UserUpdate = (data: any) => {
  console.log(data);
};
