import React from 'react'
import { newData } from '../Data/newData'
import { Link } from 'react-router-dom'
import StyledHero from "../Components/StyledHero/StyledHero";
import img12 from "../assets/img/jpeg/room-12.jpeg";
import Banner from "../Components/Banner/Banner";
import { Button } from '../Components/Button'
import { useHistory } from 'react-router-dom';

function NewRoomDetails({ match }) {
    const details = newData.find(item => item.id == match.params.id);
    const history = useHistory();
    const deleteHandler = (e) => {
        e.preventDefault();
        newData.pop(details.id);
        alert('Successfully Deleted!');
        history.push('/new-room');
    }

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
                        <h6>{details.pets ? "pets allowed" : "no pets allowed"}</h6>
                        <h6>{details.breakfast && "free breakfast included"}</h6>
                        <Link to={`/newroom/edit/${details.id}`} className='btn-primary'>
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

export default NewRoomDetails