// Database quotes với 50+ câu nói tích cực, truyền cảm hứng sâu sắc
const quotes = [
    {
        text: "Hạnh phúc không phải là điều sẵn có. Nó đến từ hành động của chính bạn.",
        author: "Dalai Lama",
        category: "hạnh phúc"
    },
    {
        text: "Cuộc sống là 10% những gì xảy ra với bạn và 90% cách bạn phản ứng với nó.",
        author: "Charles R. Swindoll",
        category: "thái độ"
    },
    {
        text: "Thành công không phải là chìa khóa mở cánh cửa hạnh phúc. Hạnh phúc là chìa khóa dẫn tới cánh cửa thành công.",
        author: "Albert Schweitzer",
        category: "thành công"
    },
    {
        text: "Hãy là sự thay đổi mà bạn muốn thấy ở thế giới này.",
        author: "Mahatma Gandhi",
        category: "hành động"
    },
    {
        text: "Cuộc sống không phải là chờ đợi cơn bão qua đi, mà là học cách khiêu vũ dưới mưa.",
        author: "Khuyết danh",
        category: "nghị lực"
    },
    {
        text: "Thành công là đi từ thất bại này đến thất bại khác mà không mất đi nhiệt huyết.",
        author: "Winston Churchill",
        category: "thành công"
    },
    {
        text: "Điều kỳ diệu của cuộc sống là nó trở nên tuyệt vời hơn khi bạn dám mơ ước và theo đuổi những giấc mơ đó.",
        author: "Les Brown",
        category: "ước mơ"
    },
    {
        text: "Hạnh phúc không phải là đích đến, mà là một hành trình.",
        author: "Ben Sweetland",
        category: "hạnh phúc"
    },
    {
        text: "Người khôn ngoan học từ sai lầm của người khác, kẻ ngu ngốc học từ sai lầm của chính mình.",
        author: "Ngạn ngữ Nga",
        category: "trí tuệ"
    },
    {
        text: "Đừng sợ thất bại, hãy sợ việc không dám thử.",
        author: "Jack Ma",
        category: "dũng cảm"
    },
    {
        text: "Thời gian của bạn là hữu hạn, đừng lãng phí nó để sống cuộc đời của người khác.",
        author: "Steve Jobs",
        category: "trải nghiệm"
    },
    {
        text: "Cuộc sống như một cuốn sách, kẻ không du lịch chỉ đọc được một trang.",
        author: "Thánh Augustine",
        category: "trải nghiệm"
    },
    {
        text: "Thà thắp lên một ngọn nến còn hơn ngồi đó nguyền rủa bóng tối.",
        author: "Ngạn ngữ Trung Quốc",
        category: "hành động"
    },
    {
        text: "Người hạnh phúc nhất không phải là người có mọi thứ tốt nhất, mà là người biết biến những thứ mình có thành thứ tốt nhất.",
        author: "Khuyết danh",
        category: "hạnh phúc"
    },
    {
        text: "Biết đủ là giàu có, dám làm là mạnh mẽ.",
        author: "Lão Tử",
        category: "trí tuệ"
    },
    {
        text: "Trong nguy hiểm có cơ hội, trong khó khăn có hy vọng.",
        author: "Khuyết danh",
        category: "lạc quan"
    },
    {
        text: "Nếu bạn muốn đi nhanh, hãy đi một mình. Nếu bạn muốn đi xa, hãy đi cùng nhau.",
        author: "Ngạn ngữ châu Phi",
        category: "đồng đội"
    },
    {
        text: "Sự im lặng là sức mạnh vĩ đại nhất của trí tuệ.",
        author: "Leonardo da Vinci",
        category: "trí tuệ"
    },
    {
        text: "Thất bại chỉ là cơ hội để bắt đầu lại một cách thông minh hơn.",
        author: "Henry Ford",
        category: "thành công"
    },
    {
        text: "Người chiến thắng không bao giờ bỏ cuộc, người bỏ cuộc không bao giờ chiến thắng.",
        author: "Napoleon Hill",
        category: "kiên trì"
    },
    {
        text: "Tri thức là sức mạnh.",
        author: "Francis Bacon",
        category: "trí tuệ"
    },
    {
        text: "Hãy sống như thể bạn sẽ chết vào ngày mai. Hãy học như thể bạn sẽ sống mãi mãi.",
        author: "Mahatma Gandhi",
        category: "sống"
    },
    {
        text: "Điều quan trọng không phải là sống lâu mà là sống sâu.",
        author: "Khuyết danh",
        category: "sống"
    },
    {
        text: "Người không có ước mơ giống như con thuyền không có bánh lái.",
        author: "Norman Vincent Peale",
        category: "ước mơ"
    },
    {
        text: "Thời gian là thứ quý giá nhất mà chúng ta có thể tiêu xài.",
        author: "Theophrastus",
        category: "thời gian"
    },
    {
        text: "Yêu thương không phải là nhìn nhau mà là cùng nhau nhìn về một hướng.",
        author: "Antoine de Saint-Exupéry",
        category: "yêu thương"
    },
    {
        text: "Cuộc sống thật đơn giản, nhưng chúng ta cứ khăng khăng làm cho nó phức tạp.",
        author: "Khổng Tử",
        category: "sống"
    },
    {
        text: "Người biết đủ là người giàu có.",
        author: "Lão Tử",
        category: "hạnh phúc"
    },
    {
        text: "Hãy cho tôi một điểm tựa, tôi sẽ nhấc bổng trái đất.",
        author: "Archimedes",
        category: "quyết tâm"
    },
    {
        text: "Thiên tài là 1% cảm hứng và 99% mồ hôi.",
        author: "Thomas Edison",
        category: "thành công"
    },
    {
        text: "Tôi tư duy, vậy tôi tồn tại.",
        author: "René Descartes",
        category: "trí tuệ"
    },
    {
        text: "Cuộc sống là những gì xảy ra khi bạn đang bận lập kế hoạch.",
        author: "John Lennon",
        category: "sống"
    },
    {
        text: "Hãy đối xử với người khác như bạn muốn được đối xử.",
        author: "Khổng Tử",
        category: "đạo đức"
    },
    {
        text: "Bình an nội tâm là nền tảng của hạnh phúc đích thực.",
        author: "Thích Nhất Hạnh",
        category: "bình an"
    },
    {
        text: "Mỗi buổi sáng chúng ta sinh ra lại. Điều chúng ta làm hôm nay mới thực sự quan trọng.",
        author: "Đức Phật",
        category: "hiện tại"
    },
    {
        text: "Tình yêu và lòng tốt không bao giờ lãng phí. Chúng luôn tạo ra sự khác biệt.",
        author: "Helen Keller",
        category: "yêu thương"
    },
    {
        text: "Hãy nhìn ra thế giới xung quanh và tìm thấy vẻ đẹp trong mọi khoảnh khắc.",
        author: "Khuyết danh",
        category: "lạc quan"
    },
    {
        text: "Mỗi ngày mới là một cơ hội để thay đổi cuộc đời bạn.",
        author: "Khuyết danh",
        category: "cơ hội"
    },
    {
        text: "Hãy mỉm cười với hiện tại, vì nó là món quà quý giá nhất.",
        author: "Khuyết danh",
        category: "hiện tại"
    },
    {
        text: "Sự tử tế là ngôn ngữ mà người điếc có thể nghe và người mù có thể thấy.",
        author: "Mark Twain",
        category: "tử tế"
    },
    {
        text: "Đừng đếm những gì bạn đã mất, hãy quý trọng những gì bạn đang có và lên kế hoạch cho những gì sẽ đạt được.",
        author: "Khuyết danh",
        category: "trân trọng"
    },
    {
        text: "Hãy sống thật trọn vẹn và yêu thương hết mình. Đó là tất cả những gì chúng ta có.",
        author: "Khuyết danh",
        category: "sống"
    },
    {
        text: "Mọi thứ bạn muốn đều nằm ở bên kia nỗi sợ hãi.",
        author: "Jack Canfield",
        category: "dũng cảm"
    },
    {
        text: "Thành công lớn nhất là đứng dậy sau mỗi lần vấp ngã.",
        author: "Khuyết danh",
        category: "kiên cường"
    },
    {
        text: "Hãy tin vào bản thân và tất cả mọi thứ bạn làm. Hãy tin rằng bạn xứng đáng.",
        author: "Khuyết danh",
        category: "tự tin"
    },
    {
        text: "Cuộc sống không phải là tìm kiếm chính mình, mà là sáng tạo nên chính mình.",
        author: "George Bernard Shaw",
        category: "phát triển"
    },
    {
        text: "Hãy để mỗi ngày là một khởi đầu mới đầy hy vọng và niềm vui.",
        author: "Khuyết danh",
        category: "hy vọng"
    },
    {
        text: "Tương lai phụ thuộc vào điều bạn làm ngày hôm nay.",
        author: "Mahatma Gandhi",
        category: "hành động"
    },
    {
        text: "Hạnh phúc thực sự đến từ việc cho đi mà không mong nhận lại.",
        author: "Khuyết danh",
        category: "cho đi"
    }
];

