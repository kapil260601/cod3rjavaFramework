import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import { alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import DropdownButton from "../MenuTransitions";
import AccountMenu from "../profile";
import "../Final-Design/style.css";
import "./style.css";
import HeaderModal from "../model/modal";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MuiDemoTable from "./MuiDemoTable";

const menuId = "primary-search-account-menu";

const drawerWidth = 240;
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [addDomainModal, setAddDomainModel] = React.useState(false);
  const [addUploadfile, setAddUploadfile] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const handleOpenDomain = () => {
    setAddDomainModel(true);
  };
  const handleOpenUploadfile = () => {
    setAddUploadfile(true);
  };

  return (
    <>
      <Router>

        <Box sx={{ display: "flex" }}>
          <HeaderModal
            addDomainModal={addDomainModal}
            setAddDomainModel={setAddDomainModel}
            addUploadfile={addUploadfile}
            setAddUploadfile={setAddUploadfile}
          />

          <CssBaseline />
          <AppBar
            sx={{
              display: "flex",
              backgroundColor: "#262626",
              color: "white",
              height: "48px",
            }}
            position="fixed"
            open={open}
          >
            <Toolbar
              sx={{
                "@media (min-width: 600px)": {
                  minHeight: "46px",
                },
              }}
            >
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                  backgroundColor: "#262626",
                  color: "#99ADCB",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Divider />

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" }, fontSize: "medium" }}
              >
                COD3RJAVA
              </Typography>
              <Search sx={{ display: "flex" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  height: "30px",
                  marginTop: "6px",
                  gap: "10px",
                }}
              >
                <Button
                  className="  button-design"
                  variant="contained"
                  // endIcon={<SendIcon />}
                  size="small"
                  sx={{ fontSize: "medium" }}
                  onClick={(e) => handleOpenDomain()}
                >
                  ➕ Add Domain
                </Button>

                <Button
                  className="  button-design"
                  variant="contained"
                  // endIcon={<SendIcon />}
                  size="small"
                  sx={{ fontSize: "medium" }}
                  onClick={(e) => handleOpenUploadfile()}
                >
                  Upload File
                </Button>
                <DropdownButton />

                <AccountMenu />
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Dashboard", "Assets", "Scans", "Findings", "Attack Surface", "Handlers"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <Link to={`/${text}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["Reporting", "Automation", "Team", "Integrations"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Main open={open} sx={{ padding: "0px" }}>
            <Divider />
            <Routes>
              <Route path="/" element={<MuiDemoTable />} />
                
              <Route path="/Assets" element={<MuiDemoTable />} />

            </Routes>
          </Main>
        </Box>
      </Router>
      <DrawerHeader />
    </>
  );
}
