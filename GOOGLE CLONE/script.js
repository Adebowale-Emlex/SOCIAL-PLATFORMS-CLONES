const translations = {
    en: {
        gmail: "Gmail",
        images: "Images",
        signIn: "Sign in",
        searchPlaceholder: "Search Google or type a URL",
        googleSearch: "Google Search",
        imFeelingLucky: "I'm Feeling Lucky",
        tryAIMode: "Try AI Mode",
        googleOfferedIn: "Google offered in:",
        about: "About",
        advertising: "Advertising",
        business: "Business",
        howSearchWorks: "How Search works",
        privacy: "Privacy",
        terms: "Terms",
        settings: "Settings",
        nigeria: "Nigeria"
    },
    yoruba: {
        gmail: "Gmail",
        images: "Awọn Iranlọwọ",
        signIn: "Wọle",
        searchPlaceholder: "Wa Google tabi tẹ URL",
        googleSearch: "Wa Google",
        imFeelingLucky: "Inú mi dùn",
        tryAIMode: "Gbiyanju AI Mode",
        googleOfferedIn: "Google wa fun ni:",
        about: "Nipa",
        advertising: "Ipolowo",
        business: "Iṣowo",
        howSearchWorks: "Bawo ni Wawu ṣe ṣiṣẹ",
        privacy: "Iṣiri",
        terms: "Awọn ọrọ",
        settings: "Awọn iṣeto",
        nigeria: "Nigeria"
    },
    igbo: {
        gmail: "Gmail",
        images: "Ihe oyiyi",
        signIn: "Banye",
        searchPlaceholder: "Chọọ Google ma ọbụ degharị URL",
        googleSearch: "Chọọ Google",
        imFeelingLucky: "Ọnụ m aṅụ aṅụ",
        tryAIMode: "Mezuo AI Mode",
        googleOfferedIn: "Google enye na:",
        about: "Gbasị",
        advertising: "Mgbapu",
        business: "Ịzụ ahịa",
        howSearchWorks: "Otú Chọọ sị ọrụ",
        privacy: "Nzuzo",
        terms: "Nkwekọrịta",
        settings: "Ntọ áhà",
        nigeria: "Nigeria"
    },
    hausa: {
        gmail: "Gmail",
        images: "Hoto",
        signIn: "Shiga",
        searchPlaceholder: "Bincika Google ko rubuta URL",
        googleSearch: "Bincika Google",
        imFeelingLucky: "Ina jin fara",
        tryAIMode: "Gwada AI Mode",
        googleOfferedIn: "Google yana bayarwa da:",
        about: "Dangane",
        advertising: "Tallakarfin",
        business: "Kasua",
        howSearchWorks: "Yadda Bincike ke aiki",
        privacy: "Sirri",
        terms: "Sharutin",
        settings: "Saiti",
        nigeria: "Nigeria"
    },
    fulfulde: {
        gmail: "Gmail",
        images: "Hoɓe",
        signIn: "Seŋo",
        searchPlaceholder: "Yiylo Google wala nukullo URL",
        googleSearch: "Yiylo Google",
        imFeelingLucky: "Fof mi jeedi",
        tryAIMode: "Jaartu AI Mode",
        googleOfferedIn: "Google jamira ko:",
        about: "Baalkunde",
        advertising: "Jaɓugol",
        business: "Bisnisa",
        howSearchWorks: "Hala Yiylo jogaa",
        privacy: "Camaasol",
        terms: "Sharti",
        settings: "Teelte",
        nigeria: "Nigeria"
    },
    kanuri: {
        gmail: "Gmail",
        images: "Hotuna",
        signIn: "Seyi",
        searchPlaceholder: "Namba Google ko URL",
        googleSearch: "Namba Google",
        imFeelingLucky: "Zua ta se",
        tryAIMode: "Takaici AI Mode",
        googleOfferedIn: "Google wayyo:",
        about: "Magana",
        advertising: "Talaka",
        business: "Kasua",
        howSearchWorks: "Yadda Namba ke aiki",
        privacy: "Sirri",
        terms: "Sharti",
        settings: "Tanadi",
        nigeria: "Nigeria"
    },
    tiv: {
        gmail: "Gmail",
        images: "Swugh",
        signIn: "Tsa",
        searchPlaceholder: "Shagbe Google u gbalive URL",
        googleSearch: "Shagbe Google",
        imFeelingLucky: "Mise shi ber",
        tryAIMode: "Shagbe AI Mode",
        googleOfferedIn: "Google shi ka:",
        about: "Iange",
        advertising: "Apujo",
        business: "Isusu",
        howSearchWorks: "Ibur Shagbe a cam",
        privacy: "Aondo",
        terms: "Apujo",
        settings: "Taa",
        nigeria: "Nigeria"
    },
    ijaw: {
        gmail: "Gmail",
        images: "Owu",
        signIn: "Bẹle",
        searchPlaceholder: "Fọ Google o yie URL keme",
        googleSearch: "Fọ Google",
        imFeelingLucky: "Mi ẹ suoo",
        tryAIMode: "Kẹ AI Mode",
        googleOfferedIn: "Google ỵụ:",
        about: "Ebikara",
        advertising: "Bua",
        business: "Itokarị",
        howSearchWorks: "Ire Fọ ọọ kpai",
        privacy: "Ọyọ",
        terms: "Ebọ",
        settings: "Taa",
        nigeria: "Nigeria"
    },
    edo: {
        gmail: "Gmail",
        images: "Ihogbe",
        signIn: "Rie",
        searchPlaceholder: "Rọ Google waye URL",
        googleSearch: "Rọ Google",
        imFeelingLucky: "Ẹweyẹ mẹ die",
        tryAIMode: "Ghe AI Mode",
        googleOfferedIn: "Google yin ye:",
        about: "Ihogbe",
        advertising: "Iphẹ",
        business: "Ẹbambo",
        howSearchWorks: "Ire Rọ u khẹ",
        privacy: "Ohae",
        terms: "Ẹgbẹ",
        settings: "Aseni",
        nigeria: "Nigeria"
    }
};

