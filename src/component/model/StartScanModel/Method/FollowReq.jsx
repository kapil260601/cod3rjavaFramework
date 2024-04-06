import React, { useState } from "react";
import {
    Box,
    Divider,
    Grid,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NearMeIcon from '@mui/icons-material/NearMe';

function FollowReq() {
    const [openParentModal, setOpenParentModal] = useState(false);
    const [openChildModal, setOpenChildModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState(""); // State to track selected radio button

    const handleCheckBoxClick = (e) => {
        setSelectedOption(e.target.value); // Update selected radio button value
    };

    // Function to render paragraph based on selected radio button
    const renderParagraph = () => {
        switch (selectedOption) {
            case "Light":
                return "Don't follow any HTTP redirects.";
            case "Deep":
                return (
                    <Typography sx={{ fontSize: "10px", padding: "0px" }} component="p"> Follow HTTP redirects that point to the same hostname only. The following types of redirects will be performed:
                        <ul>
                            <li>Protocol change (e.g. HTTP -> HTTPS)</li>
                            <li>Protocol change (e.g. HTTP -> HTTPS)</li>

                        </ul>
                    </Typography>
                );
            case "Custom":
                return (
                    <Typography sx={{ fontSize: "10px", padding: "0px" }} component="p"> Follow HTTP redirects only to locations in the same domain. The following types of redirects will be performed:
                        <ul>
                            <li>Protocol change (e.g. HTTP -> HTTPS)</li>
                            <li>URL path change (e.g. /index -> /login)</li>
                            <li>Subdomain change (e.g. target.com -> www.target.com)</li>
                        </ul>
                    </Typography>
                );;
            case "Always":
                return "Follow HTTP redirects to any location, even to a different domain.";
            default:
                return "";
        }
    };

    return (
        <>
            <div className="">
                <Box sx={{ marginTop: "20px" }}>
                    <Grid container spacing={2}>
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
                                <React.Fragment>
                                    <NearMeIcon style={{ color: "#777777" }} />
                                    Follow redirects
                                </React.Fragment>
                            </Grid>
                            <Grid item xs={7}>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={selectedOption} // Set value to track selected option
                                        onChange={(e) => handleCheckBoxClick(e)} // Handle radio button change
                                    >
                                        <FormControlLabel
                                            value="Light"
                                            control={<Radio />}
                                            label={
                                                <React.Fragment>
                                                    None
                                                    {/* <HelpOutlineIcon sx={{ marginLeft: 1, fontSize: "15px" }} /> */}
                                                </React.Fragment>
                                            }
                                        />
                                        <FormControlLabel
                                            value="Deep"
                                            control={<Radio />}
                                            label={
                                                <React.Fragment>
                                                    Same-host only
                                                    {/* <HelpOutlineIcon sx={{ marginLeft: 1, fontSize: "15px" }} /> */}
                                                </React.Fragment>
                                            }
                                        />
                                        <FormControlLabel
                                            value="Custom"
                                            control={<Radio />}
                                            label={
                                                <React.Fragment>
                                                    Same-domain only
                                                    {/* <HelpOutlineIcon sx={{ marginLeft: 1, fontSize: "15px" }} /> */}
                                                </React.Fragment>
                                            }
                                        />
                                        <FormControlLabel
                                            value="Always"
                                            control={<Radio />}
                                            label={
                                                <React.Fragment>
                                                    Always
                                                    {/* <HelpOutlineIcon sx={{ marginLeft: 1, fontSize: "15px" }} /> */}
                                                </React.Fragment>
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                </Box>
                {selectedOption && (
                    <Typography sx={{ backgroundColor: "#D9EDF7", width: "23rem", height: "auto", padding: "10px", fontSize: "10px", marginLeft: "240px", marginTop: "10px", marginBottom: "10px" }}>
                        {renderParagraph()}
                    </Typography>
                )}
            </div>
        </>
    );
}

export default FollowReq;
