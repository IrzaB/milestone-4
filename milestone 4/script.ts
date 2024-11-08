const form= document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement


form.addEventListener  ('submit' , (event:Event) => {
    event.preventDefault();

    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value

    const resumeHTML = `
    <h2> <b> Editable Resume </b> </h2>
    <h3> Personal  Information </h3>
    <p> <b> Name:</b> <span contenteditabale ="true">${name} </span> </P>
    <p> <b> Email:</b><span contenteditabale ="true">${email} </span></P>
    <p> <b> Phone:</b<span contenteditabale ="true">${phone} </span></P>
    


    <h3>Education</h3>
    <p contenteditabale ="true"> ${education} </P>

    <h3>Experience</h3>
    <p contenteditabale ="true"> ${experience} </P>

    <h3>Skills</h3>
    <p contenteditabale ="true"> ${skills} </P>
    ` ;

    if(resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML
    } else {
        console.error('The Resume Display  Element Is Missing...')
    }
});
