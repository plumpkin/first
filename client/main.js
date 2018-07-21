import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import Signup from './../imports/ui/Signup';


Meteor.startup(() => {
  ReactDOM.render(<Signup/>, document.getElementById('app'));
});
