import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import CarDialogContent from "./CarDialogContent";
import { updateCar } from "../utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function UpdateCar({ updateCar, currentCar }) {
  const [car, setCar] = useState(currentCar);
  const [open, setOpen] = useState(false);

  const updateMutation = useMutation({
    mutationFn: updateCar,
    onSuccess: () => queryClient.invalidateQueries(["cars"]),
  });

  const url = currentCar._links.self.href;

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
    updateMutation.mutate({ url, car });
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Update car</Button>
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
