
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const YoutubeMovie=({movieData})=> {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [youtubeId,setYoutubeId]=useState(null)
    const getYoutube=async()=>{
        let url= `https://api.themoviedb.org/3/movie/${movieData?.id}/videos?api_key=${API_KEY}&language=en-US`
        let res= await fetch(url);
        let data= await res.json();
        setYoutubeId(data)
    }
    useEffect(()=>{
        getYoutube()
    },[])
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const onPlayerReady= (event) => {
        event.target.pauseVideo();
      }
    
    return (
       <>
      <YouTube videoId={youtubeId?.results[0].key} opts={opts} onReady={onPlayerReady} />
      </> 
    );
  }


export default YoutubeMovie;
