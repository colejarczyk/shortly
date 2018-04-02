import React, { Component } from 'react';
import Header from '../Dashboard/Header';
import ListItem from './ListItem';
import Filters from './Filters';
import './List.css';
import restaurants from '../../restaurants.js';

class List extends Component {
  render() {
    return (
      <div>
        <Header css="small" />
        <div>
          <Filters />
          <div>
            <ol>
              {restaurants.map((item, index) => (
                <ListItem
                  key={index} 
                  url={item.url}
                  image={item.img} 
                  name={item.name} 
                  hours={item.openingHours + " - " + item.endingHours}
                  address={item.street + ", " + item.postCode + " " + item.city}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
