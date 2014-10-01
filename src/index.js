/** @jsx React.DOM **/

var React   = require('react');

var groupby = require('lodash.groupby');
var sortby  = require('lodash.sortby');

var beasts = groupby(require('../db/animals.json'), function(d) {
  return d.challenge
});

var App = React.createClass({

  getAnimal(animal, i) {
    return (
      <span key={ i }>{ i > 0 ? ', ' : '' }{ animal.name }</span>
    );
  },

  getAnimals(animals, i) {
    return (
      <p className="block col-2" key={ i }>{ sortby(animals, 'name').map(this.getAnimal) }</p>
    )
  },

  render() {
    var collection = Object.keys(beasts).sort(function(a, b) {
      return parseFloat(a) > parseFloat(b) ? 1 : -1;
    }).map(function(b) {
      return (
        <div>
          <h3 className="col-1"> { b }</h3>
          { this.getAnimals(beasts[b]) }
        </div>
      );
    }, this);

    return (
      <div>
        <h2>Beastiary</h2>
        { collection }
      </div>
    );
  }
});

React.renderComponent(<App />, document.body);
