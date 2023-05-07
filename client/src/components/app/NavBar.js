import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  alpha,
  Tooltip,
  Avatar,
} from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  SettingsOutlined,
  ArrowDropDownOutlined,
  Brightness7,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

import React from "react";
import styled from "@emotion/styled";
import FlexBetween from "../FlexBetween";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useSettings from "../../hooks/useSettings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// custom div styled element
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.common.white, 0.15)
      : alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? alpha(theme.palette.common.white, 0.25)
        : alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

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

function NavBar({isSidebarOpen, setIsSidebarOpen }) {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* flexBetween is a styled custom component */}
        <FlexBetween>
          <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon></MenuIcon>
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon></SearchIcon>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </FlexBetween>

        <FlexBetween>
          <IconButton onClick={() => onToggleMode()}>
            {theme.palette.mode === "dark" ? (
              <Brightness7 />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>

          <IconButton>
            <SettingsOutlinedIcon></SettingsOutlinedIcon>
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton 
              onClick={handleOpenUserMenu}
              >
                <Avatar alt="Remy Sharp"  />
              </IconButton>
            </Tooltip>
            <Menu
            
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
                
              }}
              keepMounted
              transformOrigin={{
                vertical:-30,
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
