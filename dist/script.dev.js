"use strict";

$(function () {
  var anim_id; //saving dom objects to variables

  var container = $('.container');
  var car_0 = $('#car_0');
  var car_1 = $('#car_1');
  var car_2 = $('#car_2');
  var car_3 = $('#car_3');
  var line_1 = $('#line_1');
  var line_2 = $('#line_2');
  var line_3 = $('#line_3');
  var restart_btn = $('.restart_btn');
  var restart = $('#restart');
  var score = $('#score'); //saving some initial setup

  var container_left = parseInt(container.css('left'));
  var container_width = parseInt(container.width());
  var container_height = parseInt(container.height());
  var car_0_width = parseInt(car_0.width());
  var car_0_height = parseInt(car_0.height()); //some other declaration

  var game_over = false;
  var score_countr = 1;
  var speed = 2;
  var line_speed = 5;
  var move_right = false;
  var move_left = false;
  var move_up = false;
  var move_down = false;
  /*-------------------------------------------GAME CODE STARTS HERE--------------------------------------------------*/

  /*--------------------------------------------GAME CODE ENDS HERE---------------------------------------------------*/

  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerwidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerwidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }
});