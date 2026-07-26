
import HeroSectioinHomePage from "./HeroSectioinHomePage";
import AboutDetailSection from "./AboutDetailSection";
import { Box } from "@mui/material";
import ListPriceInMobile from "./ListPriceInMobile";
import GlobalImagesHomePage from "./GlobalImagesHomePage/GlobalImagesHomePage";
import ArtSectionHomePage from "./ArtSection/ArtSectionHomePage";




const HomeContainer = () => {
    return (
        <Box sx={{ pt: { lg: 5, md: 2, xs: 5 }, width: "100%" }}>
            <HeroSectioinHomePage />
            <ListPriceInMobile isMobile={true} />
            <AboutDetailSection />
            <GlobalImagesHomePage />
            <ArtSectionHomePage />
        </Box>
    )
}
export default HomeContainer;