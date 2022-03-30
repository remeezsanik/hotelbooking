import React from 'react'
import { Button } from '../Components/Button';
import CheckoutProducts from '../Components/CheckoutProducts';
import SubTotal from '../Components/SubTotal';
import { useStateValue } from '../Context/StateProvider'

const Checkout = () => {
    const [{ basket }] = useStateValue();

    const orderPlaced = () => {
        if (basket.length > 0) {
            alert("Order Placed, Thank you!");
        } else {
            alert("Sorry, cart is empty");
        }
    }
    return (
        <>
            <div>
                {
                    basket?.length === 0 ? (
                        <div style={{ padding: '10px' }}>
                            <h2>Cart is empty!</h2>
                            <p style={{ color: 'black', paddingBottom: '10px' }}>
                                You have no items in the basket.</p>
                        </div>
                    ) : (
                        <div style={{ padding: '10px' }}>
                            {
                                basket.length > 1 ?
                                    <h2>Cart Items {basket?.length}</h2> :
                                    <h2>Cart Item {basket?.length}</h2>
                            }

                            {basket?.map((item) => (
                                <CheckoutProducts
                                    key={item.id}
                                    item={item.id}
                                    name={item.name}
                                    image={item.image}
                                    price={item.price}
                                    size={item.size}
                                    capacity={item.capacity}
                                    pets={item.pets}
                                />
                            ))}
                        </div>
                    )}
            </div>
            <Button text="Place Order" color="primary" onClick={orderPlaced} />
        </>
    )
}

export default Checkout