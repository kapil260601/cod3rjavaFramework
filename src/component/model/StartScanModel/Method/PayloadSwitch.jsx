
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
    InputLabel,
    Select,
    MenuItem,
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
        if (e.target.value == "SON") {
            setChecked(false)
            setOpenTabs(e.target.value);
        } else {
            setOpenTabs(e.target.value)
            setChecked(true)
        }
    };

    const [age, setAge] = React.useState('10');
    const handleChange = (event) => {
        console.log(event.target.value); // Check if the value is being logged properly
        setAge(event.target.value); // Ensure that the state is being updated correctly
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
                    
                        value="WORD"
                        checked={checked}
                        control={<Radio />}
                        label={
                            <React.Fragment>
                                Wordlist
                                {/* <HelpOutlineIcon
                                    sx={{ marginLeft: 1, fontSize: "15px" }}
                                /> */}
                            </React.Fragment>
                        }
                        onClick={(e) => handleCheckBoxClick(e)}
                    />
                    <FormControlLabel
                        value="SON"
                        control={<Radio />}
                        label={
                            <React.Fragment>
                                Sequence Of Numbers
                                {/* <HelpOutlineIcon
                                    sx={{ marginLeft: 1, fontSize: "15px" }}
                                /> */}
                            </React.Fragment>
                        }
                        onClick={(e) => handleCheckBoxClick(e)}
                    />

                </RadioGroup>
            </FormControl>
            <Box>
                {opentabs == "SON" ?
                    <Box 
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100px' },
                        }}
                        noValidate
                        autoComplete="off"
                    ><Typography>
                    <div>
                            <TextField
                                id="outlined-number"
                                label="From"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                defaultValue="30" 

                            />
                            <TextField
                                id="outlined-number"
                                label="To"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                defaultValue="60" 

                            />
                            <TextField
                                id="outlined-number"
                                label="Step"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                defaultValue="80" 
                            />
                            </div>
                        </Typography>
                        </Box>
                    :
                    <Typography>

                        <FormControl  sx={{marginTop:"10px",marginLeft:"7px"}} fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                           
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={"10"}>Ten</MenuItem>
                                <MenuItem value={"20"}>Twenty</MenuItem>
                                <MenuItem value={"30"}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Typography>}
            </Box>
            {/* <Payload /> */}
        </Box>
    )
}

export default GetMeth;
