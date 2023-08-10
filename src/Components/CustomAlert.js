import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";

const CustomAlert = ({ open, title, message, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <Button onClick={onClose} color="secondary">
        Cancel
      </Button>
      <Button onClick={onConfirm} color="primary">
        OK
      </Button>
    </Dialog>
  );
};

export default CustomAlert;
