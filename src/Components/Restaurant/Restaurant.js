import React from 'react';
import './Restaurant.css';
import Header from './Header.js';
import Submenu from './Submenu.js';
import restaurants from '../../restaurants.js';

class Restaurant extends React.Component {
  renderContent = (url) => {
    if(url.includes('menu')) {
      return(<div>Menu</div>);
    } else if(url.includes('reviews')) {
      return(<div>Recenzje</div>);
    } else if(url.includes('location')) {
      return(<div>Lokalizacja</div>);
    } else {
      return(<div>O restauracji</div>);
    }
  }

  render() {
    return (
      <div>
        {restaurants
          .filter(item => item.url === this.props.match.params.name)
          .map((item, index) => {
            return (
              <div key={index}>
                <Header 
                  background={item.img} 
                  name={item.name}
                  street={item.street}
                  postCode={item.postCode}
                  city={item.city}
                />
                <Submenu url={item.url} />
                <div>
                  <div>
                    {this.renderContent(this.props.match.url)}
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Restaurant;