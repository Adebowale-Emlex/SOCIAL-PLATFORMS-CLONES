// LinkedIn Clone JavaScript

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
    loadNews();
    loadSuggestions();
    initializeEventListeners();
});

// Load posts into feed
function loadPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postCard = createPostCard(post);
        postsContainer.appendChild(postCard);
    });
}

// Create post card element
function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
        <div class="post-header">
            <img src="${post.avatar}" alt="${post.author}">
            <div class="post-author-info">
                <h4>${post.author}</h4>
                <p>${post.headline}</p>
                <div class="post-time">
                    ${post.time} <i class="fas fa-globe-americas"></i>
                </div>
            </div>
            <button class="post-menu"><i class="fas fa-ellipsis-h"></i></button>
        </div>
        <div class="post-content-text">${post.content}</div>
        ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
        <div class="post-stats">
            <span><i class="fas fa-thumbs-up" style="color: #0a66c2;"></i> ${post.likes}</span>
            <span>${post.comments} comments • ${post.shares} shares</span>
        </div>
        <div class="post-actions">
            <button class="post-action like-btn ${post.liked ? 'active' : ''}" data-post-id="${post.id}">
                <i class="${post.liked ? 'fas' : 'far'} fa-thumbs-up"></i>
                Like
            </button>
            <button class="post-action comment-btn">
                <i class="far fa-comment"></i>
                Comment
            </button>
            <button class="post-action share-btn">
                <i class="fas fa-share"></i>
                Share
            </button>
            <button class="post-action send-btn">
                <i class="far fa-paper-plane"></i>
                Send
            </button>
        </div>
    `;

    // Add like button functionality
    const likeBtn = card.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => toggleLike(post.id, likeBtn));

    return card;
}

// Toggle like on post
function toggleLike(postId, button) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;

    const icon = button.querySelector('i');
    if (post.liked) {
        button.classList.add('active');
        icon.className = 'fas fa-thumbs-up';
    } else {
        button.classList.remove('active');
        icon.className = 'far fa-thumbs-up';
    }

    // Update the stats
    const postCard = button.closest('.post-card');
    const statsSpan = postCard.querySelector('.post-stats span:first-child');
    statsSpan.innerHTML = `<i class="fas fa-thumbs-up" style="color: #0a66c2;"></i> ${post.likes}`;
}

// Load news items
function loadNews() {
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = '';

    newsItems.forEach(news => {
        const newsItem = document.createElement('li');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div>
                <i class="fas fa-circle"></i>
                <strong class="news-title">${news.title}</strong>
                <div class="news-stats">${news.readers}</div>
            </div>
        `;
        newsList.appendChild(newsItem);
    });
}

// Load people suggestions
function loadSuggestions() {
    const container = document.getElementById('suggestionsContainer');
    container.innerHTML = '';

    suggestions.forEach(person => {
        const card = document.createElement('div');
        card.className = 'suggestion-card';
        card.innerHTML = `
            <img src="${person.avatar}" alt="${person.name}">
            <div class="suggestion-info">
                <h4>${person.name}</h4>
                <p>${person.headline}</p>
                <p style="font-size: 12px; color: #666;"><i class="fas fa-user-friends"></i> ${person.mutualConnections} mutual connections</p>
                <button class="connect-btn" data-person-id="${person.id}">
                    <i class="fas fa-user-plus"></i> Connect
                </button>
            </div>
        `;

        const connectBtn = card.querySelector('.connect-btn');
        connectBtn.addEventListener('click', () => handleConnect(person.id, connectBtn));

        container.appendChild(card);
    });
}

// Handle connect button
function handleConnect(personId, button) {
    button.textContent = 'Pending';
    button.style.backgroundColor = '#f3f2ef';
    button.style.color = '#666';
    button.disabled = true;
}

