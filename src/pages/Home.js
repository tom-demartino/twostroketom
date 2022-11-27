import React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import tstVid from "../assets/video/two-stroke-tom.mov";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Typography variant="h1">Welcome to TwoStrokeTom.com</Typography>
        <video width="400" controls autoPlay>
          <source src={tstVid} type="video/mp4" />
        </video>
      </Container>
    </>
  );
}
