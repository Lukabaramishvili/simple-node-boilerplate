// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML);

document.addEventListener("DOMContentLoaded", function() {

  getReservations()

});
  function getReservations() {
    fetch("http://localhost:3000/reservations")
    .then(res => res.json())
    .then(reservations => {console.log(reservations)})
  }
