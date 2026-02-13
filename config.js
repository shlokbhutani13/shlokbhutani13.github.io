// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    // CUSTOMIZE: her name
    valentineName: "Aarna",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 🏮💛",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    // Tangled / Rapunzel vibe
    floatingEmojis: {
        hearts: ['🏮','✨','💜','🌸','☕️','🍫'],
        bears: ['🕯️','👑']
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Will you be my Valentine? 🏮💛",
            yesBtn: "MAYBE 💘",
            noBtn: "NO 🙄",
            secretAnswer: "OFC"
        },
        second: {
            text: "Okay… how much do you love me? (be honest 😭)",
            startText: "This much!",
            nextBtn: "Next 🏮"
        },
        third: {
            text: "Final answer… will you be my Valentine? 💛🏮",
            yesBtn: "YES! 💛",
            noBtn: "NO 🙄"
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "HAPPY ANTI-VALENTINE'S DAY",  // Shows when they go past 5000%
        high: "I LOVE YOU",              // Shows when they go past 1000%
        normal: "DABBU 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YAYYY 🥹🏮💛",
        message: "Do u want to go on a virtual date with me? You dont have a choice its a YESSSS",
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    // Rapunzel / Tangled palette
    colors: {
        backgroundStart: "#2b0b4b",   // tower purple
        backgroundEnd: "#6a3bd1",     // royal lavender
        buttonBackground: "#ffd166",  // lantern gold
        buttonHover: "#ffe08a",
        textColor: "#fff3c4"          // warm candlelight
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

  
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 