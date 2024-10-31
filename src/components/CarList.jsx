import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "./CarList.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme
import AddCar from "./AddCar";
import UpdateCar from "./UpdateCar";
import DeleteCar from "./DeleteCar";
import { fetchCars } from "../utils/api";
import { useQuery } from "@tanstack/react-query";

export default function CarList() {
  //const [cars, setCars] = useState([]);

  const { data: cars } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });

  const [columnDefs, setColumnDefs] = useState([
    { field: "brand" },
    { field: "model" },
    { field: "color" },
    { field: "fuel" },
    { field: "modelYear", headerName: "Year" },
    { field: "price" },
    {
      field: "_links.self.href",
      sortable: false,
      filter: false,
      headerName: "",
      cellRenderer: (params) => (
        <DeleteCar url={params.data._links.self.href} />
      ),
    },
    {
      field: "_links.self.href",
      sortable: false,
      filter: false,
      headerName: "",
      cellRenderer: (params) => <UpdateCar currentCar={params.data} />,
    },
  ]);

  const defaultColDef = {
    sortable: true,
    filter: true,
  };

  const autoSizeStrategy = {
    type: "fitCellContents",
    defaultMinWidth: 120,
  };

  //useEffect(() => fetchCars, []);

  return (
    <>
      <div className="CarList">
        <AddCar />
        <div
          className="ag-theme-material"
          style={{ width: "100%", height: 600 }}
        >
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
