import React from 'react';
import { withRouter } from 'react-router-dom';
import './ListItem.css';

class ListItem extends React.Component {

  handleClick = (url) => {
    this.props.history.push('/restaurant/wroclaw/' + url);
  }

  render() {
    return(
      <li onClick={() => this.handleClick(this.props.url)} className="list-item">
        <div className="image" style={{backgroundImage: `url(${this.props.image})`}}></div>
        <div className="details">
          <div className="inner">
            <h2>{this.props.name}</h2>
            <p><small>{this.props.hours}</small></p>
            <p>{this.props.address}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ListItem);