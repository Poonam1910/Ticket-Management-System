import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector =({selected,onChange,onSelect,...rest}) => {
    return (
      <DatePicker selected={selected} {...rest} onChange={onChange} 
       onSelect={onSelect} />
    );
  };
  export default  DateSelector;