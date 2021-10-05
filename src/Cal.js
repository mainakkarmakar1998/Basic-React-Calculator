import React, { useState } from "react";
import "./Cal.css";


const Cal = () =>{

    const [result,setResult]= useState("");
    function click(e){
        setResult(result + e.target.name);
    }
    function backspace()
    {   try{
        setResult(result.slice(0,result.length - 1));
    }
    catch(error)
    {
        setResult("");
    }
    }
    function clear()
        {
            setResult("");
        }
    function res()
    {   try{
        setResult(eval(result));
        }
        catch{
            setResult("Wrong input");
        }
    }
   return(
        <div className="ldiv">
        <h1>Basic React Calculator</h1><br/>
       
          <table border="1" cellSpacing="0" style={{height:"400px",width:"400px",alignSelf:"center"}}>
          
          <tr>
              <td colSpan="4"><input type="text" value={result}/></td>
          </tr>
          <tr>
              <td className="digit"><button name="7" onClick={click}>7</button></td>
              <td className="digit"><button name="8" onClick={click}>8</button></td>
              <td className="digit"><button name="9" onClick={click}>9</button></td>
              <td className="operator"><button name="*" onClick={click}>X</button></td>
          </tr>
          <tr>
              <td className="digit"><button name="4" onClick={click}>4</button></td>
              <td className="digit"><button name="5" onClick={click}>5</button></td>
              <td className="digit"><button name="6" onClick={click}>6</button></td>
              <td className="operator"><button name="/" onClick={click}>/</button></td>
          </tr>
          <tr>
              <td className="digit"><button name="1" onClick={click}>1</button></td>
              <td className="digit"><button name="2" onClick={click}>2</button></td>
              <td className="digit"><button name="3" onClick={click}>3</button></td>
              <td className="operator"><button name="-" onClick={click}>-</button></td>
          </tr>
          <tr>
              <td className="digit"><button name="0" onClick={click}>0</button></td>
              <td className="C"><button id="backspace" onClick={backspace}>C</button></td>
              <td className="digit"><button name="." onClick={click}>.</button></td>
            
              <td className="operator"><button name="+" onClick={click}>+</button></td>
          </tr>
          <tr>
              <td colSpan="3" className="clear"><button id="clear" onClick={clear}>Clear</button></td>
              <td className="res"><button id="res" onClick={res}>=</button></td>
          </tr>
         
          </table>
         
        </div>
    ) 
}
export default Cal;
