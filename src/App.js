import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import Account from "./routes/Account";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import axios from 'axios';
import { useEffect, useState } from "react";
import CoinPage from "./routes/CoinPage";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true'

 useEffect(() => {
  const fetchUrl =()=>{
    axios.get(url).then((response) => {
    setCoins(response.data);
  })
  .catch((error)=>{
    console.log(error);
    alert(error.message)
  });
}
fetchUrl()
 
 }, [])
 

  return (
   <ThemeProvider>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home coins={coins}/>}/>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
          <Route path='/coin/:coinId' element={<CoinPage />}>
            <Route path=':coinId' />
            </Route>
    </Routes>
    <Footer/>
    </AuthContextProvider>
   </ThemeProvider>
  );
}

export default App;
