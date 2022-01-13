import MovieStars from "components/MovieStars";
import './style.css';

function MovieScore() {
    let score = 3.5;
    let count = 13;
    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : 'Sem avaliações'} </p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;