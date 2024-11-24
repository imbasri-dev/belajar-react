import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting ketika submit tidak terjadi preload / muat ulang browser

    // Lakukan sesuatu dengan email dan password validasi jika tidak ada isi valuenya error
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    // success login
    alert("Form submitted , login successfully");
    console.log(email, password);
  };

  return (
    <Fragment>
      <div className='h-screen flex justify-center items-center w-[600px] mx-auto'>
        <div className='flex justify-center items-center  flex-col border rounded-lg border-black w-[400px] shadow-lg '>
          <img src='../public/image/Vector.png' alt='logo' className='w-[50px] h-[50px] mt-10' />
          <form action='' className='flex flex-col'>
            <h2 className='text-center my-5 text-4xl font-bold'>Log in</h2>
            <input
              type='email'
              value={email}
              className='w-[300px] h-10 border border-black my-5 rounded-md pl-4'
              placeholder='Enter email here'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              value={password}
              className='w-[300px] h-10 border border-black my-5 rounded-md pl-4'
              placeholder='Enter password here'
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='flex justify-start items-center mb-4'>
              <input type='checkbox' id='checkbox' className='w-5 h-5 rounded-lg ring-red-400' />{" "}
              <label htmlFor='checkbox' className='ml-2'>
                Remember Me
              </label>
            </div>
            <button className='w-[300px] mb-10 h-10 bg-red-500 text-white rounded-lg' onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
