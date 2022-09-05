import { FC } from 'react';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { TRANSITION } from 'utils/constants';

import rector from '../../assets/img/fr-mike2.jpg';
import viceRector from '../../assets/img/fr-john.jpg';
import vpAcad from '../../assets/img/vp-acad.jpeg';
import dean from '../../assets/img/sister-mary.jpg';
import examOfficer from '../../assets/img/exam-officer.png';
import adminOfficer from '../../assets/img/admin-officer.jpg';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(5, 0),
        scrollSnapAlign: 'start',
    
        '& h4': {
            color: theme.palette.primary.main,
            fontWeight: 500,
            margin: 0,
            marginBottom: theme.spacing(2),
            textAlign: 'center',
        },

        '& p:nth-child(2)': {
            margin: '0 auto',
            textAlign: 'center',
            width: '80%',
        }
    },

    administratorContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: theme.spacing(5),
        marginTop: theme.spacing(5),
        padding: theme.spacing(0, 5),

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)'
        },

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr'
        }
    },
    
    administrator: {
        boxShadow: theme.shadows[1],
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '5px',
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        transition: TRANSITION,
        paddingBottom: theme.spacing(2),

        '&:hover': {
            boxShadow: '0 2px 20px 0 rgba(0,0,0,0.14), 0 3px 20px -2px rgba(0,0,0,0.12), 0 1px 20px 0 rgba(0,0,0,0.2)',
        },

        '& h6': {
            fontWeight: 600
        }
    }
}));

interface Classes {
    root: string;
    administratorContainer: string;
    administrator: string;
}

const Administrators: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Typography variant="h4">Effective and Efficient Administrators</Typography>
            <Typography variant="body1" component="p">Our administrators are proficient organizers who plan and instruct, and subtly lead with integrity and deligence.</Typography>
            <Box component="div" className={classes.administratorContainer}>
                <Box component="div" className={classes.administrator}>
                    <Box component="div">
                        <Image 
                            src={rector} 
                            alt="Fr. Michael Iroh, CM" 
                        />
                    </Box>
                    <Typography variant="h6">Fr. Michael Iroh, CM</Typography>
                    <Typography variant="body1" component="p">Rector</Typography>
                </Box>
                <Box component="div" className={classes.administrator}>
                    <Box component="div">
                        <Image 
                            src={viceRector} 
                            alt="Fr. John Ogbe, CM" 
                        />
                    </Box>
                    <Typography variant="h6">Fr. John Ogbe, CM</Typography>
                    <Typography variant="body1" component="p">Vice Rector/VP Admin</Typography>
                </Box>
                <Box component="div" className={classes.administrator}>
                    <Box component="div">
                        <Image 
                            src={vpAcad} 
                            alt="Mrs. Onojah" 
                        />
                    </Box>
                    <Typography variant="h6">Mrs. Eka-Ette Ikpaya-Onoja</Typography>
                    <Typography variant="body1" component="p">Vice Principal Academics</Typography>
                </Box>
                <Box component="div" className={classes.administrator}>
                    <Box component="div">
                        <Image 
                            src={dean} 
                            alt="Sr. Mary Donald Emeh (IHM)" 
                        />
                    </Box>
                    <Typography variant="h6">Sr. Mary Donald Emeh (IHM)</Typography>
                    <Typography variant="body1" component="p">Dean of Studies</Typography>
                </Box>
                <Box component="div" className={classes.administrator}>
                    <Box component="div">
                        <Image 
                            src={examOfficer} 
                            alt="Mr. John Okpo" 
                        />
                    </Box>
                    <Typography variant="h6">Mr. John Okpo</Typography>
                    <Typography variant="body1" component="p">Exam Officer</Typography>
                </Box>
                <Box component="div" className={classes.administrator}>
                    <Box component="div">
                        <Image 
                            src={adminOfficer} 
                            alt="Mrs. Angela Okeh" 
                        />
                    </Box>
                    <Typography variant="h6">Mrs. Gloria Anumba</Typography>
                    <Typography variant="body1" component="p">Admission Officer</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Administrators;