// DOM Elements
const openBtn = document.getElementById('openBtn');
const bagImage = document.getElementById('bagImage');
const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const loading = document.getElementById('loading');
const bgUpload = document.getElementById('bgUpload');
const resetBg = document.getElementById('resetBg');

// Popup Elements
const introPopup = document.getElementById('introPopup');
const closePopup = document.getElementById('closePopup');
const understandBtn = document.getElementById('understandBtn');
const dontShowAgain = document.getElementById('dontShowAgain');
const infoBtn = document.getElementById('infoBtn');

// Variables
let usedQuotes = [];

// Initialize
function init() {
    loadBackground();
    attachEventListeners();
    checkFirstVisit();
}

// Check if it's first visit
function checkFirstVisit() {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    const dontShow = localStorage.getItem('dontShowIntro');
    
    if (!hasSeenIntro && !dontShow) {
        setTimeout(() => {
            introPopup.classList.add('show');
        }, 1000);
    }
}

// Event Listeners
function attachEventListeners() {
    openBtn.addEventListener('click', openBag);
    bagImage.addEventListener('click', openBag);
    bgUpload.addEventListener('change', handleBackgroundUpload);
    resetBg.addEventListener('click', resetBackground);
    
    // Popup events
    closePopup.addEventListener('click', closeIntroPopup);
    understandBtn.addEventListener('click', closeIntroPopup);
    infoBtn.addEventListener('click', showIntroPopup);
    
    // Close popup when clicking outside
    introPopup.addEventListener('click', function(e) {
        if (e.target === introPopup) {
            closeIntroPopup();
        }
    });
}

