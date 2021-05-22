import React,{ Fragment } from 'react';
import Background from '../img/helpdeskTicketSystem.jpg'

class HomePage extends React.Component {
  getStyle = () => {
    return {
      width: '100%',
      height: 450,
      display: 'inline-block',
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      fontSize: '4em',
      fontWeight: 'normal',
      marginBottom: 0,
    };
  };

  getBlurbStyle = (color) => {
    return {
      backgroundColor: color,
      opacity: 0.8,
      borderRadius: '10px',
      paddingBottom: '20px',
    };
  };

  render() {
    return (
      <Fragment>
        <div className="container pusher">
          <div id="homeImage"
            className="ui vertical masthead center aligned segment"
            style={this.getStyle()}
          >
            <div className="ui container">
              <div
                className="ui text container"
                style={this.getBlurbStyle('#fff')}
              >
                <h1 className="ui huge header">SPARES CNX</h1>
                <h2> Simple Ticketing System</h2>                
              </div>
            </div>
          </div>
        </div>
        </Fragment>
    );
  }
}

export default HomePage;
