import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './info.html';
import '../../pages/admin/admin.html';

Template.info.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.info.helpers({
  links() {
    return Links.find({});
  },
});

Template.info.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;

    Meteor.call('links.insert', title.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
      }
    });
  },
});

//###ORIGINAL
//
// const url = target.url;
//
// Meteor.call('links.insert', title.value, url.value, (error) => {
//   if (error) {
//     alert(error.error);
//   } else {
//     title.value = '';
//     url.value = '';
//   }
// });
