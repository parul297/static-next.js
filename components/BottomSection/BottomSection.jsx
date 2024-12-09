"use client";
import { Stack, styled } from "@mui/material";
import ImageContainer from "./ImageContainer";
import HeadContainer from "./HeadContainer";

const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {},
}));

function BottomSection() {
  return (
    <Container>
      {/* heading */}
      <HeadContainer />

      {/* content */}
      <ImageContainer />
    </Container>
  );
}

export default BottomSection;
