'use strict';

var header = document.querySelector('header');

var headerTitle = document.querySelector('header h2');

var profilePic = document.querySelector('#profile-pic');

var profilePic_inital_height = profilePic.offsetHeight;

var profilePic_inital_width = profilePic.offsetWidth;

var page_scroll_ratio = undefined;

window.addEventListener('scroll', function() {
    console.log(window.scrollY/window.innerHeight);
    page_scroll_ratio  = 1-window.scrollY/window.innerHeight;
    profilePic.style.height = Math.max(profilePic_inital_height*page_scroll_ratio, 100) + 'px';
    profilePic.style.width = Math.max(profilePic_inital_width*page_scroll_ratio, 100) + 'px';
    if (profilePic.style.height === '100px') {
        header.style['position'] = 'fixed';
        header.style['top'] = '0';
        header.style['flex-direction'] = 'row';
        header.style['justify-content'] = 'space-around';
    } else {
        header.style['position'] = 'static';
        header.style['flex-direction'] = 'column';
    }
});