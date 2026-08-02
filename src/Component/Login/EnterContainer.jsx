import { AppRegistrationOutlined, DoneAllTwoTone, LoginOutlined } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";






const EnterContainer = () => {
    const [value, setValue] = useState(1);
    return (
        <Container >
            <Grid container sx={{
                width: "100%", height: "100vh", py: 12, boxSizing: "border-box"
                , flexDirection: "row",
                justifyContent: "center", alignItems: "center",
            }}>

                <Grid dir="rtl" size={{ xs: 9, sm: 9, md: 8, lg: 6 }} sx={{
                    backgroundColor: "text.primary",
                    height: { lg: "55vh", xs: "70vh" },
                    borderStartEndRadius: "30px",
                    borderEndEndRadius: "30px",
                    overflow: "hidden"
                }}>
                    <AnimatePresence>
                        <motion.div
                            key={value}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            // exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                        >
                            {value === 1 ? <LoginForm /> : <SignUpForm />}
                        </motion.div>
                    </AnimatePresence>
                    <LoginForm />
                </Grid>
                <Grid size={{ lg: 5 }} sx={{
                    backgroundColor: "primary.main2",
                    height: { lg: "70vh" },
                    color: "text.primary", textAlign: "center",
                    borderRadius: "30px",
                    display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                    flexDirection: "column",
                    py: 4,
                    overflow: "hidden"
                }}>
                    <AnimatePresence>
                        <motion.div
                            key={value}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            // exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                        >
                            <Box>
                                <Typography
                                    variant="h3"
                                    component="h1"
                                    sx={{
                                        fontWeight: "bold",
                                        mb: 1,
                                    }}
                                >
                                    خوش اومدین
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        opacity: 0.8,
                                    }}
                                >
                                    {value === 1 ? " لطفاً اطلاعات ورود خود را وارد کنید" :
                                        " لطفاً اطلاعات ثبتنام خود را وارد کنید"}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    width: "100%",
                                    mt: 2
                                }}
                            >
                                <Box
                                    component="img"
                                    src={value === 1 ? "images/LoginImage.webp" : "images/SignUpImage.webp"}
                                    alt="Welcome Illustration"
                                    sx={{
                                        Width: "100%",
                                        height: "90%",
                                        objectFit: "cover"
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </AnimatePresence>
                </Grid>
                <Grid size={{ xs: 2, sm: 2, md: 3, lg: 1 }} sx={{
                    backgroundColor: "text.primary",
                    height: { lg: "55vh", xs: "70vh" },
                    color: "background.default", textAlign: "center",
                    borderStartEndRadius: "30px",
                    borderEndEndRadius: "30px",
                    display: "flex",
                    flexDirection: "column",
                    py: 4,
                }}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "transparent",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            "& .MuiBottomNavigationAction-root": {
                                color: "background.default",
                                minWidth: "auto",
                                padding: 0,
                                "&.Mui-selected": {
                                    color: "background.textClick"
                                }
                            }
                        }}
                    >
                        <BottomNavigationAction
                            disabled
                            icon={<DoneAllTwoTone sx={{ fontSize: 40 }} />}
                            sx={{
                                pointerEvents: "none",
                                opacity: 1,
                                color: "background.default !important",
                                "&.Mui-disabled": {
                                    color: "background.default !important"
                                }
                            }}
                        />
                        <BottomNavigationAction label="ورود" icon={<LoginOutlined />} />
                        <BottomNavigationAction label="ثبتنام" icon={<AppRegistrationOutlined />} />
                    </BottomNavigation>
                </Grid>
            </Grid>
        </Container>
    )
}
export default EnterContainer;