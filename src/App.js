
// import Check from './Components/Check';
// import '../src/index.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import '../src/App.css'
// import {Dcheck, Dcheck2} from './Components/Dcheck'
// import { Routes, Route, Link } from "react-router-dom";

// function App () {

//   return (
//     <>

// <Header/>
// <hr/>
// <Check name="fayyaz" class="gradudate"/>
// <hr/>

// <Dcheck price="190" />

// <Dcheck2  car = "bmw" />

// <hr />

// <Footer />
//         </>
//   );
// }

// export default App;

import React from 'react'
import Counter from './Components/hooks'


function App(){


let [counter2, counterIncrement, counterDecrement] = Counter();


return(

<>

<p>{counter2}</p>


<button onClick={counterIncrement}>Increament</button>
<button onClick={counterDecrement}>Decreament</button>

</>


)

}

export default App;













