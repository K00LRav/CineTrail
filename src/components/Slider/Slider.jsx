import React from "react";
import axios from "axios";
import "./Slider.css";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"

function Slider({ apiKey, baseUrl }) {
  //used to store the api data call
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  //grabbing each index of movies from the array
  const [index, setIndex] = useState(0);

  //base url for the images
  const baseImageUrl = import.meta.env.VITE_IMAGE_URL;

  //using use effect with axios to get the upcoming movies from the api
  useEffect(() => {
    axios
      .get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
      .then((res) => {
        console.log(res.data.results);
        setUpcomingMovies(res.data.results)
      })
      .catch((err) => console.log(err));
  }, [])

  //style for the movie backdrop
  const sliderStyle = {
    backgroundImage:`url("${baseImageUrl}${upcomingMovies[index]?.backdrop_path}")`,
    height: "60vh",
    backgroundSize:"cover",
    backgroundPosition:"center",
    position:"relative",
  }

  //handleing the right button of the index and resetting it back to zero when it reached the end
    const handleRight = () =>{
      setIndex(index+1);
      if(index === upcomingMovies.length-1){
        setIndex(0);
      }
    }

     //handleing the left button of the index and resetting it back to zero when it reached the end
    const handleLeft = () =>{
      setIndex(index-1);
      if(index===0){
        setIndex(upcomingMovies.length-1)
      }
    }

  //checking to see if the backdrop url works
  //console.log(`${baseImageUrl}${upcomingMovies[index]?.backdrop_path}`)

  return(
  <div style={sliderStyle}>
    <MdKeyboardArrowLeft onClick={handleLeft} className="left-arrow"/>
    <MdKeyboardArrowRight onClick={handleRight} className="right-arrow"/>
    <div className="slider-info">
      <h1>{upcomingMovies[index]?.title}</h1>
      <p className="slider-description">{upcomingMovies[index]?.overview.slice(0,130)}...</p>
      <p className="release-date">Release Date: {upcomingMovies[index]?.release_date}</p>
    </div>
        </div>
  )
}

export default Slider;
