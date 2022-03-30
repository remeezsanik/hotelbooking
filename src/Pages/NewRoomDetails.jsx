import React from 'react'
import { newData } from '../Data/newData'
import { Link } from 'react-router-dom'
import StyledHero from "../Components/StyledHero/StyledHero";
import img12 from "../assets/img/jpeg/room-12.jpeg";
import Banner from "../Components/Banner/Banner";
import AddIcon from '@material-ui/icons/Add';
import { Button } from '../Components/Button'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';

function NewRoomDetails({ match }) {
    const details = newData.find(item => item.id == match.params.id);
    const removeItem = details.id;
    const history = useHistory();
    const deleteHandler = (e) => {
        e.preventDefault();
        newData.splice(newData.findIndex((item) => item.id === removeItem), 1);
        alert('Successfully Deleted!');
        history.push('/new-room');
    }
    const [{ basket }, dispatch] = useStateValue();
    const AddToCart = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            data: {
                id: details.id,
                name: details.name,
                image: details.image,
                price: details.price,
                size: details.size,
                capacity: details.capacity,
                pets: details.pets
            }
        })
        alert('item added to cart!');
    }
    // console.log("basket>>", basket);
    return (
        <>
            <StyledHero img={details.image || img12}>
                <Banner title={`${details.name} room`}>
                    <Link to="/new-room/" className="btn-primary">
                        back to new rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-info">
                    <article className="info">
                        <h3>information:</h3>
                        <h6>price : ${details.price}</h6>
                        <h6>size : {details.size} SQFT</h6>
                        <h6>
                            max capacity :{" "}
                            {details.capacity > 1 ? `${details.capacity} people` : `${details.capacity} person`}
                        </h6>
                        <h6>{details.pets === 'Yes' ? "pets allowed" : "no pets allowed"}</h6>
                        <h6>{details.breakfast === 'Yes' && "free breakfast included"}</h6>
                        <Link to={`/newroom/edit/${details.id}`} className='btn-primary'>
                            Edit
                        </Link>
                        <Button text="Delete" color="secondary" onClick={deleteHandler} />
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

export default NewRoomDetails