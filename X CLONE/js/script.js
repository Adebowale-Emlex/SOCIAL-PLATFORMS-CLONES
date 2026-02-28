function loadTweets() {
    const tweetsFeed = document.getElementById('tweetsFeed');
    tweetsFeed.innerHTML = '';
    
    mockTweets.forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.className = 'tweet';
        
        const imageHTML = tweet.image ? `<img src="${tweet.image}" alt="Tweet image" class="tweet-image">` : '';
        
        tweetElement.innerHTML = `
            <img src="${tweet.avatar}" alt="${tweet.author}" class="tweet-avatar">
            <div class="tweet-content">
                <div class="tweet-header">
                    <span class="tweet-author">${tweet.author}</span>
                    <span class="tweet-handle">${tweet.handle}</span>
                    <span class="tweet-time">${tweet.timestamp}</span>
                </div>
                <div class="tweet-text">${tweet.text}</div>
                ${imageHTML}
                <div class="tweet-actions">
                    <div class="tweet-action reply">
                        <i class="far fa-comment"></i>
                        <span>${tweet.replies}</span>
                    </div>
                    <div class="tweet-action retweet">
                        <i class="fas fa-retweet"></i>
                        <span>${tweet.retweets}</span>
                    </div>
                    <div class="tweet-action like">
                        <i class="far fa-heart"></i>
                        <span>${tweet.likes}</span>
                    </div>
                    <div class="tweet-action">
                        <i class="fas fa-share"></i>
                    </div>
                </div>
            </div>
        `;
        
        tweetsFeed.appendChild(tweetElement);
        
        const likeAction = tweetElement.querySelector('.tweet-action.like');
        let isLiked = false;
        likeAction.addEventListener('click', () => {
            isLiked = !isLiked;
            const likeIcon = likeAction.querySelector('i');
            const likeCount = likeAction.querySelector('span');
            
            if (isLiked) {
                likeIcon.classList.remove('far');
                likeIcon.classList.add('fas');
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
                likeAction.style.color = '#f91880';
            } else {
                likeIcon.classList.add('far');
                likeIcon.classList.remove('fas');
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
                likeAction.style.color = 'var(--text-secondary)';
            }
        });
    });
}

function loadTrending() {
    const trendingList = document.getElementById('trendingList');
    trendingList.innerHTML = '';
    
    trendingTopics.forEach(topic => {
        const trendingDiv = document.createElement('div');
        trendingDiv.className = 'trending-item';
        trendingDiv.innerHTML = `
            <div class="trending-category">${topic.category}</div>
            <div class="trending-title">${topic.title}</div>
            <div class="trending-count">${topic.tweets} posts</div>
        `;
        trendingList.appendChild(trendingDiv);
    });
}

function setupPostButton() {
    const postTweetBtn = document.getElementById('postTweetBtn');
    const tweetText = document.getElementById('tweetText');
    
    postTweetBtn.addEventListener('click', () => {
        const tweet = tweetText.value.trim();
        
        if (tweet) {
            const newTweet = {
                id: mockTweets.length + 1,
                author: 'You',
                handle: '@yourhandle',
                avatar: 'https://i.pravatar.cc/150?img=1',
                text: tweet,
                image: null,
                likes: 0,
                retweets: 0,
                replies: 0,
                timestamp: 'now'
            };
            
            mockTweets.unshift(newTweet);
            loadTweets();
            tweetText.value = '';
            tweetText.style.height = 'auto';
        }
    });
    
    tweetText.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 200) + 'px';
    });
}

function init() {
    loadTweets();
    loadTrending();
    setupPostButton();
}

document.addEventListener('DOMContentLoaded', init);
