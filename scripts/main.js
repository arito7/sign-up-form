(() => {
  const form = document.getElementById('signup-form');
  const submitBtn = document.getElementById('submit-btn');

  // FIRST NAME
  const firstName = (() => {
    const fname = document.getElementById('first-name');
    const firstNameError = document.querySelector('#first-name ~ span');
    const showError = () => {
      if (fname.validity.valueMissing) {
        firstNameError.textContent = 'Field cannot be blank';
      }
      firstNameError.classList.add('active');
    };

    fname.addEventListener('input', (e) => {
      if (!fname.validity.valid) {
        showError();
        e.preventDefault();
      } else {
        firstNameError.classList.remove('active');
      }
    });

    return { showError };
  })();

  // LAST NAME
  const lastName = (() => {
    const lname = document.getElementById('last-name');
    const error = document.querySelector('#last-name ~ span');

    const showError = () => {
      if (lname.validity.valueMissing) {
        error.textContent = 'Field cannot be blank';
      }
      error.classList.add('active');
    };
    lname.addEventListener('input', (e) => {
      if (!lname.validity.valid) {
        showError();
        e.preventDefault();
      } else {
        error.classList.remove('active');
      }
    });
    return { showError };
  })();

  // EMAIL
  const email = (() => {
    const email = document.getElementById('email');
    const error = document.querySelector('#email ~ span');

    const showError = () => {
      if (email.validity.valueMissing) {
        error.textContent = 'Field cannot be blank';
      }
      error.classList.add('active');
    };
    email.addEventListener('click', (e) => {
      if (!email.validity.valid) {
        showError();
        e.preventDefault();
      } else {
        error.classList.remove('active');
      }
    });

    return { showError };
  })();

  // PHONE
  const phone = (() => {
    const phone = document.getElementById('phone');
    const error = document.querySelector('#phone ~ span');
    const showError = () => {
      if (phone.validity.valueMissing) {
        error.textContent = 'Field cannot be blank';
        error.classList.add('active');
      }
    };

    phone.addEventListener('input', (e) => {
      if (!phone.validity.valid) {
        showError();
        e.preventDefault();
      } else {
        error.classList.remove('active');
      }
    });

    return { showError };
  })();

  // PASSWORD
  const password = (() => {
    const pwd1 = document.getElementById('pwd1');
    const pwd2 = document.getElementById('pwd2');
    const err1 = document.querySelector('#pwd1 ~ span');
    const err2 = document.querySelector('#pwd2 ~ span');

    const showError = () => {
      err1.textContent = '';
      err2.textContent = '';
      if (!pwd1.validity.valid) {
        if (pwd1.validity.valueMissing) {
          err1.textContent += 'Field cannot be blank\n';
        }
        if (pwd1.validity.tooShort || pwd1.validity.tooLong) {
          err1.textContent += 'Password must be between 8 to 20 characters\n';
        }
        if (pwd1.value.search(/[\d]+/) === -1) {
          err1.textContent += 'Password must contain at least one number\n';
        }
        if (pwd1.value.search(/[a-z]+/) === -1) {
          err1.textContent +=
            'Password must contain at least one lowercase letter\n';
        }
        if (pwd1.value.search(/[A-Z]+/) === -1) {
          err1.textContent +=
            'Password must contain at least one capital letter\n';
        }
        if (pwd1.value.search(/[!@#$%^&*?]+/) === -1) {
          err1.textContent +=
            'Password must contain at least one symbol !@#$%^&*?\n';
        }
        err1.classList.add('active');
      }

      if (!pwd2.validity.valid) {
        if (pwd2.validity.valueMissing) {
          err2.textContent += 'Field cannot be blank\n';
        }
        if (pwd1.value !== pwd2.value) {
          err2.textContent += 'Passwords must match\n';
        }
        err2.classList.add('active');
      }
    };

    pwd1.addEventListener('input', (e) => {
      if (!pwd1.validity.valid) {
        showError();
        e.preventDefault();
      } else {
        err1.classList.remove('active');
      }
    });

    pwd2.addEventListener('input', (e) => {
      if (!pwd2.validity.valid) {
        showError();
        e.preventDefault();
      } else {
        err2.classList.remove('active');
      }
    });
    return { showError };
  })();

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    firstName.showError();
    lastName.showError();
    email.showError();
    phone.showError();
    password.showError();
    // form.reportValidity();
    // if (!form.checkValidity()) {
    //   showError();
    // }
  });
})();
