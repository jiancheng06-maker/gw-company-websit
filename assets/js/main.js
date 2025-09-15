function changeLanguage(lang) {
    var googtransCookie = 'googtrans=/zh-TW/' + lang;
    document.cookie = googtransCookie + ';path=/';
    location.reload();
}

// This function is called by the Google Translate script
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'zh-TW'}, 'google_translate_element');
}