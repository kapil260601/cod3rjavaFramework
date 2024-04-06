// import * as React from "react";
// import PropTypes from "prop-types";
// import { Dropdown } from "@mui/base/Dropdown";
// import { Menu } from "@mui/base/Menu";
// import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
// import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
// import { styled } from "@mui/system";
// import { CssTransition } from "@mui/base/Transitions";
// import { PopupContext } from "@mui/base/Unstable_Popup";
// import { useEffect } from "react";
// import { axiosGet, axiosPost } from "../utils/apiHandlerNew";
// import { useState } from "react";
// import { MyContext } from "./Context/MyContext ";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// export default function MenuTransitions() {
//   const { value, setValue } = React.useContext(MyContext);
//   console.log(value, "value=====");

//   const [menu, setMenu] = React.useState([]);
//   const [selectedDomain, setSelectedDomain] = useState(null);

//   const createHandleMenuClick = (menuItem) => {
//     return () => {
//       console.log(`Clicked on ${menuItem}`);
//     };
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const domains = await axiosGet("/domains");
//         console.log("hello ", domains);
//         var first = domains[0]?.domain_name;
//         var second = selectedDomain ? selectedDomain.domain_name : first;
//         console.log("first========== ", second, first);
//         const getData = await axiosPost("/livesubdomains", {
//           domainName: second,
//         });
//         setValue(getData);
//         console.log("hello====== ", getData);
//         setMenu(domains);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [selectedDomain]);

//   const getLiveSubDomains = async (value) => {
//     const data = { domainName: value };
//     const getData = await axiosPost("/livesubdomains", data);
//     console.log("hello", getData);
//   };

//   const handleDomainSelect = (domain) => {
//     console.log("domain", domain);
//     setSelectedDomain(domain);
//     getLiveSubDomains(domain.domain_name);
//   };

//   return (
//     // <Dropdown>
//     //     <MenuButton>{selectedDomain ? selectedDomain.domain_name : menu[0]?.domain_name}</MenuButton>
//     //     <Menu slots={{ listbox: AnimatedListbox }}>
//     //         {menu?.map((dt) => (
//     //             <MenuItem key={dt.domain_name} onClick={() => handleDomainSelect(dt)}>{dt.domain_name}</MenuItem>

//     //         ))}
//     //     </Menu>
//     // </Dropdown>
//     <Dropdown>
//       <MenuButton>demo 05</MenuButton>
//       <Menu slots={{ listbox: AnimatedListbox }}>
//         {[1, 2, 3, 4, 5].map((dt) => (
//           <MenuItem key={dt.domain_name} onClick={() => handleDomainSelect(dt)}>
//             {dt.domain_name}
//           </MenuItem>
//         ))}
//       </Menu>
//     </Dropdown>
//   );
// }

// const blue = {
//   50: "#F0F7FF",
//   100: "#C2E0FF",
//   200: "#99CCF3",
//   300: "#66B2FF",
//   400: "#3399FF",
//   500: "#007FFF",
//   600: "#0072E6",
//   700: "#0059B3",
//   800: "#004C99",
//   900: "#003A75",
// };

// const grey = {
//   50: "#F3F6F9",
//   100: "#E5EAF2",
//   200: "#DAE2ED",
//   300: "#C7D0DD",
//   400: "#B0B8C4",
//   500: "#9DA8B7",
//   600: "#6B7A90",
//   700: "#434D5B",
//   800: "#303740",
//   900: "#1C2025",
// };

// const Listbox = styled("ul")(
//   ({ theme }) => `
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   padding: 6px;
//   margin: 12px 0;
//   min-width: 200px;
//   border-radius: 12px;
//   overflow: auto;
//   outline: 0px;
//   background: ${theme.palette.mode === "red" ? grey[900] : "#fff"};
//   border: 1px solid ${theme.palette.mode === "red" ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === "red" ? grey[300] : grey[900]};
//   box-shadow: 0px 4px 30px ${
//     theme.palette.mode === "red" ? grey[900] : grey[200]
//   };
//   z-index: 1;

//   .closed & {
//     opacity: 0;
//     transform: scale(0.95, 0.8);
//     transition: opacity 200ms ease-in, transform 200ms ease-in;
//   }

//   .open & {
//     opacity: 1;
//     transform: scale(1, 1);
//     transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
//   }

//   .placement-top & {
//     transform-origin: bottom;
//   }

//   .placement-bottom & {
//     transform-origin: top;
//   }
//   `
// );

// const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
//   const { ownerState, ...other } = props;
//   const popupContext = React.useContext(PopupContext);

//   if (popupContext == null) {
//     throw new Error(
//       "The `AnimatedListbox` component cannot be rendered outside a `Popup` component"
//     );
//   }

//   const verticalPlacement = popupContext.placement.split("-")[0];

//   return (
//     <CssTransition
//       className={`placement-${verticalPlacement}`}
//       enterClassName="open"
//       exitClassName="closed"
//     >
//       <Listbox {...other} ref={ref} />
//     </CssTransition>
//   );
// });

// AnimatedListbox.propTypes = {
//   ownerState: PropTypes.object.isRequired,
// };

// const MenuItem = styled(BaseMenuItem)(
//   ({ theme }) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: default;
//   user-select: none;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &.${menuItemClasses.focusVisible} {
//     outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
//     background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }

//   &.${menuItemClasses.disabled} {
//     color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
//   }

//   &:hover:not(.${menuItemClasses.disabled}) {
//     background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[50]};
//     color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
//   }
//   `
// );

// const MenuButton = styled(BaseMenuButton)(
//   ({ theme }) => `
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-weight: 600;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   padding: 8px 10px;
//   border-radius: 8px;
//   color: white;
//   transition: all 150ms ease;
//   cursor: pointer;
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
//   box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

//   &:hover {
//     background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
//     border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
//   }

//   &:active {
//     background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
//   }

//   &:focus-visible {
//     box-shadow: 0 0 0 4px ${
//       theme.palette.mode === "dark" ? blue[300] : blue[200]
//     };
//     outline: none;
//   }
//   `
// );

// import React, { useState } from "react";
// import { IconButton, Menu, MenuItem } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

// const DropdownButton = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <IconButton
//         aria-label="dropdown"
//         aria-controls="dropdown-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//         className="button-design"
//       >
//         shiv {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
//       </IconButton>
//       <Menu
//         id="dropdown-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>Option 1</MenuItem>
//         <MenuItem onClick={handleClose}>Option 2</MenuItem>
//         <MenuItem onClick={handleClose}>Option 3</MenuItem>
//       </Menu>
//     </>
//   );
// };

// export default DropdownButton;

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logout from "@mui/icons-material/Logout";

export default function DropdownButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {/* <Tooltip title="profile"> */}
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2, padding: "3px 11px" }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          className="button-design"
        >
          Google {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </IconButton>
        {/* </Tooltip> */}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
