import React, { useState } from 'react'
import benz from '../assets/img/cars/benz.jpeg'
import { Select as MuiSelect } from '@material-ui/core';
import {
    FormControl, FormLabel, FormControlLabel, Grid, Radio,
    RadioGroup, TextField, MenuItem, InputLabel
} from '@material-ui/core'
import { useForm, Form } from './useForm';
import { Select } from './Select';
import { Button } from './Button';
import { carData } from '../Data/carData';

const initialValues = {
    id: '',
    name: "",
    type: "",
    image: benz,
    price: 0,
    capacity: 0,
    parkAssist: "No",
};

const carType = [
    { id: 1, title: "2 Seater" },
    { id: 2, title: "4 Seater" },
    { id: 3, title: "6 Seater" }
];
const carBrand = [
    { id: 1, title: "Porsche" },
    { id: 2, title: "Audi" },
    { id: 3, title: "Mercedes Benz" },
    { id: 4, title: "BMW" },
    { id: 5, title: "Volks Wagen" },
];

const carCapacity = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 }
];

export default function AddCarForm() {
    const { values, handleChange } = useForm(initialValues);
    const submitHandler = (e) => {
        e.preventDefault()
        carData.push(values);
        alert('Car Added!');
    };
    return (
        <>
            <Form autoComplete="off">
                <Grid container>
                    <Grid item xs={6}>
                        <TextField variant="outlined"
                            label="Car id"
                            name='id'
                            type="number"
                            value={values.id}
                            onChange={handleChange}
                        />
                        <Select
                            name="name"
                            label="Brand"
                            value={values.name}
                            onChange={handleChange}
                            options={carBrand}
                        />
                        <TextField variant="outlined"
                            label="Price"
                            name='price'
                            type="number"
                            value={values.price}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Select name="type"
                            label="Car Seats"
                            value={values.type}
                            onChange={handleChange}
                            options={carType}
                        />
                        <FormControl variant='outlined'>
                            <InputLabel>Passenger</InputLabel>
                            <MuiSelect label="Capacity"
                                name="capacity"
                                value={values.capacity}
                                onChange={handleChange}>
                                <MenuItem value="">None</MenuItem>
                                {carCapacity.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>{item.id}</MenuItem>
                                ))}
                            </MuiSelect>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Park Assist</FormLabel>
                            <RadioGroup row
                                name="parkAssist"
                                value={values.parkAssist}
                                onChange={handleChange}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup><br />
                        </FormControl>
                        <div>
                            <Button text="Submit" type="submit" onClick={submitHandler} />
                        </div><br />
                    </Grid>
                </Grid>
                <div className='div-line' />
            </Form>
        </>
    )
}
