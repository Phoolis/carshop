import { deleteCar } from "../utils/api";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Button } from "@mui/material";

export default function DeleteCar({ url }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteCar,
    onSuccess: () => queryClient.invalidateQueries(["cars"]),
  });

  return (
    <Button
      variant="text"
      color="error"
      onClick={() => deleteMutation.mutate(url)}
    >
      Delete
    </Button>
  );
}
