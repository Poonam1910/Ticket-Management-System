const Footer = () => {
    return (
        <div
          className="ui inverted vertical footer segment"
          style={styles.footerContainer}
        >
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="four wide column" style={styles.column}>
                <h4 className="ui inverted header">Version 1.0.0</h4>                
              </div>             
            </div>
          </div>
        </div>
      );
}
const styles = {
  footerContainer: { bottom: 0,backgroundColor: "saddlebrown",height: "10px", 
  paddingTop: "3px",paddingBottom: "20px"},
  column: { marginLeft: '10px' }
};

export default Footer;