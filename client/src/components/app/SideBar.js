import { useTheme } from "@emotion/react";
import { ChevronLeft, ChevronRightOutlined } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import FlexBetween from "../FlexBetween";
import { navItems } from "../../data/NavItems";
import { useLocation, useNavigate } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const SideBar = ({ isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  return (
    <Box
      display={isSidebarOpen ? "block" : "none"}
      sx={{
        marginTop: "1rem",
        borderTopRightRadius: "10px",
        width: "15rem",
        marginLeft: "3px",
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.primary.dark2
            : theme.palette.background.default,
        boxShadow: theme.shadows[2],
        transition: "right 1s linear",
      }}
    >
      <Box display='flex' flexDirection='column' justifyContent='space-between'>
      
          <Box m="1.5rem 1rem 1rem 1rem">
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display="flex" alignItems="center">
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={theme.palette.mode === "dark" ? "white" : ""}
                >
                  ECOMVISION
                </Typography>
              </Box>
              {!isNonMobile && (
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
          </Box>

          <List>
            {navItems.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography
                    color={theme.palette.secondary.lighter}
                    key={text}
                    sx={{ m: "2.25rem 0 1rem 1rem" }}
                  >
                    {text.toLocaleUpperCase()}
                  </Typography>
                );
              }
              const lcText = text.toLocaleLowerCase();

              return (
                // LsitItem has a default padding
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${lcText}`);
                      setActive(lcText);
                    }}
                    sx={{
                      backgroundColor:
                        active === lcText
                          ? theme.palette.secondary.dark
                          : "transparent",
                      color:
                        active === lcText
                          ? theme.palette.primary.white
                          : theme.palette.secondary.light,
                    }}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>

                    <ListItemText primary={text} />
                    {active === lcText && (
                      <ChevronRightOutlined sx={{ ml: "auto" }} />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
       

        <Box
          display="flex"
          alignItems="center"
          alignContent="center"
          gap="2rem"
         
         >
          <Box display="flex" alignItems="center" justifyContent="space-around">
            <IconButton>
              <Avatar sx={{ width: "35px", height: "35px" }} alt="Remy Sharp" />
            </IconButton>
            <Stack gap="0" direction="column">
              <Typography fontSize=".8rem">MR X</Typography>
              <Typography fontSize=".8rem"> Admin</Typography>
            </Stack>
          </Box>
          <SettingsOutlinedIcon
            sx={{ width: "31px", height: "31px" }}
          ></SettingsOutlinedIcon>
        </Box>
      </Box>
    </Box>
  );
};
