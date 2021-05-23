const Search = ({value, placeholder, onChange}) => {
    return ( 
        <div className="input-group input-group-mb3">
        <input 
          id="searchTxt"
          type="text"
          className="form-control"
          placeholder= {placeholder}
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value = {value}
          onChange = {onChange}
        />
      </div> );
}
 
export default Search; 