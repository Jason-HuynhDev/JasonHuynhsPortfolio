const panels = document.querySelectorAll(".panel");


function removeActiveCLasses() {
    panels.forEach((panel) => {
    panel.classList.remove('active')
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

