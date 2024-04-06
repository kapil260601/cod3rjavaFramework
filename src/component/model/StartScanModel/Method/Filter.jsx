import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import GetMeth from '../Method/GetMeth';
import PostMeth from './PostMeth';

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

export default function Filter() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid sx={{marginTop:"4px"}} container spacing={2}>
    <Grid item xs={4}>
    <Typography component="h6">Filter Result</Typography>
    </Grid>
    <Grid item xs={8}>
    <Box sx={{ width: '100%',marginTop:"-28px",fontSize:"13px" }}>
      <CustomTabPanel value={value} index={0}>
        <PostMeth />
      </CustomTabPanel>
    </Box>
</Grid>
  </Grid>
  );
}