import React, { useState } from 'react'
import { carData } from '../Data/carData';
import CarCard from '../Components/CarCard';
import { Button } from '../Components/Button';
import AddIcon from '@material-ui/icons/Add';
import AddCarForm from '../Components/AddCarForm';
import Popup from '../Components/Popup';
import { usestyles } from './NewRoom'

const Cars = () => {
    const classes = usestyles();
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <>
            <Button text="Add Car" variant="outlined"
                startIcon={<AddIcon />}
                className={classes.newButton}
                onClick={() => setOpenPopup(true)}
            />
            <Popup openPopup={openPopup}
                setOpenPopup={setOpenPopup}>
                <AddCarForm />
            </Popup>
            <div >
                {carData?.map((item) => (
                    <div key={item.id}>
                        <CarCard data={item} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cars