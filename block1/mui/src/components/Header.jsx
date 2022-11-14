import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import { ColorModeContext } from "../context/ThemeContext";
import React, { useContext } from "react";

function Header({ child }) {
  const { theme, changeTheme, isDark } = useContext(ColorModeContext);

  return (
    <AppBar
      sx={{
        backgroundColor: theme.backgroundColor,
        boxShadow: 0,
      }}
    >
      <Container maxWidth="xl" sx={{ backgroundColor: theme.backgroundColor }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontStyle: "Mulish",
          }}
        >
          <Typography fontSize={"27px"} color={theme.color}>
            team.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
              color: "#6D7D8B",
            }}
          >
            <Switch checked={isDark} onChange={() => changeTheme()} />
            {/* <Switch checked={isDark} onChange={() => isTheme()} /> */}
            <Typography>
              <u>Products</u>
            </Typography>
            <Typography>
              {" "}
              <u>Services</u>
            </Typography>
            <Typography>
              {" "}
              <u>Contact</u>
            </Typography>
            <Typography>
              {" "}
              <u>Log In</u>
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ border: "2px solid #4DA0FD" }}
            >
              <Typography>Get Access </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
