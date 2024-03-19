const paragraph = document.getElementById("para");
const usernameEl = document.getElementById("username");
const sectionEl = document.getElementById("section");
const copyBtn = document.getElementById("copyBtn");
const copyBtns = document.querySelectorAll("#copyBtn");
console.log(paragraph);

//TEXT CONTENT
paragraph.textContent = "jb sommemebebhfhfbfbfbfbfhgfgfggfgf";
const message = "I love going to Desishub";
// usernameEl.textContent = prompt("Enter your Name");
const company = "Desishub";
//INNERHTML
sectionEl.innerHTML = `
<h2> Welcome to ${company}</h2>
<p>I lOVE Desishub</p>
<h6>${message}</h6>
`;

copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener("click", function () {
    const textToCopy = paragraph.textContent;
    console.log(copyBtn.dataset.shadow);
    if (navigator.clipboard.writeText(copyBtn.dataset.shadow)) {
      copyBtn.textContent = "Copied";
      console.log(copyBtn.style.cssText);
      setTimeout(() => {
        copyBtn.textContent = "Copy Para Content";
      }, 3000);
    }
  });
});
//1000ms =1s
