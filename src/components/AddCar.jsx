import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import CarDialogContent from "./CarDialogContent";

export default function AddCar({ addCar }) {

  const addMutation = useMutation({
    mutationFn: addCar,
    onSuccess: () => queryClient.invalidateQueries(["cars"]),
  });

  const [car, setCar] = useState(
    {
      brand: "",
      model: "",
      color: "",
      fuel: "",
      modelYear: "",
      price: "",
    },
    []
  );
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    console.log(car);
    addCar(car);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Add car</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
