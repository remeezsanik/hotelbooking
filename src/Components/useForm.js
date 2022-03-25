import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'


export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return {
        values,
        setValues,
        handleChange
    };
};
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '50%',
            margin: theme.spacing(3),
        }
    }
}))

export function Form(props) {
    const classes = useStyles();

    return (
        <form className={classes.root}>
            {props.children}
        </form>
    )
}
