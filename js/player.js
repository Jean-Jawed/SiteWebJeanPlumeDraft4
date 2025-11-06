// === JEAN-PLUME - Player Audio Permanent ===

class AudioPlayer {
    constructor(playlist) {
        this.playlist = playlist;
        this.currentTrackIndex = 0;
        this.isPlaying = false;
        this.audio = new Audio();
        this.init();
    }
    
    init() {
        this.createPlayerHTML();
        this.attachEventListeners();
        this.loadTrack(0);
    }
    
    createPlayerHTML() {
        const playerHTML = `
            <div class="audio-player">
                <div class="player-container">
                    <div class="player-info">
                        <div class="equalizer" id="equalizer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="track-title" id="track-title">
                            ${this.playlist[0].title}
                        </div>
                    </div>
                    <div class="player-controls">
                        <button class="player-btn" id="prev-btn" title="Précédent">
                            ⏮
                        </button>
                        <button class="player-btn play-btn" id="play-btn" title="Lecture/Pause">
                            ▶
                        </button>
                        <button class="player-btn" id="next-btn" title="Suivant">
                            ⏭
                        </button>
                    </div>
                    <div class="volume-control">
                        <span>🔊</span>
                        <input type="range" class="volume-slider" id="volume-slider" min="0" max="100" value="70">
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', playerHTML);
        
        // Ajouter padding au body pour compenser le player fixe
        document.body.style.paddingBottom = '80px';
    }
    
    attachEventListeners() {
        const playBtn = document.getElementById('play-btn');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const volumeSlider = document.getElementById('volume-slider');
        
        playBtn.addEventListener('click', () => this.togglePlay());
        prevBtn.addEventListener('click', () => this.prevTrack());
        nextBtn.addEventListener('click', () => this.nextTrack());
        volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        
        this.audio.addEventListener('ended', () => this.nextTrack());
        
        // Mettre à jour l'équaliseur
        this.audio.addEventListener('play', () => this.startEqualizer());
        this.audio.addEventListener('pause', () => this.stopEqualizer());
        
        // Définir le volume initial
        this.setVolume(70);
    }
    
    loadTrack(index) {
        if (index < 0 || index >= this.playlist.length) return;
        
        this.currentTrackIndex = index;
        const track = this.playlist[index];
        
        this.audio.src = track.src;
        document.getElementById('track-title').textContent = track.title;
        
        // Mettre à jour l'interface des pages offres
        this.updateSongListUI();
    }
    
    togglePlay() {
        const playBtn = document.getElementById('play-btn');
        
        if (this.isPlaying) {
            this.audio.pause();
            playBtn.textContent = '▶';
            this.isPlaying = false;
        } else {
            this.audio.play().catch(error => {
                console.log('Lecture automatique bloquée:', error);
            });
            playBtn.textContent = '⏸';
            this.isPlaying = true;
        }
    }
    
    nextTrack() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        this.loadTrack(this.currentTrackIndex);
        if (this.isPlaying) {
            this.audio.play();
        }
    }
    
    prevTrack() {
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
        this.loadTrack(this.currentTrackIndex);
        if (this.isPlaying) {
            this.audio.play();
        }
    }
    
    setVolume(value) {
        this.audio.volume = value / 100;
    }
    
    playTrack(index) {
        this.loadTrack(index);
        this.audio.play();
        document.getElementById('play-btn').textContent = '⏸';
        this.isPlaying = true;
    }
    
    startEqualizer() {
        const equalizer = document.getElementById('equalizer');
        if (equalizer) {
            equalizer.classList.add('active');
        }
    }
    
    stopEqualizer() {
        const equalizer = document.getElementById('equalizer');
        if (equalizer) {
            equalizer.classList.remove('active');
        }
    }
    
    updateSongListUI() {
        // Mettre à jour l'interface de la liste de chansons (pour les pages offres)
        const songItems = document.querySelectorAll('.song-item');
        songItems.forEach((item, index) => {
            if (index === this.currentTrackIndex) {
                item.classList.add('playing');
            } else {
                item.classList.remove('playing');
            }
        });
    }
}

// Playlists par page
const playlists = {
    default: [
        { title: 'Parle-moi d\'autre chose', src: 'musics/Parle-moi_d_autre_chose.mp3' },
        { title: 'Avec les anges', src: 'musics/Avec_les_anges.mp3' },
        { title: 'Ça tourne pas rond', src: 'musics/Ca_tourne_pas_rond.mp3' },
        { title: 'Le danger de la valse', src: 'musics/Le_danger_de_la_valse.mp3' },
        { title: 'Busy Line', src: 'musics/Busy_line.mp3' },
        { title: 'Under a blanket of blue', src: 'musics/Under_a_blanket_of_blue.mp3' },
        { title: 'Tu verras', src: 'musics/Tu_verras.mp3' }
    ],
    offre1: [
        { title: 'Parle-moi d\'autre chose', src: 'musics/Parle-moi_d_autre_chose.mp3' },
        { title: 'Avec les anges', src: 'musics/Avec_les_anges.mp3' },
        { title: 'Ça tourne pas rond', src: 'musics/Ca_tourne_pas_rond.mp3' },
        { title: 'Le danger de la valse', src: 'musics/Le_danger_de_la_valse.mp3' }
    ],
    offre2: [
        { title: 'Busy Line', src: 'musics/Busy_line.mp3' },
        { title: 'Under a blanket of blue', src: 'musics/Under_a_blanket_of_blue.mp3' }
    ],
    offre3: [
        { title: 'Parle-moi d\'autre chose', src: 'musics/Parle-moi_d_autre_chose.mp3' },
        { title: 'Tu verras', src: 'musics/Tu_verras.mp3' }
    ]
};

// Initialiser le player au chargement de la page
let audioPlayer;

document.addEventListener('DOMContentLoaded', function() {
    // Déterminer quelle playlist utiliser
    const body = document.body;
    let playlist = playlists.default;
    
    if (body.classList.contains('offre1-page')) {
        playlist = playlists.offre1;
    } else if (body.classList.contains('offre2-page')) {
        playlist = playlists.offre2;
    } else if (body.classList.contains('offre3-page')) {
        playlist = playlists.offre3;
    }
    
    // Créer le player (sauf sur la landing page)
    if (!body.classList.contains('landing-page')) {
        audioPlayer = new AudioPlayer(playlist);
        
        // Ajouter la fonctionnalité de clic sur les chansons (pages offres)
        const songItems = document.querySelectorAll('.song-item');
        songItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                audioPlayer.playTrack(index);
            });
        });
    }
});