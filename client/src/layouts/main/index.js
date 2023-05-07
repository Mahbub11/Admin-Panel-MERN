import React, { useState } from "react";
import { Box, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../../components/app/NavBar";
import { SideBar } from "../../components/app/SideBar";

export const MainLayout = () => {
  const isNonMobile= useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen]= useState(true);

  console.log(isSidebarOpen);
  
  return (
    <Stack display={isNonMobile ? "flex" : ""}  direction='row'>
      <SideBar isNonMobile={isNonMobile} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
       drawerWidth="250px" />
      <Box flexGrow={1}>
        <NavBar  isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        <Outlet />
      </Box>
      
    </Stack>
  );
};
