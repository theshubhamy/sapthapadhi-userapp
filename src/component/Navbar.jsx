import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MatchesIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
    let location = useLocation().pathname;
    let isMyprofilePage = location.includes('/myprofile') || location.includes('/matches') || location.includes('/editprofile') || location.includes('/editpreferences') || location.includes('/chatlist') || location.includes('/profile');
    useEffect(() => {
        let response = localStorage.getItem('userdata');
        console.log("response", response);
        if (response) {
            setIsLoggedIn(true);
        }
    }, []);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleMobileMenuOpen = (event) => {
        setMobileAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileAnchorEl(null);
    };

    const handleLogin = () => {
        // setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        handleMenuClose();
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', paddingInline: { xs: '0px', md: '70px' }, paddingBlock: { xs: '0px', md: '8px' } }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    {
                        isMyprofilePage ? <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar> : <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: '5px' }}>
                            <img src={"/images/comlogo.png"} alt="Company" className='h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[50px] lg:w-[50px] rounded-md' />
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontSize: { xs: '15px', md: '24px', lg: '24px' },
                                    fontFamily: "'Montserrat', 'Roboto', 'Helvetica', 'Arial', sans-serif",
                                    textShadow: '0px 4px 4px 0px #00000040'
                                }}
                            >
                                Sapthapadhi.in
                            </Typography>
                        </Box>
                    }
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: '5px' }}>
                        <img src={"/images/comlogo.png"} alt="Company" className='h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[50px] lg:w-[50px] rounded-md' />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontSize: { xs: '15px', md: '24px', lg: '24px' },
                                fontFamily: "'Montserrat', 'Roboto', 'Helvetica', 'Arial', sans-serif",
                                textShadow: '0px 4px 4px 0px #00000040'
                            }}
                        >
                            Sapthapadhi.in
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
                    {isLoggedIn ? (
                        <>
                            {
                                isMyprofilePage && (
                                    <>
                                        <Box component={Link} to="/matches" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', marginRight: '15px' }}>
                                            <MatchesIcon sx={{ marginRight: '5px' }} />
                                            <Typography variant="body1">Matches</Typography>
                                        </Box>
                                        <Box component={Link} to="/chatlist" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                                            <ChatIcon sx={{ marginRight: '5px' }} />
                                            <Typography variant="body1">Chat</Typography>
                                        </Box>
                                    </>
                                )
                            }
                            <IconButton color="inherit" component={Link} to="/myprofile" sx={{ marginLeft: '15px' }}>
                                <Avatar>
                                    <AccountCircleIcon />
                                </Avatar>
                            </IconButton>
                        </>
                    ) : (
                        <>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/login"
                                sx={{ backgroundColor: '#18719b;', color: 'white;', '&:hover': { backgroundColor: '#0e4d6b' } }}
                            >
                                Login
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/register"
                                sx={{ backgroundColor: '#18719b;', color: 'white;', marginLeft: '20px;', '&:hover': { backgroundColor: '#0e4d6b' } }}
                            >
                                Register
                            </Button></>
                    )}
                    <Button
                        color="inherit"
                        aria-controls="more-menu"
                        aria-haspopup="true"
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                    >
                        More
                    </Button>
                    <Menu
                        id="more-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={Link} to="/aboutus">About Us</MenuItem>
                        <MenuItem component={Link} to="/ourgallery">Our Gallery</MenuItem>
                        <MenuItem component={Link} to="/ourservice">Our Service</MenuItem>
                        <MenuItem component={Link} to="/inquary">Inquary</MenuItem>
                        <MenuItem component={Link} to="/priceplan">My Plans</MenuItem>
                    </Menu>
                </Box>
                {/* {
                    isMyprofilePage && <Box sx={{marginLeft:'50%'}}><NotificationsIcon/></Box>
                } */}

                {
                    isMyprofilePage && <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMobileMenuOpen}
                        >
                            <PersonIcon />
                        </IconButton>
                        <Menu
                            anchorEl={mobileAnchorEl}
                            open={Boolean(mobileAnchorEl)}
                            onClose={handleMenuClose}
                        >
                            {isLoggedIn ? (
                                <>
                                    <MenuItem component={Link} to="/myprofile">Profile</MenuItem>
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </>
                            ) : (
                                <>
                                    <MenuItem component={Link} to="/login">Login</MenuItem>
                                    <MenuItem component={Link} to="/register">Register</MenuItem>
                                </>
                            )}
                            <MenuItem component={Link} to="/">Home</MenuItem>

                        </Menu>
                    </Box>
                }

                {
                    !isMyprofilePage && <Box  sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Button
                            color="inherit"
                            aria-controls="more-menu"
                            aria-haspopup="true"
                            onClick={(e) => setAnchorEl(e.currentTarget)}
                        >
                            More
                        </Button>
                        <Menu
                            id="more-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem component={Link} to="/aboutus">About Us</MenuItem>
                            <MenuItem component={Link} to="/ourgallery">Our Gallery</MenuItem>
                            <MenuItem component={Link} to="/ourservice">Our Service</MenuItem>
                            <MenuItem component={Link} to="/inquary">Inquary</MenuItem>
                            <MenuItem component={Link} to="/priceplan">My Plans</MenuItem>
                        </Menu>
                    </Box>
                }

            </Toolbar>

        </AppBar >
    );
};

export default Navbar;
