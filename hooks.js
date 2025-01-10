import {useState, useEffect, createContext} from "react"

const themeContext = createContext("light")

export default function counter() {
  
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light")
  
  const increasecount = () => setCount( count +1 )
  const decreasecount = () => {
    if(count > 0){
      setCount(count -1)
    }
  }
  const themeFunc = () => setTheme(theme === "light" ? "dark" : "light")
  
  useEffect(()=> {
    console.log(`current count is: ${count}`)
    
  },[count])
  
  return<>
    <themeContext.Provider value={theme}>
     <div className={`app ${theme}`}>
     <h1>Hello World</h1>
     <h1>count: {count}</h1>
     <button onClick={increasecount}>increase</button>
     <button onClick={decreasecount}>decrease</button>
     <button onClick={themeFunc}> toggle theme</button>
     </div>
    </themeContext.Provider>
  </>
}


// using use reducer
import {useState, useEffect, createContext, useReducer} from "react"

const initialState = {count : 0} 

function reducer(state, action){
  switch (action.type){
    case "increment":
      return {count: state.count +1};
    case "decrement":
      return state.count > 0 ? {count: state.count -1} : state;
    default:
      return state;
  }
}
export default function counter() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=> {
    console.log(`current count is: ${state.count}`)
    
  },[state.count])
  
  return<>
     <h1>Hello World</h1>
     <h1>count: {state.count}</h1>
     <button onClick={()=> dispatch({type: "increment"})}>increase</button>
     <button onClick={()=> dispatch({type: "decrement"})}>decrease</button>

  </>
}



