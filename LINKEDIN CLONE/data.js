// Sample data for LinkedIn Clone

const posts = [
    {
        id: 1,
        author: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=45",
        headline: "Product Manager at Microsoft",
        time: "2h",
        content: "Excited to announce that our team is hiring! We're looking for talented software engineers to join us in building the future of cloud computing. DM me if you're interested! #hiring #microsoft #cloudcomputing",
        image: null,
        likes: 234,
        comments: 18,
        shares: 12,
        liked: false
    },
    {
        id: 2,
        author: "Michael Chen",
        avatar: "https://i.pravatar.cc/150?img=12",
        headline: "Senior Data Scientist at Google",
        time: "5h",
        content: "Just published a new article on Machine Learning best practices. Check it out and let me know your thoughts! 🚀\n\nLink in comments.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        likes: 567,
        comments: 43,
        shares: 89,
        liked: true
    },
    {
        id: 3,
        author: "Emily Rodriguez",
        avatar: "https://i.pravatar.cc/150?img=32",
        headline: "UX Designer | Creative Problem Solver",
        time: "8h",
        content: "Great discussion at today's design thinking workshop! Remember: Always put the user first. 💡\n\n#UXDesign #DesignThinking #UserExperience",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
        likes: 189,
        comments: 12,
        shares: 23,
        liked: false
    },
    {
        id: 4,
        author: "David Park",
        avatar: "https://i.pravatar.cc/150?img=60",
        headline: "CEO at TechStartup Inc.",
        time: "1d",
        content: "Proud to announce we've just closed our Series B funding! 🎉 Thank you to all our investors and supporters. This is just the beginning!\n\n#startup #funding #entrepreneurship",
        image: null,
        likes: 1203,
        comments: 156,
        shares: 234,
        liked: true
    },
    {
        id: 5,
        author: "Jessica Williams",
        avatar: "https://i.pravatar.cc/150?img=47",
        headline: "Marketing Director | Digital Strategy Expert",
        time: "2d",
        content: "5 key marketing trends to watch in 2026:\n\n1. AI-powered personalization\n2. Interactive content\n3. Sustainability messaging\n4. Voice search optimization\n5. Community-driven campaigns\n\nWhat trends are you seeing? 🤔",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        likes: 445,
        comments: 67,
        shares: 112,
        liked: false
    }
];

const newsItems = [
    {
        id: 1,
        title: "Tech layoffs continue in 2026",
        readers: "2,345 readers"
    },
    {
        id: 2,
        title: "AI companies see record investments",
        readers: "5,678 readers"
    },
    {
        id: 3,
        title: "Remote work debate intensifies",
        readers: "3,456 readers"
    },
    {
        id: 4,
        title: "Startup unicorns reach new high",
        readers: "1,890 readers"
    },
    {
        id: 5,
        title: "Green tech gets major backing",
        readers: "4,123 readers"
    }
];

const suggestions = [
    {
        id: 1,
        name: "Robert Martinez",
        avatar: "https://i.pravatar.cc/150?img=15",
        headline: "Software Engineer at Amazon",
        mutualConnections: 12
    },
    {
        id: 2,
        name: "Amanda Lee",
        avatar: "https://i.pravatar.cc/150?img=26",
        headline: "Marketing Manager at Adobe",
        mutualConnections: 8
    },
    {
        id: 3,
        name: "James Wilson",
        avatar: "https://i.pravatar.cc/150?img=52",
        headline: "Product Designer at Apple",
        mutualConnections: 15
    },
    {
        id: 4,
        name: "Lisa Anderson",
        avatar: "https://i.pravatar.cc/150?img=44",
        headline: "HR Director at LinkedIn",
        mutualConnections: 6
    }
];

const invitations = [
    {
        id: 1,
        name: "Thomas Brown",
        avatar: "https://i.pravatar.cc/150?img=13",
        headline: "Full Stack Developer at Meta",
        mutualConnections: 23,
        message: "I'd like to connect with you"
    },
    {
        id: 2,
        name: "Maria Garcia",
        avatar: "https://i.pravatar.cc/150?img=35",
        headline: "Business Analyst at Accenture",
        mutualConnections: 18,
        message: "Let's connect!"
    },
    {
        id: 3,
        name: "Kevin Taylor",
        avatar: "https://i.pravatar.cc/150?img=68",
        headline: "DevOps Engineer at Netflix",
        mutualConnections: 9,
        message: "Would love to connect"
    },
    {
        id: 4,
        name: "Rachel Kim",
        avatar: "https://i.pravatar.cc/150?img=29",
        headline: "Content Strategist at Medium",
        mutualConnections: 14,
        message: "Hi! Let's connect"
    },
    {
        id: 5,
        name: "Daniel White",
        avatar: "https://i.pravatar.cc/150?img=59",
        headline: "Sales Executive at Salesforce",
        mutualConnections: 7,
        message: "I'd like to add you to my network"
    }
];

