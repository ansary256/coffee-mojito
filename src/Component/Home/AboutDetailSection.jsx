import React from 'react';
import { Box, Container, Typography, Rating, AvatarGroup, Avatar, Grid } from '@mui/material';

const AboutDetailSection = () => {
    return (
        <Container sx={{ py: 3 }} component="section">
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} sx={{
                    order: { xs: 1, sm: 2 }
                }}>

                    <Typography
                        variant="h2"
                        sx={{
                            fontFamily: '"Modern Negra", "Playfair Display", serif',
                            color: "text.primary",
                            fontWeight: 700,
                            fontSize: { xs: '2rem', sm: '2.8rem', md: '3.4rem' },
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                            textAlign: 'right',
                        }}
                    >
                        جایی که تک‌تک جزئیات، از له کردن مواد تا تزئین نهایی، اهمیت دارند
                    </Typography>

                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} sx={{
                    order: { xs: 2, sm: 1 }
                }}>
                    {/* متن توضیحات */}
                    <Box sx={{ width: "100%" }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#D1CDA5',
                                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                                lineHeight: 1.7,
                                fontWeight: 300,
                                mb: 4,
                                textAlign: 'right',
                            }}
                        >
                            هر کوکتلی که سرو می‌کنیم، بازتابی از وسواس ما نسبت به جزئیات است؛ از نخستین مرحله‌ی له کردن و ترکیب مواد گرفته تا آخرین مرحله‌ی تزئین. همین دقت و توجه است که یک نوشیدنی ساده را به تجربه‌ای واقعاً به‌یادماندنی بدل می‌کند
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end', // 👈 راست‌چین کردن تمام محتوای این بخش
                            gap: 2,
                            flexWrap: 'wrap',
                            width: '100%',
                        }}
                    >
                        {/* ۱. کپسول آواتارها */}
                        <Box
                            sx={{
                                width: 'fit-content',
                                backgroundColor: '#121212',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '50px',
                                px: 1.5,
                                py: 0.8,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <AvatarGroup
                                max={4}
                                sx={{
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        border: '2px solid #121212',
                                    },
                                }}
                            >
                                <Avatar alt="User 1" src="images/userCommentHomePage1.jpg" />
                                <Avatar alt="User 2" src="images/userCommentHomePage2.jpg" />
                                <Avatar alt="User 3" src="images/userCommentHomePage3.jpg" />
                                <Avatar
                                    sx={{
                                        backgroundColor: '#8C90FC',
                                        color: '#ffffff',
                                    }}
                                >
                                    +5k
                                </Avatar>
                            </AvatarGroup>
                        </Box>

                        {/* ۲. خط جداکننده عمودی */}
                        <Box
                            sx={{
                                width: '1px',
                                height: '45px',
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            }}
                        />

                        {/* ۳. بخش ستاره‌ها و عدد امتیاز */}
                        <Box sx={{ textAlign: 'right' }}>
                            <Rating
                                value={5}
                                readOnly
                                precision={0.5}
                                sx={{
                                    color: '#ffffff',
                                    fontSize: '1.1rem',
                                    mb: 0.5,
                                    '& .MuiRating-iconEmpty': { color: '#444444' },
                                }}
                            />

                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '1.3rem',
                                    color: '#ffffff',
                                    lineHeight: 1,
                                    mb: 0.5,
                                }}
                            >
                                4.5/5
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{
                                    color: '#888888',
                                    fontSize: '0.75rem',
                                    display: 'block',
                                }}
                            >
                                بیشتر از +12000 مشتری
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid >
        </Container >
    );
};
export default AboutDetailSection;