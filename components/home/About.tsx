import { FC } from 'react';
import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { COLORS } from 'utils/constants';
import { ABOUT_US } from 'routes';
import backgroundImage from '../../assets/img/cross.jpg';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: COLORS.offWhite,
        scrollSnapAlign: 'start',

        '& h4': {
            fontWeight: 500,

            [theme.breakpoints.down('md')]: {
                fontWeight: 600,
                textAlign: 'center',
                marginBottom: theme.spacing(2)
            }
        },

        '& p': {
            lineHeight: 2,
            [theme.breakpoints.down('sm')]: {
                textAlign: 'justify'
            }
        }
    },

    container: {
        backgroundColor: 'rgba(0, 35, 71, .8)',
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        padding: theme.spacing(5),

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr'
        },

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(5, 2)
        }
    },

    button: {
        marginTop: theme.spacing(2)
    }
}));

interface Classes {
    root: string;
    container: string;
    button: string;
}

const About: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Box component="div" className={classes.container}>
                <Typography variant="h4">About Our School</Typography>
                <Box component="div">
                    <Typography variant="body1" component="p">
                        SS Simon and Jude Seminary Kuje was established by his Eminence, Cardinal Dominic Ekandem of blessed memory the first administrator of the Abuja ecclesiastical territory realized that a viable and effective missionary work requires the strong presence of the Clergy This resolution led to the establishment of the minor seminary of SS SIMON AND JUDE SEMINARY as a seed bed of vocation in the year 1984. The task of grooming the nascent institution from the nursery was entrusted to Rev. Fr. Dr. Willy Ojukwu who is currently the parish Priest of Holy Cross Parish Gwarimpa. On a chat Fr. Willy, he maintained that he was made the Rector of a non-existent seminary. This statement implied that he began without any structure on ground.
                    </Typography>
                    <Link href={ABOUT_US}>
                        <Button variant="contained" color="primary" className={classes.button}>Read More</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default About;