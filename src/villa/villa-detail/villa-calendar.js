import React, {Component, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {dateFormat, serverDateFormat} from "../Constants";
import moment from "moment";
import {DayPickerRangeController} from "react-dates/esm";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './css/react_dates_overrides.css';

const VillaCalendar = (props) => {

    const [focusedInput, setFocusedInput] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const dayBlocker = (day) => {
        const result = props.reservations.find(r => {
            const start = moment(r.start, serverDateFormat);
            const end = moment(r.end, serverDateFormat);

            if (day.isBetween(start, end, 'days', "()")) {
                return true;
            } else {
                return false;
            }
        })

        return result == null ? false : true;
    }

    const dayHighlighted = (day) => {
        const result = props.reservations.find(r => {
            const start = moment(r.start, serverDateFormat);
            const end = moment(r.end, serverDateFormat);

            if (day.format(serverDateFormat) == start.format(serverDateFormat) || day.format(serverDateFormat) == end.format(serverDateFormat)) {
                return true;
            } else {
                return false;
            }
        })

        return result == null ? false : true;
    }
    
    return <div className={'filter-data-range'}>
        <DayPickerRangeController
            numberOfMonths={2}
            firstDayOfWeek={1}
            startDate={startDate} // momentPropTypes.momentObj or null,
            endDate={endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({startDate, endDate}) => {
                setStartDate(startDate);
                setEndDate(endDate);
            }} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={setFocusedInput} // PropTypes.func.isRequired,
            isDayBlocked={dayBlocker}
            isDayHighlighted={dayHighlighted}
        />
    </div>
}

VillaCalendar.propTypes = {
    data: PropTypes.any,
    reservations:PropTypes.array
};

VillaCalendar.defaultProps = {
    data: null,
    reservations:[]
};

export default VillaCalendar
