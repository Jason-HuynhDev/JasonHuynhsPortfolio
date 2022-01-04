const panels = document.querySelectorAll(".panel");

function removeDisplay() {
  projectLinks.forEach((link)=> {
    link.classList.remove('display')
  })
}

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeActiveCLasses()
    panel.classList.add("active");
    
  });
  panel.addEventListener("mouseout", () => {
    removeActiveCLasses()
  });
});

