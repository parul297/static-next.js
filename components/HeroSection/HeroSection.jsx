"use client";
import { Stack, styled, Typography } from "@mui/material";
import CenterContainer from "./CenterContainer";

const MainContainer = styled(Stack)(({ theme }) => ({
  background: theme.palette.background.paper,
  height: theme.spacing(80),
  alignItems: "center",
  margin: theme.spacing(0, 1),

  [theme.breakpoints.down("sm")]: { height: theme.spacing(85) },
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.spacing(12),
  fontWeight: 700,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(4),
  },
}));

function HeroSection() {
  return (
    <MainContainer>
      {/* heading */}
      <Heading>Essential Vitamins</Heading>

      {/* center content */}
      <CenterContainer />

      {/* bottom content */}
    </MainContainer>
  );
}

export default HeroSection;
