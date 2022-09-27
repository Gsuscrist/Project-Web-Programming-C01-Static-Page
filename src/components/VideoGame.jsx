import gamesList from "./VideoGameData.jsx";
import VideoGameCard from "./VideoGameCard.jsx";
import '../assets/style/VideoGame.css'

function VideoGame(){
    const games= gamesList;
    return(
        <div className="container" id='mas'>
            <h2>Lista de Juegos</h2>

            {games.map((games)=>{
                return(
                    <VideoGameCard
                        name={games.name}
                        summary={games.summary}
                        cover={games.cover}
                    />
                )

            })}
        </div>

    );
}
export default VideoGame;