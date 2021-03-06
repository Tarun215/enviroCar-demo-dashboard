import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardActions,
    CardContent,
    Divider,
    Button
} from '@material-ui/core';
import {
    ArrowDropDown,
    ArrowRight
} from '@material-ui/icons';

import { data, options } from './chart';

// Styles
const useStyles = makeStyles(() => ({
    root: {},
    chartContainer: {
        height: 400,
        position: 'relative'
    },
    actions: {
        justifyContent: 'flex-end'
    }
 }));

const TracksBarChart = props => {
    const { className, ...rest } = props;

    const classes = useStyles();

  return (
    <Card
        {...rest}
        className={clsx(classes.root, className)}
    >
        <CardHeader
        action={
            <Button
            size="small"
            variant="text"
            >
            Last 5 months <ArrowDropDown />
            </Button>
        }
        title="Tracks"
        />
        <Divider />
        <CardContent>
        <div className={classes.chartContainer}>
            <Bar
            data={data}
            options={options}
            />
        </div>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
        <Button
            color="primary"
            size="small"
            variant="text"
        >
            Overview <ArrowRight />
        </Button>
        </CardActions>
    </Card>
    );
};

TracksBarChart.propTypes = {
    className: PropTypes.string
};

export default TracksBarChart;