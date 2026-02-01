

const form = document.querySelector(".booking form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = form.children[0].value.trim();
  const pickup = form.children[1].value.trim();
  const drop = form.children[2].value.trim();
  const date = form.children[3].value;

  if(name === "" || pickup === "" || drop === "" || date === ""){
    alert("❌ Please fill all booking fields");
    return;
  }

  if(name.length < 3){
    alert("❌ Name must be at least 3 characters");
    return;
  }

  const bookingData = {
    name,
    pickup,
    drop,
    date
  };

  
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(bookingData);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("✅ Booking Successful!");

  form.reset();
});


document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const targetId = this.getAttribute("href");

    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });

  });

});


const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} Swift Transport System | All Rights Reserved`;
