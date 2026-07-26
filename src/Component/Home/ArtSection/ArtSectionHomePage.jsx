import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const leftFeatures = [
    "مواد اولیه دست‌چین‌شده",
    "تکنیک‌های شاخص",
    "هنرنمایی در کارِ بارتندری",
    "طعم‌های تازه و درهم‌آمیخته"
];

const rightFeatures = [
    "ترکیب‌های کاملاً متوازن",
    "به‌شکلی بی‌نقص تزیین‌شده",
    "همیشه کاملاً یخ",
    "با مهارت تمام، تکان‌داده و هم‌زده‌شده"
];

const ArtSectionHomePage = () => {
    return (
        <Container sx={{
            py: 3,
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <Grid container>
                <Grid size={{ xs: 12, }} sx={{ textAlign: "center" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '3.5rem', sm: '8.5rem', md: '12rem', lg: '16rem' },
                            fontWeight: 900,
                            color: 'rgba(255, 255, 255, 0.12)',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            userSelect: 'none',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        The ART
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 3 }} sx={{ order: { xs: 3, sm: 3, md: 3, lg: 3 } }}>
                    <Stack spacing={2.5}>
                        {leftFeatures.map((text, index) => (
                            <Stack
                                key={index}
                                direction="row"
                                spacing={1.5}
                                sx={{
                                    display: "flex",
                                    width: '100%',
                                    justifyContent: "end",
                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="body1" sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
                                    {text}
                                </Typography>
                                <CheckCircleIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
                            </Stack>
                        ))}
                    </Stack>
                </Grid>
                <Grid size={{ xs: 2, sm: 3, md: 4, lg: 6 }}
                    sx={{ order: { xs: 1, sm: 1, md: 1, lg: 2 }, width: '100%' }}>
                    <Box component="img"
                        sx={{
                            width: "100%",
                            objectFit: "cover",
                            position: "relative",
                            top: "-45%",
                        }}
                        src='/images/GlassArtPhoto.webp'
                    />
                </Grid>
                <Grid size={{ xs: 12, lg: 3 }} sx={{
                    order: { xs: 4, sm: 4, md: 4, lg: 1 },
                    boxSizing: "border-box",
                    pr: { xs: "2rem", sm: "4rem", md: "6rem", lg: "0" }
                }}>
                    <Stack spacing={2.5}>
                        {rightFeatures.map((text, index) => (
                            <Stack
                                key={index}
                                direction="row"
                                spacing={1.5}
                                sx={{
                                    display: "flex",
                                    width: '100%',
                                    justifyContent: "end",
                                    alignItems: "center"
                                }}
                            >
                                <Typography variant="body1" sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
                                    {text}
                                </Typography>
                                <CheckCircleIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
                            </Stack>
                        ))}
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12 }} sx={{
                    order: { xs: 2, sm: 2, md: 2, lg: 4 },
                    display: { xs: 'flex', lg: "none" },
                    justifyContent: 'center',
                    alignItems: "center"
                }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: 'serif',
                            fontWeight: 700,
                            letterSpacing: '0.02em',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                        }}
                    >
                        نوشیدنی ای لذت بخش
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ py: 3 }}>
                <Grid size={{ lg: 2 }} sx={{ display: { xs: "none", lg: "block" } }}>
                    <Box component="img"
                        sx={{
                            width: "100%",
                            objectFit: "cover",
                            position: "relative",
                            top: 0,
                            rotate: "15deg"
                        }}
                        src='/images/GlassLeftArtSection.webp'
                    />
                </Grid>
                <Grid size={{ xs: 12, lg: 8 }}>
                    <Box component="img"
                        sx={{
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "20px",
                            boxShadow: "10px 20px 30px 0 rgba(0, 0, 0,1)"
                        }}
                        src='/images/GlassArtInnerPhoto.webp'
                    />
                </Grid>
                <Grid size={{ lg: 2 }} sx={{
                    display: { xs: "none", lg: "block" },
                }}>
                    <Box component="img"
                        sx={{
                            width: "100%",
                            objectFit: "cover",
                            rotate: "-15deg",
                            position: "relative",
                            top: "60%",
                        }}
                        src='/images/GlassRightArtSection.webp'
                    />
                </Grid>
                <Grid
                    size={{ xs: 12 }}
                    sx={{
                        py: { xs: 6, md: 8 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
                            letterSpacing: '0.02em',
                            color:"primary.main"
                        }}
                    >
                        با مهارت ساخته شده، با عشق ریخته شده
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.primary',
                            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem' },
                            fontWeight: 400,
                            maxWidth: '600px',
                            letterSpacing: '0.01em',
                        }}
                    >
                        این فقط یک نوشیدنی نیست؛ لحظه‌ای است که با دقت و ظرافت، تنها برای شما خلق شده است
                    </Typography>
                </Grid>
            </Grid>
        </Container >
    );
};

export default ArtSectionHomePage;