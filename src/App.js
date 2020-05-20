import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Display from './Display'
import CalButtons from './CalButtons'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      display: ["0"],
      equalClicked: false
    }
    this.displayItem = this.displayItem.bind(this)
    this.clearDisplay = this.clearDisplay.bind(this)
    this.calculate=this.calculate.bind(this)
  }

  displayItem(e){
    e.preventDefault();
    console.log("in display itwem !! " + e.target.value)
    console.log(this.state.display.length)
    console.log(this.state.display)

    //if at initial state, don't add zero
    if(this.state.display[0] === "0" && e.target.value === "0"){
     
    }
    else {
      //don't allow 1st number or equalClicked and is number
      if(this.state.display[0] === "0" || (this.state.equalClicked && !isNaN(parseInt(e.target.value)))){
        console.log("WHAAAATATATT")
        this.setState({
          display: e.target.value,
          equalClicked:false
        })
      } 
      // add item to display
      else {
       const newItems = [...this.state.display,e.target.value]
    
      this.setState({
        display: newItems,
        equalClicked:false
      });
      console.log(this.state.display)
      }
    }
}

  clearDisplay(e){
    e.preventDefault();
    this.setState({
      display:['0']
    });
    console.log("cleared")
    console.log(this.state.display)
  }
  
  calculate(e){
    e.preventDefault();
    
    this.setState({
      equalClicked: true
    })

    const toCalculate = this.state.display;
    const newArr = [];
    let prevNum = !isNaN(parseInt(toCalculate[0]));
    console.log("PrevNum "  + prevNum)
    for(let i=0;i<toCalculate.length;i++){
      console.log("num= " + toCalculate[i] + "PrevNum=" + prevNum)
      if(prevNum){
        newArr.push(toCalculate[i]);
        prevNum = !isNaN(parseInt(toCalculate[i]));
      }
      else{
        //if current item is a number, just push it
        if(!isNaN(parseInt(toCalculate[i]))){
          newArr.push(toCalculate[i]);
          prevNum = true;
        }
        else{
         const prevItem = newArr[newArr.length-1];
          if (prevItem === "+" && toCalculate[i] === "-")
           newArr[newArr.length-1]="-"
          else if (prevItem === "-" && toCalculate[i] === "-")
            newArr[newArr.length-1]="+"
          else if (prevItem === "*" && toCalculate[i] === "-")
            newArr.push(toCalculate[i])
          else if (prevItem === "/" && toCalculate[i] === "-")
            newArr.push(toCalculate[i])
           
          prevNum = !isNaN(parseInt(toCalculate[i]));
        }
      }
      
    }
    console.log(newArr)
    const cal = newArr.join('');
    console.log(typeof cal)
    console.log(cal)
    console.log(eval(cal));
    const result =  [eval(cal)]
    console.log(typeof result)
    this.setState({
      display: result
    })
    
  }

  render () {
    return (
    <div className="App">
     
       <Display display = {this.state.display}/>
       <CalButtons displayItem = {this.displayItem} clearDisplay = {this.clearDisplay} calculate = {this.calculate}/>
       
    </div>
    );
    }
}

export default App;
