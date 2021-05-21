const Footer = () => {
    return (
        <div
          className="ui inverted vertical footer segment"
          style={styles.footerContainer}
        >
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="four wide column" style={styles.column}>
                <h4 className="ui inverted header">About</h4>
                <div className="ui inverted link list">
                  Contact Us                                 
                </div>
              </div>             
            </div>
          </div>
        </div>
      );
}
 
export default Footer;