// Initialize event listeners
function initializeEventListeners() {
    // Post modal
    const startPostBtn = document.getElementById('startPostBtn');
    const postModal = document.getElementById('postModal');
    const closeModal = document.getElementById('closeModal');
    const postSubmitBtn = document.getElementById('postSubmitBtn');
    const postContent = document.getElementById('postContent');

    startPostBtn.addEventListener('click', () => {
        postModal.classList.add('active');
        postContent.focus();
    });

    closeModal.addEventListener('click', () => {
        postModal.classList.remove('active');
        postContent.value = '';
    });

    postSubmitBtn.addEventListener('click', () => {
        if (postContent.value.trim()) {
            createNewPost(postContent.value);
            postModal.classList.remove('active');
            postContent.value = '';
        }
    });

    // Enable/disable post button based on content
    postContent.addEventListener('input', () => {
        postSubmitBtn.disabled = !postContent.value.trim();
    });

    // Network modal
    const networkLink = document.getElementById('networkLink');
    const networkModal = document.getElementById('networkModal');
    const closeNetworkModal = document.getElementById('closeNetworkModal');

    networkLink.addEventListener('click', (e) => {
        e.preventDefault();
        networkModal.classList.add('active');
        loadInvitations();
    });

    closeNetworkModal.addEventListener('click', () => {
        networkModal.classList.remove('active');
    });

    // Jobs modal
    const jobsLink = document.getElementById('jobsLink');
    const jobsModal = document.getElementById('jobsModal');
    const closeJobsModal = document.getElementById('closeJobsModal');

    jobsLink.addEventListener('click', (e) => {
        e.preventDefault();
        jobsModal.classList.add('active');
        loadJobs();
    });

    closeJobsModal.addEventListener('click', () => {
        jobsModal.classList.remove('active');
    });

    // Messaging modal
    const messagingLink = document.getElementById('messagingLink');
    const messagingModal = document.getElementById('messagingModal');
    const closeMessagingModal = document.getElementById('closeMessagingModal');

    messagingLink.addEventListener('click', (e) => {
        e.preventDefault();
        messagingModal.classList.add('active');
        loadConversations();
    });

    closeMessagingModal.addEventListener('click', () => {
        messagingModal.classList.remove('active');
    });

    // Notifications modal
    const notificationsLink = document.getElementById('notificationsLink');
    const notificationsModal = document.getElementById('notificationsModal');
    const closeNotificationsModal = document.getElementById('closeNotificationsModal');

    notificationsLink.addEventListener('click', (e) => {
        e.preventDefault();
        notificationsModal.classList.add('active');
        loadNotifications();
    });

    closeNotificationsModal.addEventListener('click', () => {
        notificationsModal.classList.remove('active');
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        // Implement search functionality here
        console.log('Searching for:', e.target.value);
    });
}

// Create new post
function createNewPost(content) {
    const newPost = {
        id: posts.length + 1,
        author: "John Anderson",
        avatar: "https://i.pravatar.cc/150?img=33",
        headline: "Senior Software Engineer at Tech Corp",
        time: "Just now",
        content: content,
        image: null,
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false
    };

    posts.unshift(newPost);
    loadPosts();
}

// Load invitations in network modal
function loadInvitations() {
    const networkContent = document.getElementById('networkContent');
    networkContent.innerHTML = '';

    invitations.forEach(invitation => {
        const card = document.createElement('div');
        card.className = 'invitation-card';
        card.innerHTML = `
            <img src="${invitation.avatar}" alt="${invitation.name}">
            <div class="invitation-info">
                <h4>${invitation.name}</h4>
                <p>${invitation.headline}</p>
                <p style="font-size: 12px; color: #666;">${invitation.mutualConnections} mutual connections</p>
            </div>
            <div class="invitation-actions">
                <button class="accept-btn" data-invitation-id="${invitation.id}">Accept</button>
                <button class="ignore-btn" data-invitation-id="${invitation.id}">Ignore</button>
            </div>
        `;

        const acceptBtn = card.querySelector('.accept-btn');
        const ignoreBtn = card.querySelector('.ignore-btn');

        acceptBtn.addEventListener('click', () => {
            card.remove();
            updateNetworkBadge();
        });

        ignoreBtn.addEventListener('click', () => {
            card.remove();
            updateNetworkBadge();
        });

        networkContent.appendChild(card);
    });
}

// Update network badge count
function updateNetworkBadge() {
    const badge = document.getElementById('networkBadge');
    const remaining = document.querySelectorAll('.invitation-card').length;
    badge.textContent = remaining;
    if (remaining === 0) {
        badge.style.display = 'none';
    }
}

