import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from '../Firebase/Firebase';
import { ToastContainer, toast, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeSlashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';

const Register = () => {
    const [error, seterror] = useState("")
    const [passwordshow, setpasswordshow] = useState(false)
    const hanldefrom = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const displayname=event.target.displayname.value
        const accpted = event.target.tarms.checked
        
        // my website for validation my side
        if (!/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)) {
            seterror("Your Password must contain an uppercase letter, a lowercase letter, a digit, and be at least 8 characters long.");
            return;
        } else if (!accpted) {
            seterror('Please Accept terms and conditions ')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                // update profile
                updateProfile(user, {
                    displayName:displayname, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {console.log('profile update')}).catch((error) => {});
                // varify email
                sendEmailVerification(user)
                    .then(() => {
                        toast.success('✔ check your email ?? varified ', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                    });
                seterror('')
            }).catch(error => {
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
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full lg:w-[400px]  shadow-2xl bg-base-100">
                    <form onSubmit={hanldefrom} className="card-body">
                        <h1 className='text-center text-3xl'>Please Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Display Name</span>
                            </label>
                            <input type="text" name="displayname" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                                <input type={`${passwordshow ? 'text' : 'password'}`} name="password" placeholder="password" className="input w-full input-bordered" />
                                <h1 onClick={() => setpasswordshow(!passwordshow)} className='absolute right-3 bottom-[13px] cursor-pointer'>{passwordshow ? <AiFillEye size={22} /> : <BsEyeSlashFill size={20} />}</h1>
                            </div>
                            {error && <h1 className='text-[red]'>{error}</h1>}
                        </div>
                        <label className='flex gap-3'>
                            <input type="checkbox" name="tarms" id="tarms" /> <span>Accept terms and conditions</span>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
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

export default Register;