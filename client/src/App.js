import { Route, Switch } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import { GlobalProvider } from "./context/GlobalState";
import Home from "./pages/Home";

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route path="/edit/:id" component={EditEmployee} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
};

export default App;