let currentLanguage = localStorage.getItem('googleCloneLanguage') || 'en';

document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLanguage);
    const languageLinks = document.querySelectorAll('.language-link');
    languageLinks.forEach(link => {
        link.addEventListener('click', handleLanguageChange);
    });
});

function handleLanguageChange(event) {
    event.preventDefault();
    const langCode = event.target.getAttribute('data-lang') || 'en';
    setLanguage(langCode);
}

function setLanguage(langCode) {
    if (!translations[langCode]) {
        langCode = 'en';
    }
    
    currentLanguage = langCode;
    localStorage.setItem('googleCloneLanguage', langCode);
    
    const trans = translations[langCode];
    
    updateElementText('nav-gmail', trans.gmail);
    updateElementText('nav-images', trans.images);
    updateElementText('nav-signin', trans.signIn);
    updateAttributeValue('search-input', 'placeholder', trans.searchPlaceholder);
    updateElementText('btn-search', trans.googleSearch);
    updateElementText('btn-lucky', trans.imFeelingLucky);
    updateElementText('ai-mode-link', trans.tryAIMode);
    updateElementText('language-label', trans.googleOfferedIn);
    updateElementText('footer-country', trans.nigeria);
    updateElementText('footer-about', trans.about);
    updateElementText('footer-advertising', trans.advertising);
    updateElementText('footer-business', trans.business);
    updateElementText('footer-howsearch', trans.howSearchWorks);
    updateElementText('footer-privacy', trans.privacy);
    updateElementText('footer-terms', trans.terms);
    updateElementText('footer-settings', trans.settings);
    
    document.documentElement.lang = langCode;
}

function updateElementText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

function updateAttributeValue(id, attribute, value) {
    const element = document.getElementById(id);
    if (element) {
        element.setAttribute(attribute, value);
    }
}
