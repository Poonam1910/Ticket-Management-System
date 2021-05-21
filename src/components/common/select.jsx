import React from "react";

const Select = ({ name, label, options,defaultValue, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={defaultValue} 
       {...rest} className="form-control">
        <option value="--Select--" name="--Select--" label="--Select--" />
          {options.map(option => (           
          <option key={option.value?option.value:option._id} 
             value={option.value?option.value:option._id} 
            >
           {option.label?option.label:option.name}          
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
    
  );
};

export default Select;
