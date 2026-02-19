// Create animated particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Quiz data
const questions = [
    {
        id: 1,
        text: "Pick your dream project",
        type: "icon",
        options: [
            { text: "Transform an empty space into a pop-up shop, gallery, or event.", icon: "🏛️", score: "space_shaper", feedback: "We see cardboard, foam, and fancy lighting in your future." },
            { text: "Design an app or website people love to use.", icon: "📲", score: "pixel_wizard", feedback: "Somewhere, an app is begging you to fix it." },
            { text: "Art-direct a whole brand or event – from poster to space.", icon: "🎬", score: "design_explorer", feedback: "Director energy. You like owning the big picture." },
            { text: "Do something wild no one's done before.", icon: "🚀", score: "unicorn", feedback: "Bold choice. The brief will never see you coming." }
        ]
    },
    {
        id: 2,
        text: "Which playground feels most like you?",
        type: "icon",
        options: [
            { text: "Studio with models, cardboard, and glue guns.", icon: "🛠️", score: "space_shaper", feedback: "Smell of glue and fresh foam board = happiness." },
            { text: "Laptop, Figma, code editor, and dark mode.", icon: "⌨️", score: "pixel_wizard", feedback: "Screens and dark mode. Classic." },
            { text: "A messy desk with sketchbook, camera, and laptop.", icon: "✏️", score: "design_explorer", feedback: "You like a bit of everything. Very designer of you." },
            { text: "A table covered in glitter, stickers, and chaos.", icon: "🎪", score: "unicorn", feedback: "If it sparkles, it's allowed." }
        ]
    },
    {
        id: 3,
        text: "How do you feel about coding?",
        type: "text",
        options: [
            { text: "Respect it, but I'd rather build in 3D.", icon: "📦", score: "space_shaper", feedback: "No worries. Not every designer has to code." },
            { text: "Teach me! I want to make my designs actually work.", icon: "👨‍💻", score: "pixel_wizard", feedback: "Nice. You're ready to speak both design and dev." },
            { text: "I'll learn enough to be dangerous, but design comes first.", icon: "🎨", score: "design_explorer", feedback: "Perfect. Enough to be dangerous." },
            { text: "I'll charm a coder into being my best friend.", icon: "🤝", score: "unicorn", feedback: "Strong life strategy, honestly." }
        ]
    },
    {
        id: 4,
        text: "Your brain naturally thinks in…",
        type: "icon",
        options: [
            { text: "3D – rooms, stages, shops, how people move through space.", icon: "🏗️", score: "space_shaper", feedback: "Spatial thinker detected." },
            { text: "Screens – buttons, flows, 'what happens when I tap here?'", icon: "🖱️", score: "pixel_wizard", feedback: "You're already mapping user flows in your head." },
            { text: "Ideas – big concepts first, then choosing the right format.", icon: "💭", score: "design_explorer", feedback: "Concept-first energy. Very design school of you." },
            { text: "Pure vibes – I can't explain it, but it works.", icon: "✨", score: "unicorn", feedback: "Vibes are valid. Actually." }
        ]
    },
    {
        id: 5,
        text: "A friend asks, 'Can you help me with this?' Which one makes you say YES fastest?",
        type: "text",
        options: [
            { text: "Can you help me rearrange my room or store so it looks amazing?", icon: "🪑", score: "space_shaper", feedback: "You can already see the new layout in your head." },
            { text: "Can you help me make this app/website less annoying?", icon: "💻", score: "pixel_wizard", feedback: "You've been silently judging that app for weeks." },
            { text: "Can you help me make my whole brand look consistent?", icon: "🏷️", score: "design_explorer", feedback: "Brand consistency is your love language." },
            { text: "Can you help me make something unforgettable for Instagram?", icon: "📱", score: "unicorn", feedback: "Instagram chaos coordinator. Respect." }
        ]
    },
    {
        id: 6,
        text: "AI in design sounds like…",
        type: "text",
        options: [
            { text: "A helpful assistant that can save time.", icon: "⏱️", score: "space_shaper", feedback: "Practical. You'll use AI when it makes sense." },
            { text: "A cool tool for digital ideas, layouts, and content.", icon: "🔧", score: "pixel_wizard", feedback: "Digital designers and AI are a natural match." },
            { text: "Something to learn so I use it smartly, not blindly.", icon: "📚", score: "design_explorer", feedback: "Smart. Learn the tool, stay in control." },
            { text: "My future sidekick. I'll still take credit, obviously.", icon: "🦾", score: "unicorn", feedback: "AI as sidekick. That tracks." }
        ]
    },
    {
        id: 7,
        text: "It's project week. You instinctively start with:",
        type: "icon",
        options: [
            { text: "A rough sketch of a space and where people will walk.", icon: "📋", score: "space_shaper", feedback: "Floor plans first. Very spatial of you." },
            { text: "A quick wireframe of screens and user flow.", icon: "🖼️", score: "pixel_wizard", feedback: "Wireframes before visuals. Efficient." },
            { text: "A moodboard of colours, fonts, and references.", icon: "🎨", score: "design_explorer", feedback: "Moodboard energy. You set the vibe first." },
            { text: "A wild idea and the thought 'we'll figure it out live.'", icon: "💥", score: "unicorn", feedback: "Chaos as a creative method. Bold." }
        ]
    },
    {
        id: 8,
        text: "What kind of first job sounds fun?",
        type: "text",
        options: [
            { text: "Designing interiors, exhibits, or store displays.", icon: "🏛️", score: "space_shaper", feedback: "Physical spaces, real impact." },
            { text: "Designing apps, websites, or digital products.", icon: "💻", score: "pixel_wizard", feedback: "Digital products are your natural habitat." },
            { text: "Being a junior designer who touches lots of different projects.", icon: "🎨", score: "design_explorer", feedback: "Generalist energy. You'll specialize when you're ready." },
            { text: "A job title I probably make up myself.", icon: "👑", score: "unicorn", feedback: "Self-appointed Creative Overlord. We see it." }
        ]
    }
];

