const ContactUs = () => {
  const title=process.env.REACT_APP_TITLE
  console.log(title);
    return (
        < div className="parent">
        <div>
        <label style={{color: "burlywood"}}> Thank You for visiting us.</label> <br/>
        <label>We are excited to hear from You !!</label>        
        </div>
        <div className="child">
        <label size="large" style={{color: "burlywood"}}>Contact</label> 
          <br/>
         <label size="large" >{title}</label> 
           <br/>
            <label size="medium"> Address1</label><br/>
            <label size="small"> Singapore XXXXXX</label><br/>
            <label size="xs">+65 XXXX XXXX</label> <br/>
            </div>
            </div>
                  
        );
}
 
export default ContactUs;