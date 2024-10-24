
// Wait for the DOM content 
document.addEventListener('DOMContentLoaded', function () {

  // select all elements with the class '.fade-in, .slide-up, .slide-down, .fade, .slide-in-text'
  const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-down, .fade, .slide-in-text');

  // create  new IntersectionObserver//
  const observer = new IntersectionObserver(entries => {
    // iterate through the observed entries
    entries.forEach(entry => {
      // check if the element is intersecting with the viewport
      if (entry.isIntersecting) {
        // add the show class to the element to apply the fade-in effect
        entry.target.classList.add('show');
      } else {
        // remove the show class if the element is not intersting
        entry.target.classList.remove('show');
      }
    });
  }, {
    // Set at 05 meaning 50% visibility is required the effect.
    threshold: 0.1
  });

  // Observe each element with the class 'fade-in/
  elements.forEach(element => {
    observer.observe(element);
  });
});

const lines = [
  "Explore the Heights",
  "Where Adventure Meets Serenity",
  "Where Clouds Touch the Earth",
  "Explore Hidden Nature's Wonders.",
  "Uncover Unique Natural Beauty.",
  "Reach Milestones with Determination.",
];

// get the HTML element with the id 'output'
const outputDiv = document.getElementById('output');

// intialize the line index
let lineIndex = 0;

// function to type the lines 
function typeLines(index, text) {
  if (index < text.length) {
    outputDiv.textContent += text[index];
    setTimeout(function () {
      typeLines(index + 1, text);
    }, 120); // delay between typing 
  } else {
    setTimeout(function () {
      eraseLines();
    }, 1400); // delay after typing line before erasing
  }
}

// function to erase the lines one character at a time
function eraseLines() {
  const content = outputDiv.textContent;
  if (content.length > 0) {
    outputDiv.textContent = content.slice(0, -1);
    setTimeout(eraseLines, 50); // Delay between erasing 
  } else {
    lineIndex = (lineIndex + 1) % lines.length;
    setTimeout(function () {
      typeLines(0, lines[lineIndex]);
    }, 500); // delay after erasing 
  }
}

typeLines(0, lines[lineIndex]);

function onlynumber(inputField) {
  inputField.value = inputField.value.replace(/[^0-9]/g, '');
}

function validate() {

  var fnam = fm.fname.value;
  var lnam = fm.lname.value;
  var em = fm.email.value;
  var message = fm.message.value;




  if (fnam.length === 0) {
    document.getElementById('lb_1').innerHTML = "Please Enter Your Name";
    document.getElementById('lb_1').style.color = "Red";
    document.getElementById('box_1').style.borderColor = "Red";
    return false;
  } else {
    document.getElementById('lb_1').innerHTML = " ";
    document.getElementById('box_1').style.color = "black";
    document.getElementById('box_1').style.borderColor = "Green";
  }

  if (lnam.length == 0) {
    document.getElementById('lb_2').innerHTML = "Please Enter Your Number";
    document.getElementById('lb_2').style.color = "Red";
    document.getElementById('box_2').style.borderColor = "Red";
    return false;
  }

  else if (lnam.length != 0) {
    document.getElementById('lb_2').innerHTML = " ";
    document.getElementById('box_2').style.color = "black";
    document.getElementById('box_2').style.borderColor = "Green";
  }

  if (em.length === 0) {
    document.getElementById('lb_3').innerHTML = "Please Enter Your Email";
    document.getElementById('lb_3').style.color = "Red";
    document.getElementById('box_3').style.borderColor = "Red";
    return false;

  } else if (!em.includes('@')) {
    document.getElementById('lb_3').innerHTML = "Invalid Email Format '@'";
    document.getElementById('lb_3').style.color = "Red";
    document.getElementById('box_3').style.borderColor = "Red";
    return false;
  } else {
    document.getElementById('lb_3').innerHTML = " ";
    document.getElementById('box_3').style.color = "black";
    document.getElementById('box_3').style.borderColor = "Green";
  }
  if (message.length === 0) {
    document.getElementById('lb_5').innerHTML = "Please Enter Your Massage";
    document.getElementById('lb_5').style.color = "Red";
    document.getElementById('box_5').style.borderColor = "Red";
    return false;

  } else {
    document.getElementById('lb_5').innerHTML = " ";
    document.getElementById('box_5').style.color = "black";
    document.getElementById('box_5').style.borderColor = "Green";
  }
  if (fnam.trim() !== '' && em.trim() !== '' && lnam.trim() !== '' && message.trim() !== '') {
    alert('Message Sent Successfully.');
    fm.reset();
  }
  

}

