import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header,Logo} from './component/header'
import {Footer,Hello }from './component/footer'

// install bootstrap through command 
// npm install react-boostrap bootstrap
// show in package file and also in node modules


//function component 
// function App() {
//    render(
//      <div className="App">
//        <h1> hello word</h1>
//     </div>
//    );
// }

// class Header extends React.Component{
//   render(){
//     return (
//       <div className="header">
//         {/* inline style not preffer best is external css */}
//         {/* for making auto tag just rename js into jsx file and also change into index.js */}
//         <h2  style={{backgroundColor:'red',fontSize:'14px'}}> Header </h2>
        
//         </div>
//     )
//   }
// }
// class Footer extends React.Component{
//   render(){
//     return (
//       <div className="footer">
//         <h2> Footer </h2>
//         </div>
//     )
//   }
// }
// one component to another component (props)
// class component old react style
class App extends React.Component{
  render(){
    
    let name ="bilal";
    let fname = "iqbal";
    let arr = [1,2,3,4,5];
    let todos = [{text:"bilal"},{text:"iqbal"}];
    return(
      
      <div className="App">
        
        <Header />
        <Logo />
        <h1> {` ${name} ${fname}`} </h1>
        <h1> {arr} </h1>
        {/* /*render todos with map */}
        <ul>
            {todos.map((item,index)=>{
              return <li key={index}> {item.text}</li>
              
            })

            }
          </ul>
          {/* self closing tag */}
          <Hello />
          <Footer />
        </div>
        
    )
  }
}
export default App;