// Popup Functions
function showIntroPopup() {
    introPopup.classList.add('show');
}

function closeIntroPopup() {
    if (dontShowAgain.checked) {
        localStorage.setItem('dontShowIntro', 'true');
    }
    localStorage.setItem('hasSeenIntro', 'true');
    introPopup.classList.remove('show');
}

// Open Bag Function
function openBag() {
    // Reset previous state
    quoteContainer.classList.remove('show');
    loading.classList.remove('hidden');
    quoteContainer.classList.add('hidden');
    
    // Add shake animation
    bagImage.classList.add('bag-shake');
    
    // Show loading
    setTimeout(() => {
        loading.classList.remove('hidden');
        
        // Get random quote after delay
        setTimeout(() => {
            const quote = getRandomQuote();
            displayQuote(quote);
            
            // Hide loading and show quote
            loading.classList.add('hidden');
            quoteContainer.classList.remove('hidden');
            setTimeout(() => {
                quoteContainer.classList.add('show');
            }, 100);
            
            // Remove shake animation
            bagImage.classList.remove('bag-shake');
        }, 1500);
    }, 300);
}

// Get Random Quote
function getRandomQuote() {
    // If all quotes have been used, reset
    if (usedQuotes.length >= quotes.length) {
        usedQuotes = [];
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (usedQuotes.includes(randomIndex));
    
    usedQuotes.push(randomIndex);
    return quotes[randomIndex];
}

// Display Quote
function displayQuote(quote) {
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author} -`;
}

// Background Image Handling
function handleBackgroundUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            setBackgroundImage(imageUrl);
            saveBackgroundToStorage(imageUrl);
        };
        reader.readAsDataURL(file);
    }
}

function setBackgroundImage(imageUrl) {
    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${imageUrl}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
}

function saveBackgroundToStorage(imageUrl) {
    localStorage.setItem('customBackground', imageUrl);
}

function loadBackground() {
    const savedBackground = localStorage.getItem('customBackground');
    if (savedBackground) {
        setBackgroundImage(savedBackground);
    }
}

function resetBackground() {
    localStorage.removeItem('customBackground');
    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), 
                url('https://images.unsplash.com/photo-1606293458397-461086cdb329?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
}

// Keyboard shortcut
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault();
        openBag();
    }
    
    // ESC to close popup
    if (event.key === 'Escape' && introPopup.classList.contains('show')) {
        closeIntroPopup();
    }
});

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Service Worker for offline capability (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('SW registered: ', registration);
        }).catch(function(registrationError) {
            console.log('SW registration failed: ', registrationError);
        });
    });
}