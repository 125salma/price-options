import './App.css'
import AreaChar from './components/AreaChar/AreaChar'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Pichar from './components/Pichar/Pichar'

import PriceOptions1 from './components/PriceOptions1/PriceOptions1'
import Barchart from './components/BarChart/Barchart'
import Phones from './components/Phones/Phones'



function App() {


  return (
    <>
  
    <NavBar></NavBar>
    {/* <Uinav></Uinav> */}
    <PriceOptions1></PriceOptions1>
   <div className='flex'>
   <LineChart></LineChart>
    <AreaChar></AreaChar>
    <Barchart></Barchart>
   </div>
   <Pichar></Pichar>
   <Phones></Phones>

   
    </>
  )
}

export default App
