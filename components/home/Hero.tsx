import { FC } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { COLORS } from 'utils/constants';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(5),

        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            padding: theme.spacing(5, 2),
        },

        '& h6': {
            color: COLORS.offBlack
        }
    },

    customers: {
        '& h4:first-child': {
            fontWeight: 700,
            marginBottom: theme.spacing(2)
        }
    },

    stats: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: theme.spacing(5),

        '& div:first-child': {
            marginRight: theme.spacing(5)
        }
    }
}));

interface Classes {
    root: string;
    customers: string;
    stats: string;
}

const Hero: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <h1>Hero Section</h1>
        </Box>
    );
};

export default Hero;