const results = {
    space_shaper: {
        emoji: "🏗️",
        title: "You Are: Space Shaper",
        description: "You think in 3D and love designing how people move through rooms, shops, and events. Atmosphere and layout are your superpowers.",
        program: "You'd likely vibe with the Design Formation diploma – lots of interiors, exhibits, and environmental design. Projects where cardboard, foam, and physical models are your best friends.",
        primaryCTA: { text: "Learn about Design Formation", url: "https://www.designformation.ca/design-formation" },
        secondaryCTA: { text: "Register for info session", url: "https://reach.langara.ca/Register-to-event/?readableEventId=Information_Session_Design_Formation731896028" }
    },
    pixel_wizard: {
        emoji: "🧙‍♂️",
        title: "You Are: Pixel Wizard",
        description: "You live in the land of screens. Apps, websites, and digital products are your playground. You care how things look and how they work.",
        program: "You'd likely vibe with the Digital Media & Design (DGMD) diploma – focused on UX/UI, web, and front-end basics. Figma, prototyping, and code help you bring ideas to life.",
        primaryCTA: { text: "Learn about Digital Media & Design", url: "https://www.designformation.ca/dgmd" },
        secondaryCTA: { text: "Register for info session", url: "https://reach.langara.ca/Register-to-event/?readableEventId=Information_Session_Digital_Media_Design2214674783" }
    },
    design_explorer: {
        emoji: "🧭",
        title: "You Are: Design Explorer",
        description: "You know you're creative but don't want to pick one lane yet. You want to try different types of design and see what clicks.",
        program: "You may want to start with Design Formation – a broad base (2D, 3D, spaces, visuals) that can lead to interiors, UX/UI, branding, and more. Build a portfolio that can point you anywhere.",
        primaryCTA: { text: "Explore Design Formation", url: "https://www.designformation.ca/design-formation" },
        secondaryCTA: { text: "Register for info session", url: "https://reach.langara.ca/Register-to-event/?readableEventId=Information_Session_Design_Formation731896028" }
    },
    unicorn: {
        emoji: "🦄",
        title: "You Are: Chaotic Good Unicorn",
        description: "You love big ideas, weird projects, and mixing physical and digital. Your career is going to look more like a quest than a straight line.",
        program: "Start where your energy is: More into spaces and making things? → Design Formation. More into screens and tech? → Digital Media & Design. You might touch both over time – and that's very on-brand for a unicorn.",
        primaryCTA: { text: "Compare the two programs", url: "https://www.designformation.ca/program-comparison" },
        secondaryCTA: { text: "Register for info session", url: "https://www.designformation.ca/learn-more-df-dgmd-info-week" }
    }
};

// Quiz state
let currentQuestion = 0;
let scores = {
    space_shaper: 0,
    pixel_wizard: 0,
    design_explorer: 0,
    unicorn: 0
};
let selectedAnswer = null;

