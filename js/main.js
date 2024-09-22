function navToggle(x) {
    x.classList.toggle("toggle-change");
    document.querySelector(".toggled-links").innerHTML=`
        <ul class="dis-flex list-style-none m-0 p-0">
            <li class="border-bottom"><a href="#new_home">Home</a></li>
            <li class="border-bottom"><a href="#goto">About</a></li>
            <li class="border-bottom"><a href="#my_resume">Resume</a></li>
            <li class="border-bottom"><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;
    document.querySelector(".toggled-links").classList.toggle("nav-normal");
    document.querySelector(".toggled-links>ul").style.flexDirection="column";
}
/**********************toggle-menu-js-end********************** */

let cursorDot = document.querySelector("[data-cursor-dot]");
let cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
});

let ProjectArray = [
    {
        'name':"Tour & Travel Management System",
        'desc':"In this project, we manage customer data, take responsibility for organizing travel plans, and find the best tourist destinations and hotels according to the customer's budget. We also provide an online payment system through Paytm and include a balance-checking feature with a calculator. The application features a user-friendly interface to enhance the overall customer experience. ",
        'date':"feb, 2023",
        'tech':"java,jwt,JavaSwing",
        'type':"Treavel & Feel free",
        'url':"https://github.com/tarunkumar6468/Tour-Travel-management",
        'imgUrl':"tour.png"
    },
    {
        'name':"College Chat Bot",
        'desc':"A college chatbot provides instant support for students, answering academic queries, offering course information, and assisting with campus services",
        'date':"January, 2024",
        'tech':"html5,css3,js,Botpress",
        'type':"conversational tools",
        'url':"Currently Not Available",
        'imgUrl':"chatbot.png"
    },
    {
        'name':"OTT Platfrom",
        'desc':"In my OTT platform project, I developed a Java-based application using Spring Boot and MongoDB. The platform offers seamless streaming of video content with user authentication, personalized recommendations, and secure payment integration. I also implemented a robust backend system, ensuring high performance and scalability, and used Java Swing for an intuitive desktop interface.",
        'date':"august, 2024",
        'tech':"html5,css3,js,Bootstrap,Jquery",
        'type':"Network and Communication",
        'url':"https://github.com/tarunkumar6468/movie-backend_using_SpringBoot",
        'imgUrl':"ott.png"
    },
    {
        'name':"Aadharshila Builder",
        'desc':"Aadharshila Builders: Crafting Quality Homes with Precision and Integrity.",
        'date':"march, 2023",
        'tech':"html5,css3,js,Bootstrap",
        'type':"Construction",
        'url':"https://github.com/tarunkumar6468/movie-backend_using_SpringBoot",
        'imgUrl':"builder.png"
    }
];
// console.table(ProjectArray);
ProjectArray.forEach((item, index)=>{
    project_row.innerHTML+=`
        <div class="mt-5 p-2 project-cards" data-aos="zoom-in">
            <h3 class="text-white font-serif">${item.name}</h3>
            <p class="text-gray">${item.desc}</p>

            <div class="project-card-row">
                <div class="project-card-aside">
                    <img src="img/${item.imgUrl}" alt="${item.name}-img" width="100%" height="100%">
                </div>

                <div class="project-card-bside p-3">
                    <table>
                        <tbody class="text-gray">
                            <tr>
                                <td>Date</td>
                                <td>:</td>
                                <td>${item.date}</td>
                            </tr>
                            <tr>
                                <td>Tech</td>
                                <td>:</td>
                                <td>${item.tech}</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>:</td>
                                <td>${item.type}</td>
                            </tr>
                            <tr>
                                <td>URL</td>
                                <td>:</td>
                                <td><a href="${item.url} target="_self">${item.name}</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
});



/************************************************Media-query-js**********************************************************/
function medQueryFun(){
    if(x.matches){
        document.querySelector("#home").style.display="none";   //hide profile descriptions
        document.querySelector(".nav-center>ul>li:nth-child(1)>a").setAttribute("href",'#new_home');
        document.querySelector(".dummy").classList.remove('mb-5');

        front_view.innerHTML=`
            <div class="container" id="new_home">
                <div>
                    <h2 class="zoom-in-element font-cursive text-white">My Self, <span class="text-yellow">Sameer Sinha</span></h2>

                    <p class="text-gray zoom-in-element">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi architecto, soluta totam eligendi pariatur. Corrupti harum, expedita quasi dolore, doloremque voluptatum quaerat.</p>

                    <div class="clearfix">
                        <div class="cv_btn float-end mt-3 zoom-in-element">
                            <a href="/img/meresume.pdf" download>Download CV</a>
                        </div>
                    </div>

                    <!-----------------------------Personal-Image---------------------------->
                    <div class="personal-img position-relative zoom-in-element mt-5">
                        <img src="img/edit img1.jpeg" alt="personal-img" width="100%" height="100%">
                    </div>

                    <h2 class="font-cursive text-white mt-2 zoom-in-element">I am a <br /> <span class="text-yellow">Frontend Developer</span></h2>
                </div>
            </div>
        `;

    }
    else{
        document.querySelector("#home").style.display="block";
        document.querySelector("#front_view").style.display="none";
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 1110px)");

// Call listener function at run time
medQueryFun(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
    medQueryFun(x);
});


/***************************go to top of the page when load the page********************/
window.addEventListener('load', function() {
     window.scrollTo(0, 0);
});


/*************************inquiry-msg-sending-js*******************/
function goToWhatsapp() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("email").value;
    var email = document.getElementById("message").value;
    var url = "https://wa.me/919456919395?text="
    + "Name: " + name + "%0a"
    + "Email: " + email + "%0a"
    + "Message: " + message;
    window.open(url, '_blank').focus();
}