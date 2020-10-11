import React, {useState} from 'react';
import {Button, Grid, IconButton, Typography, useTheme} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DatePicker from '../DatePicker/DatePicker';
import TimePicker from '../TimePicker/TimePicker';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        maxWidth: 400,
        margin: 'auto',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 5
    },
    head: {
        ...theme.typography.customBorder
    },
    headTitle: {
        marginRight: 10,
        marginTop: 7
    },
    boxContainer: {
        maxHeight: 'calc(100vh - 200px)',
        overflowY: 'auto'
    },
    box: {
        ...theme.typography.customBorder,
        paddingTop: 10,
        paddingBottom: 20
    },
    saveBtn: {
        fontSize: 17,
        padding: 10,
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '100%',
        border: 'none',
        backgroundColor: 'yellow',
        '&:disabled': {
            color: 'white'
        },
        '&:hover,&:active': {
            backgroundColor: 'cyan',
            border: `none`,
            color: 'unset'
        }
    }

}));
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function Main() {
    const classes = useStyles();
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    const getDateTimeText = () => {

    };
    const theme = useTheme();
    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid className={classes.head} container item direction='row'>
                <Grid item>
                    <IconButton disableRipple style={{paddingRight: 0}}>
                        <ChevronRightIcon fontSize='large'/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography variant='h1' className={classes.headTitle}>
                        ویرایش اطلاعات ارسال
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container className={classes.boxContainer}>
                <Grid className={classes.box} container item direction='column'>
                    <Grid container item direction='row' justify='space-between'>
                        <Grid item>
                            <Typography variant='h2'>
                                شماره سفارش : 21293058
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h2'>
                                2,250,000 تومان
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item direction='row' justify='space-between' style={{marginTop: 10}}>
                        <Grid item>
                            <Typography variant='h3'>
                                10 دی 98
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h3'>
                                پرداخت اینترنتی
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.box} container item direction='column'>
                    <Grid container item direction='row' justify='space-between'>
                        <Grid item>
                            <Typography variant='caption'>
                                زمان تحویل
                            </Typography>
                        </Grid>
                        <Grid item>
                            <LocalShippingOutlinedIcon color='disabled'/>
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Typography variant='h2'>
                            {
                                selectedDate ?
                                    `${selectedDate.format('dddd')} ${selectedDate.format('jDD')} ${selectedDate.format('jMMMM')} ${selectedDate.format('jYY')} • ساعت ${selectedTime}` :
                                    'تاریخی انتخاب نشده است'
                            }
                        </Typography>
                    </Grid>
                    <Grid container item style={{marginTop: 15}}>
                        <Button fullWidth onClick={() => setPopupOpen(true)}>
                            ویرایش زمان ارسال
                        </Button>
                    </Grid>
                </Grid>
                <Grid container item direction='column' style={{paddingTop: 10}}>
                    <Grid item>
                        <Typography variant='caption'>
                            ارسال به
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h2'>
                            آیدا جبلی • تهران، تهران، سعادت آباد، علامه شمالی، کوچه کرمی، پلاک 81، واحد 16
                        </Typography>
                    </Grid>
                    <Grid container item style={{marginTop: 15}}>
                        <Button fullWidth>
                            ویرایش آدرس ارسال
                        </Button>
                    </Grid>
                </Grid>
            </Grid>


            <Button variant='contained' className={classes.saveBtn} disableRipple
                    disabled={!selectedTime && !selectedDate}>
                ثبت تغییرات
            </Button>

            <Dialog
                open={popupOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setPopupOpen(false)}
            >
                <DialogTitle style={{paddingBottom: 0, ...theme.typography.customBorder}}>
                    <Grid container item justify='space-between'>
                        <Grid item>
                            <Typography variant='h2'>انتخاب بازه زمانی</Typography>
                        </Grid>
                        <Grid item>
                            <LocalShippingOutlinedIcon color='disabled'/>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <Grid container direction='column'>
                        <Grid item>
                            <DatePicker selectedDate={selectedDate} onDateChanged={date => setSelectedDate(date)}/>
                        </Grid>
                        {
                            selectedDate &&
                            <Grid item>
                                <TimePicker selectedTime={selectedTime}
                                            onTimeChange={e => setSelectedTime(e.target.value)}/>
                            </Grid>
                        }
                    </Grid>
                </DialogContent>
            </Dialog>
        </Grid>
    );
}

export default Main;
