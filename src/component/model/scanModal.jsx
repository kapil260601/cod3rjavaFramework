import React, { useState, useRef, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SplitButton from "../Button/splitButton";
import MultipleSelectCheckmarks from "../Button/demo";
import { Box, Button } from "@mui/material";

const BottomDialog = (props) => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        // If clicked outside the dialog, do nothing
        return;
      }
      // You can add additional conditions here to handle clicks on specific elements
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dialogRef]);

  const handleClose = () => {
    setOpen(false);
    props.setSelectedRow([]);
  };

  useEffect(() => {
    console.log(props.selectedRow, "props.selectedRow");
    if (props?.selectedRow?.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [props.selectedRow]);

  return (
    <div>
      <Dialog
        open={open}
        fullWidth
        // maxWidth="xs"
        hideBackdrop
        disableEnforceFocus // Let the user focus on elements outside the dialog
        style={{ position: "initial" }} // This was the key point, reset the position of the dialog, so the user can interact with other elements
        disableBackdropClic
        PaperProps={{
          ref: dialogRef,
          style: {
            position: "fixed",
            bottom: 0,
            left: "47%",
            transform: "translateX(-50%)",
            zIndex: 9999, // Ensure dialog is on top of other elements
            border: "2px solid #F6995C",
            borderRadius:"10px",
            width:"533px"
          },
        }}
      >
        <DialogContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              
            }}
          >
            <h2>Bottom Dialog</h2>
            <IconButton edge="end" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <p>This is the content of the bottom dialog.</p>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <SplitButton />
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BottomDialog;
