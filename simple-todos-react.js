if (Meteor.isClient) {
  //Meteor.startup(function () {
  //  React.render(<App />, document.getElementById('render-target'));
  //});



} // End Client

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
} // End Server