// Load jobs
function loadJobs() {
    const jobsContent = document.getElementById('jobsContent');
    jobsContent.innerHTML = '';

    jobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <div class="job-header">
                <img src="${job.logo}" alt="${job.company}" class="job-logo" onerror="this.src='https://via.placeholder.com/56'">
                <div class="job-info">
                    <h4>${job.title}</h4>
                    <p>${job.company}</p>
                    <p>${job.location}</p>
                </div>
            </div>
            <div class="job-details">
                <span class="job-detail"><i class="fas fa-briefcase"></i> ${job.type}</span>
                <span class="job-detail"><i class="fas fa-layer-group"></i> ${job.level}</span>
                <span class="job-detail"><i class="fas fa-users"></i> ${job.applicants} applicants</span>
            </div>
            <p style="font-size: 12px; color: #01754f; margin-bottom: 12px;">
                <i class="fas fa-clock"></i> ${job.posted}
            </p>
            <div class="job-actions">
                <button class="apply-btn">Apply</button>
                <button class="save-btn">Save</button>
            </div>
        `;

        const applyBtn = card.querySelector('.apply-btn');
        const saveBtn = card.querySelector('.save-btn');

        applyBtn.addEventListener('click', () => {
            applyBtn.textContent = 'Applied';
            applyBtn.disabled = true;
            applyBtn.style.backgroundColor = '#ccc';
        });

        saveBtn.addEventListener('click', () => {
            if (saveBtn.textContent === 'Save') {
                saveBtn.textContent = 'Saved';
                saveBtn.style.backgroundColor = '#0a66c2';
                saveBtn.style.color = '#fff';
            } else {
                saveBtn.textContent = 'Save';
                saveBtn.style.backgroundColor = '#fff';
                saveBtn.style.color = '#0a66c2';
            }
        });

        jobsContent.appendChild(card);
    });
}

// Load conversations
function loadConversations() {
    const conversationsList = document.getElementById('conversationsList');
    conversationsList.innerHTML = '';

    conversations.forEach(conversation => {
        const item = document.createElement('div');
        item.className = 'conversation-item';
        item.innerHTML = `
            <img src="${conversation.avatar}" alt="${conversation.name}">
            <div class="conversation-details">
                <h4>${conversation.name} ${conversation.unread ? '•' : ''}</h4>
                <p>${conversation.lastMessage}</p>
            </div>
        `;

        item.addEventListener('click', () => {
            document.querySelectorAll('.conversation-item').forEach(el => {
                el.classList.remove('active');
            });
            item.classList.add('active');
            loadMessages(conversation.id, conversation.name, conversation.avatar);
        });

        conversationsList.appendChild(item);
    });
}

// Load messages for a conversation
function loadMessages(conversationId, name, avatar) {
    const messageView = document.getElementById('messageView');
    const messages = messageThreads[conversationId] || [];

    messageView.innerHTML = `
        <div class="message-header">
            <img src="${avatar}" alt="${name}">
            <h4>${name}</h4>
        </div>
        <div class="messages-container" id="messagesContainer">
            ${messages.map(msg => `
                <div class="message ${msg.sent ? 'sent' : 'received'}">
                    <div class="message-text">${msg.text}</div>
                    <span class="message-time">${msg.time}</span>
                </div>
            `).join('')}
        </div>
        <div class="message-input-container">
            <input type="text" placeholder="Write a message..." id="messageInput">
            <button class="send-message-btn" id="sendMessageBtn">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    `;

    // Scroll to bottom
    const messagesContainer = document.getElementById('messagesContainer');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Send message functionality
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendMessageBtn');

    const sendMessage = () => {
        const text = messageInput.value.trim();
        if (text) {
            const newMessage = {
                sender: "You",
                text: text,
                time: "Just now",
                sent: true
            };

            if (!messageThreads[conversationId]) {
                messageThreads[conversationId] = [];
            }
            messageThreads[conversationId].push(newMessage);

            const messageDiv = document.createElement('div');
            messageDiv.className = 'message sent';
            messageDiv.innerHTML = `
                <div class="message-text">${text}</div>
                <span class="message-time">Just now</span>
            `;
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            messageInput.value = '';
        }
    };

    sendBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Load notifications
function loadNotifications() {
    const notificationsContent = document.getElementById('notificationsContent');
    notificationsContent.innerHTML = '';

    notifications.forEach(notification => {
        const item = document.createElement('div');
        item.className = `notification-item ${notification.unread ? 'unread' : ''}`;
        item.innerHTML = `
            <img src="${notification.avatar}" alt="User">
            <div class="notification-content">
                <p>${notification.text}</p>
                <span class="notification-time">${notification.time}</span>
            </div>
        `;

        item.addEventListener('click', () => {
            item.classList.remove('unread');
            notification.unread = false;
            updateNotificationBadge();
        });

        notificationsContent.appendChild(item);
    });
}

// Update notification badge count
function updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    const unreadCount = notifications.filter(n => n.unread).length;
    badge.textContent = unreadCount;
    if (unreadCount === 0) {
        badge.style.display = 'none';
    }
}
