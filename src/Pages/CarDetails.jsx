import React from 'react'
import { carData } from '../Data/carData'
import { Link } from 'react-router-dom'
import StyledHero from "../Components/StyledHero/StyledHero";
import benz from '../assets/img/cars/benz.jpeg'
import AddIcon from '@material-ui/icons/Add';
import Banner from "../Components/Banner/Banner";
import { Button } from '../Components/Button'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';

function CarDetails({ match }) {
    const details = carData.find(item => item.id == match.params.id);
    const removeItem = details.id;
    const history = useHistory();
    const deleteHandler = (e) => {
        e.preventDefault();
        carData.splice(carData.findIndex((item) => item.id === removeItem), 1);
        alert('Item Deleted!');
        history.push('/cars');
    }
    const [{ basket }, dispatch] = useStateValue();
    const AddToCart = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            data: {
                id: details.id,
                name: details.name,
                image: details.image,
                type: details.type,
                price: details.price,
                capacity: details.capacity,
                parkAssist: details.parkAssist
            }
        })
        alert('item added to cart!');
    }
    // console.log("basket>>", basket);

    return (
        <>
            <StyledHero img={details.image || benz}>
                <Banner title={`${details.name}`}>
                    <Link to="/cars/" className="btn-primary">
                        back to cars
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-info">
                    <article className="info">
                        <h3>information:</h3>
                        <h6>price : ${details.price}</h6>
                        <h6>brand : {details.name}</h6>
                        <h6>
                            Car type :{" "}
                            {details.capacity > 1 ? `${details.type}` : `${details.type}`}
                        </h6>
                        <h6>
                            Passengers :{" "}
                            {details.capacity > 1 ? `${details.capacity} passengers` : `${details.capacity} passenger`}
                        </h6>
                        <h6> Park Assistance :{" "} {details.parkAssist === 'Yes' ? "Yes" : "No"}</h6>
                        <Link to={`/cars/edit/${details.id}`} style={{ textDecoration: 'none' }}>
                            <Button text="Edit" color="default" />
                        </Link>
                        <Button text="Delete" color="secondary" onClick={deleteHandler}
                        />
                        <Button text="Add to Cart" variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={AddToCart}
                        />
                    </article>
                </div>
            </section>
        </>
    )
}

export default CarDetails