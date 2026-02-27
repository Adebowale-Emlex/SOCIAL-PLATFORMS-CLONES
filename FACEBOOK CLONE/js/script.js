function loadStories() {
    const storiesContainer = document.getElementById('storiesContainer');
    
    mockData.stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.style.backgroundImage = `url('${story.image}')`;
        storyCard.innerHTML = `
            <img src="${story.avatar}" alt="${story.name}" class="story-avatar">
            <span class="story-name">${story.name}</span>
        `;
        
        storyCard.addEventListener('click', () => {
            console.log(`Clicked on story: ${story.name}`);
        });
        
        storiesContainer.appendChild(storyCard);
    });
}

function createPostCard(post) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.dataset.postId = post.id;
    
    postCard.innerHTML = `
        <!-- Post Header -->
        <div class="post-header">
            <div class="post-user">
                <img src="${post.avatar}" alt="${post.author}" class="post-user-avatar">
                <div class="post-user-info">
                    <div class="post-user-name">${post.author}</div>
                    <div class="post-time">${post.timestamp}</div>
                </div>
            </div>
            <button class="post-menu" title="More options">
                <i class="fas fa-ellipsis-h"></i>
            </button>
        </div>
        
        <!-- Post Content -->
        <div class="post-content">
            ${post.content}
        </div>
        
        <!-- Post Image (if available) -->
        ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
        
        <!-- Post Statistics -->
        <div class="post-stats">
            <span><i class="fas fa-thumbs-up"></i> ${post.likes} Likes</span>
            <div>
                <span>${post.comments} Comments</span>
                <span style="margin-left: 12px;">${post.shares} Shares</span>
            </div>
        </div>
        
        <!-- Post Actions -->
        <div class="post-actions">
            <button class="action-btn like-btn ${post.liked ? 'liked' : ''}">
                <i class="fas fa-thumbs-up"></i>
                <span>Like</span>
            </button>
            <button class="action-btn comment-btn">
                <i class="fas fa-comment"></i>
                <span>Comment</span>
            </button>
            <button class="action-btn share-btn">
                <i class="fas fa-share"></i>
                <span>Share</span>
            </button>
        </div>
    `;
    
    const likeBtn = postCard.querySelector('.like-btn');
    const commentBtn = postCard.querySelector('.comment-btn');
    const shareBtn = postCard.querySelector('.share-btn');
    const menuBtn = postCard.querySelector('.post-menu');
    
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
        const statsLikes = postCard.querySelector('.post-stats span i');
        if (likeBtn.classList.contains('liked')) {
            post.likes += 1;
            statsLikes.parentElement.textContent = ` ${post.likes} Likes`;
        } else {
            post.likes -= 1;
            statsLikes.parentElement.textContent = ` ${post.likes} Likes`;
        }
    });
    
    commentBtn.addEventListener('click', () => {
        alert(`Comment on post by ${post.author}`);
    });
    
    shareBtn.addEventListener('click', () => {
        alert(`Share post by ${post.author}`);
    });
    
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        alert(`More options for post by ${post.author}`);
    });
    
    return postCard;
}

function loadPosts() {
    const postsContainer = document.getElementById('postsContainer');
    
    mockData.posts.forEach(post => {
        const postCard = createPostCard(post);
        postsContainer.appendChild(postCard);
    });
}

function loadContacts() {
    const contactsList = document.getElementById('contactsList');
    
    mockData.contacts.forEach(contact => {
        const contactItem = document.createElement('a');
        contactItem.href = '#';
        contactItem.className = 'contact-item';
        
        contactItem.innerHTML = `
            <div class="contact-avatar">
                <img src="${contact.avatar}" alt="${contact.name}">
                ${contact.online ? '<div class="online-indicator"></div>' : ''}
            </div>
            <span>${contact.name}</span>
        `;
        
        contactItem.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Clicked on contact: ${contact.name}`);
        });
        
        contactsList.appendChild(contactItem);
    });
}

function setupProfileDropdown() {
    const profileToggle = document.getElementById('profileToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    profileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('active');
    });
    

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.profile-dropdown')) {
            dropdownMenu.classList.remove('active');
        }
    });
    

    dropdownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const action = link.textContent.trim();
            console.log(`Clicked on: ${action}`);
            dropdownMenu.classList.remove('active');
        });
    });
}

function setupCreatePost() {
    const postInput = document.getElementById('postInput');
    const photoBtn = document.getElementById('photoBtn');
    
    postInput.addEventListener('click', () => {
        alert('Post compose modal would open here');
    });
    
    postInput.addEventListener('focus', () => {
    });
    
    photoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Photo/Video upload would open here');
    });
}

function init() {
    console.log('Initializing Facebook Clone...');
    
    loadStories();
    loadPosts();
    loadContacts();
    
    setupProfileDropdown();
    setupCreatePost();
    
    console.log('Facebook Clone initialized successfully!');
}

document.addEventListener('DOMContentLoaded', init);

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}

function formatTime(minutes) {
    if (minutes < 60) {
        return `${minutes}m ago`;
    } else if (minutes < 1440) {
        const hours = Math.floor(minutes / 60);
        return `${hours}h ago`;
    } else {
        const days = Math.floor(minutes / 1440);
        return `${days}d ago`;
    }
}

function addAnimation(element, animationName) {
    element.style.animation = `${animationName} 0.3s ease`;
    setTimeout(() => {
        element.style.animation = '';
    }, 300);
}
