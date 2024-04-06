import react, { useEffect, useRef, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StartScanModal from "../model/StartScanModel/StartScanModal";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1000px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ScanModal(props) {
  // console.log(props.scanModal, "props.scanModal");
  const dialogRef = useRef(null);
  const [openModalDomain, setopenModalDomain] = useState(false);

  const [open, setOpen] = useState(false);

  //   const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    props.setScanModal(false);
  };

  useEffect(() => {
    if (props.scanModal) {
      setOpen(true);
    }
  }, [props.scanModal]);

  const handleCloseModal = () => {
    setopenModalDomain(false);

  };

  return (
    <div>
      
      <Dialog
        open={open}
        style={{ position: "initial" }}
        PaperProps={{
          ref: dialogRef,
          style: {
            position: "fixed",
            bottom: "12%",
            top:"2%",
            left: "50%",
            transform: "translateX(-50%)",
            height: "578px",
            // width: "1000px",
            border:"3px solid #FF9800",
            maxWidth: "43rem",
            zIndex: 9999,
            padding: "0px"
          },
        }}
        BackdropProps={{
          style: {
            backgroundColor: "transparent", // Make backdrop transparent
          },
        }}
        onClose={handleClose}
      >
        <DialogContent>
          
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 0, right: 5 }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography>
          <StartScanModal handleClose={handleClose} />
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
