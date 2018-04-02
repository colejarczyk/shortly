import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';

class Header extends React.Component {

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    let className = "restaurant-header " + this.props.css
    return (
      <div className={className} style={{ backgroundImage: `url(${this.props.background})` }}>
        <BackIcon color="#fff" style={{ float: 'left', width: '60px', height: '33px' }} onClick={() => this.goBack()} />
        <div className="restaurant-header-top">
          <div className="restaurant-header-about">
            <h1>{this.props.name}</h1>
            <div className="restaurant-header-address">
              {this.props.street} <br />
              {this.props.postCode} {this.props.city}
            </div>
          </div>
        </div>
        <div className="restaurant-header-buttons">
          <FavoriteIcon color="#FFF" />
          <EmailIcon color="#FFF" />
          <PhoneIcon color="#FFF" />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);