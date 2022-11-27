import React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Error404() {
  return (
    <>
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Typography variant="h3">Page not found</Typography>
        <a href="/">Go home</a>
      </Container>
    </>
  );
}
