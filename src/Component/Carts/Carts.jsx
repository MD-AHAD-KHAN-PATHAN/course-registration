import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import MyCourses from "../MyCourses/MyCourses";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Carts = () => {

    const [carts, setCarts] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [totalHours, setTotalHours] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    const handleClick = card => {

        let time = card.credit;
        let price = card.price;
        if(totalHours <= 20 && totalHours+time <= 20) {

            if (selectedCards.find(item => item.id === card.id)) {
                toast('This course is already selected');
            }
            else {
                selectedCards.forEach(item => time+=item.credit);
                setTotalHours(time);
                setSelectedCards([...selectedCards, card]);
                selectedCards.forEach(money => price+=money.price)
                setTotalPrice(price);
            }
        }
        else {
            const value = 20;
            toast(`Your ${value-totalHours} Credit Hour Remaining !!!`);
        }
    }

    


    return (

        <div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 lg:m-14 md:m-6 m-4">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:col-span-3 md:col-span-2">
                    {
                        carts.map(cart => <Cart cart={cart} key={cart.id} handleClick={handleClick} ToastContainer={ToastContainer}></Cart>)
                    }
                </div>

                <div>
                    <MyCourses selectedCards={selectedCards} totalHours={totalHours} totalPrice={totalPrice}></MyCourses>
                </div>

            </div>



        </div>

    );
};

export default Carts;