// Start quiz
function startQuiz() {
    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('questionScreen').classList.add('active');
    showQuestion(0);
}

// Show question
function showQuestion(index) {
    currentQuestion = index;
    const question = questions[index];

    document.getElementById('questionNumber').textContent = `Question ${index + 1} of ${questions.length}`;
    document.getElementById('questionText').textContent = question.text;

    const optionsGrid = document.getElementById('optionsGrid');
    optionsGrid.innerHTML = '';

    question.options.forEach((option, i) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `
            <div class="option-icon">${option.icon}</div>
            <div class="option-text">${option.text}</div>
            <div class="checkmark">✓</div>
        `;
        card.onclick = () => selectOption(i, option);
        optionsGrid.appendChild(card);
    });

    // Update progress bar
    const progress = ((index) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';

    // Reset state
    selectedAnswer = null;
    document.getElementById('feedback').classList.remove('show');
    document.getElementById('nextBtn').classList.remove('show');
}

// Select option
function selectOption(index, option) {
    // Remove previous selection
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected', 'dimmed');
    });

    // Add selection to clicked card
    const cards = document.querySelectorAll('.option-card');
    cards[index].classList.add('selected');

    // Dim other cards
    cards.forEach((card, i) => {
        if (i !== index) card.classList.add('dimmed');
    });

    // Show feedback
    const feedback = document.getElementById('feedback');
    feedback.textContent = option.feedback;
    feedback.classList.add('show');

    // Show next button
    setTimeout(() => {
        document.getElementById('nextBtn').classList.add('show');
    }, 200);

    // Store selection
    selectedAnswer = option;
}

// Next question
function nextQuestion() {
    if (!selectedAnswer) return;

    // Update score
    scores[selectedAnswer.score]++;

    // Check if last question
    if (currentQuestion < questions.length - 1) {
        document.getElementById('questionScreen').classList.remove('active');
        setTimeout(() => {
            document.getElementById('questionScreen').classList.add('active');
            showQuestion(currentQuestion + 1);
        }, 300);
    } else {
        showLoading();
    }
}

// Show loading
function showLoading() {
    document.getElementById('questionScreen').classList.remove('active');
    document.getElementById('loadingScreen').classList.add('active');

    const loadingTexts = [
        "Summoning your inner designer…",
        "Mixing vibes and pixels…",
        "Consulting the design gods…",
        "Calculating your chaos level…"
    ];

    const loadingText = document.getElementById('loadingText');
    loadingText.textContent = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];

    // Update progress to 100%
    document.getElementById('progressBar').style.width = '100%';

    setTimeout(() => {
        showResult();
    }, 2000);
}

// Show result
function showResult() {
    // Find highest score
    let maxScore = 0;
    let resultType = '';
    let ties = [];

    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            resultType = type;
            ties = [type];
        } else if (scores[type] === maxScore) {
            ties.push(type);
        }
    }

    // Handle ties (default to unicorn for even distribution)
    if (ties.length > 2 || scores.unicorn >= maxScore) {
        resultType = 'unicorn';
    }

    const result = results[resultType];

    document.getElementById('loadingScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');

    document.getElementById('resultEmoji').textContent = result.emoji;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultDescription').textContent = result.description;
    document.getElementById('resultProgram').textContent = result.program;

    const primaryCTA = document.getElementById('primaryCTA');
    primaryCTA.textContent = result.primaryCTA.text;
    primaryCTA.href = result.primaryCTA.url;

    const secondaryCTA = document.getElementById('secondaryCTA');
    secondaryCTA.textContent = result.secondaryCTA.text;
    secondaryCTA.href = result.secondaryCTA.url;

    // Add sparkle effect for unicorn
    if (resultType === 'unicorn') {
        const emoji = document.getElementById('resultEmoji');
        emoji.style.position = 'relative';
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = '✨';
            sparkle.style.left = (Math.random() * 100) + '%';
            sparkle.style.animationDelay = (Math.random() * 2) + 's';
            emoji.appendChild(sparkle);
        }
    }
}

// Restart quiz
function restartQuiz() {
    scores = {
        space_shaper: 0,
        pixel_wizard: 0,
        design_explorer: 0,
        unicorn: 0
    };
    currentQuestion = 0;
    selectedAnswer = null;

    document.getElementById('resultScreen').classList.remove('active');
    document.getElementById('progressBar').style.width = '0%';

    setTimeout(() => {
        document.getElementById('questionScreen').classList.add('active');
        showQuestion(0);
    }, 300);
}
