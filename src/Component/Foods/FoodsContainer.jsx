import { Box, Container, Grid } from '@mui/material';
import FoodsTabs from './FoodsTabs';
import { useState } from 'react';
import FoodsSlider from "./FoodsSlider";


const FoodsContainer = () => {
    const [activeTab, setActiveTab] = useState('Pizza');
    return (
        <Grid container sx={{
            py: 12,
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden"
        }}>


            {/* برگ ها */}
            <Box component="img" src='/images/vibrant-green-leaf.png' sx={{
                transform: "scaleY(-1)",
                position: "absolute",
                top: "-25%",
                right: 0,
                width: { md: "250px", lg: "300px" },
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }} /><Box component="img" src='/images/vibrant-green-right.png' sx={{
                transform: "rotate(-10deg)",
                position: "absolute",
                bottom: -150,
                left: -30,
                width: { md: "250px", lg: "300px" },
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }} />



            <Grid size={{ xs: 12 }}>
                <Container>
                    <FoodsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                </Container>
                <FoodsSlider activeTab={activeTab} />
            </Grid>
        </Grid>
    )
}
export default FoodsContainer;