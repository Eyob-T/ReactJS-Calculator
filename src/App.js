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
      equalClicked: false,
      combo:false,
      prevItem:"",
      decimal: false,
      decimalAllowed:true
    }
    this.displayItem = this.displayItem.bind(this)
    this.clearDisplay = this.clearDisplay.bind(this)
    this.calculate=this.calculate.bind(this)
  }

  displayItem(e){
    e.preventDefault();
    console.log("in display itwem !! " + e.currentTarget.value)
    console.log(this.state.display.length)
    console.log(this.state.display)

    const isNum = !isNaN(parseInt(e.currentTarget.value))
    console.log("current item " + e.currentTarget.value + " prev Item " + this.state.prevItem)
    console.log("IS NUM ? " + isNum + " prevNum? " + !isNaN(this.state.prevItem) + " deciaml " + this.state.decimal + " decimal allowed " + this.state.decimalAllowed)

    
    //if at initial state, don't add zero
    if((this.state.display[0] === "0" && e.currentTarget.value === "0") || (this.state.decimal && !isNum) || (!this.state.decimalAllowed && e.currentTarget.value === ".")){
     
    }
    else {
      //don't allow 1st number = 0 OR equalClicked and is number
      if(this.state.display[0] === "0" || (this.state.equalClicked && !isNaN(parseInt(e.currentTarget.value)))){
        console.log("WHAAAATATATT")
        this.setState({
          display: e.currentTarget.value,
          equalClicked:false,
          prevItem:e.currentTarget.value
        })
        console.log("equal clicked " + this.state.equalClicked)

        
      } 
      // add item to display
      else {

        //need to get rid of this and put it somewhere else
        this.setState({
          equalClicked:false
        })
        
       
          if (this.state.combo && !isNum){

            const newDisplay = [...this.state.display]
            newDisplay.splice(newDisplay.length-2,2,e.currentTarget.value)

            this.setState({
              display: newDisplay,
              prevItem: e.currentTarget.value,
              combo:false
            })
          }
          else if (!this.state.decimalAllowed && (e.currentTarget.value === "+" || e.currentTarget.value === "-" || e.currentTarget.value === "*" || e.currentTarget.value ==="/")){
            const newItems = [...this.state.display,e.currentTarget.value]
            this.setState({
             display:newItems,
             prevItem: e.currentTarget.value,
             decimalAllowed:true
            }) 
          }
          else{  
              if(this.state.prevItem === "+" &&  e.currentTarget.value === "-"){
                  const newItems = [...this.state.display,e.currentTarget.value]
                   this.setState({
                    display:newItems,
                    prevItem: e.currentTarget.value,
                    combo:true
                   }) 
                }
              else if (this.state.prevItem === "-" && e.currentTarget.value === "-"){
                const newItems = [...this.state.display,e.currentTarget.value]
                  this.setState({
                    display:newItems,
                    prevItem: e.currentTarget.value,
                    combo:true
                  }) 
              }
              else if (this.state.prevItem === "*" && e.currentTarget.value === "-" ){
                const newItems = [...this.state.display,e.currentTarget.value]
                  this.setState({
                    display:newItems,
                    prevItem: e.currentTarget.value,
                    combo:true
                    })
              }
              else if (this.state.prevItem === "/" && e.currentTarget.value === "-"){
                
                  const newItems = [...this.state.display,e.currentTarget.value]
                   this.setState({
                      display:newItems,
                      prevItem: e.currentTarget.value,
                      combo:true
                    })
               }
               else if (e.currentTarget.value === "."){
                const newItems = [...this.state.display,e.currentTarget.value]
                this.setState({
                  display:newItems,
                  prevItem:e.currentTarget.value,
                  decimal: true,
                  decimalAllowed:false
                })
              }
               else if (!isNum && isNaN(this.state.prevItem) ){
                console.log("not num -> currently & prev")
                const newDisplay = [...this.state.display]
                newDisplay.splice(newDisplay.length-1,1,e.currentTarget.value)
                
                console.log("NEW DISPLAY REPLACE")
                console.log(newDisplay)
                this.setState({
                display:newDisplay,
                prevItem:e.currentTarget.value 
                })
              }
              else if ((!isNum && !isNaN(this.state.prevItem))){
                console.log("2nd item " + e.currentTarget.value)
                const newItems = [...this.state.display,e.currentTarget.value]
                this.setState({
                  display:newItems,
                  prevItem:e.currentTarget.value,
                  combo:false,
                  decimal:false
                })
              }
              else if (isNum){
                console.log("2nd item " + e.currentTarget.value)
                const newItems = [...this.state.display,e.currentTarget.value]
                this.setState({
                  display:newItems,
                  prevItem:e.currentTarget.value,
                  decimal:false,
                })
              }
           
      }
    }
    }
}

  clearDisplay(e){
    e.preventDefault();
    this.setState({
      display:['0'],
      equalClicked: false,
      combo:false,
      prevItem:""
    });
    console.log("cleared")
  }
  
  calculate(e){
    e.preventDefault();

    const toCalculate = [...this.state.display];
    console.log("toCalculate B4 Calc")
    console.log(toCalculate)
    //const newArr = [];
    //let prevNum = !isNaN(parseInt(toCalculate[0]));
    //console.log("PrevNum "  + prevNum)
    // for(let i=0;i<toCalculate.length;i++){
    //   console.log("num= " + toCalculate[i] + "PrevNum=" + prevNum)
    //   if(prevNum){
    //     newArr.push(toCalculate[i]);
    //     prevNum = !isNaN(parseInt(toCalculate[i]));
    //   }
    //   else{
    //     //if current item is a number, just push it
    //     if(!isNaN(parseInt(toCalculate[i]))){
    //       newArr.push(toCalculate[i]);
    //       prevNum = true;
    //     }
    //     else{
    //      const prevItem = newArr[newArr.length-1];
    //       if (prevItem === "+" && toCalculate[i] === "-")
    //        newArr[newArr.length-1]="-"
    //       else if (prevItem === "-" && toCalculate[i] === "-")
    //         newArr[newArr.length-1]="+"
    //       else if (prevItem === "*" && toCalculate[i] === "-")
    //         newArr.push(toCalculate[i])
    //       else if (prevItem === "/" && toCalculate[i] === "-")
    //         newArr.push(toCalculate[i])
    //       else
    //         newArr[newArr.length-1]=toCalculate[i];
          
    //       prevNum = !isNaN(parseInt(toCalculate[i]));
    //     }
    //   }
      
    // }
    //console.log("new array !")
    //console.log(newArr)
    const cal = toCalculate.join('');
    // console.log(typeof cal)
    // console.log(cal)
    // console.log(eval(cal));
    const result =  eval(cal)
   // console.log(typeof result)
   console.log("tnew Display after Calc")
    console.log(result)
    this.setState({
      display: [result],
      prevItem:result,
      equalClicked: true,
      combo:false
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
