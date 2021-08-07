import { useState, useEffect } from "react";
import axios from "axios";
const GenreSelect = () => {
  const [genres, SetGenres] = useState([]);
  const fectGener = async () => {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=5761f00d4efd80b92ba2496773204780&language=vi";
    const response = await axios.get(url);
    const data = await response.data;
    SetGenres(data.genres);
  };
  useEffect(() => {
    fectGener();
  }, []);
  const genresOption = genres.map((genres) => {
    return <option value={genres.id}>{genres.name}</option>;
  });
  return (
    <>
      <option value="">- Tất cả -</option>
      {genresOption}
    </>
  );
};
export default GenreSelect;
