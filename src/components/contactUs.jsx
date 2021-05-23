const ContactUs = () => {
    return (
        < div className="parent">
        <div>
        <label style={{color: "saddlebrown"}}> <b>Thank You for visiting us.</b></label> <br/>
        <label style={{paddingBottom:"20px"}}>We are excited to hear from You !!</label>       
        </div>
        <div className="child">
        <label size="large" style={{color: "saddlebrown"}}><b>Contact</b></label> 
          <br/>         
           <br/>
            <label size="medium"> Address1</label><br/>
            <label size="small"> Singapore XXXXXX</label><br/>
            <label size="xs" style={{paddingBottom:"20px"}}>+65 XXXX XXXX</label> <br/>
            </div>
            </div>                  
        );
}
 
export default ContactUs;