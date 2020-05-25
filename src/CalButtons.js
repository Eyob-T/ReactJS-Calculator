import React from 'react';
import { Card, CardContent, Button , Grid, Paper} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

function CalButton(props){

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
          margin: 'auto'
        },
        button: {
            // height: 3,
            // width: 64,
          background:'rgb(172,57,57)', 
          color: 'white'
        },
        buttonOperaton: {
            background:'#666666', 
            color: 'white'
        },
        buttonNum: {
            background:'#4D4D4D', 
            color: 'white'
        },
        buttonEqual:{
            background:'#666666', 
            color: 'white',
            height: 72,
        },
        paper: {
            height: 36,
            width: 64,
        },
        paperEqual:{
            width: 72,
        },
        control: {
          padding: theme.spacing(2)
        }
      }));


      const classes = useStyles();

    return(
        <div>
            
            <Grid container spacing={0} justify="center" className={classes.root} >
                <Grid item xs={12} container spacing={0}>
                    <Grid item xs={6} spacing={0} >
                       <Paper className={classes.paper} >
                            <Button color="primary" id="clear" value="AC" onClick={props.clearDisplay} className={classes.button}>AC</Button> 
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Button color="primary" id="divide" value="/" onClick={props.displayItem} className={classes.buttonOperaton}>/</Button>
                        </Paper>
                    </Grid>    
                    <Grid item xs={3}>                     
                      <Paper className={classes.paper}>
                         <Button color="primary" id="multiply" value="*"onClick={props.displayItem} className={classes.buttonOperaton}>*</Button>
                       </Paper>
                    </Grid>
                </Grid>  {/* end of first row */}

                <Grid item xs={12} container spacing={0}>
                    <Grid item xs={3} spacing={0} >
                       <Paper className={classes.paper}>
                            <Button color="primary" id="seven" value="7" onClick={props.displayItem} className={classes.buttonNum}>7</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Button color="primary" id="eight" value="8" onClick={props.displayItem} className={classes.buttonNum}>8</Button>
                        </Paper>
                    </Grid>    
                    <Grid item xs={3}>                     
                      <Paper className={classes.paper}>
                         <Button color="primary" id="nine" value="9"onClick={props.displayItem} className={classes.buttonNum}>9</Button>
                       </Paper>
                    </Grid>
                    <Grid item xs={3}>                     
                      <Paper className={classes.paper}>
                        <Button color="primary" id="subtract" value="-" onClick={props.displayItem} className={classes.buttonOperaton}>-</Button>
                       </Paper>
                    </Grid>
                </Grid>  {/* end of second row */}

                <Grid item xs={12} container spacing={0}>
                    <Grid item xs={3} spacing={0} >
                       <Paper className={classes.paper}>
                            <Button color="primary" id="four" value="4" onClick={props.displayItem} className={classes.buttonNum}>4</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Button color="primary" id="five" value="5" onClick={props.displayItem} className={classes.buttonNum}>5</Button>
                        </Paper>
                    </Grid>    
                    <Grid item xs={3}>                     
                      <Paper className={classes.paper}>
                         <Button color="primary" id="six" value="6"onClick={props.displayItem} className={classes.buttonNum}>6</Button>
                       </Paper>
                    </Grid>
                    <Grid item xs={3}>                     
                      <Paper className={classes.paper}>
                        <Button color="primary" id="add" value="+" onClick={props.displayItem} className={classes.buttonOperaton}>+</Button>
                       </Paper>
                    </Grid>
                </Grid>  {/* end of third row */}
                
                <Grid item container xs={12}>
                    <Grid item container spacing={0}  xs={9} > {/* 1 2 3 0 . */}
                        {/* 1 2 3 */}
                            <Grid item xs={4} spacing={0} >
                            <Paper className={classes.paper}>
                                    <Button color="primary" id="one" value="1" onClick={props.displayItem} className={classes.buttonNum}>1</Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                    <Button color="primary" id="two" value="2" onClick={props.displayItem} className={classes.buttonNum}>2</Button>
                                </Paper>
                            </Grid>    
                            <Grid item xs={4}>                     
                            <Paper className={classes.paper}>
                                <Button color="primary" id="three" value="3"onClick={props.displayItem} className={classes.buttonNum}>3</Button>
                            </Paper>
                            </Grid>
                       

                         {/* 0 . */}
                            <Grid item xs={8} spacing={0} >
                            <Paper className={classes.paper}>
                                    <Button color="primary" id="zero" value="0" onClick={props.displayItem} className={classes.buttonNum}>0</Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                    <Button color="primary" id="decimal" value="." onClick={props.displayItem} className={classes.buttonNum}>.</Button>
                                </Paper>
                            </Grid>

                        
                        
                    </Grid>  

                    <Grid item container xs={3}>
                        <Grid item xs={3}>                     
                            <Paper className={classes.paperEqual}>
                                <Button color="primary" id="equal" value="=" onClick={props.calculate} className={classes.buttonEqual}>=</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                    {/* <Grid item xs={12} container spacing={0}>
                        <Grid item xs={3} spacing={0} >
                        <Paper className={classes.paper}>
                                <Button color="primary" id="one" value="1" onClick={props.displayItem} className={classes.buttonNum}>1</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <Button color="primary" id="two" value="2" onClick={props.displayItem} className={classes.buttonNum}>2</Button>
                            </Paper>
                        </Grid>    
                        <Grid item xs={3}>                     
                        <Paper className={classes.paper}>
                            <Button color="primary" id="three" value="3"onClick={props.displayItem} className={classes.buttonNum}>3</Button>
                        </Paper>
                        </Grid>
                        <Grid  container xs={3} flex display="flex" flexDirection="row-reverse" >                     
                        <Paper className={classes.paperEqual}>
                            <Button color="primary" id="add" value="+" onClick={props.displayItem} className={classes.buttonEqual}>+</Button>
                        </Paper>
                        </Grid>
                      {/* end of fourth row */}

                        {/* <Grid item xs={6} spacing={0} >
                        <Paper className={classes.paper}>
                                <Button color="primary" id="zero" value="0" onClick={props.displayItem} className={classes.buttonNum}>0</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <Button color="primary" id="decimal" value="." onClick={props.displayItem} className={classes.buttonNum}>.</Button>
                            </Paper>
                        </Grid> */}
                        {/* <Grid item xs={3}>                     
                        <Paper className={classes.paperEqual}>
                            <Button color="primary" id="add" value="+" onClick={props.displayItem} className={classes.buttonEqual}>=</Button>
                        </Paper>
                        </Grid> */}
                    </Grid>  {/*end of 5th row */}
               
               
           


            {/* <button id="zero" value="0" onClick={props.displayItem}>0</button>
            <button id="one" value="1" onClick={props.displayItem}>1</button>
            <button id="two" value="2" onClick={props.displayItem}>2</button>
            <button id="three" value="3" onClick={props.displayItem}>3</button>
            <button id="four" value="2" onClick={props.displayItem}> 2</button>
            <button id="five" value="5" onClick={props.displayItem}>5</button>
            <button id="six" value="6" onClick={props.displayItem}>6</button>
            
           
            <button id="add" value="+"  onClick={props.displayItem}>+</button>
            <button id="subtract" value="-"  onClick={props.displayItem}>-</button>
            
            
            <button id="decimal" value="." onClick={props.displayItem}>.</button>
            <button id="equal" value="=" onClick={props.calculate}>=</button> */}
            
        </div>
    );
}

export default CalButton;