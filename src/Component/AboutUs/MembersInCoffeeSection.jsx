import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import StatsSection from "./StateSection";

const timelineDataRight = [
    {
        id: 1,
        position: 'مدیرعامل',
        description: 'رهبری تیم و تدوین استراتژی‌های کلان کافه برای خلق تجربه‌ای متمایز و مدیریت بهینه منابع.',
        image: 'images/ManagerCoffee.webp',
    },
    {
        id: 2,
        position: 'سالن کار',
        description: 'ایجاد اتمسفری گرم و صمیمی، پذیرایی حرفه‌ای از میهمانان و تضمین نظم و نظافت فضای سالن کافه.',
        image: 'images/GarsoneCoffee.webp',
    },
    {
        id: 3,
        position: 'آشپز',
        description: 'طراحی منوی غذایی متنوع، طبخ انواع صبحانه و خوراک‌های باکیفیت و تازه، با تمرکز بر طعم و هنر چیدمان.',
        image: 'images/CHeifCoffee.webp',
    },
    {
        id: 4,
        position: 'باریستا',
        description: 'متخصص عصاره‌گیری قهوه‌های تخصصی، سرو انواع نوشیدنی‌های گرم و سرد با مهارت بالا و خلق لاته آرت‌های جذاب.',
        image: 'images/BaristaCoffee.webp',
    }
];

const timelineDataLeft = [
    {
        id: 1,
        position: 'مدیر داخلی',
        description: 'هماهنگی امور روزمره کافه، نظارت بر عملکرد پرسنل و اطمینان از جریان روان خدمات‌رسانی به مشتریان.',
        image: 'images/InternalManager.webp',
    },
    {
        id: 2,
        position: 'شف قنادی (پسریا)',
        description: 'پخت روزانه انواع کیک، دسر و شیرینی‌های تازه و پرطرفدار کافه‌ای با دستورالعمل‌های اختصاصی.',
        image: 'images/PastryChef.webp',
    },
    {
        id: 3,
        position: 'صندوق‌دار',
        description: 'مدیریت دقیق تراکنش‌های مالی، ثبت سریع سفارش‌ها و ارائه پاسخگویی محترمانه و دقیق به مشتریان.',
        image: 'images/CashierCoffee.webp',
    },
];


const MembersInCoffeeSection = () => {
    return (
        <Grid container sx={{
            direction: "rtl",
            textAlign: "right",
            overflow: 'hidden',
            px: { xs: 1, md: 6 }
        }}>
            <Grid size={{ xs: 12, lg: 6 }}>
                <Timeline position="left" sx={{
                    p: 0,
                    m: 0,
                    // 🎯 ۱. صفر کردن کامل فضای سمت چپ
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                        display: 'none', // در بعضی ورژن‌ها نیازمند display: none است
                    },
                    // 🎯 ۲. در صورتی که OppositeContent وجود داره یا اثر مخرب گذاشته
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0,
                        padding: 0,
                        display: 'none',
                    }
                }}>
                    {timelineDataRight.map((item) => (
                        <TimelineItem key={item.id}>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'rgba(231, 211, 147, 0.2)' }} />
                                <TimelineDot
                                    sx={{
                                        p: 0.5,
                                        bgcolor: 'transparent',
                                        borderColor: 'primary.main',
                                        borderWidth: 2,
                                        boxShadow: '0 0 10px #e7d393'
                                    }}
                                >
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'rgba(231, 211, 147, 0.2)' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: item.id % 2 !== 0 ? 'row' : 'row-reverse',
                                    gap: 3,
                                }}>
                                    {/* تصویر دایره‌ای با فریم سفید و سایه‌دار دقیقاً مثل تصویر */}
                                    <Avatar
                                        src={item.image}
                                        alt={item.position}
                                        sx={{
                                            width: { xs: 110, sm: 140, md: 160 },
                                            height: { xs: 110, sm: 140, md: 160 },
                                            border: '5px solid #ffffff',
                                            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                                            flexShrink: 0,
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.04)'
                                            }
                                        }}
                                    />

                                    {/* بخش متن ساده بدون باکس */}
                                    <Box sx={{ maxWidth: '320px', textAlign: { xs: 'center', sm: 'right' } }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 700,
                                                color: '#ffffff',
                                                fontSize: { xs: '1.2rem', md: '1.5rem' },
                                                mb: 1,
                                                letterSpacing: '0.02em'
                                            }}
                                        >
                                            {item.position || "بدون متن"}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                lineHeight: 1.6,
                                                fontSize: { xs: '0.9rem', md: '1rem' }
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
                <Timeline position="right" sx={{
                    p: 0,
                    m: 0,
                    // 🎯 ۱. صفر کردن کامل فضای سمت چپ
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                        display: 'none', // در بعضی ورژن‌ها نیازمند display: none است
                    },
                    // 🎯 ۲. در صورتی که OppositeContent وجود داره یا اثر مخرب گذاشته
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0,
                        padding: 0,
                        display: 'none',
                    }
                }}>
                    {timelineDataLeft.map((item) => (
                        <TimelineItem key={item.id}>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'rgba(231, 211, 147, 0.2)' }} />
                                <TimelineDot
                                    sx={{
                                        p: 0.5,
                                        bgcolor: 'transparent',
                                        borderColor: 'primary.main',
                                        borderWidth: 2,
                                        boxShadow: '0 0 10px #e7d393'
                                    }}
                                >
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'rgba(231, 211, 147, 0.2)' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: item.id % 2 !== 0 ? 'row' : 'row-reverse',
                                    gap: 3,
                                }}>
                                    {/* تصویر دایره‌ای با فریم سفید و سایه‌دار دقیقاً مثل تصویر */}
                                    <Avatar
                                        src={item.image}
                                        alt={item.position}
                                        sx={{
                                            width: { xs: 110, sm: 140, md: 160 },
                                            height: { xs: 110, sm: 140, md: 160 },
                                            border: '5px solid #ffffff',
                                            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                                            flexShrink: 0,
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.04)'
                                            }
                                        }}
                                    />

                                    {/* بخش متن ساده بدون باکس */}
                                    <Box sx={{ maxWidth: '320px', textAlign: { xs: 'center', sm: 'right' } }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 700,
                                                color: '#ffffff',
                                                fontSize: { xs: '1.2rem', md: '1.5rem' },
                                                mb: 1,
                                                letterSpacing: '0.02em'
                                            }}
                                        >
                                            {item.position}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                lineHeight: 1.6,
                                                fontSize: { xs: '0.9rem', md: '1rem' }
                                            }}
                                        >
                                            {item.description} 
                                        </Typography>
                                    </Box>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Grid>
        </Grid>
    )
}
export default MembersInCoffeeSection;