import { Grid } from '@material-ui/core';
import React from 'react'
import { Link } from "react-router-dom";


const CarCard = ({ data }) => {
    const { id, name, image, price } = data;

    return (
        <>
            <Grid container>
                <Grid item xs={6} className="grid-card">
                    <article className="room">
                        <div className="img-container">
                            <img src={image} alt="car image" />
                            <div className="price-top">
                                <h6>$ {price}</h6>
                                <p>Inc.of all taxes</p>
                            </div>
                            <Link to={`/cars/${id}`} className="btn-primary room-link">
                                Feature
                            </Link>
                        </div>
                        <p className="room-info">{name}</p>
                    </article><br />
                </Grid>
            </Grid>
        </>
    )
}

export default CarCard