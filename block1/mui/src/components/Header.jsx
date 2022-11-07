import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { sizing } from "@mui/system";
function Header() {
  return (
    <AppBar sx={{ backgroundColor: "white", boxShadow: 0 }}>
      <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontStyle: "Mulish",
          }}
        >
          <Typography fontSize={"27px"} color="black">
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
