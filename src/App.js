import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [] // 이건 좋은 습관이야
  };
  // async와 await는 영화를 받아온 후 프로그램이 작동될 수 있도록 도와주는 wait key야! 
  // 드디어 이게 무엇인지 정확히 이해가 됬어 
  getMoives = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };
  
  // 우리가 render을 호출하면 가장 처음으로 componentDidMount가 호출된다.
  componentDidMount() {
    this.getMoives();
  }
  render() {
    const { isLoading, movies } = this.state; // 이건 ES6에서 배울 수 있는데 좋은 습관이야 
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading. . .</span>
          </div>
        ) : (
            <div className="movies">
              {
                movies.map(movie => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                ))}
            </div>
          )}
      </section>);
  }
}
export default App;


 