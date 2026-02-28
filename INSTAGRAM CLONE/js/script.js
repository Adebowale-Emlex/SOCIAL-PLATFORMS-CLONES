function loadPosts() {
    const postsFeed = document.getElementById('postsFeed');
    postsFeed.innerHTML = '';
    
    mockPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class="post-header">
                <div class="post-user-info">
                    <img src="${post.avatar}" alt="${post.name}" class="post-user-avatar">
                    <div class="post-user-details">
                        <div class="post-username">${post.author}</div>
                        <div class="post-time">${post.timestamp}</div>
                    </div>
                </div>
                <button class="post-menu">
                    <i class="fas fa-ellipsis-h"></i>
                </button>
            </div>
            <img src="${post.image}" alt="Post" class="post-image">
            <div class="post-actions">
                <button class="action-btn like-btn" data-post-id="${post.id}">
                    <i class="far fa-heart"></i>
                </button>
                <button class="action-btn">
                    <i class="far fa-comment"></i>
                </button>
                <button class="action-btn">
                    <i class="far fa-share"></i>
                </button>
                <button class="action-btn" style="margin-left: auto;">
                    <i class="far fa-bookmark"></i>
                </button>
            </div>
            <div class="post-stats">
                <div class="likes-count"><span class="likes-number">${post.likes}</span> likes</div>
                <div class="stat-item"><span class="comments-number">${post.comments}</span> comments</div>
            </div>
            <div class="post-caption">
                <span class="username">${post.author}</span>
                <span class="caption-text">${post.caption}</span>
            </div>
            <div class="post-comments">
                <div class="comment">
                    <span class="comment-author">john_d:</span>
                    <span>Amazing shot! 📸</span>
                </div>
                <div class="comment">
                    <span class="comment-author">lisa_m:</span>
                    <span>Love this! 💕</span>
                </div>
            </div>
            <div class="post-comment-input-area">
                <input type="text" class="comment-input" placeholder="Add a comment...">
                <button class="action-btn" style="color: var(--blue);">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        `;
        
        postsFeed.appendChild(postElement);
        
        const likeBtn = postElement.querySelector('.like-btn');
        likeBtn.addEventListener('click', () => {
            const likesNumber = postElement.querySelector('.likes-number');
            let currentLikes = parseInt(likesNumber.textContent);
            
            if (likeBtn.classList.contains('liked')) {
                likeBtn.classList.remove('liked');
                likesNumber.textContent = currentLikes - 1;
            } else {
                likeBtn.classList.add('liked');
                likesNumber.textContent = currentLikes + 1;
            }
        });
    });
}

function loadSuggestions() {
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';
    
    mockUsers.forEach(user => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.className = 'suggestion-item';
        suggestionDiv.innerHTML = `
            <div class="suggestion-user">
                <img src="${user.avatar}" alt="${user.name}" class="suggestion-avatar">
                <div class="suggestion-details">
                    <div class="suggestion-name">${user.username}</div>
                    <div class="suggestion-mutual">${user.mutual}</div>
                </div>
            </div>
            <button class="follow-btn">Follow</button>
        `;
        
        const followBtn = suggestionDiv.querySelector('.follow-btn');
        followBtn.addEventListener('click', () => {
            if (followBtn.textContent === 'Follow') {
                followBtn.textContent = 'Following';
            } else {
                followBtn.textContent = 'Follow';
            }
        });
        
        suggestionsList.appendChild(suggestionDiv);
    });
}

function setupCreateButton() {
    const createBtn = document.querySelector('.create-btn');
    const postModal = document.getElementById('postModal');
    const modalClose = document.querySelector('.modal-close');
    const postForm = document.getElementById('postForm');
    
    createBtn.addEventListener('click', () => {
        postModal.classList.add('active');
    });
    
    modalClose.addEventListener('click', () => {
        postModal.classList.remove('active');
    });
    
    postModal.addEventListener('click', (e) => {
        if (e.target === postModal) {
            postModal.classList.remove('active');
        }
    });
    
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const caption = document.getElementById('postCaption').value;
        
        if (caption.trim()) {
            alert('Post created: ' + caption);
            postForm.reset();
            postModal.classList.remove('active');
        }
    });
}

function setupPostInput() {
    const postInput = document.getElementById('postInput');
    const postModal = document.getElementById('postModal');
    
    postInput.addEventListener('click', () => {
        postModal.classList.add('active');
    });
}

function init() {
    loadPosts();
    loadSuggestions();
    setupCreateButton();
    setupPostInput();
}

document.addEventListener('DOMContentLoaded', init);
