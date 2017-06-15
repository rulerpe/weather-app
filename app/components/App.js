
var React = require('react');
var Nav = require('./Nav');
var Home = require('./Home');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Nav/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/forecast' component={Forecast}/>
              <Route render={function(){
                return <p>Not Found</p>
              }}/>
            </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
