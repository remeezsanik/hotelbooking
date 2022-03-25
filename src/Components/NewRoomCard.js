import { Grid } from '@material-ui/core';
import React from 'react'
import { Link } from "react-router-dom";

const NewRoomCard = ({ data }) => {

    const { id, name, type, image, size, price, capacity, breakfast, pets } = data;
    return (
        <>
            <Grid container>
                <Grid item xs={6} className="grid-card">
                    <article className="room">
                        <div className="img-container">
                            <img src={image} alt="single room" />

                            <div className="price-top">
                                <h6>$ {price}</h6>
                                <p>per night</p>
                            </div>

                            <Link to={`/newrooms/${id}`} className="btn-primary room-link">
                                Feature
                            </Link>
                        </div>
                        <p className="room-info">{name}</p>
                    </article><br />
                </Grid>
            </Grid>
        </>
    );
}

export default NewRoomCard

