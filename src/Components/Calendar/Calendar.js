import React, { Component } from 'react';
import Footer from './../Footer/Footer.js';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import PurposeList from './../PurposeList/PurposeList.js';

const TimePickerBox = () => (
  <TimePicker
    format="24hr"
    hintText="24hr Format"
    autoOk={true}
    minutesStep={5}
    style={{ textAlign: "center" }}
  />
);

const DatePickerBox = () => (
  <DatePicker
    hintText="0000-00-00"
    autoOk={true}
  />
);

class Calendar extends Component {
  render() {
    return (
      <div>
        <Subheader style={{ textAlign: "center", fontWeight: "bold", fontSize: "22px" }}>When</Subheader>
        <Divider />
        <div style={{ textAlign: "center" }}>
          <DatePickerBox />
          <TimePickerBox />
        </div>
        <PurposeList />
        <Footer />
      </div>
    );
  }
}

export default Calendar;
