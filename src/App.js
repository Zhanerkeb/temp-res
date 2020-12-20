import './App.css';
import Main from './containers/main'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import configureStore from './store';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';
import Signup from './containers/signup';

const store = configureStore()
function App() {
  return (
    <div className="App">
      <Provider store={store}>   
        <Router>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/signup" component={Signup}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