const jobs = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        type: "Full-time",
        level: "Mid-Senior level",
        applicants: 234,
        posted: "2 days ago",
        logo: "https://logo.clearbit.com/google.com"
    },
    {
        id: 2,
        title: "Product Manager",
        company: "Meta",
        location: "Menlo Park, CA",
        type: "Full-time",
        level: "Senior level",
        applicants: 156,
        posted: "4 days ago",
        logo: "https://logo.clearbit.com/meta.com"
    },
    {
        id: 3,
        title: "UX/UI Designer",
        company: "Apple",
        location: "Cupertino, CA",
        type: "Full-time",
        level: "Entry level",
        applicants: 89,
        posted: "1 week ago",
        logo: "https://logo.clearbit.com/apple.com"
    },
    {
        id: 4,
        title: "Data Scientist",
        company: "Amazon",
        location: "Seattle, WA",
        type: "Full-time",
        level: "Mid-Senior level",
        applicants: 312,
        posted: "3 days ago",
        logo: "https://logo.clearbit.com/amazon.com"
    },
    {
        id: 5,
        title: "DevOps Engineer",
        company: "Microsoft",
        location: "Redmond, WA",
        type: "Full-time",
        level: "Mid-Senior level",
        applicants: 178,
        posted: "5 days ago",
        logo: "https://logo.clearbit.com/microsoft.com"
    },
    {
        id: 6,
        title: "Marketing Manager",
        company: "Netflix",
        location: "Los Gatos, CA",
        type: "Full-time",
        level: "Senior level",
        applicants: 98,
        posted: "1 week ago",
        logo: "https://logo.clearbit.com/netflix.com"
    }
];

const conversations = [
    {
        id: 1,
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=45",
        lastMessage: "Thanks for accepting my connection!",
        timestamp: "10:30 AM",
        unread: true
    },
    {
        id: 2,
        name: "Michael Chen",
        avatar: "https://i.pravatar.cc/150?img=12",
        lastMessage: "Did you see my latest article?",
        timestamp: "Yesterday",
        unread: true
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        avatar: "https://i.pravatar.cc/150?img=32",
        lastMessage: "Great meeting you at the conference!",
        timestamp: "2 days ago",
        unread: false
    },
    {
        id: 4,
        name: "David Park",
        avatar: "https://i.pravatar.cc/150?img=60",
        lastMessage: "Would love to discuss potential collaboration",
        timestamp: "3 days ago",
        unread: true
    },
    {
        id: 5,
        name: "Jessica Williams",
        avatar: "https://i.pravatar.cc/150?img=47",
        lastMessage: "That sounds perfect!",
        timestamp: "1 week ago",
        unread: false
    }
];

const messageThreads = {
    1: [
        { sender: "Sarah Johnson", text: "Hi! Thanks for connecting!", time: "10:15 AM", sent: false },
        { sender: "You", text: "My pleasure! I enjoyed your recent post about product management.", time: "10:20 AM", sent: true },
        { sender: "Sarah Johnson", text: "Thanks for accepting my connection!", time: "10:30 AM", sent: false }
    ],
    2: [
        { sender: "Michael Chen", text: "Hey! Did you get a chance to read my article?", time: "Yesterday", sent: false },
        { sender: "You", text: "Not yet, but it's on my reading list!", time: "Yesterday", sent: true },
        { sender: "Michael Chen", text: "Did you see my latest article?", time: "Yesterday", sent: false }
    ],
    3: [
        { sender: "Emily Rodriguez", text: "Great meeting you at the design conference!", time: "2 days ago", sent: false },
        { sender: "You", text: "Likewise! Your presentation was fantastic.", time: "2 days ago", sent: true },
        { sender: "Emily Rodriguez", text: "Great meeting you at the conference!", time: "2 days ago", sent: false }
    ],
    4: [
        { sender: "David Park", text: "I saw you're working on similar projects", time: "3 days ago", sent: false },
        { sender: "You", text: "Yes! I'd be interested in learning more.", time: "3 days ago", sent: true },
        { sender: "David Park", text: "Would love to discuss potential collaboration", time: "3 days ago", sent: false }
    ],
    5: [
        { sender: "Jessica Williams", text: "Are you free for a call next week?", time: "1 week ago", sent: false },
        { sender: "You", text: "Tuesday afternoon works for me!", time: "1 week ago", sent: true },
        { sender: "Jessica Williams", text: "That sounds perfect!", time: "1 week ago", sent: false }
    ]
};

const notifications = [
    {
        id: 1,
        avatar: "https://i.pravatar.cc/150?img=45",
        text: "Sarah Johnson liked your post",
        time: "5 minutes ago",
        unread: true
    },
    {
        id: 2,
        avatar: "https://i.pravatar.cc/150?img=12",
        text: "Michael Chen commented on your post: \"Great insights!\"",
        time: "1 hour ago",
        unread: true
    },
    {
        id: 3,
        avatar: "https://i.pravatar.cc/150?img=32",
        text: "Emily Rodriguez shared your article",
        time: "3 hours ago",
        unread: true
    },
    {
        id: 4,
        avatar: "https://i.pravatar.cc/150?img=60",
        text: "David Park sent you a connection request",
        time: "5 hours ago",
        unread: false
    },
    {
        id: 5,
        avatar: "https://i.pravatar.cc/150?img=47",
        text: "Jessica Williams viewed your profile",
        time: "Yesterday",
        unread: false
    },
    {
        id: 6,
        avatar: "https://i.pravatar.cc/150?img=15",
        text: "Robert Martinez endorsed you for JavaScript",
        time: "Yesterday",
        unread: false
    },
    {
        id: 7,
        avatar: "https://i.pravatar.cc/150?img=26",
        text: "Amanda Lee mentioned you in a comment",
        time: "2 days ago",
        unread: false
    },
    {
        id: 8,
        avatar: "https://i.pravatar.cc/150?img=52",
        text: "James Wilson congratulated you on your work anniversary",
        time: "3 days ago",
        unread: false
    }
];
