// ================= Player
const a$ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cd = a$('.cd')
const title = a$('.song-name h3')
const artist = a$('.song-artist p')
const cdThumb = a$('.cd-thumb')
const audio = a$('#audio')
const playBtn = a$('.play-btn')
const player = a$('.player')
const progress = a$('#progress')
const progress1 = a$('#progress-1')
const nextBtn = a$('.next-btn')
const prevBtn = a$('.previous-btn')
const randomBtn = a$('.random-btn')
const repeatBtn = a$('.repeat-btn')
const playlist = a$('.playlist')
const currTime = a$('.current-time')
const totalDuration = a$('.total-duration')

const toggle = a$('.toggle-icon')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,

    songs: [
        {
            name: 'As Long As You Love Me',
            singer: 'Anthem Lights',
            path: './assets/song/As-Long-As-You-Love-Me-Anthem-Lights.mp3',
            image: './assets/image/albums/album-2.png'
        },
        {
            name: 'A Thousand Years',
            singer: 'Jasmine Thompson',
            path: './assets/song/A-Thousand-Years-Jasmine-Thompson.mp3',
            image: './assets/image/albums/album10.png'
        },
        {
            name: 'Coming Home Dash',
            singer: 'Berlin, Bo Bruce',
            path: './assets/song/Coming-Home-Dash-Berlin-Bo-Bruce.mp3',
            image: './assets/image/albums/album11.png'
        },
        {
            name: 'Counting Stars',
            singer: 'Alex Goot & Friends',
            path: './assets/song/Counting-Stars-Alex-Goot-Chrissy-Costanza-Kurt-Schneider.mp3',
            image: './assets/image/albums/album7.png'
        },
        {
            name: 'End Of Time',
            singer: 'K391, Alan Walker, Ahrix',
            path: './assets/song/End-of-Time-K-391-Alan-Walker-Ahrix.mp3',
            image: './assets/image/albums/album-5.png'
        },
        {
            name: 'I Don\'t Wanna See You With Her',
            singer: 'Maria Mena',
            path: './assets/song/I-Don-t-Wanna-See-You-With-Her-Maria-Mena.mp3',
            image: './assets/image/albums/album13.png'
        },
        {
            name: 'I Hate U, I Love U',
            singer: 'Gnash Olivia',
            path: './assets/song/I-Hate-U-I-Love-U-Gnash-Olivia-O-brien.mp3',
            image: './assets/image/albums/album15.png'
        },
        {
            name: 'Let\'s Fall In Love For The Night',
            singer: 'FINNEAS',
            path: './assets/song/Let-s-Fall-In-Love-For-The-Night-FINNEAS.mp3',
            image: './assets/image/albums/album16.png'
        },
        {
            name: 'Love The Way You Lie',
            singer: 'Skylar Grey',
            path: './assets/song/Love-the-Way-You-Lie-Pt-III-Demo-Skylar-Grey.mp3',
            image: './assets/image/albums/album-3.png'
        },
        {
            name: 'Play',
            singer: 'K391, Alan Walker, Martin Tungev',
            path: './assets/song/Play-K-391-Alan-Walker-Martin-Tungev.mp3',
            image: './assets/image/albums/album18.png'
        },
        {
            name: 'Reality',
            singer: 'Lost Frequencies, Janieck Devy',
            path: './assets/song/Reality-Lost-Frequencies-Janieck-Devy.mp3',
            image: './assets/image/albums/album8.png'
        },
        {
            name: 'Save Me',
            singer: 'DEAMN',
            path: './assets/song/Save-Me-DEAMN.mp3',
            image: './assets/image/releases/releases-cover6.jpg'
        },
        {
            name: 'The River',
            singer: 'Axel Johansson',
            path: './assets/song/The-River-Axel-Johansson.mp3',
            image: './assets/image/albums/album-1.png'
        },
        {
            name: 'Wrecking Ball',
            singer: 'Miley Cyrus',
            path: './assets/song/Wrecking-Ball-Miley-Cyrus.mp3',
            image: './assets/image/releases/releases-cover12.jpg'
        }
    ],
    
    // Định nghĩa thuộc tính
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    // Tải thông tin bài hát
    loadCurrentSong: function() {
        title.textContent = this.currentSong.name
        artist.textContent = this.currentSong.singer
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        currTime.textContent = "00:00"
        totalDuration.textContent = "00:00"
    },

    // Khi next song 
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    // Khi next song 
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0 ) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    // Play random song
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    }, 

    // Handle events
    handleEvents: function() {
        _this = this

        // Thu gon dashboard
        toggle.onclick = function() {
            player.classList.toggle('close')
        }

        // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)'}
        ],{
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Xử lý khi click play / pause
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            }else {
                audio.play()
            }
        }

        //Khi bài hát được play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        //Khi bài hát bị pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

         //Khi tiến độ bài hát thay đổi
         audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
                progress1.value = progressPercent
            } 

            let currentMinutes = Math.floor(audio.currentTime / 60)
            let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60)
            let durationMinutes = Math.floor(audio.duration / 60)
            let durationSeconds = Math.floor(audio.duration - durationMinutes * 60)

            if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
            if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
            if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
            if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

            currTime.textContent = currentMinutes + ":" + currentSeconds
            totalDuration.textContent = durationMinutes + ":" + durationSeconds
        }

        //Xử lý khi tua bài hát
        progress.onchange = function(e) {
            const seekTime = audio.duration * e.target.value / 100
            audio.currentTime = seekTime
        }

        //Xử lý khi tua bài hát
        progress1.onchange = function(e) {
            const seekTime = audio.duration * e.target.value / 100
            audio.currentTime = seekTime
        }

        // next Song 
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            }else {
                _this.nextSong()
            }
            audio.play()
        }

        // previous Song 
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            }else {
                _this.prevSong()
            }
            audio.play()
        }

        // Khi random song 
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Khi repeat song 
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        // Next song khi bai hat ket thuc
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click()
            }
        }
    },

    start: function() {
        
        this.defineProperties()

        this.handleEvents()

        this.loadCurrentSong()
    }

}

app.start()