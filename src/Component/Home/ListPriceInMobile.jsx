


import { Box, Container, Grid } from "@mui/material";
import FoodList from "./FoodList";
import MocktailList from "./MocktailList";

const ListPriceInMobile = ({ isMobile }) => {
    return (
        <Container sx={{
            zIndex: 2,
            pt: 1,
            overflow: 'hidden',
            display: isMobile
                ? { xs: 'block', lg: 'none' }
                : { xs: 'none', lg: 'block' }
        }}>
            <Grid container spacing={5}>
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} sx={{ textAlign: "right", zIndex: "1" }}>
                    <FoodList />
                </Grid>
                <Grid size={{ lg: 4 }} sx={{ display: { xs: 'none', lg: 'block' } }} />
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} sx={{ textAlign: "right", zIndex: "1" }}>
                    <MocktailList />
                </Grid>
            </Grid>
        </Container>
    )
}
export default ListPriceInMobile;