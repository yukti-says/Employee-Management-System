import React, { useState } from "react";

const Login = () => {
    // we want submit handler

    const[email, setEmail] = useState('')
    const[password , setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Email : ", email);
        console.log("Password : ", password);

        setEmail('')
        setPassword('')
        
        
        
    }



    return (
        <div className="flex h-screen w-screen  items-center justify-center">
            <div className=" border-2 border-emerald-600  p-20 " >
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                    className="flex flex-col items-center justify-center  ">
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            
                        }}
                        
                    
                        required
                        className="  outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-4 m-3 font-bold text-xl " type="email" placeholder="Enter your email" />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    
                        required
                        className=" outline-none bg-transparent placeholder:text-gray-400  border-2 border-emerald-600 rounded-full py-3 px-4 m-4 font-bold text-xl "
                        type="password" placeholder="Enter Password" />
                    <button className="py-2 px-5 rounded-xl  text-white bg-emerald-600 
                    hover:bg-emerald-700  font-bold shadow-sm transition duration-300    ml-5" >Log in</button>
                </form>



            </div>
        </div>
    )
}

export default Login