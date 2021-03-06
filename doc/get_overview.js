function get_overview() {
    //let markup = ``;
    let markup = `<h3>Overview</h3>
    <p>   'OhMy Tabelo' project is an address book front-end web applications with plain JavaScript,
        implemented to improve programming skills and a deeper understanding of JavaScript,
        HTML, and CSS after completing courses HTML5 and CSS basics, CSS Basics,
        introduction to JavaScript that are the part of Professional Certificate program: 
        <a href="https://www.edx.org/professional-certificate/front-end-web-developer-9" target="_blank">Front-End Web Developer.</a></p>
    </p>
    <p>   The address book is designed in a form of the table that stores information about
       the user's contacts for instant search and viewing.
    </p>
    <p>   The project documentation was developed in parallel with the development of the project code.
    It includes projects issues with implementation code and some explanations. 
    </p>
    <p>   Some new or tricky html, css, and javascript concepts are also
    included in the documentation.</p>
    <p>One of the main goals of the documentation is to serve as a snippet library for other projects. 
    </p>
    <p>   The documentation is written in plain HTML, CSS, and JavaScript.
    </p>
    <h4>The main features of the table:</h4>
    <ul>
        <li>Many contacts are visible at once.</li>
        <li>Additional info about contact can be viewed in the supplemental row:
        a portrait photo, a map with street address, an estate photo, an avatar.</li>
        <li>Skype and landline call opportunity.</li>
        <li>General search in contacts with filtering by user choice of columns
        and highlighting the results.</li>
        <li>Multi column sort by user choice of columns.</li>
        <li>The user can add, edit or remove contact.</li>
        <li>The table is responsive with vertical scrolling and has two appearance:
        one for the large screen and one for the small screen</li>
        <li>Documentation is available and can be viewed side by side with the table.</li>
    </ul>
    <p>An additional feature can be integrated in this project if needed.</p>
    <h4>Forewarning.
    <ul>
        <li>Web application tested only on Google Chrome version
        no less than 81.0.4044.122 on Windows 10.</li>
        <li>The application makes extensive use of JavaScript features ECMAScript 6
        Specification: let, const, javascript classes, arrow functions, proxies and so on.
        It may happen that some browsers do not support some features.</li>
        <li>Same for the CSS features: @media, flexbox, WebKit extensions and so on.</li>
        <li>The app can store contacts only in the Local Storage on client side.</li>
        <li>Now there is no way to add photos to new contacts.</li> 
        <li>For convenience, the html, js and css project files are not minimized.</li>       
    </ul>
    </h4>
    `; 
    return markup;
}