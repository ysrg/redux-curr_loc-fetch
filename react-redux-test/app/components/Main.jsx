var React = require('react');
var Nav = require('Nav')

var Main = (props) => {
  return (
      <div>
        <div>
          <div>
            <p>Main.jsx Rebdered</p>
            {props.children}
          </div>
        </div>
      </div>
  );
};

module.exports = Main;
