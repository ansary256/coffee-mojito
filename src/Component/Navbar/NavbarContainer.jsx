import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navLinks from "../../Constant/index";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Badge
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const NavbarContainer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'header',
                start: "top top",
                end: "+=100",
                toggleActions: 'play none none reverse',
            }
        });

        navTween.to("header", {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: 'blur(20px)',
            duration: 0.5,
            ease: "power1.inOut"
        });
    });

    return (
        <>
            <AppBar
                position='fixed'
                elevation={0}
                sx={{
                    backgroundColor: "transparent",
                    backdropFilter: 'blur(0px)',
                    transition: 'background-color 0.3s ease',
                    py: 1
                }}
            >
                <Toolbar disableGutters sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: 2, md: 5 }
                }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                        <IconButton
                            component={Link}
                            to="/cart"
                            sx={{ color: 'text.primary' }}
                            aria-label="cart"
                        >
                            <Badge badgeContent={0} color="primary">
                                <ShoppingBagOutlinedIcon fontSize="medium" />
                            </Badge>
                        </IconButton>

                        <Typography
                            variant="h5"
                            component={Link}
                            to="/Home"
                            sx={{
                                display: { xs: 'none', lg: 'block' },
                                textDecoration: 'none',
                                color: 'primary.main',
                                fontWeight: 'bold',
                                fontFamily: '"Modern Negra", sans-serif',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Mojito
                        </Typography>
                    </Box>

                    <Box sx={{ 
                        display: { xs: 'flex', lg: 'none' },
                        justifyContent: 'center', 
                        flex: 1 
                    }}>
                        <Typography
                            variant="h5"
                            component={Link}
                            to="/Home"
                            sx={{
                                textDecoration: 'none',
                                color: 'primary.main',
                                fontWeight: 'bold',
                                fontFamily: '"Modern Negra", sans-serif',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Mojito
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
                        <Box sx={{
                            display: { xs: 'none', lg: 'flex' },
                            gap: 3
                        }}>
                            {navLinks.map((link) => (
                                <Button
                                    key={link.id}
                                    component={Link}
                                    to={link.id === 'home' ? '/Home' : `/${link.id}`}
                                    sx={{
                                        color: 'text.primary',
                                        fontWeight: 500,
                                        p: "0.5rem 1rem",
                                        borderBottom: "2px solid transparent",
                                        '&:hover': {
                                            color: 'primary.main',
                                            borderBottom: "2px solid",
                                            borderColor: "primary.main",
                                            backgroundColor: 'transparent'
                                        },
                                    }}
                                >
                                    {link.title}
                                </Button>
                            ))}
                        </Box>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { lg: 'none' }, color: 'text.primary' }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>

            {/* کشوی منوی موبایل (Drawer) */}
            <Drawer
                anchor="top"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: 'rgba(18, 18, 18, 0.95)',
                            backdropFilter: 'blur(15px)',
                            color: 'text.primary',
                            pt: 2,
                            pb: 4,
                            px: 3,
                            maxWidth: '100%',
                            overflowX: 'hidden',
                            boxSizing: 'border-box'
                        }
                    }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 'bold',
                            fontFamily: '"Modern Negra", sans-serif'
                        }}
                    >
                        Mojito
                    </Typography>
                    <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Box>

                <List>
                    {[...navLinks].reverse().map((link) => (
                        <ListItem key={link.id} disablePadding sx={{ mb: 1 }}>
                            <ListItemButton
                                component={Link}
                                to={link.id === 'home' ? '/Home' : `/${link.id}`}
                                onClick={handleDrawerToggle}
                                sx={{
                                    textAlign: 'center',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        color: 'primary.main'
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={
                                        <Typography
                                            sx={{
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {link.title}
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default NavbarContainer;