
import Movie from "./Movie";
// import ModalRecipe from "./Modal"

export default function MovieList(props) {
//   {console.log("prop"+props.movies.length)}
  return (
    <>
      {props.movies.map((element) => {
        return (
          <>
         
            <Movie movies={element} ></Movie>
          </>
        );
      })}
    </>
  );
}
