

// import React, { useState } from "react";
// import "./startScan.css";
// import {
//   Box,
//   Divider,
//   Grid,
//   Button,
//   Modal,
//   Typography,
//   FormControl,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import CssTransitionComponent from "../../../CssTransitionComponent";
// import UseSwitchesBasic from "../../UseSwitchesBasic";
// import RowRadioButtonsGroup from "../../../RowRadioButtonsGroup";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
// import CustomeTabs from "./tabs/customTabs";
// import Payload from "./tabs/Payload";
// import Filter from "./Method/Filter";
// import CustomScan from "./Method/CustomScan";
// function StartScanModal() {
//   const [openParentModal, setOpenParentModal] = useState(false);
//   const [openChildModal, setOpenChildModal] = useState(false);

//   const [open, setOpen] = React.useState(false);
//   const [opentabs, setOpenTabs] = React.useState(false);
//   console.log(opentabs,'opentabs')

//   const handleOpenParentModal = () => {
//     setOpenParentModal(true);
//   };

//   const handleCloseParentModal = () => {
//     setOpenParentModal(false);
//   };

//   const handleOpenChildModal = () => {
//     setOpenChildModal(true);
//   };

//   const handleCloseChildModal = () => {
//     setOpenChildModal(false);
//   };
//   const handleCheckBoxClick = (e) => {
//     console.log("Check", e.target.value);
//     if (e.target.value == "Custom") {
      
//       setOpenTabs(true);
//     } else setOpenTabs(false);
//   };
//   // const data = [
//   //   { title: 'Scanning:', content: '3 Targets' },
//   //   { title: 'Scan options:', content: 'Show', hasButton: true },
//   //   { title: 'Schedule scan:', content: '3 Targets' },
//   //   { title: 'Notifications:', content: 'In Progress' },
//   //   { title: ' Create scan group: ', content: '3 Targets' },
//   // ];

//   return (
//     <>
//       <div className="modal-header">
//         {/* <h4 className="modal-title">
//           <span style={{ color: "#212121" }} id="modal-tool-name">
//             Port Scanner
//           </span>
//         </h4> */}
//         {/* <hr /> */}
//         <Box>
//           {/* <Grid container spacing={2}>
//             {/* {data.map((item, index) => ( */}
//             <React.Fragment>
//               <Grid
//                 sx={{
//                   fontFamily: "'Inter', sans-serif",
//                   color: "#212121",
//                   fontSize: "15px",
//                   padding: "5px",
//                 }}
//                 item
//                 xs={5}
//               >
//                 <h3>Scanning</h3>
//               </Grid>
//               <Grid item xs={7}>
//                 <h3>3 Targets</h3>
//               </Grid>
//             </React.Fragment>

//             {/* ))}  */}
//           {/* </Grid> */} 
//           <Divider sx={{ marginBottom: "10px" }} />
//           <Grid container spacing={2}>
//             {/* {data.map((item, index) => ( */}
//             <React.Fragment>
//               <Grid
//                 sx={{
//                   fontFamily: "'Inter', sans-serif",
//                   color: "#212121",
//                   fontSize: "15px",
//                   padding: "5px",
//                 }}
//                 item
//                 xs={5}
//               >
//                 <label>Scan Options:</label>
//               </Grid>
//               <Grid sx={{ paddingTop: "5px !important" }} item xs={7}>
//                 <Button onClick={() => setOpen((o) => !o)}>
//                   {open ? (
//                     <Button endIcon={<ArrowDropDownIcon />}> HIDE </Button>
//                   ) : (
//                     <Button endIcon={<ArrowDropUpIcon />}> SHOW </Button>
//                   )}
//                 </Button>
//                 {/* <Typography><CssTransitionComponent /></Typography> */}
//               </Grid>
//             </React.Fragment>

