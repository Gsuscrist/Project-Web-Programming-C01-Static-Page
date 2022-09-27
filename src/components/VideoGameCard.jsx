import '../assets/style/VideoGameCard.css'

function VideoGameCard(props){
    return(
        <div className='Card'>
            <div className="videoGameCard">
                <img src={props.cover}></img>
                <p>{props.name}</p>
                <span>{props.summary}</span>

            </div>
        </div>
    );
}
export default VideoGameCard;