// Store Picker

import React from 'react';
import { Navigation } from 'react-router';
import h from '../helpers';
import { History } from 'react-router';

var StorePicker = React.createClass({
  mixins: [History],

  render: function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  },

  goToStore: function(event) {
    event.preventDefault();
    var storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
  }
});

export default StorePicker;
