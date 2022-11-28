import React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import tstVid from "../assets/video/two-stroke-tom.mov";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl" sx={{ textAlign: "center", marginTop: "70px" }}>
        <Typography variant="h4" sx={{ marginBottom: "3rem" }}>
          Welcome to TwoStrokeTom.com
        </Typography>
        <video width="300" controls autoPlay>
          <source src={tstVid} type="video/mp4" />
        </video>
      </Container>
    </>
  );
}
