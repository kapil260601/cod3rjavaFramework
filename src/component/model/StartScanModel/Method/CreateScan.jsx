import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Grid, Switch, TextField } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CreateScan() {
  const [value, setValue] = React.useState(0);
  const [showInputBox, setShowInputBox] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowInputBox(newValue); 
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Grid sx={{ marginTop: "-5px" }} container spacing={2}>
      <Grid item xs={5}>
        <Typography component="h6"><AccessTimeFilledIcon style={{ color: "#777777" }} />Create Scan Output </Typography>
      </Grid>
      <Grid item xs={7}>
        <Box sx={{ width: '100%', marginRight: "5px" }}>
          <Switch {...label} onChange={handleChange} />
        </Box>
      </Grid>
      {!showInputBox && (
        <Grid sx={{marginLeft:"235px"}} item xs={6}>
          <Typography sx={{backgroundColor:"#D9EDF7",width:"23rem",height:"auto",padding:"15px",fontSize:"10px",marginBottom:"1px",marginLeft:"5px"}} component="div">You will get a notification for each scan matching your triggers. To get a single aggregated report, enable scan grouping.</Typography>
        </Grid>
      )}
      {showInputBox && (
        <Grid sx={{marginLeft:"235px"}} item xs={6}>
        {/* <Typography sx={{fontSize:"12px",marginTop:"10px"}} component="p">Maximum minutes for the scanner to run:</Typography> */}
          <TextField
            sx={{width:"23rem", height:"auto",marginLeft:"5px",marginTop:"-10px"}}
            id="outlined-number"
            type="text"
            placeholder='Scan Group Name (Optional) :'
          /><Typography sx={{backgroundColor:"#D9EDF7",width:"23rem",height:"auto",padding:"10px",fontSize:"10px",marginTop:"10px",marginLeft:"5px"}} component="div">Overwrite the default maximum time (in minutes) that the scanner is allowed to run. The default value is 1440 minutes (24 hours) and it ensures the best scan coverage. The minium of 5 minutes can ensure a viable scan option if faster results are necessary.</Typography>
          
        </Grid>
      )}
    </Grid>
  );
}
