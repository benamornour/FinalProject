//import Navbar from "../Components/Navigation/Navbar";
import Slider from "../Components/Banner/Slider";
import Footer from "../Components/Footer/Footer";
import "./welcomepage.css";
import NavigationBar from "../Components/Navigation/NavigationBar.js";
import { Routes, Route } from 'react-router-dom';
import VideoDisplays from "../Components/VideoDisplays/video.js";
import GamesPage from "./GamesPage";
import Login from "../Components/Login";
import Profilepage from "./Profilepage";
import Signup from "../Components/Signup";
import { BrowserRouter } from 'react-router-dom';
import AllGames from "./AllGames.js"
import Game1 from '../Games/Pages/Game1';
import Game2 from '../Games/Pages/Game2';
import Game3 from '../Games/Pages/Game3';
import Game4 from '../Games/Pages/Game4';
import Game5 from '../Games/Pages/Game5';

//   <Route path="/profile" component={Profile} /> 

export default function WelcomePage() {
  return (

<div>
  
    {/* <Navbar /> */}
    
       {/* { currentForm === "home" ? <Login onFormSwitch={toggleform}/> : <WelcomePage onFormSwitch={toggleform}/>}
        {currentForm === "videos" ? <VideoDisplays onFormSwitch={toggleform}/> : <WelcomePage onFormSwitch={toggleform}/>}
        {currentForm === "games" ? <GamesPage onFormSwitch={toggleform}/> : <WelcomePage onFormSwitch={toggleform}/>   }     
        {currentForm === "profile" ? <Profilepage onFormSwitch={toggleform}/> :<WelcomePage onFormSwitch={toggleform}/>}
        {currentForm === "login" ? <Login onFormSwitch={toggleform}/> :<WelcomePage onFormSwitch={toggleform}/>}*/}
{/* <Router>
    <Routes>
            <Route path="/" exact component={<WelcomePage />} />
            <Route path="/videos" component={<VideoDisplays />} />
            <Route path="/games" component={<GamesPage />} />
            <Route path="/logout" component={<Login />} />
    </Routes>

</Router> */}
{/* <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profilepage />}/>
          <Route path="/products" element={<ListOfProducts
            product={product}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            handleSumDecrement={handleSumDecrement}
            handleSumIncrement={handleSumIncrement}
            sum={sum}
            handleSumDelete={handleSumDelete}
            />}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/products/:id" element={<ProductDetails product={product}/>}/>
          <Route path="/welcome" element={<WelcomePage/>}/>
          <Route 
            path="/customers" 
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <Customers/>
              </PrivateRoute>
            }
          />
          <Route 
            path="/profile" 
            element={
              <PrivateRoute allowedRoles={['user']}>
                <Profile/>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>


       */}
<BrowserRouter>
<NavigationBar/>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/welcome" element={<WelcomePage />}/>
          <Route path="/videos" element={<VideoDisplays />}/>
          <Route path="/games" element={<AllGames />}/>
          <Route path="/logout" element={<Login />}/>
          <Route path="/Game1" element={<Game1 />} />
          <Route path="/Game2" element={<Game2 />} />
          <Route path="/Game3" element={<Game3 />} />
          <Route path="/Game4" element={<Game4 />} />
          <Route path="/Game5" element={<Game5 />} />
        </Routes>
</BrowserRouter>

    <Slider />  
    <Footer />
</div>

  )
}


