import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_MOVIES = gql`
    query getMovies{
        allMovies{
            id
            title
        }
        allTweets {
            id
            text
            author {
            fullName
            }
        }
    }
`

const Movies = () => {
    const {data, loading, error} = useQuery(GET_MOVIES);
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Could not fetch :(</h1>
    }
    return (
        <ul>
            {data.allMovies.map(movie => 
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default Movies;