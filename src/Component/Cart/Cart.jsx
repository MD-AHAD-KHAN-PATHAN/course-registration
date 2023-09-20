
import { GoBook } from 'react-icons/go';

const Cart = ({cart, handleClick, ToastContainer}) => {


    return (


        <div className="p-3 border rounded-xl bg-white">
            
            <div className='flex justify-center items-center'>
                <img src={cart.img} alt=""/>
            </div>
            
            <h2 className="text-lg font-bold my-4">{cart.course_name}</h2>
            <h3 className="text-gray-500 font-semibold text-ellipsis">{cart.description}</h3>
            
            <div className="flex justify-between my-4 text-gray-500 font-bold">
                <p><span className="text-xl">$</span> <span>Price : </span>{cart.price}</p>
                <div className='flex items-center gap-2'>
                    <span className='text-xl'><GoBook/></span>
                    <p><span>Credit : </span>{cart.credit} <span>hr</span></p>
                </div>
            </div>
            <div className='text-center'>
                <button onClick={() => handleClick(cart)} className='py-2 px-4 font-bold text-white bg-blue-500 rounded-md'>Select</button>
                <ToastContainer></ToastContainer>
            </div>
           
            
        </div>


    );
};

export default Cart;