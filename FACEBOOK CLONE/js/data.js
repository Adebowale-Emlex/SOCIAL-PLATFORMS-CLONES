const mockData = {
    stories: [
        {
            id: 1,
            name: 'Your Story',
            avatar: 'https://i.pravatar.cc/150?img=12',
            image: 'https://images.unsplash.com/photo-1579546929662-711aa33e6b6f?w=110&h=180&fit=crop',
            isOwn: true
        },
        {
            id: 2,
            name: 'Sarah Anderson',
            avatar: 'https://i.pravatar.cc/150?img=5',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=110&h=180&fit=crop'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            avatar: 'https://i.pravatar.cc/150?img=8',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=110&h=180&fit=crop'
        },
        {
            id: 4,
            name: 'Emily Chen',
            avatar: 'https://i.pravatar.cc/150?img=47',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=110&h=180&fit=crop'
        },
        {
            id: 5,
            name: 'Alex Roberts',
            avatar: 'https://i.pravatar.cc/150?img=33',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=110&h=180&fit=crop'
        },
        {
            id: 6,
            name: 'Jessica Lee',
            avatar: 'https://i.pravatar.cc/150?img=16',
            image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=110&h=180&fit=crop'
        }
    ],

    posts: [
        {
            id: 1,
            author: 'Sarah Anderson',
            avatar: 'https://i.pravatar.cc/150?img=5',
            timestamp: '2 hours ago',
            content: 'Just finished an amazing React course! Feeling excited to build more projects. 🎉',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop',
            likes: 328,
            comments: 45,
            shares: 12,
            liked: false
        },
        {
            id: 2,
            author: 'Mike Johnson',
            avatar: 'https://i.pravatar.cc/150?img=8',
            timestamp: '4 hours ago',
            content: 'Beautiful sunset at the beach today. Nature is amazing! 🌅',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop',
            likes: 512,
            comments: 78,
            shares: 34,
            liked: false
        },
        {
            id: 3,
            author: 'Emily Chen',
            avatar: 'https://i.pravatar.cc/150?img=47',
            timestamp: '6 hours ago',
            content: 'Started my new job today! Excited to meet the team and learn new things. Can\'t wait for this journey! 💼',
            image: null,
            likes: 645,
            comments: 92,
            shares: 28,
            liked: false
        },
        {
            id: 4,
            author: 'Alex Roberts',
            avatar: 'https://i.pravatar.cc/150?img=33',
            timestamp: '8 hours ago',
            content: 'Coffee and coding - the perfect combination ☕👨‍💻',
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=400&fit=crop',
            likes: 234,
            comments: 56,
            shares: 18,
            liked: false
        },
        {
            id: 5,
            author: 'Jessica Lee',
            avatar: 'https://i.pravatar.cc/150?img=16',
            timestamp: '10 hours ago',
            content: 'Celebrating 5 years of friendship with these amazing people! 🎊',
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop',
            likes: 789,
            comments: 123,
            shares: 45,
            liked: false
        },
        {
            id: 6,
            author: 'David Wilson',
            avatar: 'https://i.pravatar.cc/150?img=27',
            timestamp: '12 hours ago',
            content: 'Just launched my new portfolio website! Check it out and let me know what you think 🚀',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=400&fit=crop',
            likes: 456,
            comments: 67,
            shares: 32,
            liked: false
        }
    ],

    contacts: [
        { id: 1, name: 'Sarah Anderson', avatar: 'https://i.pravatar.cc/150?img=5', online: true },
        { id: 2, name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/150?img=8', online: true },
        { id: 3, name: 'Emily Chen', avatar: 'https://i.pravatar.cc/150?img=47', online: false },
        { id: 4, name: 'Alex Roberts', avatar: 'https://i.pravatar.cc/150?img=33', online: true },
        { id: 5, name: 'Jessica Lee', avatar: 'https://i.pravatar.cc/150?img=16', online: true },
        { id: 6, name: 'David Wilson', avatar: 'https://i.pravatar.cc/150?img=27', online: false },
        { id: 7, name: 'Rachel Kim', avatar: 'https://i.pravatar.cc/150?img=42', online: true },
        { id: 8, name: 'Tom Brown', avatar: 'https://i.pravatar.cc/150?img=31', online: false }
    ]
};
