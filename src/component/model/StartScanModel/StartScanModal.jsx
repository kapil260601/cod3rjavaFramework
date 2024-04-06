import React, { useState } from "react";
import "./startScan.css";
import {
  Box,
  Divider,
  Grid,
  Button,
  Modal,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import UseSwitchesBasic from "../../UseSwitchesBasic";
import RowRadioButtonsGroup from "../../../RowRadioButtonsGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CustomeTabs from "./tabs/customTabs";
import Payload from "./tabs/Payload";
import Filter from "./Method/Filter";
import CustomScan from "./Method/CustomScan";
import FollowReq from "./Method/FollowReq";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateScan from "./Method/CreateScan";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RadarIcon from '@mui/icons-material/Radar';
import CancelIcon from '@mui/icons-material/Cancel';

function StartScanModal(props) {
  const [openParentModal, setOpenParentModal] = useState(false);
  const [openChildModal, setOpenChildModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Light"); // State to track selected radio button

  const [open, setOpen] = React.useState(false);
  const [opentabs, setOpenTabs] = React.useState(false); // Initialize as boolean

  console.log(opentabs, 'opentabs');

  const handleCloseParentModal = () => {
    setOpenParentModal(false);
  };

  const handleOpenChildModal = () => {
    setOpenChildModal(true);
  };

  const handleCloseChildModal = () => {
    setOpenChildModal(false);
  };

  const handleCheckBoxClick = (e) => {
    console.log("Check", e.target.value);
    if (e.target.value === "Custom") {
      setOpenTabs(true);
    } else setOpenTabs(false);
  };

  const handleCheckBoxClickk = (e) => {
    setSelectedOption(e.target.value); // Update selected radio button value
  };

  const toggleOpen = () => {
    setOpen(!open);
    // If the toggle is being closed, also close the custom options
    if (open) {
      setOpenTabs(false);
    }
  };

  const renderParagraph = () => {
    switch (selectedOption) {
      case "Light":
        return (
          <Typography sx={{ fontSize: "10px", padding: "0px" }} component="p">You will receive alerts according to the <a href="#"> notification settings</a> configured for this workspace. You have <a href="#">0 enabled</a> notifications.
          </Typography>
        );
      case "Deep":
        return (
          <Typography sx={{ fontSize: "10px", padding: "0px" }} component="p"> Configure custom notifications for this scan. They will overwrite the global workspace notifications.
          </Typography>
        );
      case "Custom":
        return (
          <Typography sx={{ fontSize: "10px", padding: "0px" }} component="p">Notifications will be disabled for this scan.
          </Typography>
        );
      default:
        return null;
    }
  };

  const handleClose = () => {
    setOpen(false);
    props.handleClose()
  };
  
  const handleStartScan = () => {
    const confirmed = window.confirm("Scanning Is Started.......");

    // If user clicks OK, do something here (if needed)
    if (confirmed) {
      setOpen(false);
      // Add any action you want to perform after user clicks OK
    }
  };
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          <span style={{ color: "#212121", fontSize: "16px" }} id="modal-tool-name">
            <PlayCircleOutlineIcon style={{ color: "#FA8072", marginTop: "10px !important" }} /> Port Scanner
          </span>
        </h4>
        <hr />
        <Box>
          <Grid sx={{ fontSize: "13px", }} container spacing={2}>
            {/* {data.map((item, index) => ( */}
            <React.Fragment>
              <Grid
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#212121",
                  padding: "5px",
                  fontSize: "15px"
                }}
                item
                xs={5}
              >
                <label> Scaning:</label>
                {/* <SettingsIcon style={{ color: "#777777", marginTop: "10px !important" }} /> */}
              </Grid>
              <Grid sx={{
                fontFamily: "'Inter', sans-serif",
                color: "#212121",
                padding: "5px",
                fontSize: "15px"
              }} item xs={7}>
                <label> 3 Targets</label>
              </Grid>
            </React.Fragment>

            {/* ))}  */}
          </Grid>
          <Divider sx={{ marginBottom: "10px" }} />
          <Grid sx={{ fontSize: "14px", }} container spacing={2}>

            <React.Fragment>
              <Grid
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#212121",
                  padding: "5px",
                }}
                item
                xs={5}
              >
                <SettingsIcon style={{ color: "#777777", marginTop: "10px !important" }} /><label> Scan Options:</label>
              </Grid>
              <Grid sx={{ paddingTop: "5px !important", fontSize: "13px" }} item xs={7}>
                <Button onClick={toggleOpen}>
                  {open ? (
                    <Button sx={{ fontSize: "11px" }} endIcon={<ArrowDropUpIcon />}> HIDE </Button>
                  ) : (
                    <Button sx={{ fontSize: "11px" }} endIcon={<ArrowDropDownIcon />}> SHOW </Button>
                  )}
                </Button>
              </Grid>
            </React.Fragment>
          </Grid>
          <Divider />
          {open ? (
            <Grid sx={{ marginBottom: "5px", marginTop: "0px" }} container spacing={2}>
              {/* {data.map((item, index) => ( */}
              <React.Fragment>
                <Grid
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#212121",
                    padding: "5px",
                  }}
                  item
                  xs={5}
                >
                  <Typography component="h6">Scan type</Typography>
                </Grid>
                <Grid item xs={7}>
                  <FormControl sx={{ fontSize: "8px" }} >
                    <RadioGroup
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Light"
                        control={<Radio />}
                        label={
                          <React.Fragment>
                            Light
                            <HelpOutlineIcon
                              sx={{ marginLeft: 1, fontSize: "15px" }}
                            />
                          </React.Fragment>
                        }
                        onClick={(e) => handleCheckBoxClick(e)}
                      />
                      <FormControlLabel
                        value="Deep"
                        control={<Radio />}
                        label={
                          <React.Fragment>
                            Deep
                            <HelpOutlineIcon
                              sx={{ marginLeft: 1, fontSize: "15px" }}
                            />
                          </React.Fragment>
                        }
                        onClick={(e) => handleCheckBoxClick(e)}
                      />
                      <FormControlLabel
                        value="Custom"
                        control={<Radio />}
                        label={
                          <React.Fragment>
                            Custom
                            <HelpOutlineIcon
                              sx={{ marginLeft: 1, fontSize: "15px" }}
                            />
                          </React.Fragment>
                        }
                        onClick={(e) => handleCheckBoxClick(e)}
                      />
                    </RadioGroup>
                  </FormControl>

                </Grid>
              </React.Fragment>
            </Grid>

          ) : (
            ""
          )}
          {opentabs ? <CustomeTabs /> : ""}
          {opentabs ? <Payload /> : ""}
          {opentabs ? <Filter /> : ""}
          {opentabs ? <CustomScan /> : ""}
          {opentabs ? <FollowReq /> : ""}
          <Grid sx={{ marginTop: "0px" }} container spacing={2}>
            {/* {data.map((item, index) => ( */}
            <React.Fragment>
              <Grid
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#212121",
                  fontSize: "15px",
                  padding: "5px",
                }}
                item
                xs={5}
              >
                <label><CalendarMonthIcon style={{ color: "#777777" }} /> Schedule scan: </label>
              </Grid>
              <Grid item xs={7}>
                <Typography>
                  <UseSwitchesBasic />
                </Typography>
              </Grid>
            </React.Fragment>

            {/* ))}  */}
          </Grid>
          <Divider />
          <Grid sx={{ marginTop: '0px' }} container spacing={2}>
            <React.Fragment>
              <Grid
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#212121',
                  fontSize: '15px',
                  padding: '5px',
                }}
                item
                xs={4}
              >
                <label>
                  {' '}
                  <NotificationsIcon style={{ color: '#777777' }} /> Notifications:{' '}
                </label>
              </Grid>
              <Grid item xs={8}>
                <Typography>
                  <FormControl sx={{ marginLeft: "25px" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={selectedOption} // Set value to track selected option
                      onChange={(e) => handleCheckBoxClickk(e)} // Handle radio button change
                    >
                      <FormControlLabel
                        value="Light"
                        control={<Radio />}
                        label={
                          <React.Fragment>
                            Workspace
                          </React.Fragment>
                        }
                      />
                      <FormControlLabel
                        value="Deep"
                        control={<Radio />}
                        label={
                          <React.Fragment>
                            Custom
                          </React.Fragment>
                        }
                      />
                      <FormControlLabel
                        value="Custom"
                        control={<Radio />}
                        label={
                          <React.Fragment>
                            None
                          </React.Fragment>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Typography>
                {selectedOption && (
                  <Typography sx={{ backgroundColor: "#D9EDF7", width: "23rem", height: "auto", padding: "15px", fontSize: "20px", marginLeft: "25px", marginTop: "10px", marginBottom: "10px" }}>
                    {renderParagraph()}
                  </Typography>
                )}
              </Grid>
            </React.Fragment>
          </Grid>
          <Divider />
          <CreateScan />
          <Grid sx={{ marginTop: "30px",backgroundColor:"#EFF3F8",paddingTop:"7px",paddingBottom:"7px",width:"658px" }} container spacing={1}>
            <React.Fragment>
              <Grid
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#212121",
                  fontSize: "15px",
                  padding: "0px",
                }}
                item
                xs={8}
              >
              </Grid>
              <Grid
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#212121",
                  fontSize: "15px",
                  padding: "5px",
                }}
                item
                xs={4}
              >
                <Box>

                  <Button
                    className="  button-design"
                    variant="contained"

                    size="small"
                    sx={{ fontSize: "medium", marginRight: "7px" }}
                    onClick={handleStartScan} // Adding onClick event handler

                  >
                    <RadarIcon /> Start Scan
                  </Button>
                  <Button
                    className="  button-design"
                    variant="contained"
                    // endIcon={<SendIcon />}
                    size="small"
                    sx={{ fontSize: "medium" }}
                    onClick={handleClose}
                  >
                    <CancelIcon /> Cancel
                  </Button>
                </Box>

              </Grid>
            </React.Fragment>
          </Grid>
        </Box>
        <Modal
          sx={{ backgroundColor: "white", color: "black" }}
          open={openParentModal}
          onClose={handleCloseParentModal}
        >
          <div>
            <h2>Parent Modal Content</h2>
            <Button onClick={handleOpenChildModal}>Open Child Modal</Button>
            <Button onClick={handleCloseParentModal}>Close Parent Modal</Button>
            <Modal
              sx={{ backgroundColor: "white", color: "black" }}
              open={openChildModal}
              onClose={handleCloseChildModal}
            >
              <div>
                <h2>Child Modal Content</h2>
                <Button onClick={handleCloseChildModal}>
                  Close Child Modal
                </Button>
              </div>
            </Modal>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default StartScanModal;
