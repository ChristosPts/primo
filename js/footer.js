const footer = `
<div class="bg-primary-light min-vh-3 display-f align-center justify-center">
<div class="container">
    <div class="row display-f pt-1">
        <div class="col-xs-6 col-sm-6 col-md-3 p-2">
            <div class="fw-bold"> <a href="index.html" class = "text-hover-info-dark">Primo</a></div>
            <p>The Primo library transforms the way you create your websites. Use it to customize the look and feel of your site, set up amazing interfaces, and get inspired with new ways to create your sites. </p>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3 p-2">
            <ul>
                <div class="fw-bold">Layout</div>
                <li><a href="breakpoints.html">Breakpoints</a></li>
                <li><a href="containers.html">Containers</a></li>
                <li><a href="grid.html">Grid System</a></li>
                <li><a href="opacity.html">Opacity & Z-index</a></li>
            </ul>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3 p-2">
            <ul>
                <div class="fw-bold">Components</div>
                <li><a href="accordion.html">Accordion</a></li>
                <li><a href="buttons.html">Buttons</a></li>
                <li><a href="cards.html">Cards</a></li>
                <li><a href="dropdowns.html">Dropdowns</a></li>
                <li><a href="images.html">Images</a></li>
                <li><a href="lists.html">Lists</a></li>
                <li><a href="modals.html">Modals</a></li>
                <li><a href="tables.html">Tables</a></li>
            </ul>

        </div>
        <div class="col-xs-6 col-sm-6 col-md-3 p-2">
            <ul>
                <div class="fw-bold">Utilities</div>
                <li><a href="alignments.html">Alignments</a></li>
                <li><a href="borders.html">Borders</a></li>
                <li><a href="colors.html">Colors & Backgrounds</a></li>
                <li><a href="shadows.html">Shadows</a></li>
                <li><a href="sizing.html">Sizing</a></li>
                <li><a href="spacing.html">Spacing</a></li>
                <li><a href="text.html">Text</a></li>
            </ul>

        </div>
       
        <div class="col-xs-12 pb-3">
            <hr>
            <h3 class="text-center  pt-2">
                <span class = "text-hover-info-dark"><a href="https://github.com/ChristosPts" target="_blank"><i class="bi bi-github"></i></a></span>
                <span class = "text-hover-info-dark"><a href="https://www.linkedin.com/in/christos-pitsoulakis-7571a924b/" target="_blank"><i class="bi bi-linkedin"></i></a></span>
            </h3>    
            <h6 class="text-center  pt-1">Primo 2023, No Rights Reserved</h6>
        </div>

    </div>
</div>
</div>
`

document.getElementById("footer-container").insertAdjacentHTML('afterbegin', footer);
