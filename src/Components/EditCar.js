import React, { useEffect } from 'react'
import {
    FormControl, FormLabel, FormControlLabel, Grid, Radio, RadioGroup,
    TextField, MenuItem, InputLabel
} from '@material-ui/core'
import { useForm, Form } from '../Components/useForm'
import { Select } from '../Components/Select'
import { Button } from '../Components/Button'
import { Select as MuiSelect } from '@material-ui/core';
import { carData } from '../Data/carData'
import benz from '../assets/img/cars/benz.jpeg'
import Title from '../Components/Title/Title';
import { useHistory } from 'react-router-dom'

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
    { id: 2 },
    { id: 4 },
    { id: 6 }
];


function EditForm({ match }) {
    const { values, handleChange, setValues } = useForm(initialValues);
    const details = carData.find(item => item.id == match.params.id);
    const history = useHistory();

    useEffect(() => {
        setValues({
            id: details.id,
            name: details.name,
            type: details.type,
            price: details.price,
            image: details.image,
            capacity: details.capacity,
            parkAssist: details.parkAssist,
        })
    }, [details]);

    const editData = (event) => {
        event.preventDefault()
        const index = carData.findIndex(s => s.id == match.params.id)
        alert("Succesfully edited");
        carData[index].name = values.name
        carData[index].type = values.type
        carData[index].price = values.price
        carData[index].capacity = values.capacity
        carData[index].parkAssist = values.parkAssist
        history.push(`/cars/${details.id}`)
        // console.log(carData[index])
    }
    // console.log(index)
    const returnBack = () => {
        history.push(`/cars/${details.id}`)
    };

    return (
        <>
            <Title title="Edit Details" />
            <Form autoComplete="off">
                <Grid container>
                    <Grid item xs={6}>
                        <TextField variant="outlined"
                            label="Room id"
                            name='id'
                            value={values.id}
                        />
                        <Select name="name"
                            label="Car Brand"
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
                            label="Room Type"
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
                            <Button text="Submit" type="submit" onClick={editData} />
                            <Button text="Cancel" color="secondary" onClick={returnBack} />
                        </div><br />
                    </Grid>
                </Grid>
            </Form>
        </>
    )
}

export default EditForm