// --- Configuration ---
const BACKEND_URL = ''; // Keep this empty for relative paths in the current environment

// --- I18n Translation Dictionary ---
const translations = {
    // Nav Links
    'nav_home': { 'en': 'Home', 'hi': 'होम', 'kn': 'ಮನೆ' },
    'nav_find_us': { 'en': 'Find Us', 'hi': 'पता करें', 'kn': 'ನಮ್ಮನ್ನು ಹುಡುಕಿ' },
    'nav_manager_corner': { 'en': 'Manager Corner', 'hi': 'प्रबंधक कोना', 'kn': 'ವ್ಯವಸ್ಥಾಪಕರ ಮೂಲೆ' },
    'nav_food_menu': { 'en': 'Food Menu', 'hi': 'खाने का मेन्यू', 'kn': 'ಆಹಾರ ಮೆನು' },
    // Homepage (index.html)
    'hero_title': { 'en': 'Find Your Perfect Co-Living Space', 'hi': 'अपना संपूर्ण सह-जीवन स्थान ढूंढें', 'kn': 'ನಿಮ್ಮ ಆದರ್ಶ ಸಹ-ಬದುಕಿನ ಸ್ಥಳವನ್ನು ಹುಡುಕಿ' },
    'hero_subtitle': { 'en': 'Comfort, Security, and Community. All in one place.', 'hi': 'आराम, सुरक्षा और समुदाय। सब एक ही जगह पर।', 'kn': 'ಆರಾಮ, ಭದ್ರತೆ ಮತ್ತು ಸಮುದಾಯ. ಎಲ್ಲವೂ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ.' },
    'btn_contact_us': { 'en': 'Contact Us Now', 'hi': 'अब हमसे संपर्क करें', 'kn': 'ಈಗ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ' },
    'features_heading': { 'en': 'Why Choose SmartPG?', 'hi': 'स्मार्टपीजी क्यों चुनें?', 'kn': 'ಸ್ಮಾರ್ಟ್‌ಪಿಜಿ ಏಕೆ ಆರಿಸಬೇಕು?' },
    'feat1_title': { 'en': 'High-Speed Wi-Fi', 'hi': 'तेज गति वाई-फाई', 'kn': 'ಅತಿ ವೇಗದ ವೈ-ಫೈ' },
    'feat1_desc': { 'en': 'Stay connected 24/7 with unlimited data.', 'hi': 'असीमित डेटा के साथ 24/7 जुड़े रहें।', 'kn': 'ಅನಿಯಮಿತ ಡೇಟಾದೊಂದಿಗೆ 24/7 ಸಂಪರ್ಕದಲ್ಲಿರಿ.' },
    'feat2_title': { 'en': 'Delicious Food', 'hi': 'स्वादिष्ट भोजन', 'kn': 'ರುಚಿಕರವಾದ ಊಟ' },
    'feat2_desc': { 'en': 'Hygienic and nutritious meals prepared daily.', 'hi': 'स्वच्छ और पौष्टिक भोजन रोज़ाना तैयार किया जाता है।', 'kn': 'ಪ್ರತಿದಿನ ತಯಾರಿಸಲಾದ ನೈರ್ಮಲ್ಯ ಮತ್ತು ಪೌಷ್ಟಿಕ ಆಹಾರ.' },
    'feat3_title': { 'en': 'Prime Location', 'hi': 'प्रमुख स्थान', 'kn': 'ಪ್ರಮುಖ ಸ್ಥಳ' },
    'feat3_desc': { 'en': 'Close to major IT parks and colleges.', 'hi': 'प्रमुख आईटी पार्कों और कॉलेजों के करीब।', 'kn': 'ಪ್ರಮುಖ ಐಟಿ ಪಾರ್ಕ್‌ಗಳು ಮತ್ತು ಕಾಲೇಜುಗಳ ಸಮೀಪ.' },
    'cta_heading': { 'en': 'Ready to Join the SmartPG Family?', 'hi': 'स्मार्टपीजी परिवार में शामिल होने के लिए तैयार हैं?', 'kn': 'ಸ್ಮಾರ್ಟ್‌ಪಿಜಿ ಕುಟುಂಬವನ್ನು ಸೇರಲು ಸಿದ್ಧರಿದ್ದೀರಾ?' },
    'cta_subheading': { 'en': 'Book your room today!', 'hi': 'आज ही अपना कमरा बुक करें!', 'kn': 'ಇಂದೇ ನಿಮ್ಮ ಕೊಠಡಿಯನ್ನು ಕಾಯ್ದಿರಿಸಿ!' },
    // Footer
    'footer_tagline': { 'en': 'Your ultimate destination for comfortable and affordable co-living spaces.', 'hi': 'आरामदायक और किफायती सह-जीवन स्थानों के लिए आपका अंतिम गंतव्य।', 'kn': 'ಆರಾಮದಾಯಕ ಮತ್ತು ಕೈಗೆಟುಕುವ ಸಹ-ಬದುಕಿನ ಸ್ಥಳಗಳಿಗೆ ನಿಮ್ಮ ಅಂತಿಮ ಗಮ್ಯಸ್ಥಾನ.' },
    'footer_quick_links': { 'en': 'Quick Links', 'hi': 'त्वरित लिंक', 'kn': 'ತ್ವರಿತ ಕೊಂಡಿಗಳು' },
    'footer_support': { 'en': 'Support', 'hi': 'सहयोग', 'kn': 'ಬೆಂಬಲ' },
    'footer_about': { 'en': 'About Us', 'hi': 'हमारे बारे में', 'kn': 'ನಮ್ಮ ಬಗ್ಗೆ' },
    'footer_services': { 'en': 'Services', 'hi': 'सेवाएं', 'kn': 'ಸೇವೆಗಳು' },
    'footer_contact': { 'en': 'Contact', 'hi': 'संपर्क', 'kn': 'ಸಂಪರ್ಕ' },
    'footer_faq': { 'en': 'FAQ', 'hi': 'अक्सर पूछे जाने वाले प्रश्न', 'kn': 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು' },
    'footer_privacy': { 'en': 'Privacy Policy', 'hi': 'गोपनीयता नीति', 'kn': 'ಗೌಪ್ಯತಾ ನೀತಿ' },
    'footer_terms': { 'en': 'Terms of Service', 'hi': 'सेवा की शर्तें', 'kn': 'ಸೇವಾ ನಿಯಮಗಳು' },
    'footer_copyright': { 'en': 'All Rights Reserved.', 'hi': 'सभी अधिकार सुरक्षित।', 'kn': 'ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.' },
    
    // Find Us (findus.html)
    'findus_title': { 'en': 'Find Us & Directions', 'hi': 'हमारा पता और निर्देश', 'kn': 'ನಮ್ಮನ್ನು ಹುಡುಕಿ ಮತ್ತು ನಿರ್ದೇಶನಗಳು' },
    'findus_description': { 'en': 'Get directions to SmartPG from your current location.', 'hi': 'अपने वर्तमान स्थान से स्मार्टपीजी तक पहुंचने के निर्देश प्राप्त करें।', 'kn': 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಳದಿಂದ ಸ್ಮಾರ್ಟ್‌ಪಿಜಿಗೆ ನಿರ್ದೇಶನಗಳನ್ನು ಪಡೆಯಿರಿ.' },
    'findus_heading': { 'en': 'Our Location', 'hi': 'हमारा स्थान', 'kn': 'ನಮ್ಮ ಸ್ಥಳ' },
    'findus_pg_location': { 'en': 'SmartPG Hostel Location', 'hi': 'स्मार्टपीजी हॉस्टल का स्थान', 'kn': 'ಸ್ಮಾರ್ಟ್‌ಪಿಜಿ ಹಾಸ್ಟೆಲ್ ಸ್ಥಳ' },
    'findus_get_directions': { 'en': 'Get Directions', 'hi': 'निर्देश प्राप्त करें', 'kn': 'ನಿರ್ದೇಶನಗಳನ್ನು ಪಡೆಯಿರಿ' },
    'findus_loading': { 'en': '📍 Fetching location and calculating route...', 'hi': '📍 स्थान प्राप्त कर रहा है और मार्ग की गणना कर रहा है...', 'kn': '📍 ಸ್ಥಳವನ್ನು ಪಡೆಯಲಾಗುತ್ತಿದೆ ಮತ್ತು ಮಾರ್ಗವನ್ನು ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತಿದೆ...' },

    // Food Menu (food-menu.html)
    'menu_page_title': { 'en': 'Weekly Food Menu', 'hi': 'साप्ताहिक खाने का मेन्यू', 'kn': 'ಸಾಪ್ತಾಹಿಕ ಆಹಾರ ಮೆನು' },
    'menu_hero_text': { 'en': 'A Taste of Home, Every Day', 'hi': 'घर जैसा स्वाद, हर दिन', 'kn': 'ಪ್ರತಿದಿನ, ಮನೆಯ ರುಚಿ' },
    'menu_today_is': { 'en': 'Today is', 'hi': 'आज है', 'kn': 'ಇಂದು' }, // Placeholder for the day name
    'menu_breakfaste': { 'en': 'Breakfast', 'hi': 'नाश्ता', 'kn': 'ಬೆಳಗಿನ ಉಪಾಹಾರ' },
    'menu_lunch': { 'en': 'Lunch', 'hi': 'दोपहर का भोजन', 'kn': 'ಮಧ್ಯಾಹ್ನದ ಊಟ' },
    'menu_dinner': { 'en': 'Dinner', 'hi': 'रात का भोजन', 'kn': 'ರಾತ್ರಿಯ ಊಟ' },
    'menu_footer_text': { 'en': 'Delicious and hygienic meals provided by SmartPG Kitchen Services. Stay well-fed!', 'hi': 'स्मार्टपीजी किचन सेवाओं द्वारा प्रदान किया गया स्वादिष्ट और स्वच्छ भोजन। हमेशा तृप्त रहें!', 'kn': 'ಸ್ಮಾರ್ಟ್‌ಪಿಜಿ ಕಿಚನ್ ಸೇವೆಗಳಿಂದ ಒದಗಿಸಲಾದ ರುಚಿಕರ ಮತ್ತು ನೈರ್ಮಲ್ಯದ ಊಟ. ಚೆನ್ನಾಗಿ ಊಟ ಮಾಡಿರಿ!' },
    
    // Day Names (to be used in food-menu.html script)
    'day_sunday': { 'en': 'Sunday', 'hi': 'रविवार', 'kn': 'ಭಾನುವಾರ' },
    'day_monday': { 'en': 'Monday', 'hi': 'सोमवार', 'kn': 'ಸೋಮವಾರ' },
    'day_tuesday': { 'en': 'Tuesday', 'hi': 'मंगलवार', 'kn': 'ಮಂಗಳವಾರ' },
    'day_wednesday': { 'en': 'Wednesday', 'hi': 'बुधवार', 'kn': 'ಬುಧವಾರ' },
    'day_thursday': { 'en': 'Thursday', 'hi': 'गुरुवार', 'kn': 'ಗುರುವಾರ' },
    'day_friday': { 'en': 'Friday', 'hi': 'शुक्रवार', 'kn': 'ಶುಕ್ರವಾರ' },
    'day_saturday': { 'en': 'Saturday', 'hi': 'शनिवार', 'kn': 'ಶನಿವಾರ' },

    // Manager Corner (find-your-mate.html) - Partial translations for key elements
    'mc_login_title': { 'en': 'Manager Login', 'hi': 'प्रबंधक लॉगिन', 'kn': 'ವ್ಯವಸ್ಥಾಪಕ ಲಾಗಿನ್' },
    'mc_login_user': { 'en': 'Username', 'hi': 'उपयोगकर्ता नाम', 'kn': 'ಬಳಕೆದಾರ ಹೆಸರು' },
    'mc_login_pass': { 'en': 'Password', 'hi': 'पासवर्ड', 'kn': 'ಪಾಸ್ವರ್ಡ್' },
    'mc_login_btn': { 'en': 'Login', 'hi': 'लॉगिन करें', 'kn': 'ಲಾಗಿನ್' },
    'mc_register_btn': { 'en': 'Register New Manager', 'hi': 'नया प्रबंधक रजिस्टर करें', 'kn': 'ಹೊಸ ವ್ಯವಸ್ಥಾಪಕರನ್ನು ನೋಂದಾಯಿಸಿ' },
    'mc_title': { 'en': 'Student & Room Management', 'hi': 'छात्र और कमरा प्रबंधन', 'kn': 'ವಿದ್ಯಾರ್ಥಿ ಮತ್ತು ಕೊಠಡಿ ನಿರ್ವಹಣೆ' },
    'mc_logout_btn': { 'en': 'Logout', 'hi': 'लॉगआउट', 'kn': 'ಲಾಗ್ಔಟ್' },
    'mc_students_tab': { 'en': 'Add Student', 'hi': 'छात्र जोड़ें', 'kn': 'ವಿದ್ಯಾರ್ಥಿ ಸೇರಿಸಿ' },
    'mc_rooms_tab': { 'en': 'Add Room', 'hi': 'कमरा जोड़ें', 'kn': 'ಕೊಠಡಿ ಸೇರಿಸಿ' },
    'mc_alloc_btn': { 'en': 'Run Smart Allocation', 'hi': 'स्मार्ट आवंटन चलाएँ', 'kn': 'ಸ್ಮಾರ್ಟ್ ಹಂಚಿಕೆಯನ್ನು ಚಲಾಯಿಸಿ' },
    'mc_room_details_btn': { 'en': 'View Room Details', 'hi': 'कमरे का विवरण देखें', 'kn': 'ಕೊಠಡಿ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ' },
    'mc_student_id': { 'en': 'Student ID', 'hi': 'छात्र आईडी', 'kn': 'ವಿದ್ಯಾರ್ಥಿ ಐಡಿ' },
    'mc_name': { 'en': 'Name', 'hi': 'नाम', 'kn': 'ಹೆಸರು' },
    'mc_gender': { 'en': 'Gender', 'hi': 'लिंग', 'kn': 'ಲಿಂಗ' },
    'mc_priority': { 'en': 'Priority (1-10)', 'hi': 'प्राथमिकता (1-10)', 'kn': 'ಆದ್ಯತೆ (1-10)' },
    'mc_hobbies': { 'en': 'Hobbies (comma-separated)', 'hi': 'शौक (अल्पविराम से अलग)', 'kn': 'ಹವ್ಯಾಸಗಳು (ಅಲ್ಪವಿರಾಮದಿಂದ ಬೇರ್ಪಡಿಸಲಾಗಿದೆ)' },
    'mc_study_time': { 'en': 'Preferred Study Time', 'hi': 'पसंदीदा अध्ययन समय', 'kn': 'ಆದ್ಯತೆಯ ಅಧ್ಯಯನ ಸಮಯ' },
    'mc_add_student_btn': { 'en': 'Add Student', 'hi': 'छात्र जोड़ें', 'kn': 'ವಿದ್ಯಾರ್ಥಿ ಸೇರಿಸಿ' },
    'mc_room_num': { 'en': 'Room Number', 'hi': 'कमरा संख्या', 'kn': 'ಕೊಠಡಿ ಸಂಖ್ಯೆ' },
    'mc_capacity': { 'en': 'Capacity', 'hi': 'क्षमता', 'kn': 'ಸಾಮರ್ಥ್ಯ' },
    'mc_block': { 'en': 'Hostel Block (e.g., A/B)', 'hi': 'हॉस्टल ब्लॉक (उदा. A/B)', 'kn': 'ಹಾಸ್ಟೆಲ್ ಬ್ಲಾಕ್ (ಉದಾ. A/B)' },
    'mc_add_room_btn': { 'en': 'Add Room', 'hi': 'कमरा जोड़ें', 'kn': 'ಕೊಠಡಿ ಸೇರಿಸಿ' },
    'mc_mate_finder_title': { 'en': 'Mate Finder', 'hi': 'रूममेट खोजक', 'kn': 'ರೂಮ್ ಮೇಟ್ ಫೈಂಡರ್' },
    'mc_find_mate_btn': { 'en': 'Find Mates', 'hi': 'रूममेट खोजें', 'kn': 'ರೂಮ್ ಮೇಟ್ ಹುಡುಕಿ' },
    'mc_occupants': { 'en': 'Occupants', 'hi': 'निवासी', 'kn': 'ನಿವಾಸಿಗಳು' },
};

/**
 * Applies translations to the current page based on the selected language.
 * Uses data-i18n attribute on elements.
 * @param {string} lang - The language code (e.g., 'en', 'hi', 'kn').
 */
function translatePage(lang) {
    // Fallback to English if language is not set or invalid
    const currentLang = lang || localStorage.getItem('lang') || 'en';
    
    // Set HTML lang attribute
    document.documentElement.setAttribute('lang', currentLang);

    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[key];

        if (translation && translation[currentLang]) {
            el.textContent = translation[currentLang];
            // Update title specifically
            if (el.tagName === 'TITLE') {
                document.title = translation[currentLang];
            }
        }
    });

    // Handle inputs/placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = translations[key];

        if (translation && translation[currentLang]) {
            el.placeholder = translation[currentLang];
        }
    });

    // Special handling for the language selector if it exists
    const langSelector = document.getElementById('langSelector');
    if (langSelector) {
        langSelector.value = currentLang;
    }
}

