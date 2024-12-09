import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { alertMessage } from "../../data/index";



const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: theme.spacing(5),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(1) },
}));

const ImageBox = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(1) },
}));

const ImageWrapper = styled(Box)(
  ({ "data-large": large, theme }) => ({
    position: "relative",
    height: large === "true" ? theme.spacing(50) : theme.spacing(24),
    width: "100%",
    "& > img": {
      objectFit: "cover",
      objectPosition: large === "true" ? "center" : "top",
      width: "100% !important",
      height: "100% !important",
      position: "relative !important",
    },
    [theme.breakpoints.down("sm")]: {
      height: large === "true" ? theme.spacing(38) : theme.spacing(18),
    },
  })
);

const TitleOverlay = styled(Typography)(
  ({ theme, "data-large": large }) => ({
    position: "absolute",
    top: large === "true" ? "20%" : "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: theme.palette.common.white,
    width: "80%",
    fontSize: theme.spacing(2),
    fontWeight: 700,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.spacing(1.5),
      top: large === "true" ? "20%" : "45%",
    },
  })
);

const DateBadge = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "20px",
  left: "-10px",
  background: "#003569",
  color: theme.palette.common.white,
  padding: theme.spacing(0.6, 2.5),
  borderTopRightRadius: theme.spacing(1.5),
  borderBottomRightRadius: theme.spacing(1.5),
  fontSize: theme.spacing(1.6),
  fontWeight: 500,
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1.2),
  },
}));

function ImageContainer() {
  return (
    <Container>
      {alertMessage.map((column, columnIndex) => (
        <ImageBox key={columnIndex}>
          {column.map((image, imageIndex) => (
            <ImageWrapper
              key={`${columnIndex}-${imageIndex}`}
              data-large={image.isLarge.toString()}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading={"lazy"}
                placeholder="blur"
                style={{ borderRadius: "15px" }}
                quality={30}
              />
              <TitleOverlay data-large={image.isLarge.toString()}>
                {image.title}
              </TitleOverlay>
              <DateBadge>{image.date}</DateBadge>
            </ImageWrapper>
          ))}
        </ImageBox>
      ))}
    </Container>
  );
}

export default ImageContainer;
