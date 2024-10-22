import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material"
import { useState } from "react"

export default function AddCar({ addCar }) {
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        modelYear: '',
        price: ''
    }, []);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = event => {
        setCar({ ...car, [event.target.name]: event.target.value })
    }

    const handleSave = () => {
        console.log(car);
        addCar(car);
        setOpen(false);
    }

    return (
        <>
            <Button onClick={handleClickOpen}>Add car</Button>
            <Dialog
                open={open}
                onClose={handleClose}>

                <DialogTitle>New car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        name="brand"
                        label="Brand"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        margin="dense"
                        name="model"
                        label="Model"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        margin="dense"
                        name="color"
                        label="Color"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        margin="dense"
                        name="fuel"
                        label="Fuel"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        margin="dense"
                        name="modelYear"
                        label="Year"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        margin="dense"
                        name="price"
                        label="Price"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}