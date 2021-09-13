import Home from "./pages/Home";
import Header from "./containers/Header";
import Content from "./pages/Content/Content";
import Footer from "./containers/Footer/Footer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { set_date } from "./redux/actions";
import { Route } from "react-router";
function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Route path='/article/:id' component={Content} />
      <Route exact path='/' component={Home} />
      <Footer />
    </div>
  );
}

export default App;
