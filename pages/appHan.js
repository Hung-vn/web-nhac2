const music = new Audio("song1/1.mp3");
// music.play();

// Phần di chuyển cho nhạc phổ biến
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 222;
});
//phần ca sĩ phổ biến

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", () => {
  item.scrollLeft += 330;
});
pop_art_left.addEventListener("click", () => {
  item.scrollLeft -= 330;
});

const songs = [
  {
    id: "1",
    songName: `Thiên sơn vạn thủy...<br />
    <div class="subtitle">Trần Khánh Huyền</div>`,
    poster: "img1/1.jpg",
  },
  {
    id: "2",
    songName: `Bất quá nhân gian<br />
    <div class="subtitle"> 不过人间</div>`,
    poster: "img1/2.jpg",
  },
  {
    id: "3",
    songName: `Tư Niệm Nhiễu Chỉ...<br />
    <div class="subtitle">海鸟飞鱼 - 思念绕指尖 </div>`,
    poster: "img1/3.jpg",
  },
  {
    id: "4",
    songName: `Tiếu Nạp<br />
    <div class="subtitle">花僮 - 笑纳</div>`,
    poster: "img1/4.jpg",
  },
  {
    id: "5",
    songName: `Lãng Tử Nhàn Thoại<br />
    <div class="subtitle">花僮 - 浪子闲话</div>`,
    poster: "img1/5.jpg",
  },
  {
    id: "6",
    songName: `Túy Khuynh Thành<br />
    <div class="subtitle">醉倾城DJ - 小阿</div>`,
    poster: "img1/6.jpg",
  },
  {
    id: "7",
    songName: `Đâu đâu cũng là em<br />
    <div class="subtitle">YoungCaptain</div>`,
    poster: "img1/7.jpg",
  },

  {
    id: "160",
    songName: `Bạch Xà Trâm Remix<br/>
    <div class="subtitle">Hoành Tiểu Chỉ</div>`,
    poster: "img1/160.jpg",
  },
  {
    id: "161",
    songName: `Chấp Mê Bất Ngộ<br/>
    <div class="subtitle">Tiểu Ca Ca</div>`,
    poster: "img1/161.jpg",
  },
  {
    id: "162",
    songName: `Chênh Lệch<br/>
    <div class="subtitle">Vương Hân Thần IN-K </div>`,
    poster: "img1/162.jpg",
  },
  {
    id: "163",
    songName: `Bích Thượng Q...<br/>
    <div class="subtitle"> 壁上观 - 张晓涵</div>`,
    poster: "img1/163.jpg",
  },
  {
    id: "164",
    songName: `Đại Thiên Bồng<br/>
    <div class="subtitle"> Lộ Gia | 大天篷</div>`,
    poster: "img1/164.jpg",
  },
  {
    id: "165",
    songName: `Lạc Trong Ảo Ảnh<br/>
    <div class="subtitle">Vương Hãn Thần</div>`,
    poster: "img1/165.jpg",
  },
  {
    id: "166",
    songName: `Hạo Hãn<br/>
    <div class="subtitle">Trương Kiệt</div>`,
    poster: "img1/166.jpg",
  },
  {
    id: "167",
    songName: `Phi Điểu Và Ve Sầu <br/>
    <div class="subtitle">Nhậm Nhiên</div>`,
    poster: "img1/167.jpg",
  },
];
//Phần mở nhạc
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.remove("bi-pause-fill");
    masterPlay.classList.add("bi-play-fill");
  }
});

//phần nhạc
Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

//phầm bài nhạc đang đc chọn chỗ menu

const makeAllBackGround = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgb(105, 105, 105, 0)";
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `song1/${index}.mp3`;
    //cái dưới là phần ảnh vào phần phát nhạc nhưng có ở dưới nữa rồi
    poster_master_play.src = `img1/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    //phần cho chữ vào đuôi nhạc
    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });
    makeAllBackGround();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, 0.5)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);
  // console.log(music_dur);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;
  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;

  let progressbar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});
///////////////////////////////////////chuyển nhạc khi kết thúc bài hát
music.addEventListener("ended", () => {
  // Chuyển đến bài hát tiếp theo
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1; // Quay lại bài đầu tiên nếu đến cuối danh sách
  }
  music.src = `song1/${index}.mp3`;
  poster_master_play.src = `img1/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });
  makeAllBackGround();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, 0.5)";
  makeAllplays();
});
// Tìm kiếm
const searchInput = document.querySelector(".search input");
const searchResultsList = document.getElementById("searchResultsList");

// Hàm tìm kiếm bài hát
searchInput.addEventListener("input", function () {
  let inputValue = searchInput.value.toLowerCase();
  searchResultsList.innerHTML = ""; // Xóa kết quả trước đó

  // Lọc bài hát theo từ khóa
  let filteredSongs = songs.filter((song) =>
    song.songName.toLowerCase().includes(inputValue)
  );

  // Hiển thị kết quả tìm kiếm
  if (inputValue !== "") {
    filteredSongs.forEach((song) => {
      let listItem = document.createElement("div");
      listItem.classList.add("search-result-item");
      listItem.innerHTML = `
                <img src="${song.poster}" 
                <div class="song-info">
                    <h5>${song.songName}</h5>
                </div>
            `;

      // Click vào kết quả để phát nhạc
      listItem.addEventListener("click", () => {
        music.src = `song1/${song.id}.mp3`; // Đường dẫn đến file nhạc
        poster_master_play.src = song.poster; // Ảnh bìa bài hát
        title.innerHTML = song.songName; // Tên bài hát
        music.play(); // Phát nhạc
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        wave.classList.add("active1");
        searchResultsList.innerHTML = ""; // Ẩn kết quả tìm kiếm sau khi chọn
        searchInput.value = ""; // Xóa nội dung tìm kiếm
      });

      searchResultsList.appendChild(listItem); // Thêm item vào danh sách kết quả
    });
  }
});
