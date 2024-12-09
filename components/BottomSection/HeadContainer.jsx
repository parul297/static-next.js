"use client";
import { Stack, styled, Typography } from "@mui/material";

const Container = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  margin: theme.spacing(5, 0),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(3, 0),
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: "uppercase",
  fontWeight: 600,
  fontSize: theme.spacing(1.4),
  [theme.breakpoints.down("sm")]: { fontSize: theme.spacing(1.4) },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
  fontSize: theme.spacing(4),
  [theme.breakpoints.down("sm")]: { fontSize: theme.spacing(3) },
}));

function HeadContainer() {
  return (
    <Container>
      <Heading>Our Blog</Heading>
      <Title>Latest news</Title>
    </Container>
  );
}

export default HeadContainer;
