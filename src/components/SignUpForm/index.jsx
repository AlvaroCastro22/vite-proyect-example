import { useState } from "react";
import {useForm} from "react-hook-form";
const SignupForm = () => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm()
    
    const handleClearClick = () => {
        reset()
    }
    const handleFormSubmit = (data) => {
        console.log(data)
        
    }
    console.log(errors);
    return(
        
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label >
                    Name 
                    <input {...register("name",{required:true})} required/>
                </label>
                <br/>
                <label >
                    Age 
                    <input {...register("age",{required:true})} required/>
                </label>
                <br/>
                <label >
                    Adress
                    <input {...register("address",{required:true})} required/>
                </label>
                <br/>
                <label >
                    ZipCode 
                    <input {...register("zipcode",{required:true})} required/>
                </label>
                <br/>
                <label >
                    Phone 
                    <input {...register("phone",{required:true})} required/>
                </label>
                <br/>
                <div>
                    <button type="button" onClick={handleClearClick}>Clear</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        
    );
}
export default SignupForm