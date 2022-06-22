import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Login from "./routes/login/login.component";
import LandingPage from "./routes/landing-page/landing-page.component";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { checkUserDetails } from "./utils/firebase/firebase.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInSuccess } from "./store/user/user.slice";
import { useNavigate } from "react-router-dom";
// import { addCollectionAndDocuments } from "./utils/firebase/firebase.utils";
// import data from "./movie-data.json"
import Details from "./routes/details/detail.component";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const userAuth = await checkUserDetails();
        if (!userAuth) return;
        dispatch(signInSuccess(userAuth));
        navigate("/home");
      } catch (err) {
        alert(err);
      }
    })();

    // (()=>{
    //   console.log(data);
    //   addCollectionAndDocuments("movies",data);
    // })();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="detail/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
