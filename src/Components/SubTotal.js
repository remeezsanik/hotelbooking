import React from 'react'
import { useStateValue } from '../Context/StateProvider';
import CurrencyFormat from 'react-currency-format';
import { Button } from '../Components/Button';
import { getBasketTotal } from '../reducer';

const SubTotal = () => {
    const [{ basket }, dispatch] = useStateValue();

    const orderPlaced = () => {
        if (basket.length > 0) {
            alert("Order Placed, Thank you!");
        } else {
            alert("Sorry, cart is empty");
        }
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items): <strong>{`${value}`}</strong></p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <Button text="Place Order" color="primary" onClick={orderPlaced} />
        </div>
    )
}

export default SubTotal