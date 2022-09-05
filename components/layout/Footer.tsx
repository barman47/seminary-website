import { FC } from 'react';
import Image from 'next/image';
import { Box, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { COLORS } from 'utils/constants';

import septemStacks from 'assets/img/septem-logo.png';
import logo from 'assets/img/badge-white.png';
import { EmailOutline, MapMarker, Phone } from 'mdi-material-ui';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.dark,
        color: COLORS.offWhite
    },

    footer: {
        padding: theme.spacing(3, 0, 0, 0),
        '& h4:first-child': {
            fontWeight: '600'
        },

        '& p:nth-child(2)': {}
    },

    logoContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: theme.spacing(5),
        justifyContent: 'space-between',

        '& div': {
            '& h6': {
                [theme.breakpoints.down('md')]: {
                    textAlign: 'center'
                }    
            },

            '& p': {
                [theme.breakpoints.down('sm')]: {
                    textAlign: 'left'
                }
            },

            [theme.breakpoints.down('md')]: {
                margin: 'auto',
                width: '40%'
            },

            [theme.breakpoints.down('sm')]: {
                width: '90%'
            }
        },

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            alignItems: 'center',
        },
    },

    logo: {
        width: theme.spacing(20),
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
            width: '40% !important'
        }
    },

    link: {
        color: COLORS.offWhite,
        position: 'relative',
        top: -8,
        left: 10
    },


    copyright: {
        backgroundColor: theme.palette.primary.main,
        color: COLORS.darkGrey,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(2, 5),

        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            padding: theme.spacing(1, 3)
        }
    },

    copyrightText: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1),
            marginBottom: theme.spacing(2)
        },
    },

    septem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        '& small': {
            marginRight: theme.spacing(1)
        }
    },

    septemLogo: {
        width: theme.spacing(20),
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(12)
        },
    },

    septemText: {
        fontSize: theme.spacing(1.5),
    }
}));

interface Classes {
    root: string;
    footer: string;
    logoContainer: string;
    link: string;
    logo: string;
    copyright: string;
    copyrightText: string;
    septem: string;
    septemLogo: string;
    septemText: string;
}

const Footer: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Box component="footer" className={classes.footer}>
                <Typography variant="h4" align="center">Saints Simon and Jude Seminary</Typography>
                <Typography variant="h6"align="center">In Cruce Salus</Typography>
                 <Box component="section" className={classes.logoContainer}>
                    <Box component="div" className={classes.logo}>
                        <Image 
                            src={logo}
                            alt="Seminary Kuje Logo"
                        />
                    </Box>
                    <Box component="div">
                        <Typography variant="h6">Connect with Us</Typography>
                        <Typography variant="body2" component="p">If you would like to take a tour or schedule a shadow day for your child,or if you need futher information concernng our school.</Typography>
                    </Box>
                    <Box component="div">
                        <Typography variant="h6">Contact Us</Typography>
                        <Typography variant="body2" component="p">
                            <EmailOutline />
                            <a href="mailto:simonandjude1985@gmail.com" className={classes.link}>simonandjude1985@gmail.com</a>
                        </Typography>
                        <Typography variant="body2" component="p">
                            <Phone />
                            <a href="tel:+2347035491670" className={classes.link}>+2347035491670</a>
                        </Typography>
                        <Typography variant="body2" component="p">
                            <MapMarker />
                            <a href="https://www.google.com/maps/place/Saints,+Simon+%26+Jude+Seminary+Kuje+Abuja./@8.8712167,7.2525831,17z/data=!3m1!4b1!4m5!3m4!1s0x104e65f2066f52ff:0x47cb76bd5d19be42!8m2!3d8.8712167!4d7.2547718" target="_blank" rel="noreferrer" className={classes.link}>+P.O. Box 80, Kuje - Abuja</a>
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Box className={classes.copyright}>
                    <Typography variant="body2" component="p" className={classes.copyrightText}>Copyright &copy; 1984 - {new Date().getFullYear()} Saints Simon and Jude Seminary - All Rights Reserved.</Typography>
                    <Box component="div" className={classes.septem}>
                        <span className={classes.septemText}>Powered by</span>&nbsp;&nbsp;&nbsp;
                        <a href="https://septemstacks.com" target="_blank" rel="noreferrer" className={classes.septemLogo}>
                            <Image
                                src={septemStacks} 
                                alt="Septem Stacks Logo" 
                            />
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;