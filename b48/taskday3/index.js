function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10,14}$/; 
    return phoneRegex.test(phoneNumber);
  }

  function validate() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (subject.trim() === '') {
      alert('Please enter the subject.');
      return;
    }

    if (message.trim() === '') {
      alert('Please enter your message.');
      return;
    }
    let mail = document.createElement('mail')
  mail.href = `mailto:${email}?subject=${subject}&body=Halo nama saya ${name},\n${message}, silahkan kontak saya di nomor berikut : ${phoneNumber}`
  mail.click()
  
  }