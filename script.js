// 引入 css
import './style.css';
import './header.css';

// jq
import $ from 'jquery';
$('body').css('background-color' , 'red');

//gsap
import { gsap } from 'gsap';
gsap.to('.box' , {
    x: 200,
    y : 400, 
    duration : 3      
})





var x = 30 , y = 20;
var z = x + y;


console.log(z)