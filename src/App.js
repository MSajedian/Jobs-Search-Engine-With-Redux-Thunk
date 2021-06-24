import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchCompany from './components/SearchCompany';
import SearchJob from './components/SearchJob';
import Favourites from './components/Favourites';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Search Company</Link>
        </li>
        <li>
          <Link to="/search-job">Search Job</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path='/' component={SearchCompany} />
        <Route exact path='/search-job' component={SearchJob} />
        <Route exact path='/company-detail/:companyName' component={CompanySearchResults} />
        <Route exact path="/favourites" component={Favourites} />
        {/* <Route path="/detail/:id" exact render={(routerProps) => <Details {...routerProps}/>} /> */}
      </Switch>
    </Router >
  );
}

export default App;
