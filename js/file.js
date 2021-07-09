const music = document.querySelector("audio")
const img =document.querySelector("img")
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const title = document.getElementById("title");
const artist =document.getElementById("artist");
let progress = document.getElementById("progress");
let total_duration =document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");
//adding songs
 const songs =[
     {
         name:"music-1",
         photo:"img-1",
         title:"Lehanga",
         artist:"Jass Manak",
     },

     {
        name:"music-2",
        photo:"img-2",
        title:"Butterfly",
        artist:"Jass Manak",
    },

    {
        name:"music-3",
        photo:"img-3",
        title:"No-Competion",
        artist:"Jass Manak",
    },
    {
        name:"music-4",
        photo:"img-4",
        title:"Tera Mera Viah",
        artist:"Jass Manak",
    },
    {
        name:"music-5",
        photo:"img-5",
        title:"Khabbi Seat",
        artist:"Ammy Virk",
    },
    {
        name:"music-6",
        photo:"img-6",
        title:"Kaali Raat",
        artist:"Karan Randhawa",
    },
    {
        name:"music-7",
        photo:"img-7",
        title:"Sone Diya",
        artist:"Guri",
    },
    {
        name:"music-8",
        photo:"img-8",
        title:"Sira-E-Hou",
        artist:"Nimrat Khalra",
    },
    {
        name:"music-9",
        photo:"img-9",
        title:"Phurkari",
        artist:"Karan Randhawa",
    },
    {
        name:"music-10",
        photo:"img-10",
        title:"Shopping",
        artist:"Jass Manak",
    },
 ]

 let isPlaying = false;
 //for play function
function playMusic()
{
    isPlaying =true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
}

//for pause function
function pauseMusic()
{
    isPlaying =false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
}

play.addEventListener("click",function() {
    if(isPlaying)
    {
        pauseMusic();
    }
    else
    {
        playMusic();
    }
});


//changing music data
function loadSong(songs)
{
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src ="music/" + songs.name + ".mp3";
  img.src = "img/" + songs.photo + ".jpg";

};

 songIndex = 0;
//  loadSong(songs[2]);


// for next song 
function nextSong()
{
    songIndex = (songIndex + 1) % songs.length;
   loadSong(songs[songIndex]);
   playMusic();
}

// for previous song
function  prevSong()
{
    songIndex = (songIndex - 1 + songs.length)  % songs.length;
   loadSong(songs[songIndex]);
   playMusic();
}


//progess bar working
music.addEventListener("timeupdate",function(event)
{
    //console.log(event);
      const {currentTime ,duration} = event.srcElement;
    //   console.log(currentTime);
    //   console.log(duration);

    let progress_time = (currentTime/duration)*100;
    progress.style.width =`${progress_time}%`;


     // total music duration 
     // min = minute and sec = second
     let min_duration = Math.floor(duration/60);
     let sec_duration = Math.floor(duration % 60);
    let tot_duration = `${min_duration}:${sec_duration}`;
    if(duration)
    {
        total_duration.textContent = `${tot_duration}`;
    }

    //current duration update
    let min_currentTime = Math.floor(currentTime/60);
    let sec_currentTime = Math.floor(currentTime % 60);
    if(sec_currentTime < 10)
    {
        sec_currentTime =`0${sec_currentTime}`
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
  
 current_time.textContent = `${tot_currentTime}`;
});

// progress onclick functionality
progress_div.addEventListener("click",function(event){
    //console.log(event);
    
    const {duration} = music;
    let move_progress =(event.offsetX/event.srcElement.clientWidth) * duration ;
    //console.log(move_progress);

    music.currentTime = move_progress;
});



 music.addEventListener("ended",nextSong); 
 next.addEventListener("click",nextSong);
 prev.addEventListener("click",prevSong);
