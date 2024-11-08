var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2> <b> Editable Resume </b> </h2>\n    <h3> Personal  Information </h3>\n    <p> <b> Name:</b> <span contenteditabale =\"true\">".concat(name, " </span> </P>\n    <p> <b> Email:</b><span contenteditabale =\"true\">").concat(email, " </span></P>\n    <p> <b> Phone:</b<span contenteditabale =\"true\">").concat(phone, " </span></P>\n    \n\n\n    <h3>Education</h3>\n    <p contenteditabale =\"true\"> ").concat(education, " </P>\n\n    <h3>Experience</h3>\n    <p contenteditabale =\"true\"> ").concat(experience, " </P>\n\n    <h3>Skills</h3>\n    <p contenteditabale =\"true\"> ").concat(skills, " </P>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display  Element Is Missing...');
    }
});
