import React from 'react';
import './Filters.css';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  }
};

class Filters extends React.Component {

  handleCloseChip = () => {
    // do nothing
  }

  render() {
    return(
      <div className="filters">
        <Chip style={styles.chip} onRequestDelete={this.handleCloseChip}>Blisko mnie</Chip>
        <Chip style={styles.chip} onRequestDelete={this.handleCloseChip}>Taniec</Chip>
        <Chip style={styles.chip} onRequestDelete={this.handleCloseChip}>Whisky</Chip>
        <Chip style={styles.chip} onRequestDelete={this.handleCloseChip}>Rezerwacja on-line</Chip>
      </div>
    );
  }
}

export default Filters;