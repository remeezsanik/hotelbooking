import React from 'react'
import { Button } from './Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useStateValue } from '../Context/StateProvider'

const CheckoutProducts = ({ id, type, name, image, price, size, capacity, pets, parkAssist }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
        alert('Item removed');
    }
    console.log("checkout>>>", basket);
    console.log("Type of price>>>", typeof (price));

    return (
        <div className='checkout__card'>
            <Card sx={{ maxWidth: 350 }} style={{ marginBottom: '10px', backgroundColor: '#E8E8E8' }}>
                <CardMedia
                    component="img"
                    height={150}
                    image={image}
                    alt="product image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        Price : <small>$</small><strong>{price}</strong>
                    </Typography>
                    {size ? (
                        <Typography variant="body1" color="text.primary">
                            Size : {size} Sqft
                        </Typography>
                    ) : null}
                    {type ? (
                        <Typography variant="body1" color="text.primary">
                            Type : {type}
                        </Typography>
                    ) : null}
                    {capacity ? (
                        <Typography variant="body1" color="text.primary">
                            People : {capacity}
                        </Typography>
                    ) : null}
                    {pets ? (
                        <Typography variant="body1" color="text.primary">
                            Pets : {pets}
                        </Typography>
                    ) : null}
                    {parkAssist ? (
                        <Typography variant="body1" color="text.primary">
                            Park Assist : {parkAssist}
                        </Typography>
                    ) : null}
                </CardContent>
                <CardActions>
                    <Button text="Remove Item" color="defaut" size="small" onClick={removeItem} />
                </CardActions>
            </Card>
        </div>
    )
}

export default CheckoutProducts