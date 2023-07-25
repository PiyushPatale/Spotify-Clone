console.log("Welcome to spotify");

// Initialize Variables

let songIndex = 0;
let audioElement = new Audio('15.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName : "Agar Tum Saath Ho" , filePath : "11.mp3" , coverPath : "covers/11.jpeg"},
    {songName : "Khairiyat" , filePath : "12.mp3" , coverPath : "covers/12.jpeg"},
    {songName : "Apna Banale Piya" , filePath : "13.mp3" , coverPath : "covers/13.jpeg"},
    {songName : "Hawayien" , filePath : "14.mp3" , coverPath : "covers/14.jpeg"},
    {songName : "Humari Adhuri Kahani" , filePath : "15.mp3" , coverPath : "covers/15.jpeg"},
    {songName : "Humdard" , filePath : "16.mp3" , coverPath : "covers/16.jpeg"},
    {songName : "Itni Si Baat Hein" , filePath : "17.mp3" , coverPath : "covers/17.jpeg"},
    {songName : "Kabhi Jo Baadal Barse" , filePath : "18.mp3" , coverPath : "covers/18.jpeg"},
    {songName : "Thodi Jagah" , filePath : "19.mp3" , coverPath : "covers/19.jpeg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle Play / pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else 
    {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})


// Listen To Events
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})
 
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id); 
        console.log(index);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src =  `${index }.mp3`;
        masterSongName.innerText = songs[index - 10].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }) 
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(index <= 0){
        index = 0;
    }
    else{
    index -= 1;
    }
    audioElement.src =  `${index }.mp3`;
    masterSongName.innerText = songs[index - 10].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})  

document.getElementById('next').addEventListener('click' , ()=>{
    if(index >= 18){
        index = 10 ;
    }
    else{
    index += 1;
    }
    audioElement.src =  `${index }.mp3`;
    masterSongName.innerText = songs[index - 10].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
