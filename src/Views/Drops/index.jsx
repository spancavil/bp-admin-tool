import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Row } from "./Components/Row";

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
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
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
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
