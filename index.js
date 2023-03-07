const lines = document.querySelectorAll('.line');
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.navLOuter');
const body = document.body;
ham.addEventListener('click', () => {
    lines[0].classList.toggle('lineOne')
    lines[1].classList.toggle('lineTwo')
    lines[2].classList.toggle('lineThree')
    ham.classList.toggle('cross')
    nav.classList.toggle('hideNav')
    body.classList.toggle('bodyClass')
})


const buttons = document.querySelectorAll('.planetBtn');
const planetDist = document.querySelector('.planetDist');
const planetTime = document.querySelector('.planetTime');
const planetText = document.querySelector('.planetText');
const planetName = document.querySelector('.planetName');
const planetImg = document.querySelector('#planetImg');
const getData = async () => {
    const res = await axios.get('data.json');
    // console.log(res);
    return res.data;
}

getData().then(data => {

    // console.log(data);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            planetDist.innerText = data.destinations[i].distance;
            planetText.innerText = data.destinations[i].description;
            planetName.innerText = data.destinations[i].name;
            planetTime.innerText = data.destinations[i].travel;
            planetImg.src = data.destinations[i].images.png;
            buttons.forEach(btn => {
                btn.classList.remove('planetUnderline')
            })
            buttons[i].classList.add('planetUnderline')
        })
    }

    const buttonsCrew = document.querySelectorAll('.btnCrew');
    const crewImg = document.querySelector('.crewImg');
    const crewAbout = document.querySelector('.crewAbout');
    const crewName = document.querySelector('.crewName');
    const crewRole = document.querySelector('.crewRole');
    for (let i = 0; i < buttonsCrew.length; i++) {
        buttonsCrew[i].addEventListener('click', () => {
            crewRole.innerText = data.crew[i].role;
            crewName.innerText = data.crew[i].name;
            crewAbout.innerText = data.crew[i].bio;
            crewImg.src = data.crew[i].images.png;
            buttonsCrew.forEach(btn => {
                btn.classList.remove('selected')
            })
            buttonsCrew[i].classList.add('selected')
        })
    }



    const btnTech = document.querySelectorAll('.btnTech');
    const techImg = document.querySelector('.techImg');
    const techText = document.querySelector('.techText');
    const techVehicle = document.querySelector('.techVehicle');
    for (let i = 0; i < btnTech.length; i++) {
        btnTech[i].addEventListener('click', () => {
            techText.innerText = data.technology[i].description;
            techVehicle.innerText = data.technology[i].name;
            techImg.src = data.technology[i].images.portrait;
            btnTech.forEach(btn => {
                btn.classList.remove('techSelected')
            })
            btnTech[i].classList.add('techSelected')
        })
    }
}
)


