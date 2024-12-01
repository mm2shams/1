document.getElementById('donationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const donorName = document.getElementById('donorName').value;
    const donationAmount = document.getElementById('donationAmount').value;

    if (donorName && donationAmount) {
        document.querySelector('#donate').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
});

function donateNow(projectName) {
    alert(`تم اختيار التبرع لـ ${projectName}`);
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    } else {
        alert('القسم المطلوب غير موجود.');
    }
}


/*------------------*/




let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides(); 

function currentSlide(index) {
    slideIndex = index;
    showSlides();
}

function plusSlides(step) {
    slideIndex += step;  

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    showSlides();
}

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        slides[i].querySelector('.text').style.opacity = 0;  
        dots[i].className = dots[i].className.replace(" active", "");  
    }

    slides[slideIndex].style.display = "block";  

    setTimeout(() => {
        const textElement = slides[slideIndex].querySelector('.text');
        textElement.style.opacity = 1; 
        textElement.style.transform = 'translateY(0)'; 
    }, 500); 

    dots[slideIndex].className += " active"; 

    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        slideIndex = (slideIndex + 1) % slides.length; 
        showSlides();
    }, 3000); 
}


/*-*/

const button = document.getElementById('toggleButton');
const circle = document.getElementById('circle');
let isBlack = true;

button.addEventListener('click', () => {
const size = Math.max(window.innerWidth, window.innerHeight);

circle.style.transition = 'none';
circle.style.width = circle.style.height = '0';

setTimeout(() => {
requestAnimationFrame(() => {
    circle.style.transition = 'width 0.8s, height 0.8s, background-color 0.5s';
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.backgroundColor = isBlack ? 'white' : 'black';
    /* حط هنا الحجات بالالوان بتاعتها */
/*    const header = document.querySelector('header');
    header.style.backgroundColor = isBlack ? '#1e1e1e' : '#f8f9fa';*/ /* زي دا */

    document.body.style.backgroundColor = isBlack ? 'white' : 'black'; /* لو عاوز تسيبهم سبهم او عدل فيهم */
    document.body.style.color = isBlack ? 'black' : 'white';
    
    isBlack = !isBlack;

    setTimeout(() => {
        circle.style.width = circle.style.height = '0';
    }, 800);
});
}, 50);
});