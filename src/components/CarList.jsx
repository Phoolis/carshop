import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "./CarList.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme
import { Button } from "@mui/material";
import AddCar from "./AddCar";


export default function CarList() {
    const [cars, setCars] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        { field: 'brand' },
        { field: 'model' },
        { field: 'color' },
        { field: 'fuel' },
        { field: 'modelYear', headerName: 'Year' },
        { field: 'price' },
        {
            field: '_links.self.href',
            sortable: false, filter: false, headerName: '',
            cellRenderer: params =>
                <Button
                    variant="text" color="error" onClick={() => deleteCar(params.data._links.self.href)}>
                    Delete
                </Button>
        }
    ]);

    const defaultColDef = {
        sortable: true,
        filter: true
    };

    const autoSizeStrategy = {
        type: 'fitCellContents',
        defaultMinWidth: 120,
    }

    const fetchCars = async () => {
        try {
            const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars');
            const data = await response.json();
            setCars(data._embedded.cars);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const addCar = async (car) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }
        try {
            const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars', options);
            const data = await response.json();
            fetchCars();

        } catch (error) {
            console.error(error);
        }

    };

    const deleteCar = async (url) => {
        const options = {
            method: 'DELETE'
        }
        try {
            if (window.confirm("Do you really want to delete car?")) {
                const response = await fetch(url, options);
                fetchCars();
            }
        } catch (error) {
            console.error(error);
        }


    };

    useEffect(() => fetchCars, []);

    return (
        <>
            <div className="CarList">
                <AddCar addCar={addCar} />
                <div className="ag-theme-material" style={{ width: "100%", height: 800 }}>
                    <AgGridReact
                        rowData={cars}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        autoSizeStrategy={autoSizeStrategy}
                    />
                </div>
            </div>
        </>
    );
}