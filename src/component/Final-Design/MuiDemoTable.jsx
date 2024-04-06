import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import { createTheme, ThemeProvider, makeStyles } from '@mui/material/styles';
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";

import BottomDialog from "../model/scanModal";
import Asset from "../Assets/Asset";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

export default function MuiDemoTable() {


  const [selectedRow, setSelectedRow] = useState([]);


  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
        backgroundColor: "red",
      }
    },
  ];


  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis"],
    [
      "Aiden Lloyd",
      "Business Consultant for an International Company and CEO of Tony's Burger Palace",
      "Dallas",
    ],
    ["Jaden Collins", "Attorney", "Santa Ana"],
    ["Franky Rees", "Business Analyst", "St. Petersburg"],
    ["Aaren Rose", null, "Toledo"],
    ["Johnny Jones", "Business Analyst", "St. Petersburg"],
    ["Jimmy Johns", "Business Analyst", "Baltimore"],
    ["Jack Jackson", "Business Analyst", "El Paso"],
    ["Joe Jones", "Computer Programmer", "El Paso"],
    ["Jacky Jackson", "Business Consultant", "Baltimore"],
    ["Jo Jo", "Software Developer", "Washington DC"],
    ["Donna Marie", "Business Manager", "Annapolis"],
    ["Jaden Collins", "Attorney", "Santa Ana"],
    ["Franky Rees", "Business Analyst", "St. Petersburg"],
    ["Aaren Rose", null, "Toledo"],
    ["Johnny Jones", "Business Analyst", "St. Petersburg"],
    ["Jimmy Johns", "Business Analyst", "Baltimore"],
    ["Jack Jackson", "Business Analyst", "El Paso"],
    ["Joe Jones", "Computer Programmer", "El Paso"],
    ["Jacky Jackson", "Business Consultant", "Baltimore"],
    ["Jo Jo", "Software Developer", "Washington DC"],
    ["Donna Marie", "Business Manager", "Annapolis"],
  ];
  

  const options = {
    selectableRows: "multiple",
    onRowsSelect: (currentRowsSelected, allRowsSelected) => {
      const selectedData = allRowsSelected.map((row) => data[row.index]);
      setSelectedRow(selectedData);
    },
  };

  console.log(selectedRow, "selectedRow");
  const theme = () => createTheme({
    spacing: 2,
    palette: {
      background: {
        paper: '#f0f0f0', // Set your desired background color here
      },

    },
  });

  return (
    <Box>
      <BottomDialog
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
      />
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme()}>
          <Asset />
          <MUIDataTable
            title={"ACME Employee list"}
            data={data}
            columns={columns}
            className="custom-table"
            options={options}
          />
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
}
