"use client";
import { features } from "../../data/index";
import { Box, Grid, styled, Typography } from "@mui/material";
import Image from "next/image";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(-20),

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(-10),
  },
}));

const Container = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  minWidth: theme.spacing(146.4),
  maxWidth: theme.spacing(146.4),
  minHeight: theme.spacing(50),
  maxHeight: theme.spacing(50),

  borderRadius: theme.spacing(4),
  padding: theme.spacing(5),
  position: "relative",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(3),
    minWidth: theme.spacing(34),
    maxWidth: theme.spacing(34),
    minHeight: theme.spacing(26),
  },
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(1),
  color: "white",
  position: "relative",
  bottom: theme.spacing(10),

  [theme.breakpoints.down("sm")]: {
    bottom: theme.spacing(5),
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  background: "white",
  borderRadius: "50%",
  width: theme.spacing(10),
  height: theme.spacing(10),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    width: theme.spacing(3.2),
  },

  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),

    "& img": {
      width: theme.spacing(2),
    },
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: theme.spacing(2.4),

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1.5),
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
  fontSize: theme.spacing(1.6),

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1),
  },
}));

function BottomContainer() {
  return (
    <MainContainer>
      <Container>
        <Grid
          container
          spacing={1}
          sx={{
            ".MuiGrid-item": {
              padding: { xs: "20px 5px 0px 5px", sm: "10px 100px 50px" },
            },
          }}
        >
          {features.map((feature, index) => (
            <Grid item xs={6} md={4} key={index}>
              <FeatureBox>
                <IconCircle>
                  <Image src={feature.icon} alt={feature.title} quality={10}/>
                </IconCircle>
                <Title>{feature.title}</Title>
                <Description>{feature.description}</Description>
              </FeatureBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainContainer>
  );
}

export default BottomContainer;
