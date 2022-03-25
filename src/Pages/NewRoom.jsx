import React from 'react'
import { FormControl, FormLabel, FormControlLabel, Grid, Radio, RadioGroup, TextField, MenuItem, InputLabel } from '@material-ui/core'
import { useForm, Form } from '../Components/useForm'
import { Select } from '../Components/Select'
import { Button } from '../Components/Button'
import { Select as MuiSelect } from '@material-ui/core';
import { newData } from '../Data/newData'
import img12 from "../assets/img/jpeg/room-12.jpeg";
import NewRoomCard from '../Components/NewRoomCard'

const initialValues = {
    id: '',
    name: "",
    type: "",
    price: 0,
    size: 0,
    image: img12,
    capacity: 0,
    pets: "No",
    breakfast: "Yes",
};
const roomType = [
    { id: 1, title: "Single" },
    { id: 2, title: "Double" },
    { id: 3, title: "Family" },
    { id: 4, title: "Presidential" }
];
const roomCategory = [
    { id: 1, title: "Single Economy" },
    { id: 2, title: "Single Basic" },
    { id: 3, title: "Single Standard" },
    { id: 4, title: "Single Ddeluxe" },
    { id: 5, title: "Double Economy" },
    { id: 6, title: "Double Basic" },
    { id: 7, title: "Double Standard" },
    { id: 8, title: "Double Deluxe" },
    { id: 9, title: "Family Economy" },
    { id: 10, title: "Family Basic" },
    { id: 11, title: "Family Standard" },
    { id: 12, title: "Family Deluxe" },
    { id: 13, title: "Presidential Room" }
];

const roomCapacity = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 10 }
];

const NewRoom = () => {
    const { values, handleChange } = useForm(initialValues);

    const submitHandler = (e) => {
        e.preventDefault();
        newData.push(values);
    }
    // console.log("data>>", newData);

    return (
        <>
            <Form autoComplete="off">
                <Grid container>
                    <Grid item xs={6}>
                        <TextField variant="outlined"
                            label="Room id"
                            name='id'
                            type="number"
                            value={values.id}
                            onChange={handleChange}
                        />
                        <Select
                            name="name"
                            label="Room Category"
                            value={values.name}
                            onChange={handleChange}
                            options={roomCategory}
                        />
                        <TextField variant="outlined"
                            label="Price"
                            name='price'
                            type="number"
                            value={values.price}
                            onChange={handleChange}
                        />
                        <FormControl variant='outlined'>
                            <InputLabel>Guests</InputLabel>
                            <MuiSelect label="Capacity"
                                name="capacity"
                                value={values.capacity}
                                onChange={handleChange}>
                                <MenuItem value="">None</MenuItem>
                                {roomCapacity.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>{item.id}</MenuItem>
                                ))}
                            </MuiSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <Select name="type"
                            label="Room Type"
                            value={values.type}
                            onChange={handleChange}
                            options={roomType}
                        />
                        <TextField variant="outlined"
                            label="Size"
                            name='size'
                            type="number"
                            value={values.size}
                            onChange={handleChange}
                        />
                        <FormControl>
                            <FormLabel>Pets</FormLabel>
                            <RadioGroup row
                                name="pets"
                                value={values.pets}
                                onChange={handleChange}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup><br />
                            <FormLabel>Breakfast</FormLabel>
                            <RadioGroup row
                                name="breakfast"
                                value={values.breakfast}
                                onChange={handleChange}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                        <div>
                            <Button text="Submit" type="submit" onClick={submitHandler} />
                        </div><br />
                    </Grid>
                </Grid>
                <div className='div-line' />
            </Form>
            <div>
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
