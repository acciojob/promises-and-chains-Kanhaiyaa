//your JS code here. If required.
const form=document.getEleementById("myForm")
const ageInput=document.getElementById("age")
const nameInput=document.getElementById("name")
const btn=document.getElementById("submit")

btn.addEventListener('click', async (e) => {
  e.preventDefault();

  // Validate the inputs
  if (ageInput.value === '' || nameInput.value === '') {
    alert('Please fill in all the fields');
    return;
  }

  // Resolve a promise that resolves if the age of the person is above 18 after 4 seconds and shows an alert with the text Welcome, <name>. You can vote. and rejects if the age is below 18 and shows an alert that says Oh sorry <name>. You aren't old enough.
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageInput.value >= 18) {
        resolve(`Welcome, ${nameInput.value}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle the promise's resolution or rejection
  promise.then((message) => {
    alert(message);
  }).catch((message) => {
    alert(message);
  });
});