function RSVP() {
  let person = prompt("Please Enter Your Name to RSVP:");
  if (person == "" || person == null) {
    return
  }
  //show success banner
  // alert(person)
  let params = {
    user_id: 'P1fYrYTIOM8R_mW9o',
    service_id: 'service_rsvp',
    template_id: 'template_rsvp',
    template_params: {
      name: person
    }
  }
  let headers = {
    'Content-type': 'application/json'
  };

  let options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(params)
  };

  fetch('https://api.emailjs.com/api/v1.0/email/send', options)
    .then((httpResponse) => {
      if (httpResponse.ok) {
        console.log('Your mail is sent!');
        alert("Congratulations! You have successfully RSVP for the party! Remember to dress according to the weather as its an outdoor party!");
      } else {
        return httpResponse.text()
          .then(text => Promise.reject(text));
      }
    })
    .catch((error) => {
      console.log('Oops... ' + error);
    });
  return
}

var loadMusic = true


function playSound(song) {
  document.getElementById("myNav").style.display = "none";
  if (loadMusic) {
    var audio = new Audio(song);
    audio.play();
    loadMusic = false
  }
  console.log("Music already playing")
}