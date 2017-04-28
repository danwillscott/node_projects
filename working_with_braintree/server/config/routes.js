/**
 * Created by daniel scott on 3/19/17.
 */
console.log('Server: routes.js loaded');



module.exports = function(app){
  app.get('/', function (req, res) {
    res.render('index')
  })
};