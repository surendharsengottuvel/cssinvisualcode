import suren from './Secondscript.js' //here why is used suren instead of surenthiran for default
import { firstfunction as first, secondfunction } from './Secondscript.js'; 
let a=100;
console.log(a)

let firstobject=new suren(); //class function without creating option you can't access
                             //look here firstobject created then onnly called below   

firstobject.login() //login function working sucessfuly

first() //first function console is this

secondfunction() //second function consle is this