/**
 * Sets the new language in localStorage and translates the page.
 * @param {string} lang - The language code.
 */
function setLanguage(lang) {
    if (['en', 'hi', 'kn'].includes(lang)) {
        localStorage.setItem('lang', lang);
        translatePage(lang);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Apply initial translation on load
    translatePage();

    // Mobile menu toggle (Existing logic)
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenu.classList.toggle('is-active'); 
        });
    }

    // Hero Section Image Slider (Existing logic)
    const heroSection = document.getElementById('hero-slider');
    const dotsContainer = document.querySelector('.slider-nav');
    // Note: The image path below is likely relative and may fail if the image is not hosted. 
    // I'm keeping the original structure but pointing to a reliable placeholder for robust function.
    const pgImages = [
        'https://placehold.co/1500x600/007bff/ffffff?text=SmartPG+Exterior+1', // Placeholder 1
        'https://placehold.co/1500x600/33FF57/FFFFFF?text=SmartPG+Exterior+2', // Placeholder 2
        'https://placehold.co/1500x600/3357FF/FFFFFF?text=SmartPG+Common+Area+3'  // Placeholder 3
    ];
    let currentImageIndex = 0;

    function changeHeroBackground(index) {
        if (heroSection) {
            heroSection.style.backgroundImage = `url('${pgImages[index]}')`;

            // Update active dot
            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.dot');
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }
        }
    }

    function autoSlide() {
        currentImageIndex = (currentImageIndex + 1) % pgImages.length;
        changeHeroBackground(currentImageIndex);
    }

    if (heroSection) {
        // Create dots
        if (dotsContainer) {
            pgImages.forEach((_, i) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.onclick = () => {
                    currentImageIndex = i;
                    changeHeroBackground(currentImageIndex);
                };
                dotsContainer.appendChild(dot);
            });
        }
        
        changeHeroBackground(currentImageIndex); // Initial image load
        setInterval(autoSlide, 5000); // Change image every 5 seconds
    }
});


// Backend communication functions (kept here for completeness)

// Mock function for fetching students (as no actual database is available here)
async function fetchStudents() {
    // ... existing logic ...
    console.log("Placeholder for fetchStudents function.");
}

async function addStudent(studentData) {
    // ... existing logic ...
    console.log('Placeholder for addStudent function.');
}
