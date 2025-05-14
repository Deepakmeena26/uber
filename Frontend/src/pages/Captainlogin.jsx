import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
    const [email,setemail] = useState('')
        const [password,setpassword] =useState('')
        const [captainData,setcaptainData] = useState({})
    
        const submitHandler=(e)=>{
            e.preventDefault()
            setcaptainData({email:email,password:password})
            console.log(captainData)
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
            <p className='text-center text-sm mb-7'>Don't have an account? <Link to='/captainsignup' className='text-[#10b461] font-semibold'>Sign up</Link></p>
        </form>
        </div>
        <div>
        <Link to='/userlogin' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
        </div>
    </div>
  )
}

export default Captainlogin