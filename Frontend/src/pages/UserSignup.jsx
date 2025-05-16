import React, { useState,useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';




const UserSignup = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const {user, setUser} = useContext(UserDataContext);

    const submitHandler = async(e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        const newUserData = {
            fullname:{
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUserData);
        // console.log(response)
        if (response.status === 201) {
            const data=response.data;
            setUser(data.user);  
            localStorage.setItem('token', data.token)
            alert('User registered successfully!');
            navigate('/home');
        } else {
            alert('Error registering user');
        }

        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img
                    className='w-16 mb-10'
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt=""
                />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's your Name?</h3>
                    <div className='flex gap-4 mb-7'>
                        <input
                            className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base'
                            value={firstName}
                            onChange={(e) => setFirstname(e.target.value)}
                            type="text"
                            placeholder="First name"
                            required
                        />
                        <input
                            className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base'
                            value={lastName}
                            onChange={(e) => setLastname(e.target.value)}
                            type="text"
                            placeholder="Last name"
                            required
                        />
                    </div>
                    <div className='mb-7'>
                        <h3 className='text-lg font-medium mb-2'>What's your Email?</h3>
                        <input
                            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <h3 className='text-lg font-medium mb-2'>Create a Password</h3>
                        <input
                            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <h3 className='text-lg font-medium mb-2'>Confirm Your Password</h3>
                        <input
                            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            placeholder="Confirm password"
                            required
                        />
                    </div>
                    <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                        Sign Up
                    </button>
                    <p className='text-center text-sm mb-7'>
                        Already have an account?{' '}
                        <Link to='/userlogin' className='text-[#10b461] font-semibold'>
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
            <div>
        <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
        </div>
    );
};

export default UserSignup;