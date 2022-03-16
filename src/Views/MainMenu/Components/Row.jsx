import { useState } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Collapse from "@mui/material/Collapse";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


export const Row = (props) => {
  const { row } = props;

  console.log(row)

  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.desc}</TableCell>
        <TableCell align="left">{row.startTime}</TableCell>
        <TableCell align="left">{row.endTime}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Nfts
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Left Acount</TableCell>
                    <TableCell align="right">Limit Acount</TableCell>
                    <TableCell align="right">Price (NCoin)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.nfts.map((nft) => (
                    <TableRow key={nft.name}>
                      <TableCell component="th" scope="row">
                        {nft.name}
                      </TableCell>
                      <TableCell align="right">{nft.leftAcount}</TableCell>
                      <TableCell align="right">{nft.limitAcount}</TableCell>
                      <TableCell align="right">
                        {nft.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};