import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar ";
import { MoviesList } from "./components/MoviesList ";
import axios from "axios";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieDetails } from "./components/MovieDetails";
 function App() {
  const [movie, SetMovi] = useState([]);
  const GetAllMovie = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")
    SetMovi(res.data.results)
  }
  //get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    SetMovi(res.data.results)
   }
  useEffect(() => {
    GetAllMovie();
  }, [])

  //  search page
  const search = async (word) => {
    if (word === "") {
      GetAllMovie();
    }
    else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      SetMovi(res.data.results)
    }

  }

  return (

    <div>
      <NavBar search={search} />

      <Container>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movie={movie} getPage={getPage}  />} />

            <Route path="/movie/:id" element={<MovieDetails />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App;
