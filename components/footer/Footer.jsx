"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import PhoneImg from "../../public/FooterImg/phone.svg";
import EmailImg from "../../public/FooterImg/Component-2-1.svg.svg";
import LocationImg from "../../public/FooterImg/Component-2-2.svg.svg";
import Logo from "../../public/logo.webp";
import Image from "next/image";
import Landicon from "../../public/FooterImg/location.svg";

const FooterContainer = styled(Stack)(({ theme }) => ({
  background: theme.palette.secondary.main,
  padding: theme.spacing(3.2),
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3, 0),
  },
}));

const ContactBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "center",
  background: theme.palette.secondary.light,
  padding: theme.spacing(1.6, 9, 1.6, 7),

  borderRadius: theme.spacing(1.5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0),
    gap: theme.spacing(0),
    minWidth: "250px",
    minHeight: "60px",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  "& > img": {
    height: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    "& > img": {
      height: "30px",
    },
  },
}));

const Contact = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: theme.spacing(1.9),
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: { fontSize: theme.spacing(1.3) },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: theme.spacing(1.9),
  fontWeight: 500,

  [theme.breakpoints.down("sm")]: { fontSize: theme.spacing(1.3) },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#e3e3e3",
  fontSize: theme.spacing(1.4),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1.3),
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(15),
  flexWrap: "wrap",

  "& img": {
    width: "300px",
    height: "80px",
  },

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    gap: theme.spacing(1),
    "& img": {
      width: "150px",
      height: "40px",
    },
  },
}));

function Footer() {
  return (
    <FooterContainer>
      <Stack sx={{ gap: { xs: 2, sm: 4 }, width: { xs: "90%", sm: "80%" } }}>
        <Box
          sx={{
            display: "flex ",
            justifyContent: "center",
            gap: { xs: 1, sm: 3 },
            flexWrap: "wrap",
          }}
        >
          <Stack>
            <ContactBox>
              <ImageBox>
                <Image src={PhoneImg} alt="PhoneImg" />
              </ImageBox>
              <Contact>
                <Heading>Phone Number</Heading>
                <Title>+974 3118 1843</Title>
              </Contact>
            </ContactBox>
          </Stack>

          <ContactBox>
            <ImageBox>
              <Image src={EmailImg} alt="EmailImg" />
            </ImageBox>
            <Contact>
              <Heading>Email Address</Heading>
              <Title>Elbrithcqhr@gmail.com</Title>
            </Contact>
          </ContactBox>

          <ContactBox>
            <ImageBox>
              <Image src={LocationImg} alt="LocationImg" />
            </ImageBox>
            <Contact>
              <Heading>Office Location</Heading>
              <Title>Ambassador Street, Zone 61,</Title>
            </Contact>
          </ContactBox>
        </Box>

        <LogoBox>
          <Box>
            <Image src={Logo} alt="Logo" quality={10} />
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "28%" }, color: "white" }}>
            <Description>
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </Description>
          </Box>
        </LogoBox>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Image src={Landicon} alt="location" />
          <Description>
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </Description>
        </Box>
      </Stack>
    </FooterContainer>
  );
}

export default Footer;
