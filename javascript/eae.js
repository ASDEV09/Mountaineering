//Working on the first image of the Hazard page

// Aray 
const l = [
  "Steep Cliff",
  "Extreme SnowFall",
  "Landslides",
  "Rockfalls",
  "Frostbite",
  "Hypothermia",
];

const outttt = document.getElementById('hazard');

let asdkj = 0;

//Function to type the text
function typel(index, text) {
  // if the index is less than the length of the text
  if (index < text.length) {
    // append the next letter to 'outttt'
    outttt.textContent += text[index];

    // after delay, type the next lettere/
    setTimeout(function () {
      typel(index + 1, text);
    }, 120); // After 120 milliseconds
  } else {
    // if the entire text is typed, wait for a while and then call the 'erasel' function
    setTimeout(function () {
      erasel();
    }, 1400); // after 1400 millisecond
  }
}

// function to erase the text
function erasel() {
  // store the content of 'outttt'/
  const content = outttt.textContent;

  // if the content's length is greater than 0
  if (content.length > 0) {
    // Remove one letter and then, after a short delay, call 'erasel' function again
    outttt.textContent = content.slice(0, -1);
    setTimeout(erasel, 50); // After 50 millisecods
  } else {
    // of the entire text is erased, move on to the next hazard
    asdkj = (asdkj + 1) % l.length;

    // after a short delay, type the next hazard
    setTimeout(function () {
      typel(0, l[asdkj]);
    }, 500); // After 500 m seconds
  }
}

// starting point: Type the first hazard
typel(0, l[asdkj]);

function validate2() {

  var first = fmm.firste.value;
  var ema = fmm.emaail.value;
  
  if (first.length === 0) {
    document.getElementById('lb_11').innerHTML = "Please Enter Your Name";
    document.getElementById('lb_11').style.color = "Red";
    document.getElementById('box_11').style.borderColor = "Red";
    return false;

  } else {
    document.getElementById('lb_11').innerHTML = " ";
    document.getElementById('box_11').style.color = "black";
    document.getElementById('box_11').style.borderColor = "Green";
  }

  
  if (ema.length === 0) {
    document.getElementById('lb_33').innerHTML = "Please Enter Your Email";
    document.getElementById('lb_33').style.color = "Red";
    document.getElementById('box_33').style.borderColor = "Red";

  } else if (!ema.includes('@')) {
    document.getElementById('lb_33').innerHTML = "Invalid Email Format '@'";
    document.getElementById('lb_33').style.color = "Red";
    document.getElementById('box_33').style.borderColor = "Red";
    return false;
  } else {
    document.getElementById('lb_33').innerHTML = " ";
    document.getElementById('box_33').style.color = "black";
    document.getElementById('box_33').style.borderColor = "Green";
  }
  
  if (first.trim() !== '' && ema.trim() !== '') {
    alert('Congratulations! You have successfully joined.');
     fmm.reset();
  }
  return false;

}
