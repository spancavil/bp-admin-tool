import * as React from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { Row } from "./Row";

function createData(name, desc, startTime, endTime) {
  return {
    name,
    desc,
    startTime,
    endTime,
    nfts: [
      {
        name: "Blue Jacket",
        leftAcount: 98,
        limitAcount: 100,
        price: 30000
      },
      {
        name: "Hellsing",
        leftAcount: 45,
        limitAcount: 100,
        price: 23000
      },
    ],
  };
}

const rows = [
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
  createData(
    "1st Drop",
    "The power of the Slayer v",
    "14 March 2022",
    "30 March 2022"
  ),
];

export default function DropsTable() {

  const navigate = useNavigate();

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', paddingTop: '10vh', paddingLeft: '4vw'}}>
      <TableContainer sx={{ maxHeight: '90vh'}}>
        <Table stickyHeader aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="left">Desc</TableCell>
              <TableCell align="left">Start time</TableCell>
              <TableCell align="left">End time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <Row key={idx} row={row} />
            ))}
          </TableBody>
        <TableFooter>
          <TableRow >
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align = "left">
              <Button
              sx = {{
                position: 'absolute',
                bottom: '5vh',
                right: '3vw',
                zIndex: 10,
              }}
              onClick = {()=> navigate('/create-drop')} color="primary" variant="contained"
              >
                Create Drop
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}