//             {/* ))}  */}
//           </Grid>
//           {open ? (
//             <Grid container spacing={2}>
//               {/* {data.map((item, index) => ( */}
//               <React.Fragment>
//                 <Grid
//                   sx={{
//                     fontFamily: "'Inter', sans-serif",
//                     color: "#212121",
//                     fontSize: "15px",
//                     padding: "5px",
//                   }}
//                   item
//                   xs={5}
//                 >
//                   <Typography component="h6">Scan type</Typography>
//                 </Grid>
//                 <Grid item xs={7}>
//                   <FormControl>
//                     <RadioGroup
//                       aria-labelledby="demo-row-radio-buttons-group-label"
//                       name="row-radio-buttons-group"
//                     >
//                       <FormControlLabel
//                         value="Light"
//                         control={<Radio />}
//                         label={
//                           <React.Fragment>
//                             Light
//                             <HelpOutlineIcon
//                               sx={{ marginLeft: 1, fontSize: "15px" }}
//                             />
//                           </React.Fragment>
//                         }
//                         onClick={(e) => handleCheckBoxClick(e)}
//                       />
//                       <FormControlLabel
//                         value="Deep"
//                         control={<Radio />}
//                         label={
//                           <React.Fragment>
//                             Deep
//                             <HelpOutlineIcon
//                               sx={{ marginLeft: 1, fontSize: "15px" }}
//                             />
//                           </React.Fragment>
//                         }
//                         onClick={(e) => handleCheckBoxClick(e)}
//                       />
//                       <FormControlLabel
//                         value="Custom"
//                         control={<Radio />}
//                         label={
//                           <React.Fragment>
//                             Custom
//                             <HelpOutlineIcon
//                               sx={{ marginLeft: 1, fontSize: "15px" }}
//                             />
//                           </React.Fragment>
//                         }
//                         onClick={(e) => handleCheckBoxClick(e)}
//                       />
//                     </RadioGroup>
//                   </FormControl>
//                 </Grid>
//               </React.Fragment>

//               {/* ))}  */}
//             </Grid>
//           ) : (
//             ""
//           )}
//           {opentabs?<CustomeTabs/>:""}
//           {opentabs?<Payload/>:""}
//           {opentabs?<Filter/>:""}
//           {opentabs?<CustomScan/>:""}
//           <Divider sx={{ marginBottom: "10px" }} />
//           <Grid container spacing={2}>
//             {/* {data.map((item, index) => ( */}
//             <React.Fragment>
//               <Grid
//                 sx={{
//                   fontFamily: "'Inter', sans-serif",
//                   color: "#212121",
//                   fontSize: "15px",
//                   padding: "5px",
//                 }}
//                 item
//                 xs={5}
//               >
//                 <label> Schedule scan: </label>
//               </Grid>
//               <Grid item xs={7}>
//                 <Typography>
//                   <UseSwitchesBasic />
//                 </Typography>
//               </Grid>
//             </React.Fragment>

//             {/* ))}  */}
//           </Grid>
//           <Divider />
//           <Grid container spacing={2}>
//             {/* {data.map((item, index) => ( */}
//             <React.Fragment>
//               <Grid
//                 sx={{
//                   fontFamily: "'Inter', sans-serif",
//                   color: "#212121",
//                   fontSize: "15px",
//                   padding: "5px",
//                 }}
//                 item
//                 xs={4}
//               >
//                 <label>Notifications: </label>
//               </Grid>
//               <Grid item xs={8}>
//                 <Typography>
//                   <RowRadioButtonsGroup />
//                 </Typography>
//               </Grid>
//             </React.Fragment>

//             {/* ))}  */}
//           </Grid>
//           <Divider />
//           <Grid container spacing={2}>
//             {/* {data.map((item, index) => ( */}
//             <React.Fragment>
//               <Grid
//                 sx={{
//                   fontFamily: "'Inter', sans-serif",
//                   color: "#212121",
//                   fontSize: "15px",
//                   padding: "5px",
//                 }}
//                 item
//                 xs={5}
//               >
//                 <label> Create scan group: </label>
//               </Grid>
//               <Grid item xs={7}>
//                 <Typography>
//                   <UseSwitchesBasic />
//                 </Typography>
//               </Grid>
//             </React.Fragment>

//             {/* ))}  */}
//           </Grid>
//           <Divider />
//         </Box>
//         <Modal
//           sx={{ backgroundColor: "white", color: "black" }}
//           open={openParentModal}
//           onClose={handleCloseParentModal}
//         >
//           <div>
//             <h2>Parent Modal Content</h2>
//             <Button onClick={handleOpenChildModal}>Open Child Modal</Button>
//             <Button onClick={handleCloseParentModal}>Close Parent Modal</Button>
//             <Modal
//               sx={{ backgroundColor: "white", color: "black" }}
//               open={openChildModal}
//               onClose={handleCloseChildModal}
//             >
//               <div>
//                 <h2>Child Modal Content</h2>
//                 <Button onClick={handleCloseChildModal}>
//                   Close Child Modal
//                 </Button>
//               </div>
//             </Modal>
//           </div>
//         </Modal>
//       </div>
//     </>
//   );
// }

// export default StartScanModal;
