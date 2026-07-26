import { Button, Container, Grid, Typography } from "@mui/material";




const HeaderHeroTexts = () => {
    return (
        <Container sx={{
            zIndex: 2,
            height: '85vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            py: 4,
            overflow: 'hidden'
        }}>
            <Grid container>
                <Grid size={{ xs: 12 }} sx={{
                    textAlign: 'center',
                    zIndex: "1",
                }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '3.5rem', sm: '7rem', md: '11rem' },
                            fontWeight: 900,
                            letterSpacing: '0.05em',
                            color: 'transparent',
                            backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #7E7E7E 100%)',
                            backgroundClip: 'text',
                            textTransform: 'uppercase',
                            fontFamily: '"Modern Negra", sans-serif'
                        }}
                    >
                        MOJITO
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{
                zIndex: "1"
            }}>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }} sx={{
                    order: { xs: 3, md: 1 }
                }}>
                    <Container>
                        <Typography variant="body1" sx={{
                            color: 'text.secondary',
                            mb: 2,
                            textAlign: "right",
                            fontSize: '0.95rem',
                            lineHeight: 1.6
                        }}>
                            هر کوکتل در منوی ما ترکیبی از مواد اولیه ممتاز، ذوق و خلاقیت، و دستورالعمل‌های ماندگار است که برای لذت‌بخشیدن به حواس شما طراحی شده‌اند
                        </Typography>
                        <Button
                            variant="text"
                            sx={{
                                color: 'text.primary',
                                p: 0,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                '&:hover': { color: 'primary.main', background: 'transparent' }
                            }}
                        >
                            ⬅ {" "}دیدن کوکتل ها
                        </Button>
                    </Container>
                </Grid>
                <Grid size={{ lg: 4 }} sx={{ display: { xs: 'none', lg: 'block' }, order: 2 }} />
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }} sx={{
                    textAlign: "right",
                    order: { xs: 1, md: 3 }
                }}>
                    <Container>
                        <Typography variant="body2" sx={{ color: 'text.primary', mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
                            خنک | تازه | کلاسیک
                        </Typography>
                        <Typography variant="h4" sx={{
                            fontWeight: 'bold',
                            fontFamily: '"Modern Negra", sans-serif', color: 'primary.main', leading: 1.2
                        }}>
                            جرعه ای بنوشید <br /> از عصاره تابستان
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}
export default HeaderHeroTexts;