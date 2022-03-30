import "./App.css";

// import react-router-dom
import { Switch, Route } from "react-router-dom";

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";
import NewRoom from "../Pages/NewRoom";
// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import NewRoomDetails from "../Pages/NewRoomDetails";
import EditRoom from '../Pages/EditRoom'
import EditCar from '../Components/EditCar'
import Cars from "../Pages/Cars";
import CarDetails from "../Pages/CarDetails";
import Checkout from "../Pages/Checkout";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/new-room/" component={NewRoom} />
        <Route exact path="/newrooms/:id" component={NewRoomDetails} />
        <Route exact path='/newroom/edit/:id' component={EditRoom} />
        <Route exact path="/cars/" component={Cars} />
        <Route exact path="/cars/:id" component={CarDetails} />
        <Route exact path="/cars/edit/:id" component={EditCar} />
        <Route exact path="/checkout/" component={Checkout} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
