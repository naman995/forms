import { useState } from "react";
import { useForm } from "react-hook-form";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("First_Name",{required:true})} />
        {errors.First_Name && <p role="alert">This field is required</p>}
        <input type="text" placeholder="Age" {...register("Enter_Age")} />
        <input type="submit" />
      </form> */}
      <SignUp />
    </div>
  );
}

export default App;
