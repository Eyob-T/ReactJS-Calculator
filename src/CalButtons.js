import React from 'react';
import { Button , Grid, Paper} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

function CalButton(props){

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
          margin: 'auto',
          width:'50%'
        },
        button: {
            // height: 3,
            // width: 64,
          background:'rgb(172,57,57)', 
          color: 'white',
          width: '100%'
        },
        buttonOperaton: {
            background:'#666666', 
            color: 'white',
            width: '100%'
        },
        buttonNum: {
            background:'#4D4D4D', 
            color: 'white',
            width: '100%'
        },
        buttonEqual:{
            background:'#666666', 
            color: 'white',
            height: 72,
            width: '100%'
        },
        paper: {
            height: 36,
            width: '100%',
        },
        paperEqual:{
            
            width: '100%'
        },
        control: {
          padding: theme.spacing(2)
        }
      }));


      const classes = useStyles();

    return(
        <div  onClick={(e) => {
            console.log("WHAAT " + e.target.parentNode.classList )
            if (e.target.parentNode.classList.contains("op")){
                    console.log("OK")
                    {props.displayItem(e,e.target.parentNode.value)}
            }
            else if (e.target.parentNode.value === "="){
                { {props.calculate(e)}}
            }
            else if (e.target.parentNode.value === "AC"){
                { {props.clearDisplay(e)}}
            }
           }}>
            
            <Grid container spacing={0} justify="center" className={classes.root} >
                <Grid item xs={12} container spacing={0}>
                    <Grid item xs={6} spacing={0} >
                       <Paper className={classes.paper} >
                            <Button color="primary" id="clear" value="AC" className={classes.button} >AC</Button> 
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Button color="primary" id="divide" value="/"  className="op" className={`${classes.buttonOperaton} op`}>/</Button>
                        </Paper>
                    </Grid>    
                    <Grid item xs={3}>                     
                      <Paper className={classes.paper}>
                         <Button color="primary" id="multiply" value="*" className={`${classes.buttonOperaton} op`}>*</Button>
                       </Paper>
                    </Grid>
                </Grid>  {/* end of first row */}

                <Grid item xs={12} container spacing={0}>
                    <Grid item xs={3} spacing={0} >
                       <Paper className={classes.paper}>
                            <Button color="primary" id="seven" value="7" className={`${classes.buttonNum} op`}  >7</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Button color="primary" id="eight" value="8" className={`${classes.buttonNum} op`} >8</Button>
                        </Paper>
                    </Grid>    
                    <Grid item xs={3}>                     
                      <Paper className={classes.paper}>
                         <Button color="primary" id="nine" value="9" className={`${classes.buttonNum} op`}>9</Button>
                       </Paper>
                    </Grid>
                    <Grid item xs={3}>                     
                      <Paper className={classes.paper}>
                        <Button color="primary" id="subtract" value="-" className={`${classes.buttonNum} op`} className={`${classes.buttonOperaton} op`}>-</Button>
                       </Paper>
                    </Grid>
                </Grid>  {/* end of second row */}

                <Grid item xs={12} container spacing={0}>
                    <Grid item xs={3} spacing={0} >
                       <Paper className={classes.paper}>
                            <Button color="primary" id="four" value="4" className={`${classes.buttonNum} op`} >4</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Button color="primary" id="five" value="5" className={`${classes.buttonNum} op`} >5</Button>
                        </Paper>
                    </Grid>    
                    <Grid item xs={3}>                     
                      <Paper className={classes.paper}>
                         <Button color="primary" id="six" value="6"className={`${classes.buttonNum} op`} >6</Button>
                       </Paper>
                    </Grid>
                    <Grid item xs={3}>                     
                      <Paper className={classes.paper}>
                        <Button color="primary" id="add" value="+" className={`${classes.buttonNum} op`} className={`${classes.buttonOperaton} op`}>+</Button>
                       </Paper>
                    </Grid>
                </Grid>  {/* end of third row */}
                
                <Grid item container xs={12}>
                    <Grid item container spacing={0}  xs={9} > {/* 1 2 3 0 . */}
                        {/* 1 2 3 */}
                            <Grid item xs={4} spacing={0} >
                            <Paper className={classes.paper}>
                                    <Button color="primary" id="one" value="1" className={`${classes.buttonNum} op`} >1</Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                    <Button color="primary" id="two" value="2" className={`${classes.buttonNum} op`} >2</Button>
                                </Paper>
                            </Grid>    
                            <Grid item xs={4}>                     
                            <Paper className={classes.paper}>
                                <Button color="primary" id="three" value="3"className={`${classes.buttonNum} op`} >3</Button>
                            </Paper>
                            </Grid>
                       

                         {/* 0 . */}
                            <Grid item xs={8} spacing={0} >
                            <Paper className={classes.paper}>
                                    <Button color="primary" id="zero" value="0" className={`${classes.buttonNum} op`} >0</Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                    <Button color="primary" id="decimal" value="." className={`${classes.buttonNum} op`} >.</Button>
                                </Paper>
                            </Grid>

                        
                        
                    </Grid>  

                    <Grid item container spacing={0} xs={3}>
                                           
                            <Paper className={classes.paperEqual}>
                                <Button color="primary" id="equal" value="=" className={classes.buttonEqual} >=</Button>
                            </Paper>
                        
                    </Grid>
                </Grid>
                    {/* <Grid item xs={12} container spacing={0}>
                        <Grid item xs={3} spacing={0} >
                        <Paper className={classes.paper}>
                                <Button color="primary" id="one" value="1" className={`${classes.buttonNum} op`} >1</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <Button color="primary" id="two" value="2" className={`${classes.buttonNum} op`} >2</Button>
                            </Paper>
                        </Grid>    
                        <Grid item xs={3}>                     
                        <Paper className={classes.paper}>
                            <Button color="primary" id="three" value="3"className={`${classes.buttonNum} op`} >3</Button>
                        </Paper>
                        </Grid>
                        <Grid  container xs={3} flex display="flex" flexDirection="row-reverse" >                     
                        <Paper className={classes.paperEqual}>
                            <Button color="primary" id="add" value="+" className={`${classes.buttonNum} op`} className={classes.buttonEqual}>+</Button>
                        </Paper>
                        </Grid>
                      {/* end of fourth row */}

                        {/* <Grid item xs={6} spacing={0} >
                        <Paper className={classes.paper}>
                                <Button color="primary" id="zero" value="0" className={`${classes.buttonNum} op`} >0</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <Button color="primary" id="decimal" value="." className={`${classes.buttonNum} op`} >.</Button>
                            </Paper>
                        </Grid> */}
                        {/* <Grid item xs={3}>                     
                        <Paper className={classes.paperEqual}>
                            <Button color="primary" id="add" value="+" className={`${classes.buttonNum} op`} className={classes.buttonEqual}>=</Button>
                        </Paper>
                        </Grid> */}
                    </Grid>  {/*end of 5th row */}
               
               
           


            {/* <button id="zero" value="0" className={`${classes.buttonNum} op`}>0</button>
            <button id="one" value="1" className={`${classes.buttonNum} op`}>1</button>
            <button id="two" value="2" className={`${classes.buttonNum} op`}>2</button>
            <button id="three" value="3" className={`${classes.buttonNum} op`}>3</button>
            <button id="four" value="2" className={`${classes.buttonNum} op`}> 2</button>
            <button id="five" value="5" className={`${classes.buttonNum} op`}>5</button>
            <button id="six" value="6" className={`${classes.buttonNum} op`}>6</button>
            
           
            <button id="add" value="+"  className={`${classes.buttonNum} op`}>+</button>
            <button id="subtract" value="-"  className={`${classes.buttonNum} op`}>-</button>
            
            
            <button id="decimal" value="." className={`${classes.buttonNum} op`}>.</button>
            <button id="equal" value="=" onClick={props.calculate}>=</button> */}
            
        </div>
    );
}

export default CalButton;