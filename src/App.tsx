import React from 'react';
import './tailwind.css';


const App: React.FC = () => {
  return (
    <div className='m-10'>
      <h1 className="text-blue-500">Hello World!</h1>
      <input className="bg-white p-10 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal m-10" type="email" placeholder="jane@example.com"/>
    </div>
  )
}

export default App
