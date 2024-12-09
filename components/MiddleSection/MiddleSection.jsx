"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";

import Img6 from "../../public/CenterImages/Demo.webp";
import Image from "next/image";
import { Dummy_Ingredients } from "../../data/index";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {},
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "80%",
  flexWrap: "wrap",
  gap: theme.spacing(3),
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(1), width: "90%" },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#17414F",
  fontSize: theme.spacing(4),
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: { fontSize: theme.spacing(2) },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#727272",
  fontSize: theme.spacing(1.6),

  [theme.breakpoints.down("sm")]: { fontSize: theme.spacing(1.2) },
}));

const ImageStyle = styled(Image)(({ theme }) => ({
  width: 130,
  height: 260,
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

const ImageContainer = styled(Stack)(({ theme }) => ({
  minWidth: 400,
  maxWidth: 400,
  minHeight: 260,
  maxHeight: 260,

  borderRadius: theme.spacing(1),
  position: "relative",
  overflow: "hidden",
  color: theme.palette.common.white,
  padding: theme.spacing(3),

  "& > #action-btn": {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    zIndex: 1,
  },

  "& > #action-btn .btn": {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(1.6),
    fontWeight: 600,
    border: "none",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "translateY(-3px)",
    },
  },

  "& > .image-overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },

  "& > .content": {
    position: "relative",
    zIndex: 1,
  },

  "& > .content .title": {
    fontSize: theme.spacing(2.4),
    color: theme.palette.secondary.dark,
    fontWeight: 600,
  },

  "& > .content .description": {
    fontSize: theme.spacing(1.8),
    color: theme.palette.grey[300],
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: 300,
    maxWidth: 300,
    minHeight: 200,
    maxHeight: 200,

    "& > .content .title": {
      fontSize: theme.spacing(1.8),
      color: theme.palette.secondary.dark,
      fontWeight: 600,
    },

    "& > .content .description": {
      fontSize: theme.spacing(1.4),
      color: theme.palette.grey[300],
    },

    "& > #action-btn .btn": {
      fontSize: theme.spacing(1.2),
    },
  },
}));

function MiddleSection() {
  return (
    <MainContainer>
      <Container>
        <Stack sx={{ width: { xs: "85%", sm: "38%" }, gap: { xs: 0, sm: 2 } }}>
          <Typography
            sx={{
              textTransform: "Uppercase",
              fontSize: { xs: "12px", sm: "16px" },
              color: "#003569",
              fontWeight: 600,
            }}
          >
            Ingredients
          </Typography>
          <Title>Better Ingredients</Title>

          <Description>
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!
          </Description>
        </Stack>

        {Dummy_Ingredients.map((ingredient) => (
          <ImageContainer key={ingredient.id}>
            <Box className="image-overlay">
              <Image
                src={ingredient.img}
                alt={ingredient.title}
                fill
                style={{ objectFit: "cover" }}
                loading={"lazy"}
                placeholder="blur"
                quality={10}
              />
            </Box>

            <Box className="content">
              <Typography className="title">{ingredient.title}</Typography>
              <Typography className="description">
                {ingredient.description}
              </Typography>
            </Box>

            <Box id="action-btn">
              <button className="btn">{ingredient.buttonText}</button>
            </Box>
          </ImageContainer>
        ))}

        <ImageStyle src={Img6} alt="demo" />
      </Container>
    </MainContainer>
  );
}

export default MiddleSection;
