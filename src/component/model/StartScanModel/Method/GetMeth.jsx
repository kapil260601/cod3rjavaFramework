
import React, { useState } from "react";
import {
    Box,

    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography,
    Input,
    TextField,
} from "@mui/material";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
// import Payload from "../Payload/Payload";


const GetMeth = () => {

    const [openParentModal, setOpenParentModal] = useState(false);
    const [openChildModal, setOpenChildModal] = useState(false);

    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(true);
    const [opentabs, setOpenTabs] = React.useState("GET");
    console.log(opentabs, 'opentabs')

    const handleOpenParentModal = () => {
        setOpenParentModal(true);
    };

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
        if (e.target.value == "POST") {
            setChecked(false)
            setOpenTabs(e.target.value);
        } else {
            setOpenTabs(e.target.value)
            setChecked(true)
        }
    };

    return (
        <Box>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel
                    
                        value="GET"
                        checked={checked}
                        control={<Radio />}
                        label={
                            <React.Fragment>
                                GET
                                {/* <HelpOutlineIcon
                                    sx={{ marginLeft: 1, fontSize: "15px" }}
                                /> */}
                            </React.Fragment>
                        }
                        onClick={(e) => handleCheckBoxClick(e)}
                    />
                    <FormControlLabel
                        value="POST"
                        control={<Radio />}
                        label={
                            <React.Fragment>
                                POST
                                
                            </React.Fragment>
                        }
                        onClick={(e) => handleCheckBoxClick(e)}
                    />
                   
                </RadioGroup>
            </FormControl>
            <Box>
                {opentabs == "GET" ?
                    <Box><Typography></Typography></Box>
                    :
                    <Typography>
                        <Box component={"p"}>POST Data
                            <TextField multiline
                                maxRows={4} sx={{ marginTop: "15px" }} fullWidth label="fullWidth" id="fullWidth" />
                        </Box>
                    </Typography>}
            </Box>
            {/* <Payload /> */}
        </Box>
    )
}

export default GetMeth;
