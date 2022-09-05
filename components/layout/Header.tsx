import { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AppBar, Box, Button, Link, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import clsx from 'clsx';

import { ABOUT_US, CONTACT_US, FAQs } from 'routes'
import { COLORS, Route } from 'utils/constants';
// import { sendWhatsappMessage } from 'utils/sendWhatsappMessage';

import HideOnScroll from 'components/layout/HideOnScroll';
import MobileHeader from './MobileHeader';

import logo from 'assets/img/badge-primary.png';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: COLORS.white,
        display: 'grid',
        gridTemplateColumns: '1fr',
        alignItems: 'center',
        width: '100vw',

        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },

    logo: {
        cursor: 'pointer',
        width: theme.spacing(10)
    },

    links: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        width: '60%'
    },

    link: {
        color: COLORS.offBlack,
        cursor: 'pointer',
        fontSize: theme.spacing(2),
        fontWeight: 600,
        textDecoration: 'none',
        transition: '0.3s linear all',
        textAlign: 'center',

        '&:hover': {
            color: theme.palette.primary.main
        }
    },

    activeLink: {}
}));

interface Classes {
    root: string;
    header: string;
    logo: string;
    links: string;
    link: string;
    activeLink: string;
}

const Header: FC = (): JSX.Element => {
    const classes: Classes = useStyles();
    const { pathname } = useRouter();

    const routes: Array<Route> = [
        { url: '/', text: 'Home' },
        { url: ABOUT_US, text: 'About Us' },
        { url: CONTACT_US, text: 'Contact Us' },
        { url: FAQs, text: 'FAQs' },
    ];

    return (
        <>
            <HideOnScroll>
                <AppBar elevation={1} className={classes.root}>
                    <Toolbar>
                        <Box component="header" className={classes.header}>
                            <Box component="div" className={classes.logo}>
                                <NextLink href="/" passHref>
                                    <Image
                                        src={logo} 
                                        alt="Seminary Kuje Logo" 
                                    />
                                </NextLink>
                            </Box>
                            <Box component="div" className={classes.links}>
                                {routes.map((route, index) =>(
                                    <NextLink key={index} href={route.url} passHref>
                                        <Link className={clsx(classes.link, { [classes.activeLink]: pathname.includes(route.url) })}underline="none">{route.text}</Link>
                                    </NextLink>
                                ))}
                            </Box>
                            <NextLink href="#!">
                                <Button variant="contained">Trade Now</Button>
                            </NextLink>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <MobileHeader />
        </>
    );
};

export default Header;
