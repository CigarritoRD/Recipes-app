import React from "react";
import Navbar from "../components/Navbar";

const Sesion = () => {
  return (
    <div>
      <Navbar />
      <div className='h-[70vh] w-full grid place-content-center'>
        <div>
          <div className='w-screen '>
            <form
              action=''
              className='border rounded-xl py-10 px-5 shadow-lg flex flex-col w-[90%] max-w-[600px]  gap-4 mx-auto'
            >
              <h1 className='font-bold mb-4 text-3xl'>Iniciar sesion</h1>
              <input
                className='py-2 px-3 rounded my-1 flex-1'
                type='text'
                name=''
                id=''
                placeholder='Usuario'
              />
              <input
                className='py-2 px-3 rounded my-1'
                type='email'
                name=''
                id=''
                placeholder='Email'
              />
              <input
                className='py-2 px-3 rounded my-1'
                type='password'
                name=''
                id=''
                placeholder='Password'
              />
              <input
                className='py-2 px-3 rounded my-1 border bg-orange-400 text-slate-200'
                type='submit'
                name=''
                id=''
                value='Iniciar sesion'
              />
              <p className='text-slate-500'>Aun no tienes una cuenta?</p>
              <p className='underline cursor-pointer'>registrate aqui!</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sesion;
