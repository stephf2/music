import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// Their name, music type and an introduction paragraph.
function AlbumInfo(info) {
  const {name, musicType, introductionParagraph, coverArt} = info

  return (
    <div>
      <h1>{name}</h1>
      <img className="coverArtAlbum" src={coverArt} alt={`Cover art for album`} />
      <h4>Music Type: {musicType}</h4>
      <p>{introductionParagraph}</p>
    </div>
  )
}

// A list of their songs/albums including name,release date and cover art.
function SongList() {
  const songsData = [
    {
      name: "Kiss the Girl",
      coverArt: "/src/assets/images/Kiss_the_Girl.jpg",
      length: "2:43",
      releaseDate: "1990-11-13"
    },
    {
      name: "Colors of the Wind",
      coverArt: "src/assets/images/Colors_of_the_Wind.jpg",
      length: "3:32",
      releaseDate: "1995-05-30"
    },
    {
      name: "A Whole New World",
      coverArt: "src/assets/images/A_Whole_New_World.jpg",
      length: "2:40",
      releaseDate: "1992-11-05"
    },
    {
      name: "Part of Your World",
      coverArt: "src/assets/images/Part_of_Your_World.jpg",
      length: "3:15",
      releaseDate: "1989-11-13"
    },
    {
      name: "Under the Sea",
      coverArt: "src/assets/images/Under_the_Sea.jpg",
      length: "3:15",
      releaseDate: "1989-11-13"
    },
    {
      name: "That's How You Know",
      coverArt: "src/assets/images/Thats_How_You_Know.jpg",
      length: "3:48",
      releaseDate: "2007-11-20"
    },
    {
      name: "Reflection",
      coverArt: "src/assets/images/Reflection.jpg",
      length: "2:26",
      releaseDate: "1998-06-02"
    },
    {
      name: "A Dream Is a Wish Your Heart Makes",
      coverArt: "src/assets/images/A_dream_is_a_wish_your_heart_makes.jpg",
      length: "4:36",
      releaseDate: "1950-02-20"
    },
    {
      name: "I See the Light",
      coverArt: "src/assets/images/I_See_the_Light.jpg",
      length: "3:42",
      releaseDate: "2010-11-16"
    },
    {
      name: "Something There",
      coverArt: "src/assets/images/Something_There.jpg",
      length: "2:18",
      releaseDate: "1991-11-13"
    },
    {
      name: "When Will My Life Begin",
      coverArt: "src/assets/images/WWMLB.jpg",
      length: "2:31",
      releaseDate: "2010-11-16"
    },
    {
      name: "Beauty and the Beast",
      coverArt: "src/assets/images/Thats_How_You_Know.jpg",
      length: "2:46",
      releaseDate: "1991-11-13"
    },
    {
      name: "Once Upon a Dream",
      coverArt: "src/assets/images/Once_upon_a_dream.jpg",
      length: "2:46",
      releaseDate: "1959-01-29"
    },
    {
      name: "If You Can Dream",
      coverArt: "src/assets/images/If_you_can_dream.jpg",
      length: "3:50",
      releaseDate: "2002-10-04"
    },
    {
      name: "Just Around the Riverbend",
      coverArt: "src/assets/images/Just_Around_the_Riverbend.jpg",
      length: "2:28",
      releaseDate: "1995-05-30"
    },
    {
      name: "Happy Working Song",
      coverArt: "src/assets/images/Happy_Working_Song.jpg",
      length: "2:09",
      releaseDate: "2007-11-20"
    },
    {
      name: "True Love's Kiss",
      coverArt: "src/assets/images/True_Loves_Kiss.jpg",
      length: "3:12",
      releaseDate: "2007-11-20"
    },
    {
      name: "Where Do I Go from Here?",
      coverArt: "src/assets/images/Where_do_i_go_from_here.jpg",
      length: "2:43",
      releaseDate: "1998-08-25"
    },
    {
      name: "With a Smile and a Song",
      coverArt: "src/assets/images/With_a_Smile_and_a_Song.jpg",
      length: "3:01",
      releaseDate: "1937-12-21"
    },
    {
      name: "Someday My Prince Will Come",
      coverArt: "src/assets/images/Someday_my_prince_will_come.jpg",
      length: "1:51",
      releaseDate: "1937-12-21"
    },
    {
      name: "Like Other Girls",
      coverArt: "src/assets/images/Like_other_girls.jpg",
      length: "2:25",
      releaseDate: "2004-01-25"
    },
    {
      name: "I'm Wishing / One Song",
      coverArt: "src/assets/images/Im_wishing.jpg",
      length: "3:07",
      releaseDate: "1937-12-21"
    }
  ]

  return (
  	<div>
      <ul className="songList">
        {songsData.map(song => {
          return (
            <li className="songItem">
              <h2>{song.name}</h2>
              <img className="coverArt" src={song.coverArt} alt={`Cover art for this song: ${song.name}`} />
             
              <p>Release Date: {song.releaseDate} </p>
              <LikeButton/>
              <ReviewForm/>
            </li>
          )
        })}
      </ul>
    </div>
  )

}

// Add a 'Like' feature to your music page
function LikeButton() {
  const [counter, setCounter] = useState(0)
  const [liked, setLiked] = useState(false)
  

  const handleLike = () => {
    if(liked) {
      setCounter(previousState => previousState - 1)
    } else {
      setCounter(previousState => previousState + 1)
    }
    setLiked(!liked)
  }
  const buttonClassName = liked ? 'likedButton' : 'likeButton';
  return (
    <>
      <div>
        <h3>Likes: {counter} </h3>
        <button className={buttonClassName} onClick={handleLike}>{liked? 'Liked' : 'Like'}</button>
      </div>
    </>
  )
}

//Add a controlled form
function ReviewForm() {
  const [inputText, setInputText] = useState('')
  const [submitValue, setSubmitValue] = useState('')

  const handleInput = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitValue(inputText)
    setInputText('')
  }

  return (
    <div>  
      <form>
        <label className="review" htmlFor="ReviewForm">Review: </label>
        <input 
          type="text" 
          value={inputText} 
          onChange={handleInput} 
        />
        <button 
          type="submit"
          onClick={handleSubmit} 
        >Submit</button>
      </form>
      {submitValue && 
      <p>Your submitted review: {submitValue}</p>}
    </div>
  )
}

function App() {
  return (
    <>
      <div>  
        <AlbumInfo
        name="Now That's What I Call Disney Princess
        Album"
        coverArt='src/assets/images/albumCover.jpg'
        musicType='Sountrack'
        introductionParagraph="Now That's What I Call Disney Princess (often shortened to Now Disney Princess) is a Disney Princess album in the Now That's What I Call Music! series. The album was released on October 28, 2013 in the United Kingdom."
        />
        
        <SongList/>
      </div>
    </>
  )
}

export default App
