const fetchCars = async () => {
  const response = await fetch(
    "https://car-rest-service-carshop.2.rahtiapp.fi/cars"
  );
  const data = await response.json();
  return data._embedded.cars;
};

const addCar = async (car) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  };
  const response = await fetch(
    "https://car-rest-service-carshop.2.rahtiapp.fi/cars",
    options
  );
  const data = await response.json();
  return data;
};

const deleteCar = async (url) => {
  const options = {
    method: "DELETE",
  };

  if (window.confirm("Do you really want to delete car?")) {
    const response = await fetch(url, options);
  }
};

const updateCar = async ({ url, car }) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  };
  const data = await fetch(url, options);
};

export { fetchCars, addCar, updateCar, deleteCar };
