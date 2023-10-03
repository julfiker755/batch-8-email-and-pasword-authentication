import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {sendPasswordResetEmail } from "firebase/auth";
import auth from '../Firebase/Firebase';
import { ToastContainer, toast,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forget = () => {
    const [error,seterror]=useState('')
    const [email,setemail]=useState('')
    const hanldesubmit=(e)=>{
       e.preventDefault()
       if(email.trim() === ''){
        seterror('input check not your email')
        return
       }
       seterror('')
       sendPasswordResetEmail(auth,email)
       .then(()=>{
        toast.success('Sir,check your email', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
       }).catch(error=>{
        toast.warn(`${error.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
       })
    }
    return (
        <div className="antialiased bg-[#1d232a] w-screen h-screen flex items-center justify-center"> 
        <div className="max-w-lg md:w-full m-auto top-1/2 bg-[#202832] text-white p-8 rounded-xl shadow">
            <h1 className="text-4xl font-medium">Reset password</h1>
            <p className="text-white ">Fill up the form to reset the password</p>
    
            <form onSubmit={hanldesubmit}  className="my-10">
                <div className="flex flex-col space-y-5">
                    <label htmlFor="email">
                        <p className="font-medium text-white  pb-2">Email address</p>
                        <input id="email" onChange={(e) => setemail(e.target.value)} name="email" type="email" className="w-full py-3 rounded-lg px-3 focus:outline-none"/>
                        {error && <h1 className='text-[red]'>{error}</h1>}
                    </label>
                    
                    <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                          </svg>
                          
                          <span>Reset password</span>
                    </button>
                    <p className="text-center">Not Log in yet? <Link to="/login" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Log In now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg></span></Link></p>
                </div>
            </form>
        </div>
         {/* tost container for website */}
         <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        
    </div>
    );
};

export default Forget;