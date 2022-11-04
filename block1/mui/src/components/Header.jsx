import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "react";
import Container from "@mui/material/Container";
import { sizing } from "@mui/system";
function Header() {
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>team.</Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography>Products</Typography>
            <Typography>Services</Typography>
            <Typography>Contact</Typography>
            <Typography>Log In</Typography>
            <Button variant="outlined" sx={{ border: "1px solid white" }}>
              <Typography color="white">Get Access </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
