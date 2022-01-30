(() => {
  const submitBtn = document.getElementById('submit-btn');

  // FIRST NAME HANDLING
  (() => {
    const firstName = document.getElementById('first-name');
    const firstNameError = document.querySelector('#first-name + span');
    const showError = () => {
      if (firstName.validity.valueMissing) {
        firstNameError.textContent = 'Field cannot be blank';
      }
      firstNameError.classList.add('active');
    };

    firstName.addEventListener('input', (e) => {
      if (!firstName.validity.valid) {
        showError();
        e.preventDefault();
      } else {
        firstNameError.classList.remove('active');
      }
    });
  })();

  // LAST NAME
  (() => {
    const lname = document.getElementById('last-name');
    const error = document.querySelector('#last-name + span');

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
  })();

  // EMAIL
  (() => {
    const email = document.getElementById('email');
    const error = document.querySelector('#email + span');

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
  })();

  // PHONE
  (() => {
    const phone = document.getElementById('phone');
    const error = document.querySelector('#phone + span');
    const showError = () => {
      if (phone.validity.valueMissing) {
        error.textContent = 'Field cannot be blank';
      }
      error.classList.add('active');
    };

    phone.addEventListener('input', (e) => {
      if (!phone.validity.valid) {
        showError();
        e.preventDefault();
      } else {
        error.classList.remove('active');
      }
    });
  })();

  // PASSWORD
  (() => {
    const pwd1 = document.getElementById('pwd1');
    const pwd2 = document.getElementById('pwd2');
    const err1 = document.querySelector('#pwd1 + span');
    const err2 = document.querySelector('#pwd2 + span');

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
        if (pwd1.validity.patternMismatch) {
          err1.textContent +=
            'Password must contain at least one capital letter, lowercase letter, and symbol ( !@#$%^&* )\n';
        }
        if (pwd1.value !== pwd2.value) {
          err1.textContent += 'Passwords must match\n';
        }
        err1.classList.add('active');
      }

      if (!pwd2.validity.valid) {
        if (pwd2.validity.valueMissing) {
          err2.textContent += 'Field cannot be blank\n';
        }
        if (pwd2.validity.tooLong || pwd2.validity.tooShort) {
          err2.textContent += 'Password must be between 8 to 20 characters\n';
        }
        if (pwd2.validity.patternMismatch) {
          err2.textContent +=
            'Password must contain at least one capital letter, lowercase letter, and symbol ( !@#$%^&* )\n';
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
  })();

  submitBtn.addEventListener('click', (e) => {
    // e.preventDefault();
  });
})();
