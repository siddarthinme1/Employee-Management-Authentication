import { makeStyles } from "@mui/styles";
import {
  TablePagination,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: "8px",
    "& thead th": {
      fontWeight: "600",
      color: theme.palette.primary.main,
      backgroundColor: "#D9D8FF",
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
  },
}));

function useTable(records, headCells, filterFn) {
  const classes = useStyles();

  const pages = [3, 6, 9];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  const TblContainer = (props) => (
    <TableContainer sx={{ maxHeight: 550 }}>
      <Table className={classes.table}>{props.children}</Table>
    </TableContainer>
  );

  const TblHead = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TblPagination = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={records.length}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );

  const recordsAfterPaging = () => {
    return filterFn
      .fn(records)
      .slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  return { TblContainer, TblHead, TblPagination, recordsAfterPaging };
}

export default useTable;
