import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";
import PageWrapper from "./PageWrapper";
import moviesJson from "./movies.json"
import Pagination from "./Pagination";
import { useState } from "react";

function App() {

  const [actualPage, setActualPage] = useState(1);

	let movies = moviesJson;

  return (
    <PageWrapper>

      {movies.map(movie => {
        return (
          <Movie
            title={movie.title}
            rate={movie.rate}
            director={movie.director}
            duration={movie.duration}
            img={movie.img}
            actors={movie.actors}
            date={movie.date}
            description={movie.description}
          >
            Earth's mightiest heroes must come together and learn to fight as a
            team if they are to stop the mischievous Loki and his alien army
            from enslaving humanity...
          </Movie>
        );
      })}

      <Pagination page={2} total={4} onChange={(page) => {
        alert(page)
      }} />

    </PageWrapper>
  );
}

export default App;
