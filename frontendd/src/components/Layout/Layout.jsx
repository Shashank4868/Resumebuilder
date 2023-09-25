import React from "react";

import { Container, Card, Typography } from "@mui/material";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Card elevation={3} className="mt-8 p-8 mb-8">
          <Typography variant="h6" padding={2} align="center">
            {props.title}
          </Typography>
          <hr className="w-[90%] m-auto" />
          {props.children}
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
