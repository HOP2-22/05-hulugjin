import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Skeleton } from "@mui/material";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const instance = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs/search?api_key=YFPWPBeNZj6LPZu80VQG9b1lHafYd6Im&q=${inputValue}&limit=25&offset=0&rating=g&lang=en`,
  });

  const fetchGiphy = async () => {
    setLoading(true);
    try {
      const res = await instance.get("/");
      setGiphy(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    // REQUEST
    const request = instance.interceptors.request.use(
      function (config) {
        console.log("request");
        return config;
      },
      function (error) {
        console.log(error + "ohno");
        return Promise.reject(error);
      }
    );

    // RESPONSE
    const response = instance.interceptors.response.use(
      function (response) {
        console.log("response");
        return response;
      },
      function (error) {
        console.log("response error");
        return Promise.reject(error);
      }
    );
    const interceptor = instance.interceptors.response.use(request, response);
    return () => instance.interceptors.response.eject(interceptor);
  }, [giphy, instance.interceptors.request, instance.interceptors.response]);

  if (error !== "") {
    return (
      <h1>
        <Container maxWidth="sm" sx={{ mt: 50 }}>
          {JSON.stringify(error)}
        </Container>
      </h1>
    );
  }

  if (loading) {
    return (
      <Container maxWidth="sm">
        <Box>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Box>
      </Container>
    );
  }

  return (
    <div>
      <Box sx={{ marginBottom: "40px" }}></Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && fetchGiphy();
          }}
        />
        <Button
          onClick={() => {
            fetchGiphy();
          }}
          sx={{ mt: 2 }}
        >
          Enter
        </Button>
      </div>

      <Box sx={{ marginBottom: "50px" }}></Box>
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6} lg={3} maxWidth="xl">
          {giphy.map((gip) => (
            <img
              key={gip.id}
              src={gip.images.fixed_height.url}
              alt="img"
              style={{ width: "250px", height: "250px" }}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
