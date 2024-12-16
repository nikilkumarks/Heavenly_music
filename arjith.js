const music = new Audio('audio/arjit/dum.mp3');
//music.play();

const songs =[
    {
        id: '1',
        songName:`Khairiyat <br><div class="subtitle">Arjith Singh</div>`,
        poster:"images/arjit/img_1.jpg",
    },
    {
        id: '2',
        songName:`Agar Tum Saath Ho <br><div class="subtitle">Thaman S</div>`,
        poster:"images/arjit/img_2.jpeg",
    },
    {
        id: '3',
        songName:`Satranga <br><div class="subtitle">Anirudh Ravichander</div>`,
        poster:"images/arjit/img_3.jpg",
    },
    {
        id: 4,
        songName:'Shyad <br><div class="subtitle">Jakes bejoy</div>',
        poster:"images/arjit/img_4.jpg",
    },
    {
        id: 5,
        songName:'Pal<br><div class="subtitle">Thaman S</div>',
        poster:"images/arjit/img_5.jpg",
    },
    {
        id: 6,
        songName:'Chahne Lage<br><div class="subtitle">Alan Walker</div>',
        poster:"images/arjit/img_6.jpg",
    },
    {
        id: 7,
        songName:'Bekhayali <br><div class="subtitle">Imagine Dragons</div>',
        poster:"images/arjit/img_7.jpg",
    },
    {
        id: 8,
        songName:'Raabta<br><div class="subtitle">Imagine Dragons</div>',
        poster:"images/arjit/img_8.jpg",
    },
    {
        id: 9,
        songName:'Soch Na Sake <br><div class="subtitle">Serena</div>',
        poster:"images/arjit/img_9.jpeg",
    },
    {
        id: 10,
        songName:'Hawayein <br><div class="subtitle">Post Malone</div>',
        poster:"images/arjit/img_10.jpeg",
    },
    {
        id: 11,
        songName:'Bandeya <br><div class="subtitle">Jaskaran Singh</div>',
        poster:"images/arjit/img_11.jpg",
    },
    {
        id: 12,
        songName:'Saware <br><div class="subtitle">Sonu Nigam</div>',
        poster:"images/arjit/img_12.jpg",
    },
    {
        id: 13,
        songName:'InteZarr<br><div class="subtitle">Santhosh Venky</div>',
        poster:"images/arjit/img_13.jpg",
    },
    {
        id: 14,
        songName:'2 States<br><div class="subtitle">Vijay Prakash</div>',
        poster:"images/arjit/img_14.jpeg",
    },
    {
        id: 15,
        songName:'Wafa Ne BewaFai <br><div class="subtitle">Nakash Aziz</div>',
        poster:"images/arjit/img_15.jpg",
    },
]
Array.from(document.getElementsByClassName('songitem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let Wave = document.getElementById('Wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        Wave.classList.add('active1');
        masterPlay.classList.remove('bi-play')
        masterPlay.classList.add('bi-pause')
    }else{
         music.pause();
         Wave.classList.remove('active1');
         masterPlay.classList.add('bi-play')
         masterPlay.classList.remove('bi-pause')
       
    }
    
});

const makeallplays = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeallBackground = () =>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background = ' rgb(105, 105, 105 , .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let downloadmusic = document.getElementById('downloadmusic');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        //console.log(index);
        music.src=`audio/arjit/${index}.mp3`;
       // poster_master_play.src=`images/${index}.jpg.webp.jpeg.avif`;
        music.play();
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
        downloadmusic.href = `audio/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });
         
        songTitles.forEach(elss => {
            let{songName, poster} = elss;
            title.innerHTML = songName;
            poster_master_play.src=poster;
            downloadmusic.setAttribute('download',songName)
        });

        makeallBackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105, 105, 105 , .1)";
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        Wave.classList.add('active1');

    });
 })


 let currentstart = document.getElementById('currentstart');
 let currentend = document.getElementById('currentend');
 let seek = document.getElementById('seek');
 let bar2 = document.getElementById('bar2');
 let dot = document.getElementsByClassName('dot')[0];
 
 music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    //console.log(min1);
    if(sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentend.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentstart.innerText = `${min2}:${sec2}`;

    let progressbar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressbar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;


 });

 seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
 });

 let volicon = document.getElementById('volicon');
 let vol = document.getElementById('vol');
 let volbar = document.getElementsByClassName('volbar')[0];
 let voldot = document.getElementById('voldot');

 vol.addEventListener('change',()=>{
    if(vol.value==0){
        volicon.classList.remove('bi-volume-up-fill');
        volicon.classList.remove('bi-volume-down-fill');
        volicon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value > 0){
        volicon.classList.remove('bi-volume-up-fill');
        volicon.classList.add('bi-volume-down-fill');
        volicon.classList.remove('bi-volume-mute-fill');
    }
    if(vol.value > 50 ){
        volicon.classList.add('bi-volume-up-fill');
        volicon.classList.remove('bi-volume-down-fill');
        volicon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    volbar.style.width=`${vol_a}%`;
    voldot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
 });

 let back = document.getElementById('back');
 let next = document.getElementById('next');
 //index = Array.from(document.getElementsByClassName('songitem')).length;
//console.log(index)
back.addEventListener('click',()=>{
     index -= 1;
     if(index < 1){
        index = Array.from(document.getElementsByClassName('songitem')).length;

     }
     music.src=`audio/${index}.mp3`;
     // poster_master_play.src=`images/${index}.jpg.webp.jpeg.avif`;
      music.play();
      masterPlay.classList.remove('bi-play');
      masterPlay.classList.add('bi-pause');

      let songTitles = songs.filter((els) => {
          return els.id == index;
      });
       
      songTitles.forEach(elss => {
          let{songName, poster} = elss;
          title.innerHTML = songName;
          poster_master_play.src=poster;
      });

      makeallBackground();
      Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105, 105, 105 , .1)";
      makeallplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      Wave.classList.add('active1');

})

next.addEventListener('click',()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songitem')).length){
        index = 1;

     }
     music.src=`audio/${index}.mp3`;
     // poster_master_play.src=`images/${index}.jpg.webp.jpeg.avif`;
      music.play();
      masterPlay.classList.remove('bi-play');
      masterPlay.classList.add('bi-pause');

      let songTitles = songs.filter((els) => {
          return els.id == index;
      });
       
      songTitles.forEach(elss => {
          let{songName, poster} = elss;
          title.innerHTML = songName;
          poster_master_play.src=poster;
      });

      makeallBackground();
      Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105, 105, 105 , .1)";
      makeallplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      Wave.classList.add('active1');

    
        
})

let popsongleft = document.getElementById('popsongleft');
let popsongright = document.getElementById('popsongright');
let popsong = document.getElementsByClassName('popsong')[0];

popsongright.addEventListener('click',()=> {
    popsong.scrollLeft += 330;
});
popsongleft.addEventListener('click',()=> {
    popsong.scrollLeft -= 330;
});

let popartleft = document.getElementById('popartleft');
let popartright = document.getElementById('popartright');
let iteams = document.getElementsByClassName('iteams')[0];

popartright.addEventListener('click',()=> {
    iteams.scrollLeft += 330;
});
popartleft.addEventListener('click',()=> {
    iteams.scrollLeft -= 330;
});