'use strict';

const about_me = ['Hi! I am', 'Kalyanasundharam Kathiresan&nbsp;&lt;kalvinci<i>&sol;</i>&gt;', 'A Computer Science engineer, a programmer, and a maverick.', 'I believe hard-work beats talent.', 'I also believe that people who are modest are cool.', 'I like Spider-man. (since 2004)', 'I\'m a huge fan of Tom Cruise.', 'Even numbers rock. (please pay attention)', 'Most importantly, I love simplicity.', 'blaah.. blaaah... blaaaaaah......', 'Scroll to read me!'];

const header = document.querySelector('header');

const page_0 = document.querySelector('.page-0');

const profilePic = document.querySelector('#profile-pic');

const header_profilePic = document.querySelector('#header-profile-pic');

const type_out_node_list = document.getElementsByClassName('type-out-text');

const skill_icon_list = document.querySelectorAll('.skill-set > div');

const sliding_menu = document.getElementById('menu');

const menu_icon = document.getElementById('menu-icon');

let menu_visible = false;

window.onload = function() {
    
    let i=0, y=0, k=0;

    header.style.transform = 'translateX('+sliding_menu.offsetWidth+'px)';
    let type_out_sentence = setInterval(function() {
        type_out_node_list[i].innerHTML = about_me[i];
        i++;
        if (i == about_me.length-2) {
            clearInterval(type_out_sentence);
            var type_out_char = setInterval(function() {
                type_out_node_list[i].innerHTML += about_me[i][y];
                y++;
                if (y == about_me[i].length) {
                    i++;
                    y=0;
                }
                if (i == about_me.length) {
                    clearInterval(type_out_char);
                }
            }, 50);
        }
    }, 400);
}

let skill_icon_rotation = undefined;
let skill_rotation_count = 0;

skill_icon_list.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        skill_icon_rotation = setInterval(function() {
            skill_rotation_count += 15;
            element.children[0].style['transform'] = 'rotateY('+skill_rotation_count+'deg)';
        }, 40);
    });
    
    element.addEventListener('mouseout', function() {
        skill_rotation_count = 0;
        element.children[0].style['transform'] = 'rotateY('+skill_rotation_count+'deg)';
        clearInterval(skill_icon_rotation);
    });
});

menu_icon.addEventListener('click', function() {
    if (!menu_visible) {
        header.style.transform = 'translateX(0px)';
        menu_icon.style.transform = 'rotate(180deg)';
        menu_visible = true;
    } else {
        header.style.transform = 'translateX('+sliding_menu.offsetWidth+'px)';
        menu_icon.style.transform = 'rotate(0deg)';
        menu_visible = false;
    }
});