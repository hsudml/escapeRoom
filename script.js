$(function() {
  var locks = 4;
  var alertMsg = "Incorrect password. Please re-enter your password.";
  var solution1 = {
    author:"GARRETT",
    password:"SLUGS"
  };
  var solution2 = {
    author:"TIM",
    password:"HALLOWEEN"
  };
  var solution3 = {
    author:"BRI",
    password:"BARNUM"
  };
  var solution4 = {
    author:"KIMBERLY",
    password:"YIPPEE"
  };
  
  $("#answer1").click(function(e){
    e.preventDefault();
    if ($(this).hasClass("open")){ 
      var answer1 = $("#lock1").val();
      answer1 = answer1.toUpperCase();
      //var stillOpen = $(this).class();
      //console.log(stillOpen);
      if(answer1 == solution1.password){
        //alert("you made it!");
        $('.portalOne').show(); 
        $("#one").removeClass("locked").addClass("unlocked");
        $(this).removeClass("open");
        //$(this).parent().next().find("input").focus();
        locks = locks - 1;
        congrats();
      } else {
        alert(alertMsg);
      }
      //console.log(answer1);
    } else {
      alert('This password was already entered. You must enter the other passwords to open the computer.')
    }
    
  });
  
  $("#answer2").click(function(e){
    e.preventDefault();
    if ($(this).hasClass("open")){ 
      var answer2 = $("#lock2").val();
      answer2 = answer2.toUpperCase();
      //var stillOpen = $(this).class();
      //console.log(stillOpen);
      if(answer2 == solution2.password){
        //alert("you made it!");
        $('.portalTwo').show(); 
        $("#two").removeClass("locked").addClass("unlocked");
        $(this).removeClass("open");
        //$(this).parent().next().find("input").focus();
        locks = locks - 1;
        congrats();
      } else {
        alert(alertMsg);
      }
      //console.log(answer1);
    } else {
      alert('This password was already entered. You must enter the other passwords to open the computer.')
    }
    
  });
  
  $("#answer3").click(function(e){
    e.preventDefault();
    if ($(this).hasClass("open")){ 
      var answer3 = $("#lock3").val();
      answer3 = answer3.toUpperCase();
      //var stillOpen = $(this).class();
      //console.log(stillOpen);
      if(answer3 == solution3.password){
        //alert("you made it!");
        $('.portalThree').show(); 
        $("#three").removeClass("locked").addClass("unlocked");
        $(this).removeClass("open");
        //$(this).parent().next().find("input").focus();
        locks = locks - 1;
        congrats();
      } else {
        alert(alertMsg);
      }
      //console.log(answer1);
    } else {
      alert('This password was already entered. You must enter the other passwords to open the computer.')
    }
    
  });
  
  $("#answer4").click(function(e){
    e.preventDefault();
    if ($(this).hasClass("open")){ 
      var answer4 = $("#lock4").val();
      answer4 = answer4.toUpperCase();
      //var stillOpen = $(this).class();
      //console.log(stillOpen);
      if(answer4 == solution4.password){
        //alert("you made it!");
        $('.portalFour').show(); 
        $("#four").removeClass("locked").addClass("unlocked");
        $(this).removeClass("open");
        //$(this).parent().next().find("input").focus();
        locks = locks - 1;
        congrats();
      } else {
        alert(alertMsg);
      }
      //console.log(answer1);
    } else {
      alert('This password was already entered. You must enter the other passwords to open the computer.')
    }
    
  });
  
  $('.prev').click(function(){
    $(this).closest('section').hide();
    $(this).closest('section').prev().show();
  });
  
  $('.next').click(function(){
    $(this).closest('section').hide();
    $(this).closest('section').next().show();
  });
  
  var i = 0;
  var txt = $('#typewriter1').text(); /* The text */
  $('#typewriter1').text('');
  //console.log(txt);
  //var txt = "this is the text that will be typed out in the section";
  var speed = 50; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typewriter1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
  typeWriter();
  
  function congrats (){
    if (locks == 0) {
      //alert("you win");
      var timeoutID;
      var loops = 1;

      function delayedAlert() {
        $('body').addClass('winner');
        $('section').removeClass('red');
        timeoutID = window.setTimeout(delayedAlert2, 500);
      }
      function delayedAlert2() {
        $('body').removeClass('winner');
        loops = loops +1;
        if (loops > 5 ) {
          timeoutID = window.setTimeout(delayedAlert3, 500);
        } else {
          timeoutID = window.setTimeout(delayedAlert, 500);
        }
      }

      function delayedAlert3() {
        $('section').hide();
        $('#congrats').show();
        timeoutID = window.setTimeout(youWin, 2000);
      }

      function youWin() {
        location.href = "/win.html";
      }

      function clearAlert() {
        window.clearTimeout(timeoutID);
      }
      delayedAlert();
    }
  }
  
  $('footer').find('a').text(solution1.author+' '+solution2.author+' '+solution3.author+' '+solution4.author);
  
  function timer(){
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
});