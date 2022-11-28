import React from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Error404() {
  return (
    <>
      <Container maxWidth="xl" sx={{ textAlign: "center", marginTop: "70px" }}>
        <Typography variant="h3">Page not found</Typography>
        <Link to="/">Go home</Link>
      </Container>
    </>
  );
}
