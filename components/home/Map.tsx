import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { COLORS } from 'utils/constants';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        scrollSnapAlign: 'start',

        '& h4': {
            color: COLORS.offWhite,
            backgroundColor: theme.palette.primary.main,
            fontWeight: 500,
            margin: 0,
            padding: theme.spacing(3, 0),
            textAlign: 'center'
        },

        '& iframe': {
            border: 'none',
            width: '100%',
            height: '400px',
        }
    }
}));

interface Classes {
    root: string;
}

const Map: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Typography variant="h4">Looking for Directions?</Typography>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.0853211545996!2d7.252235214305885!3d8.87164929387742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e65f206663dc9%3A0x7ce334aeaa811bfd!2sSs.%20Simon%20and%20Jude%20Seminary!5e0!3m2!1sen!2sng!4v1583650289437!5m2!1sen!2sng" 
                allowFullScreen
                title="SS Simon and Jude Seminary, Kuje Abuja"
            >
            </iframe>
        </Box>
    );
};

export default Map;