import { FC } from 'react';

import { 
    Slide, 
    useScrollTrigger 
} from '@mui/material';

interface Props {
    children: React.ReactElement;
    direction?: string;
}

const defaultProps = {
    direction: 'down',
};

const  HideOnScroll: FC<Props> = ({ children }: Props): JSX.Element => {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
  }

HideOnScroll.defaultProps = defaultProps;

export default HideOnScroll;