import MembersInCoffeeSection from "./MembersInCoffeeSection";
import StatsSection from "./StateSection";
import GlassBackgroundOrbs from "../../BackGrounds/GlassBackgroundOrbs";
import { Box } from "@mui/material";
import CoffeeHeroSection from "./CoffeeHeroSection";


const AboutUsContainer = () => {
    return (
        <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
            {/* پس‌زمینه شیشه‌ای تثبیت‌شده در کل ارتفاع صفحه */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            >
                <GlassBackgroundOrbs />
            </Box>

            {/* محتوای اصلی روی پس‌زمینه قرار می‌گیرد */}
            <Box sx={{
                position: 'relative',
                zIndex: 1,
                py: 15,

            }}>
                <CoffeeHeroSection /> 
                <MembersInCoffeeSection />
                <StatsSection />
            </Box>
        </Box>
    )
}
export default AboutUsContainer;