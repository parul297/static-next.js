"use client";
import edenPharmacyImg from "../../public/logo.webp";
import { Box, styled } from "@mui/material";
import Image from "next/image";

const ImageStyle = styled(Image)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(15),
    height: theme.spacing(4.5),
  },
}));

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "space-between", sm: "space-around" },
      }}
    >
      <ImageStyle src={edenPharmacyImg} alt="edenPharmacyImg" quality={10} />
      <Box></Box>
    </Box>
  );
}

export default Header;
