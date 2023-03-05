const navbar = `
<div class="navbar justify-space-between bg-info-dark " id = "navbar">
  <div class="nav-logo ml-1">
       <a class="text-white" href="index.html"> <span > 
      <img src="imgs/logo.png" style="width: 92px;">  </span>
     </a>  
   </div>

    <div class="nav-toggler mr-2">
        <button class="text-white"> <i class="bi bi-list"></i></button>   
    </div>

    <div class="nav-menu bg-info-dark mr-2">
        <ul class="nav-items text-white display-f align-center">
            <li>
                <a href="index.html" class="nav-menu-link">Home</a>
            </li>

            <li> 
                <div class="dropdown">
                    <a class="nav-link dropbtn">Layout <i class="bi bi-caret-down"></i></a>
                    <div class="dropdown-menu bg-secondary br-sm">
                      <a href="breakpoints.html" class="nav-link">Breakpoints</a>
                      <a href="containers.html" class="nav-link">Containers</a>
                      <a href="grid.html" class="nav-link">Grid System</a>
                      <a href="opacity.html" class="nav-link">Opacity & Z-index</a>
                    </div>
                  </div>
            </li>

            <li> 
                <div class="dropdown">
                    <a class="nav-link dropbtn">Components <i class="bi bi-caret-down"></i></a>
                    <div class="dropdown-menu bg-secondary br-sm">
                      <a href="accordion.html" class="nav-link">Accordion</a>
                      <a href="buttons.html" class="nav-link">Buttons</a>
                      <a href="cards.html" class="nav-link">Cards</a>
                      <a href="dropdowns.html" class="nav-link">Dropdowns</a>
                      <a href="images.html" class="nav-link">Images</a>
                      <a href="lists.html" class="nav-link">Lists</a>
                      <a href="modals.html" class="nav-link">Modals</a>
                      <a href="tables.html" class="nav-link">Tables</a>
                    </div>
                  </div>
            </li>

            <li> 
                <div class="dropdown">
                    <a class="nav-link dropbtn" text-black>Utilities <i class="bi bi-caret-down"></i></a>
                    <div class="dropdown-menu bg-secondary br-sm">
                      <a href="alignments.html" class="nav-link">Alignments</a>
                      <a href="borders.html" class="nav-link">Borders</a>
                      <a href="colors.html" class="nav-link">Colors & Backgrounds</a>
                      <a href="shadows.html" class="nav-link ">Shadows</a>
                      <a href="sizing.html" class="nav-link">Sizing</a>
                      <a href="spacing.html" class="nav-link">Spacing</a>
                      <a href="text.html" class="nav-link ">Text</a>
                    </div>
                  </div>
            </li>
        </ul> 
    </div>
</div>  
`

document.getElementById("nav-container").insertAdjacentHTML('afterbegin', navbar);

const nav1btn = document.querySelector("#navbar .nav-toggler button")
const nav1Dropdown = document.querySelector("#navbar .nav-menu")
 
nav1btn.onclick = function () {
    nav1Dropdown.classList.toggle("active");
} 
