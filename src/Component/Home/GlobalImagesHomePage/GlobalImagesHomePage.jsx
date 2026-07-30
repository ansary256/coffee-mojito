import { Box, Container, Grid } from '@mui/material';


const images = [
    { id: 1, src: 'images/galleryHomePage-1.webp', alt: 'تصویر ۱', mdSize: 3 },
    { id: 2, src: 'images/galleryHomePage-2.webp', alt: 'تصویر ۲', mdSize: 4 },
    { id: 3, src: 'images/galleryHomePage-3.webp', alt: 'تصویر ۳', mdSize: 5 },
    { id: 4, src: 'images/galleryHomePage-4.webp', alt: 'تصویر ۴', mdSize: 6 },
    { id: 5, src: 'images/galleryHomePage-5.webp', alt: 'تصویر ۵', mdSize: 6 },
];

const GlobalImagesHomePage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Grid container spacing={3}>
                {images.map((item) => (
                    <Grid key={item.id} size={{ xs: 12, md: item.mdSize }}>
                        <Box
                            component="img"
                            src={item.src}
                            alt={item.alt}
                            sx={{
                                width: '100%',
                                height: { xs: '250px', md: '300px' },
                                objectFit: 'cover',
                                borderRadius: 2,
                                display: 'block',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxSizing: 'border-box',
                                },
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
export default GlobalImagesHomePage;




