import React, { Component } from 'react';
import Header from './Header';
import './Dashboard.css';

class Dashboard extends Component {

  select = (url) => {
    this.props.history.push('/restaurant/' + url);
  }

  render() {
    return (
      <div>
       <Header />
       <div className="tableWrapper">
         <table>
           <tbody>
            <tr>
              <td onClick={() => this.select('dance')} style={{backgroundColor: "#342343"}}>Taniec</td>
              <td onClick={() => this.select('talk')} style={{backgroundColor: "#457457"}}>Rozmowa</td>
            </tr>
            <tr>
              <td onClick={() => this.select('date')} style={{backgroundColor: "#F65E64"}}>Randka</td>
              <td onClick={() => this.select('fun')} style={{backgroundColor: "#111221"}}>Zabawa</td>
            </tr>
            <tr>
              <td onClick={() => this.select('events')} style={{backgroundColor: "#AC4312"}}>Events</td>
              <td onClick={() => this.select('all')} style={{backgroundColor: "#D43F43"}}>Wszystkie</td>
            </tr>
           </tbody>
         </table>
       </div>
      </div>
    );
  }
}

export default Dashboard;
