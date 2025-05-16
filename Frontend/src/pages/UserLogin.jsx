import React, { useState,useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';

const UserLogin = () => {
    const [email,setemail] = useState('')
    const [password,setpassword] =useState('')
    const [userData,setuserData] = useState({})

    const navigate = useNavigate();
    const {user, setUser} = useContext(UserDataContext);

    const submitHandler= async(e)=>{
        e.preventDefault()
        const UserData = {
            email: email,
            password: password,
        };

        const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, UserData);
        if (response.status === 200) {
            const data=response.data;
            setUser(data.user); 
            localStorage.setItem('token', data.token) 
            alert('User logged in successfully!');
            navigate('/home');
        } else {
            alert('Error logging in user');
        }

        setemail('')
        setpassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e)=>submitHandler(e)}>
            <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
            <input 
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                type="Email" 
                placeholder="Phone number or email" 
                required 
            />
            <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
            <input 
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                type="password" 
                placeholder="Password" 
                required 
            />
            <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
            <p className='text-center text-sm mb-7'>Don't have an account? <Link to='/usersignup' className='text-[#10b461] font-semibold'>Sign up</Link></p>
        </form>
        </div>
        <div>
        <Link to='/captainlogin' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin