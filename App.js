import React,{Component} from "react";
import StockMarket from "./Component/StockMarket";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer";
import Refer from "./Component/Refer";
import MobileApp from "./Component/Refer";
import LiveScore from "./Component/LiveScorce";
import News from "./Component/News";
import Weather from "./Component/Weather";
import Train from "./Component/Train";
import { Route,Switch } from "react-router-dom";
import "./Views/CSS/style.css";

class App extends Component{
  render(){
      return (
            <div id="main-wrapper"> 
                  <Navbar />
                  <section class="container">
                  <div class="bg-white shadow-md rounded p-4">
                  <div class="row">  
                  <Switch>
                        <Route exact path='/' component={StockMarket}/>
                        <Route path='/livescore' component={LiveScore}/>
                        <Route path='/news' component={News}/>
                        <Route path='/weather' component={Weather}/>
                        <Route path='/train' component={Train}/>
                  </Switch>  
                  </div>
                  </div>
                  </section>  
                  <Refer/>
                  <MobileApp/>
                  <Footer/>
            </div>
      );
}
}
export default App;
