import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

interface Props {
    children: React.ReactElement | React.ReactElement[];
    title?: string;
    description?: string;
}

const Layout: FC<Props> = ({ children, description, title }: Props): JSX.Element => {
    return (
        <>
            <Head>
                {title ? <title>{title} | Patara Exchange</title> : <title>Patara Exchange</title>}
                {description && <meta name="description" content={description} />}
            </Head>
            <Header />
            <Box component="main">
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default Layout;