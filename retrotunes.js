// RetroTunes Music Player Component
// This is a vanilla JavaScript version of the React component

function createFullRetroTunesComponent() {
    // Demo tracks
    const tracks = [
        { id: 1, title: "Midnight Circuit", artist: "Neon Runner", album: "City Waves", time: "3:42", year: 2010 },
        { id: 2, title: "Silver Raindrops", artist: "Aqua Drive", album: "Chromatic", time: "4:01", year: 2009 },
        { id: 3, title: "Compressed Air", artist: "Bit Parade", album: "8‑Bit Bloom", time: "2:58", year: 2007 },
        { id: 4, title: "CRT Glow", artist: "VHS Dreams", album: "Magnetic", time: "5:14", year: 2011 },
        { id: 5, title: "Firewire", artist: "Kernel Panic", album: "Handshake", time: "3:27", year: 2006 },
        { id: 6, title: "Glass Elevator", artist: "Metropole", album: "Transistor", time: "4:36", year: 2008 },
    ];

    let currentState = {
        filter: "",
        view: "Songs",
        selectedId: tracks[0].id,
        isPlaying: false,
        progress: 0,
        volume: 70
    };

    let progressInterval = null;

    function updateState(newState) {
        currentState = { ...currentState, ...newState };
        render();
    }

    function startProgress() {
        if (progressInterval) clearInterval(progressInterval);
        progressInterval = setInterval(() => {
            updateState({ progress: currentState.progress >= 100 ? 0 : currentState.progress + 1 });
        }, 150);
    }

    function stopProgress() {
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
    }

    function stepSelect(delta) {
        const idx = tracks.findIndex(t => t.id === currentState.selectedId);
        const next = (idx + delta + tracks.length) % tracks.length;
        updateState({ selectedId: tracks[next].id, progress: 0, isPlaying: true });
        startProgress();
    }

    function formatTime(pct) {
        const totalSec = Math.round((pct / 100) * 240);
        const m = Math.floor(totalSec / 60);
        const s = String(totalSec % 60).padStart(2, "0");
        return `${m}:${s}`;
    }

    function render() {
        const container = document.getElementById('retrotunes-container');
        if (!container) return;

        const current = tracks.find(t => t.id === currentState.selectedId);
        const filtered = tracks.filter(t =>
            [t.title, t.artist, t.album, String(t.year)].join(" ").toLowerCase().includes(currentState.filter.toLowerCase())
        );

        if (currentState.isPlaying) {
            startProgress();
        } else {
            stopProgress();
        }

                       container.innerHTML = `
                   <div class="retrotunes-app">
                       <!-- Window Title Bar -->
                       <div class="retrotunes-titlebar">
                           <div class="mac-lights">
                               <span class="mac-light red" onclick="closeRetroTunes()" title="Close"></span>
                               <span class="mac-light yellow" title="Minimize"></span>
                               <span class="mac-light green" title="Maximize"></span>
                           </div>
                           <div class="title">RetroTunes</div>
                       </div>

                <!-- Toolbar -->
                <div class="retrotunes-toolbar">
                    <div class="segmented-control">
                        <button class="seg-btn ${currentState.view === 'Songs' ? 'active' : ''}" onclick="updateView('Songs')">Songs</button>
                        <button class="seg-btn ${currentState.view === 'Albums' ? 'active' : ''}" onclick="updateView('Albums')">Albums</button>
                        <button class="seg-btn ${currentState.view === 'Artists' ? 'active' : ''}" onclick="updateView('Artists')">Artists</button>
                    </div>
                    <div class="search-container">
                        <input type="text" class="search-box" placeholder="Search" value="${currentState.filter}" oninput="updateFilter(this.value)">
                    </div>
                </div>

                <!-- Content Area -->
                <div class="retrotunes-content">
                    <!-- Main Content -->
                    <main class="retrotunes-main">
                        <div class="header-strip">
                            <div class="header-title">Songs</div>
                            <div class="header-count">${filtered.length} items</div>
                        </div>
                        <div class="track-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="col-number" style="width: 30px;">#</th>
                                        <th class="col-name" style="width: 120px;">Name</th>
                                        <th class="col-artist" style="width: 100px;">Artist</th>
                                        <th class="col-album" style="width: 80px;">Album</th>
                                        <th class="col-time" style="width: 40px;">Time</th>
                                        <th class="col-year" style="width: 40px;">Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${filtered.map((track, i) => `
                                        <tr class="track-row ${track.id === currentState.selectedId ? 'selected' : ''}" onclick="selectTrack(${track.id})">
                                            <td class="col-number">${i + 1}</td>
                                            <td class="col-name">${track.title}</td>
                                            <td class="col-artist">${track.artist}</td>
                                            <td class="col-album">${track.album}</td>
                                            <td class="col-time">${track.time}</td>
                                            <td class="col-year">${track.year}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>

                <!-- Player Bar -->
                <div class="retrotunes-player">
                    <div class="player-controls">
                        <button class="control-btn" onclick="stepSelect(-1)" title="Previous">
                            <svg viewBox="0 0 24 24"><path d="M7 12l10-7v14zM5 5h2v14H5z"/></svg>
                        </button>
                        <button class="control-btn big" onclick="togglePlayPause()" title="${currentState.isPlaying ? 'Pause' : 'Play'}">
                            ${currentState.isPlaying ? 
                                '<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>' : 
                                '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'
                            }
                        </button>
                        <button class="control-btn" onclick="stepSelect(1)" title="Next">
                            <svg viewBox="0 0 24 24"><path d="M7 5l11 7-11 7zM5 5h2v14H5z"/></svg>
                        </button>
                    </div>

                    <!-- Now Playing -->
                    <div class="now-playing">
                        <div class="album-art"></div>
                        <div class="track-info">
                            <div class="track-title">${current.title}</div>
                            <div class="track-artist">${current.artist} — ${current.album}</div>
                        </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="progress-container">
                        <span class="time-display">${formatTime(currentState.progress)}</span>
                        <input type="range" class="progress-bar" min="0" max="100" value="${currentState.progress}" oninput="updateProgress(this.value)">
                        <span class="time-display">${formatTime(100)}</span>
                    </div>

                    <!-- Volume Control -->
                    <div class="volume-container">
                        <svg class="speaker-icon" viewBox="0 0 24 24"><path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 00-2.02-3.77l-1.04 1.8A2.5 2.5 0 0116 12a2.5 2.5 0 01-2.56 2.97l1.04 1.8A4.5 4.5 0 0016.5 12zm2.5 0a7 7 0 00-3.14-5.87l-1.02 1.76A5 5 0 0120 12a5 5 0 01-5.16 4.11l1.02 1.76A7 7 0 0019 12z"/></svg>
                        <input type="range" class="volume-bar" min="0" max="100" value="${currentState.volume}" oninput="updateVolume(this.value)">
                    </div>
                </div>
            </div>
        `;
    }

    // Global functions for event handlers
    window.updateView = function(view) {
        updateState({ view });
    };

    window.updateFilter = function(filter) {
        updateState({ filter });
    };

    window.selectTrack = function(id) {
        updateState({ selectedId: id });
    };

    window.togglePlayPause = function() {
        updateState({ isPlaying: !currentState.isPlaying });
    };

    window.updateProgress = function(progress) {
        updateState({ progress: Number(progress) });
    };

    window.updateVolume = function(volume) {
        updateState({ volume: Number(volume) });
    };

    window.stepSelect = stepSelect;

    // Initial render
    render();

    return {
        render,
        destroy: function() {
            stopProgress();
            if (progressInterval) {
                clearInterval(progressInterval);
                progressInterval = null;
            }
        }
    };
}
