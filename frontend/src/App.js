import "./App.css";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Wishlistscreen from "./screens/Wishlistscreen";
import "./bootstrap.min.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homescreen } exact/>
      <Route path="/products/:id" component={Productscreen } />
      <Route path="/login" component={Loginscreen } />
      <Route path="/register" component={Registerscreen } />
      <Route path="/cart/:id?" component={Cartscreen } />
      <Route path="/wishlist/:id?" component={Wishlistscreen } />
    </div>
  );
}

export default App;
