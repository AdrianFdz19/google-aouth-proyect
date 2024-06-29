import React from 'react'
import './styles.scss';
import images from '../../../assets';

export default function SignIn() {
  return (
    <div className="sign-cont w-full flex justify-center items-center ">
        <div className="sign-box w-[90%]">
            <form className='mt-10 flex flex-col items-center border w-[50%]'>
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="submit" value='submit' />
            </form>
            <button
                className='google-btn px-3'
            >
                <img
                className='w-[2rem] h-auto'
                src={images.google} alt="img" />
                <p>Sign in with Google</p>
            </button>
        </div>
    </div>
  )
}
