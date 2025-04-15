// script.js
let originalText = "";
const inputText = document.getElementById("inputText");

inputText.addEventListener("input", () => {
  originalText = inputText.value;
  updateStats();
});

// Converts original text to uppercase
function convertToUpper() {
  inputText.value = originalText.toUpperCase();
  updateStats();
}

function convertToLower() {
  inputText.value = originalText.toLowerCase();
  updateStats();
}

function convertToTitle() {
  inputText.value = originalText
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  updateStats();
}

function convertToSentence() {
  inputText.value = originalText
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
  updateStats();
}

// Copy text using Clipboard API
function copyText() {
  navigator.clipboard.writeText(inputText.value).then(() => {
    alert("Text copied to clipboard!");
  });
}

function downloadText() {
  const blob = new Blob([inputText.value], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "converted-text.txt";
  a.click();
}

function updateStats() {
  const text = inputText.value;
  document.getElementById("wordCount").innerText = (text.match(/\b\w+\b/g) || []).length;
  document.getElementById("charCount").innerText = text.length;
  document.getElementById("sentenceCount").innerText = (text.match(/[.!?]+/g) || []).length;
  document.getElementById("lineCount").innerText = text.split("\n").length;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  
    if (navLinks.classList.contains("active")) {
      document.addEventListener("click", closeMenuOnOutsideClick);
    } else {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    }
  }
  
  function closeMenuOnOutsideClick(event) {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.getElementById("navLinks");
  
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
      navLinks.classList.remove("active");
      document.removeEventListener("click", closeMenuOnOutsideClick);
    }
  }
  const scrollBtn = document.querySelector(".floating-btn");

// Show scroll-to-top button after scrolling past one screen
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
function updateStats() {
  const text = inputText.value.trim();

  if (text === "") {
    document.getElementById("wordCount").innerText = 0;
    document.getElementById("charCount").innerText = 0;
    document.getElementById("sentenceCount").innerText = 0;
    document.getElementById("lineCount").innerText = 0;
    return;
  }

  document.getElementById("wordCount").innerText = (text.match(/\b\w+\b/g) || []).length;
  document.getElementById("charCount").innerText = text.length;
  document.getElementById("sentenceCount").innerText = (text.match(/[.!?]+/g) || []).length;
  document.getElementById("lineCount").innerText = text.split("\n").length;
}

