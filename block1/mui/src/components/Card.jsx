import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

//function ActionAreaCard() {

const ActionAreaCard = (props) => {
  const { name, image, header, body } = props;

  return (
    <Card sx={{ maxWidth: 345, height: "400px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Stack
        flexDirection={"row"}
        gap={2}
        justifyContent={"center"}
        color="#6D7D8B"
      >
        <Box component="img" sx={{ height: 35, width: 35 }} src={image} />
        <Typography>{name}</Typography>
        <Typography>|</Typography>
        <Typography color="#6D7D8B">2nd January 2022</Typography>
      </Stack>
    </Card>
  );
};
export default ActionAreaCard;
