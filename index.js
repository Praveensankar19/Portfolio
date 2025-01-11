
const togglebtn = document.querySelector('.side-btn');
const sidebar = document.getElementById('sidebar');

function togglesidebar() {
    sidebar.classList.toggle('close');
    togglebtn.classList.toggle('rotate');

}


// Active links for sidebar

const navLinks = document.querySelectorAll("#sidebar ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        navLinks.forEach(nav => nav.parentElement.classList.remove("active"));
        link.parentElement.classList.add("active");
    });
});

