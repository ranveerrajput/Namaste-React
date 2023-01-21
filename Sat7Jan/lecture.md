# Talk is cheap , show me the code

- jSX is not mandatory
- we can write Component inside the other like
    - <Title/> 
    - {Title()}
    - <Title></Title>

- always plan your plan before coding
- any piece of JSX you write there can only be one parent.
- React.Fragment : It is a component which is extracted by react.It is like a empty tag.Since writing <React.Fragment> all the time was not the good idea so the react developer coame up with the idea to write it as `<> </>` empty brackets which is the short hand for `<React.Fragment> </react.Fragment>`
JSX - One Parent

- HW :  can we use react.fragment inside react.fragment Search this .

- *Ipmortant Config Deriven UI : Backend and API is driving the Config. In system design round you have to tell this.

- Homework : Optional Chaining
- props -> propeties 
- when we saying we are passing props that means we are pasing data inside component
- map is the best way to do functional programming we dont use for loop thats the practice we follow.

- Virtual DOM : we keep the representation of the DON with us this is known as Virtual DOm

- For reconsciliation we need Virtual DOM .
This is and algorithm (diff alogorithm : It find out diff between trees) to find out the diff between autual DOM n virtual dom and it updates that change node .

- to know which thing to re render we used the key
- HW : read Virtual DOM.
- Read about React Fiber (its a new reconsilation engine which came in react 16 which is responsible for diff algorithm)

HW : why we dont used index as a key.

