import React, { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Checkbox, Grid, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ScanModal from "./startscan";
import "../Final-Design/style.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SplitButton = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const sectionsData = {
    Reconnaissance: ["Domain Finder", "Subdomain Finder", "Virtual Hosts Finder","Port Scanner", "Website Recon", "WAF Detector", "URL Fuzzer", "People Hunter"],
    WebAppScanning: ["Website Scanner", "API Scanner", "WordPress Scanner", "Drupal Scanner", "Joomla Scanner","SharePoint Scanner"],
    NetworkScanning: ["Network Scanner", "Password Auditor", "SSL/TLS Scanner","DNS Server Scanner","Cloud Scanner"],
    OffensiveTools: ["Sniper: Auto-Exploiter", "SQLi Exploiter", "Subdomain Takeover"],
    Utils: ["Tool Alpha", "Tool Beta", "Tool Gamma"],
  };

  // const dataArray = ["Domain Finder", "Subdomain Finder", "Website Scanner", "API Scanner", "Port Scanner", "Website Recon", "WAF Detector", "URL Fuzzer","People Hunter"];

  const [open, setOpen] = useState(false);
  const [scanModal, setScanModal] = useState(false);
  const dialogRef = useRef(null);


  const handlescanmodal = () => {
    setScanModal(true);
  };


  const handleClose = () => {
    setOpen(false);
    // props.setScanModal(false);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ScanModal scanModal={scanModal} setScanModal={setScanModal} />
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button
          className="button-design"
          variant="contained"
          startIcon={<ConstructionIcon />}
          size="large"
          sx={{ fontSize: "medium", marginLeft: "60px", width: "160px", height: "37px", padding: "10px" }}
          onClick={toggleOpen}
        >
          Tools {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </Button>

        <Button
          className="  button-design"
          variant="outlined"
          startIcon={<QrCodeScannerIcon />}
          // endIcon={<SendIcon />}
          size="large"
          sx={{ fontSize: "medium", marginLeft: "28px", width: "160px", height: "37px", }}
          onClick={() => {
            handlescanmodal();
            handleClose();
            toggleOpen();
          }}
        >
          Start Scan {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </Button>
      </Box>
      <Dialog
        open={open}
        fullWidth
        // maxWidth="xs"
        style={{ position: "initial" }}
        PaperProps={{
          ref: dialogRef,
          style: {
            position: "fixed",
            top: "12%",
            bottom: "12%",
            left: "47%",
            transform: "translateX(-50%)",
            height: " calc(100vh - 240px)",
            width: "534px",
            border: "2px solid #F6995C",
            borderRadius: "10px",
            padding: "5px",
            // maxWidth: "400px",
            zIndex: 9999, // Ensure dialog is on top of other elements
          },
        }}
       
        onClose={handleClose}
      >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 0, right: 30 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{padding: "7px 5px"}}>
          <Grid container spacing={1}>
          {Object.entries(sectionsData).map(([section, tools]) => (
              <Grid item xs={6} md={6} key={section}>
                <Box
                  sx={{
                    fontSize: 14,
                    // marginTop: "10px",
                    background: "#F2F5F8",
                    padding: "10px",
                    borderLeft: "2px solid orange",
                  }}
                >
                  <Typography sx={{color: "#404040", fontWeight:"600", fontSize: ".875rem",lineHeight: "1.25rem "}} variant=" " fontSize="small">
                  {section}
                  </Typography>
                  {/* <p>hello</p> */}
                </Box>
                {tools.map((tool) => (
                  <Box key={tool} sx={{ padding: "0px 10px" }}>
                    <Checkbox />
                    <Typography variant=" " fontSize="small">
                      {tool}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SplitButton;
