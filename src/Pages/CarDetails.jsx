import React from 'react'
import { carData } from '../Data/carData'
import { Link } from 'react-router-dom'
import StyledHero from "../Components/StyledHero/StyledHero";
import benz from '../assets/img/cars/benz.jpeg'
import Banner from "../Components/Banner/Banner";
import { Button } from '../Components/Button'
import { useHistory } from 'react-router-dom';

function CarDetails({ match }) {
    const details = carData.find(item => item.id == match.params.id);
    const history = useHistory();
    const deleteHandler = (e) => {
        e.preventDefault();


        alert('Successfully Deleted!');
        history.push('/cars')
    }

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
                            Passengers:{" "}
                            {details.capacity > 1 ? `${details.capacity} passengers` : `${details.capacity} passengers`}
                        </h6>
                        <h6> Park Assistance :{" "} {details.parkAssist ? "Yes" : "No"}</h6>
                        <Link to={`/cars/edit/${details.id}`} className='btn-primary'>
                            Edit
                        </Link>
                        <Button text="Delete" color="secondary" onClick={deleteHandler}
                        />
                    </article>
                </div>
            </section>
        </>
    )
}

export default CarDetails