import "./reset.css";
import "./style.css";
import "./home-styles.css";
import "./team-styles.css";
import "./our_projects.css";
import "./projects-style.css";
import "./contact.css";

// CAROUSEL
let slideIndex = 0;
let intervalId = null;
const slides = document.querySelectorAll(".slides img");
const indicators = document.querySelectorAll(".navigation-indicators .indicator");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

document.addEventListener("DOMContentLoaded", createSlider);

function createSlider() {
    if(slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    updateNavIndicator();
    updateProjectDetails(slideIndex);
    updateButtonLink(slideIndex);
    intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    slideIndex = index;
    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
    updateNavIndicator();
    updateProjectDetails(slideIndex);
    updateButtonLink(slideIndex);
    intervalId = setInterval(nextSlide, 5000);
}

function updateNavIndicator() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === slideIndex);
    });
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        clearInterval(intervalId);
        showSlide(index);
    });
});

// CONSTRUCTOR CLASS FOR PROJECTS
class Project {
    constructor(title, author, technologies) {
      this.title = title;
      this.author = author;
      this.technologies = technologies;
    }
  
    createProjectElement() {
      const projectDiv = document.querySelector(".project-details");
  
      const titleP = document.createElement('p');
      titleP.className = 'project-title';
      titleP.textContent = this.title;
  
      const authorP = document.createElement('p');
      authorP.className = 'project-author';
      authorP.textContent = this.author;
  
      const techP = document.createElement('p');
      techP.className = 'project-tech';
      techP.textContent = this.technologies.join(' ');
  
      projectDiv.appendChild(titleP);
      projectDiv.appendChild(authorP);
      projectDiv.appendChild(techP);
    }
  }
  
  const projectDetails = [
    { title: 'adele zilinskaite portfolio', author: 'by adele', technologies: ['html', 'css', 'javascript', 'node.js'] },
    { title: 'amanda ljung portfolio', author: 'by amanda', technologies: ['html', 'css', 'javascript', 'node.js'] },
    { title: 'alexandra riva portfolio', author: 'by alexandra', technologies: ['html', 'css', 'javascript', 'node.js'] },
    { title: 'abdul satar noory portfolio', author: 'by noory', technologies: ['html', 'css', 'javascript', 'node.js'] },
    { title: 'bazaar bab restaurant page', author: 'by adele', technologies: ['html', 'css', 'javascript'] },
    { title: 'a. ljung photography page', author: 'by amanda', technologies: ['html', 'css', 'javascript'] },
    { title: 'to-do list app', author: 'by alexandra', technologies: ['html', 'css', 'javascript'] },
    { title: 'library', author: 'by noory', technologies: ['html', 'css', 'javascript'] }
  ];

  function updateProjectDetails(index) {
    const projectDiv = document.querySelector(".project-details");
    projectDiv.innerHTML = "";
  
    const { title, author, technologies } = projectDetails[index];
    const project = new Project(title, author, technologies);
    project.createProjectElement();
  }

  const buttonLinks = [
    'https://azilinskaite.github.io/Homepage_v.1/',
    'https://mandylaaane.github.io/Odin-Project---Homepage/',
    'https://alexandra-riva.github.io/homepage-alexandra-riva-public/',
    'https://noory007.github.io/Homepage-Project/',
    'https://azilinskaite.github.io/Bazaar_Bab_page/',
    'https://mandylaaane.github.io/Odin-Project-SignUpForm/',
    'https://alexandra-riva.github.io/todo-list-alexandra-riva-public/',
    'https://noory007.github.io/Library/'
  ];

  function updateButtonLink(index) {
    const projectButton = document.querySelector('.project-button');
    projectButton.href = buttonLinks[index];
  }

