import Movie from "./Movie";
// import ModalRecipe from "./Modal"
export default function MovieList(props) {
//   {console.log("prop"+props.movies.length)}
  return (
    <>
      {props.movies.map((element) => {
        return (
          <>
          <div>
          <Movie key={element.id} movie={element} updateMovie={props.updateMovie} />
          </div>
            
          </>
        );
      })}
    </>
  );
}
