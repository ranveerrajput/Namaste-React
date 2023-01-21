# Lets het Hooked

- we have create a new folder src to store all the app related folder
- react file folder read this
- there are 2 ways of default
    -export default Title;
    - import Title from "./components/Title";

    -second way
    - write export before the component name

- If we have a file which have 2 components and i want to export 2 components. but from export default we can export only one thing from the file.

- Default Import
    - import Header from "./conponents/Headrer;

-Named Import 
    - import {Title} from "./components/Header"; 
    
- import * as Obj from './components/Header";  This will import all the things from that file and we can use this in any file obj.name

- we are also creating a config file in our project config.js
- we put all the hardcoded string in config.js  in some companies they name it is constant.js

- react used one way data binding
- every component in the react maintains the state so we can maintain the state variable over there
-every time we have to use local variable we use state in it
- the variable that we write in react are managed by react hence it doesnt update directly

---
 - hooks are nothing but a normal function
 - we get usestate from react
 - import {useState} from "react";

 - const [searhText] = useState();
 - this function return the array which has first element as the variable name.
 - searchText is a local state variable.
 -
 - const [searhText] = useState("KFC"); assigning with the default value

 - const [searhText,setSearchText] = useState("KFC"); 

 onst [searhText,setSearchText] = useState("KFC");  Here, 
 useState returns =[variable name, function to update the variable
 ]

 - read about synthetic tag

 - 2 way binding we are reading as well as writing at the same time

 - evertime when you want to sync your variablr with the UI you have to use the state vaiables

 - do the toggle thing