/* eslint-disable react/display-name */
import * as React from 'react';
import { Alert, AlertTitle, Snackbar, IconButton} from '@mui/material';
import { Close } from 'mdi-material-ui';

type Props = {
    msg: string;
    duration?: number;
    title?: string; 
    type: 'error' | 'success' | 'info' | 'warning';
    variant?: 'standard' | 'outlined' | 'filled';
    onClose?: () => void;
    ref: any;
}

const DefaultProps = {
    duration: 6000,
    variant: 'standard',
    type: 'success'
}

const Toast: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>((props: Props, ref: any): JSX.Element => {
    const { msg, duration, title, type, variant, onClose } = props;
    const [open, setOpen] = React.useState(false);

    React.useImperativeHandle(ref, () => ({
        open: () => {
            setOpen(true);
        },

        close: () => {
            setOpen(false);
        }
    }));

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        if (onClose) {
            onClose();
        }
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div ref={ref}>
            <Snackbar
                open={open}
                autoHideDuration={duration}
                onClose={handleClose}
                message={msg}
                // action={action}
            >
                <Alert variant={variant} onClose={handleClose} severity={type} action={action}>
                    {title && <AlertTitle>{title}</AlertTitle>}
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    );
});

Toast.defaultProps = DefaultProps as Props;

export default Toast;