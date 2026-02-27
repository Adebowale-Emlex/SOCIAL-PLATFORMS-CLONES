const mockShows = [
    {
        id: 1,
        title: 'The Last of Us',
        image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=170&fit=crop',
        rating: 9.0,
        description: 'A deadly fungus spreads across the globe, and a young girl might be key to humanity\'s salvation.'
    },
    {
        id: 2,
        title: 'Stranger Things',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=170&fit=crop',
        rating: 8.7,
        description: 'When a young boy disappears, his friends, family and local police uncover a mystery involving secret government experiments.'
    },
    {
        id: 3,
        title: 'Breaking Bad',
        image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=170&fit=crop',
        rating: 9.5,
        description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing methamphetamine.'
    },
    {
        id: 4,
        title: 'The Crown',
        image: 'https://images.unsplash.com/photo-1533613220915-609f4a6b7f54?w=300&h=170&fit=crop',
        rating: 8.6,
        description: 'Follow the political rivalries and romance of Queen Elizabeth\'s reign and the events that shaped the second half of the twentieth century.'
    },
    {
        id: 5,
        title: 'Sherlock',
        image: 'https://images.unsplash.com/photo-1516234775208-82b70ce8a26b?w=300&h=170&fit=crop',
        rating: 9.1,
        description: 'A modern update finds the famous sleuth and his doctor friend solving crime in 21st century London.'
    },
    {
        id: 6,
        title: 'Mindhunter',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=300&h=170&fit=crop',
        rating: 8.8,
        description: 'FBI agents explore the dark depths of criminal psychology in pursuit of the nation\'s most dangerous killers.'
    },
    {
        id: 7,
        title: 'The Mandalorian',
        image: 'https://images.unsplash.com/photo-1518941250948-07fd6b007847?w=300&h=170&fit=crop',
        rating: 8.7,
        description: 'The travels of a lone bounty hunter in the Star Wars universe.'
    },
    {
        id: 8,
        title: 'Westworld',
        image: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=300&h=170&fit=crop',
        rating: 8.5,
        description: 'At the intersection of the near future and the reimagined past, lies a world in which every human appetite can be indulged.'
    }
];

function loadShows(gridId, shows) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    
    shows.forEach(show => {
        const showCard = document.createElement('div');
        showCard.className = 'show-card';
        showCard.innerHTML = `
            <img src="${show.image}" alt="${show.title}">
            <div class="play-overlay">
                <button class="play-button">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            <div class="show-info">
                <div class="show-title">${show.title}</div>
                <div class="show-rating">⭐ ${show.rating}/10</div>
            </div>
        `;
        
        showCard.addEventListener('click', () => openPlayer(show));
        grid.appendChild(showCard);
    });
}

function openPlayer(show) {
    const modal = document.getElementById('playerModal');
    document.getElementById('playerTitle').textContent = show.title;
    document.getElementById('playerDescription').textContent = show.description;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePlayer() {
    const modal = document.getElementById('playerModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('closePlayer').addEventListener('click', closePlayer);

document.addEventListener('click', (e) => {
    const modal = document.getElementById('playerModal');
    if (e.target === modal) {
        closePlayer();
    }
});

function setupCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filtered = mockShows.filter(show => 
                btn.textContent === 'All' || show.title.includes(btn.textContent)
            );
            
            loadShows('trendingGrid', filtered.length > 0 ? filtered : mockShows);
        });
    });
}

function init() {
    const trendingShows = mockShows.slice(0, 6);
    const continueWatchingShows = mockShows.slice(1, 5);
    const newReleases = mockShows.slice(2, 8);
    const awardWinners = mockShows.filter(show => show.rating >= 8.7);
    
    loadShows('trendingGrid', trendingShows);
    loadShows('continueWatching', continueWatchingShows);
    loadShows('newReleases', newReleases);
    loadShows('awardWinners', awardWinners);
    
    setupCategoryFilters();
}

document.addEventListener('DOMContentLoaded', init);
