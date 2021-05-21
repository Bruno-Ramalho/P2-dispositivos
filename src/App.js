import { Link, Route } from 'react-router-dom';
//componentes
import Login from "./components/Login"

function App() {
  return (
    <Route exact path="/" render={() => (
      <div className="App">
        <Login />
      </div>
    )}>
    </Route>
  );
}

export default App;
