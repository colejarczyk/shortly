import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';
import Background from './img/wroclaw-poland.jpg';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: {lat: 0, lng: 0}
    };
  }

  getLocation = () => {
    const geolocation = navigator.geolocation;

    const location = new Promise((resolve, reject) => {
      if (!geolocation) {
        reject(new Error('Not Supported'));
      }

      geolocation.getCurrentPosition((position) => {
        resolve(position);
      }, () => {
        reject(new Error('Permission denied'));
      });
    });

    return location;
  };

  goBack = () => {
    this.props.history.goBack();
  }

  componentDidMount() {
    this.setState({
      location: this.getLocation()
    });
  }

  render() {
    let className = "place " + this.props.css
    return (
      <div className={className} style={{ backgroundImage: `url(${Background})` }}>
        <BackIcon style={{ float: 'left', width: '60px', height: '33px' }} onClick={() => this.goBack()} />
        <input style={{ marginLeft: '-50px' }} name="city" placeholder="wybierz miasto..." />
        <h1 style={{color: '#fff', fontWeight: 800}}>Location: {this.state.location.lat}</h1>
      </div>
    );
  }
}

export default withRouter(Header);