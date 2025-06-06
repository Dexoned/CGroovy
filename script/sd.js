document.addEventListener("DOMContentLoaded", function () {
    const songData = {
        // Pop songs
        1: {
            title: "I Like Me Better",
            artist: "Lauv",
            image: "../Images/Pop/ab67616d0000b273bdea30b86b37142ec99deb78.jpg",
            audio: "../Songs/Lauv – I Like Me Better Lyrics - Genius Lyrics.mp3",
            duration: "03:18",
            genre: "Pop",
            lyrics: `To be young and in love in New York City...`,
            year: 2023,
            type: "Solo",
            description: "A heartwarming pop song by Lauv about finding love in New York City and feeling better about oneself in a relationship. Released in 2017, it became one of his breakthrough hits."
        },
        2: {
            title: "Bye Bye Bye",
            artist: "NSYNC",
            image: "../Images/Pop/https___images.genius.com_63c25bab36a2daf09a319c7e9318d68e.1000x1000x1.png",
            audio: "../Songs/-NSYNC – Bye Bye Bye Lyrics - Genius Lyrics.mp3",
            duration: "03:21",
            genre: "Pop",
            lyrics: `Hey Hey...`,
            year: 2000,
            type: "Group",
            description: "A classic breakup anthem from NSYNC's 2000 album 'No Strings Attached'. The song's iconic dance moves and catchy chorus made it one of the most memorable pop hits of the early 2000s."
        },
        3: {
            title: "Last Friday Night",
            artist: "Katy Perry",
            image: "../Images/Pop/https___images.genius.com_72c7d1ebbfd5cd2adf3c480d58b3cabc.600x600x1.jpg",
            audio: "../Songs/lastfridaynight.mp3",
            duration: "03:51",
            genre: "Pop",
            lyrics: `There's a stranger in my bed...`,
            year: 2011,
            type: "Solo",
            description: "An upbeat party anthem from Katy Perry's album 'Teenage Dream'. The song celebrates wild nights out and became a summer hit, known for its humorous music video featuring Perry as her geeky alter ego."
        },
        // R&B songs
        4: {
            title: "Glimpse of Us",
            artist: "Joji",
            image: "../Images/R&B/https___images.genius.com_00cc579aca9786a2d1ba1c995f828b44.1000x1000x1.png",
            audio: "../Songs/glimpseofus.mp3",
            duration: "03:54",
            genre: "R&B",
            lyrics: `I know you're not mine, only mine for the night...`,
            year: 2022,
            type: "Solo",
            description: "A soulful R&B ballad about reminiscing past love while in a new relationship. The emotional depth and raw vocals showcase Joji's evolution as an artist."
        },
        5: {
            title: "Best Part",
            artist: "Daniel Caesar",
            image: "../Images/R&B/https___images.genius.com_211bc5c59b071c5613ce9ce82d70f6eb.1000x1000x1.png",
            audio: "../Songs/bestpart.mp3",
            duration: "03:30",
            genre: "R&B",
            lyrics: `You don't know, babe\nWhen you hold me...`,
            year: 2017,
            type: "Solo",
            description: "A beautiful duet featuring H.E.R., this R&B love song captures the simple joys of being with someone special. The gentle acoustic guitar and harmonious vocals create a warm, intimate atmosphere."
        },
        6: {
            title: "Heartbreak Anniversary",
            artist: "Giveon",
            image: "../Images/R&B/https___images.genius.com_d725e94ee1e486f1ecd83b46a61dff6c.1000x1000x1.png",
            audio: "../Songs/heartbreakanniversary.mp3",
            duration: "03:17",
            genre: "R&B",
            lyrics: `Balloons are deflated\nGuess they look lifeless like me...`,
            year: 2020,
            type: "Solo",
            description: "A deeply emotional R&B track about marking the anniversary of a breakup. Giveon's distinctive baritone voice brings depth to the painful experience of remembering lost love."
        },
        // K-Pop songs
        7: {
            title: "SOBER",
            artist: "BIGBANG",
            image: "../Images/Kpop/ab67616d0000b2735c2254d6d7618143e23f7fdb.jpg",
            audio: "../Songs/sober.mp3",
            duration: "03:58",
            genre: "K-Pop",
            lyrics: `눈을 떴을 때면 난 이미 취해있고...`,
            year: 2015,
            type: "Group",
            description: "An energetic K-pop track from BIGBANG that combines rock elements with electronic dance music. The song's powerful vocals and dynamic performance showcase the group's versatility."
        },
        8: {
            title: "눈, 코, 입 (Eyes Nose Lips)",
            artist: "태양 (TaeYang)",
            image: "../Images/Kpop/artworks-000084792366-7oqcdc-t500x500.jpg",
            audio: "../Songs/eyesnoselips.mp3",
            duration: "03:53",
            genre: "K-Pop",
            lyrics: `눈코입술 그 시린 날씨에도...`,
            year: 2014,
            type: "Solo",
            description: "A soulful Korean R&B ballad by BIGBANG's Taeyang. The emotional lyrics describe missing every feature of a former lover's face, making it one of K-pop's most memorable breakup songs."
        },
        9: {
            title: "Hype Boys",
            artist: "New Jeans",
            image: "../Images/Kpop/https___images.genius.com_008470d3faefd4df5d16937f926bf6d4.1000x1000x1.jpg",
            audio: "../Songs/hypeboys.mp3",
            duration: "02:58",
            genre: "K-Pop",
            lyrics: `(Got me looking for attention)...`,
            year: 2022,
            type: "Group",
            description: "A fresh and youthful K-pop track from rookie group NewJeans. The retro-inspired production combined with modern pop elements creates an addictive sound that helped establish their signature style."
        }
    };

    // Detail page handler
    if (window.location.pathname.includes('sd.html')) {
        console.log("On detail page");
        const params = new URLSearchParams(window.location.search);
        const songId = params.get("id");
        console.log("Song ID:", songId);
        const song = songData[songId];
        console.log("Song data:", song);

        if (song) {
            try {
                document.title = `C'Groovy | ${song.title}`;
                
                // Using jQuery selectors
                $("#song-img").attr("src", song.image);
                $("#song-title").text(song.title);
                $("#song-artist").text(song.artist);
                $("#song-duration").text(song.duration);
                $("#song-genre").text(song.genre);
                $("#song-audio").attr("src", song.audio);
                $("#song-lyrics").text(song.lyrics);
                $("#song-desc").text(song.description);

            } catch (error) {
                console.error("Error updating elements:", error);
            }
        } else {
            console.error("Song not found");
            $("#song-title").text("Song not found");
        }
    }

    // Card click handler using jQuery
    $('.grid-item, .genre-grid-item').on('click', function() {
        const songId = $(this).data('song-id');
        if (songId) {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            sessionStorage.setItem("cg_lastPage", currentPage);
            window.location.href = `sd.html?id=${songId}`;
        }
    });
});