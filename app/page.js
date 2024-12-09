import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Box, Stack } from "@mui/material";
import HeroSection from "../components/HeroSection/HeroSection";
import MiddleSection from "../components/MiddleSection/MiddleSection";
import BottomSection from "../components/BottomSection/BottomSection";
import BottomContainer from "../components/HeroSection/BottomContainer";

function Home() {
  return (
    <Stack>
      {/* header */}
      <Header />
      {/* main container */}
      <Stack sx={{ flexGrow: 1, maxWidth: 1930, margin: "0 auto" }}>
        {/* Top Content */}
        <HeroSection />
        <BottomContainer />

        <Box sx={{ mt: { xs: "3rem", sm: "5rem" } }} />
        {/* Middle Content */}
        <MiddleSection />

        {/* Bottom Content */}
        <BottomSection />
      </Stack>
      {/* footer */}
      <Footer />
    </Stack>
  );
}

export default Home;
