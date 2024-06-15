import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import state, { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.default;
  const primaryLight = theme.palette.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  return;
  <FlexBetween padding="1rem 6%" backgroundcolor={alt}>
    <FlexBetween gap="1.75rem">
      <Typography
        fontWeight="bold"
        fontSize="clamp(1rem,2rem,2.50rem)"
        color="primary"
        onclick={() => navigate("/home")}
        sx={{
          "&:hover": {
            color: primaryLight,
            cursor: "pointer",
          },
        }}
      >
        Movipic
      </Typography>
      {isNonMobileScreens && (
        <FlexBetween
          background={neutralLight}
          borderRadius="9px"
          gap="3rem"
          padding="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search . . . "></InputBase>
          <IconButton>
            <Search></Search>
          </IconButton>
        </FlexBetween>
      )}
    </FlexBetween>
    {/* DESKTOP NAV*/}
    {isNonMobileScreens ? (
      <FlexBetween gap="2rem">
        <IconButton onclick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontSize: "25px" }} />
          ) : (
            <LightMode sx={{ color: dark, fontSize: "25px" }} />
          )}
        </IconButton>
        <Message sx={{ fontSize: "25px" }} />
        <Notifications sx={{ fontSize: "25px" }}></Notifications>
        <Help sx={{ fontSize: "25px" }}></Help>
        <FormControl variant="standard" value={fullName}>
          <select
            sx={{
              backgroundcolor: neutralLight,
              width: "150px",
              borderRadius: "0.25rem",
              p: "0.25rem 1rem",
              "& .MuiSvgIcon-root": {
                pr: "0.25rem",
                width: "3rem",
              },
              "& .MuiSelect-select:focus": {
                backgroundcolor: neutralLight,
              },
            }}
            input={<InputBase></InputBase>}
          >
            <menuitem value={fullName}>
              <Typography>{fullName}</Typography>
            </menuitem>
            <menuitem onclick={() => dispatch(setLogout())}>Log Out</menuitem>
          </select>
        </FormControl>
      </FlexBetween>
    ) : (
      <IconButton onclick={() => setIsMobileToggled(!isMobileMenuToggled)}>
        <menu></menu>
      </IconButton>
    )}

    {/* mobile nav  */}
    {!isNonMobileScreens && !isMobileMenuToggled && (
      <Box
        position="fixed"
        right="0"
        bottom="0"
        height="100%"
        zIndex="10"
        maxWidth="500px"
        minWidth="300px"
        backgroundcolor={background}
      >
        {/* close icons */}
        <Box display="flex" justifyContent="flex-end" p="1rem">
          <IconButton onclick={() => setIsMobileToggled(!isMobileMenuToggled)}>
            <close></close>
          </IconButton>
        </Box>
        {/* menu items */}
        <FlexBetween
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="3rem"
        >
          <IconButton
            onclick={() => dispatch(setMode())}
            sx={{ fontSize: "25px" }}
          >
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }}></Notifications>
          <Help sx={{ fontSize: "25px" }}></Help>
          <FormControl variant="standard" value={fullName}>
            <select
              sx={{
                backgroundcolor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundcolor: neutralLight,
                },
              }}
              input={<InputBase></InputBase>}
            >
              <menuitem value={fullName}>
                <Typography>{fullName}</Typography>
              </menuitem>
              <menuitem onclick={() => dispatch(setLogout())}>Log Out</menuitem>
            </select>
          </FormControl>
        </FlexBetween>
      </Box>
    )}
  </FlexBetween>;
};
export default Navbar;
