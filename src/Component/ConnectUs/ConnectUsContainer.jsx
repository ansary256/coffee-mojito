import { Container, Grid } from "@mui/material";
import ContactUsCards from "./ContactUsCards";
import CoffeeBeansBackground from "../../BackGrounds/CoffeeBeansBackground";

const ConnectUsContainer = () => {
    return (
        <Container >
            <Grid container spacing={4} sx={{
                position: "relative",
                justifyContent: 'center',
                width: '100%',
                height: { xs: "auto", md: "100vh" },
                alignItems: "center",
                py: 10,
                px: { xs: 2, md: 6 },
                direction: 'rtl',
                overflow: "hidden"
            }}>
                <CoffeeBeansBackground
                    sx={{
                        position: 'fixed',
                        top: 0,
                        right: { xs: "-25%", lg: "0", md: "-10%" },
                        width: { xs: '550px', lg: "1000px", md: "100%" },
                        height: { xs: '450px', lg: "100%", md: "100%" },
                        transform: { xs: 'rotate(-25deg)', lg: 'rotate(10deg)', md: 'rotate(10deg)' },
                        objectFit: 'cover',
                        zIndex: -1,
                        opacity: 0.5,
                    }}
                />
                <ContactUsCards />
            </Grid>
        </Container>
    )
}
export default ConnectUsContainer;