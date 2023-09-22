import { gql, useQuery } from "@apollo/client";

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
    return (<ul>
            <h1>Movies</h1>
            {data.allMovies.map(movie => (
                <li key={movie.id}>{movie.title}</li>
            ))}
            <h1>Tweets</h1>
            {data.allTweets.map(tweet => (
                <li key={tweet.id}>{tweet.text}/by{tweet.author.fullName}</li>
            ))}
        </ul>);
}

export default Movies;