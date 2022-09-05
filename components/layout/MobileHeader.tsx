import * as React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { AppBar, Box, SwipeableDrawer, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Headset, Home, InformationVariant, Phone, Help, Menu } from 'mdi-material-ui';

import { ABOUT_US, CONTACT_US, FAQs } from 'routes'
import { COLORS, Route } from 'utils/constants';

import HideOnScroll from 'components/layout/HideOnScroll';

// import logo from 'assets/img/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: COLORS.white,
        display: 'none',

        [theme.breakpoints.down('md')]: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            alignItems: 'center',
            width: '100vw',
        }
        
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },

    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    logo: {
        marginLeft: theme.spacing(2),
        width: '15%'
    },
    
    // logo: {
    //     width: '50%'
    // },

    links: {
        backgroundColor: theme.palette.primary.dark,
    },

    link: {
        color: COLORS.offWhite,
        cursor: 'pointer',
        fontSize: theme.spacing(2),
        fontWeight: 600,
        textDecoration: 'none',
        transition: '0.3s linear all',

        '&:hover': {
            color: theme.palette.primary.main
        }
    },

    activeLink: {},

    menuIcon: {
        borderRadius: theme.shape.borderRadius,
        fontSize: theme.spacing(4),
        padding: theme.spacing(0.2),
        color: theme.palette.primary.main,
    },

    contactIcon: {
        borderRadius: theme.shape.borderRadius,
        fontSize: theme.spacing(4),
        padding: theme.spacing(0.2),
        color: COLORS.offBlack
    },

    icon: {
        color: COLORS.offWhite
    }
}));

interface Classes {
    root: string;
    header: string;
    logoContainer: string;
    logo: string;
    links: string;
    link: string;
    activeLink: string;
    menuIcon: string;
    contactIcon: string;
    icon: string;
}

const MobileHeader: React.FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    const routes: Array<Route> = [
        { url: '/', text: 'Home', icon: <Home className={classes.icon} /> },
        { url: ABOUT_US, text: 'About Us', icon: <InformationVariant className={classes.icon} /> },
        { url: CONTACT_US, text: 'Contact Us', icon: <Phone className={classes.icon} /> },
        { url: FAQs, text: 'FAQs', icon: <Help className={classes.icon} /> },
    ];

    const [open, setOpen] = React.useState(false);
    
    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||(event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setOpen(!open);
    };

    return (
        <HideOnScroll>
            <AppBar elevation={1} className={classes.root}>
                <Toolbar>
                    <Box component="header" className={classes.header}>
                        <Box component="div" className={classes.logoContainer}>
                            <IconButton onClick={toggleDrawer}>
                                <Menu className={classes.menuIcon} />
                            </IconButton>
                            <Box component="div" className={classes.logo}>
                                {/* <NextLink href="/">
                                    <Image
                                        src={logo} 
                                        alt="Patara Exchange Logo" 
                                    />
                                </NextLink> */}
                            </Box>
                        </Box>
                        <NextLink href={CONTACT_US}>
                            <Headset className={classes.contactIcon} />
                        </NextLink>
                    </Box>
                </Toolbar>
                <SwipeableDrawer
                    anchor="bottom"
                    open={open}
                    onClose={toggleDrawer}
                    onOpen={toggleDrawer}
                    disableSwipeToOpen={false}
                        ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <List className={classes.links}>
                        {routes.map((route: Route, index: number): JSX.Element => (
                            <NextLink key={index} href={route.url} passHref>
                                <Link>
                                    <ListItem button key={index} className={classes.link} onClick={toggleDrawer}>
                                        <ListItemIcon>
                                            {route.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={route.text} />
                                    </ListItem>
                                </Link>
                            </NextLink>
                        ))}
                    </List>
                </SwipeableDrawer>
            </AppBar>
        </HideOnScroll>
    );
};

export default MobileHeader;
