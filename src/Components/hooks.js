
import React, {useState} from 'react'


function Counter(){

const [counter2, setCounter] = useState(0);


const counterIncrement=() =>{

setCounter(counter2 + 1)
}


const counterDecrement=() =>{
    setCounter(counter2 - 1)
}

return [counter2, counterIncrement, counterDecrement]

}


export default Counter;