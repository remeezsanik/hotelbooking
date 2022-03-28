import React, { useState } from 'react'
import { newData } from '../Data/newData'
import { makeStyles } from '@material-ui/core';
import NewRoomCard from '../Components/NewRoomCard'
import { Button } from '../Components/Button';
import AddIcon from '@material-ui/icons/Add';
import AddRoomForm from '../Components/AddRoomForm';
import Popup from '../Components/Popup';

export const usestyles = makeStyles(() => ({
    newButton: {
        position: 'absolute',
        right: '20px',
    }
}));

const NewRoom = () => {
    const classes = usestyles();
    const [openPopup, setOpenPopup] = useState(false);
    return (
        <>
            <Button text="Add Room" variant="outlined"
                startIcon={<AddIcon />}
                className={classes.newButton}
                onClick={() => setOpenPopup(true)}
            />
            <Popup openPopup={openPopup}
                setOpenPopup={setOpenPopup}>
                <AddRoomForm />
            </Popup>
            <div >
                {newData?.map((item) => (
                    <div key={item.id}>
                        <NewRoomCard data={item} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default NewRoom
