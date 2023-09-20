import './App.css'
import Carts from './Component/Carts/Carts'

function App() {

  return (
    <>
      
      <div className='flex justify-between p-6 items-center'>
        <h1 className='text-blue-500 text-3xl font-bold'><span className='text-5xl'>A</span> Academy</h1>
        <button className='text-white font-bold bg-blue-600 py-2 px-4 rounded-md'>Registration</button>
      </div>
      
      <h1 className='text-4xl font-bold text-center lg:mt-14 md:mt-8 mt-6 text-blue-500'>Course Registration</h1>

      <Carts></Carts>
      
    </>
  )
}

export default App
