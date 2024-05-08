fetch("http://localhost:3000/data")
.then(response => { return response.json() })
.then(mass => {
    const div = document.querySelector("#directive");
    mass.forEach(mass => {
        const newDiv = document.createElement("div");
        div.append(newDiv)
        newDiv.class = 'item1';
        newDiv.innerHTML = `
        <ul>
            <li title="Mass Name">${mass.name}</li>
            <li title="Creator">${mass.creator}</li>
            <li title="EC-1 Name">${mass.ec1Name}</li>
            <li>EC-1 Points</li>
            <ul>
                <li title="EC-1 Pt 1">${mass.ec1Points.xyPt1}</li>
                <li title="EC-1 Pt 2">${mass.ec1Points.xyPt2}</li>
                <li title="EC-1 Pt 3">${mass.ec1Points.xyPt3}</li>
                <li title="EC-1 Pt 4">${mass.ec1Points.xyPt4}</li>
                <li title="EC-1 Pt 5">${mass.ec1Points.xyPt5}</li>
                <li title="EC-1 Pt 6">${mass.ec1Points.xyPt6}</li>
            </ul>
            <li title="EC-1 Height">${mass.ec1Height}</li>
            <li>Guide Points</li>
            <ul>
                <li title="Guide Pt 1">${mass.guide.xyzPt1}</li>
                <li title="Guide Pt 2">${mass.guide.xyzPt2}</li>
            </ul>
            <li>Square 2 Points</li>
            <ul>
                <li title="Square 2 Pt 1">${mass.square2.xyPt1}</li>
                <li title="Square 2 Pt 2">${mass.square2.xyPt2}</li>
                <li title="Square 2 Pt 3">${mass.square2.xyPt3}</li>
                <li title="Square 2 Pt 4">${mass.square2.xyPt4}</li>
                <li title="Square 2 Height">${mass.square2.height}</li>
            </ul>
            <li>EC-2</li>
            <ul>
                <li title="Shirt Color">${mass.ec2.colorShirt}</li>
                <li title="Eye Color RGB Values">${mass.ec2.colorEye}</li>
            </ul>
        </ul>
        `  
    });
});

// Copy Event Listener
addEventListener("copy", () => {
    selBody = document.body;
    selBody.style.background = 'linear-gradient(#f05fa6, #ed1654)';
    setTimeout(revertBody, 125);
});
function revertBody(){
    selBody = document.body;
    selBody.style.background = 'linear-gradient(#f6f6f6, #E7E5DF)';
}

// Click Listener, Return 6 clicks to form
const drawBox = document.querySelector('#drawBox');
const ec1Pt1 = document.querySelector('#ec1Pt1');
const ec1Pt2 = document.querySelector('#ec1Pt2');
const ec1Pt3 = document.querySelector('#ec1Pt3');
const ec1Pt4 = document.querySelector('#ec1Pt4');
const ec1Pt5 = document.querySelector('#ec1Pt5');
const ec1Pt6 = document.querySelector('#ec1Pt6');
drawBox.addEventListener("click", (event) => {
    // console.log(`${event.offsetX}, ${event.offsetY} Click 1`);
    ec1Pt1.value = `${event.offsetX}, ${event.offsetY}`;
    drawBox.addEventListener('click', (event) => {
        ec1Pt2.value = `${event.offsetX}, ${event.offsetY}`;
        drawBox.addEventListener('click', (event) => {
            ec1Pt3.value = `${event.offsetX}, ${event.offsetY}`;
            drawBox.addEventListener('click', (event) => {
                ec1Pt4.value = `${event.offsetX}, ${event.offsetY}`;
                drawBox.addEventListener('click', (event) => {
                    ec1Pt5.value = `${event.offsetX}, ${event.offsetY}`;
                    drawBox.addEventListener('click', (event) => {
                        ec1Pt6.value = `${event.offsetX}, ${event.offsetY}`;
                    }, {once : true});
                }, {once : true});
            }, {once : true});
        }, {once : true});
    }, {once : true});
}, {once : true});

// Reset Draw Box
// resetButton = document.querySelector('#drawBoxReset')
// resetButton.addEventListener('click', () => {
//     ec1Pt1.value = "";
//     ec1Pt2.value = "";
//     ec1Pt3.value = "";
//     ec1Pt4.value = "";
//     ec1Pt5.value = "";
//     ec1Pt6.value = "";
// });

document.querySelector('#form111').addEventListener('submit', event => {
    event.preventDefault();
    fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: event.target.massName.value,
            creator: event.target.creator.value,
            ec1Name: event.target.ec1Name.value,
            ec1Points: {
                xyPt1: event.target.ec1Pt1.value,
                xyPt2: event.target.ec1Pt2.value,
                xyPt3: event.target.ec1Pt3.value,
                xyPt4: event.target.ec1Pt4.value,
                xyPt5: event.target.ec1Pt5.value,
                xyPt6: event.target.ec1Pt6.value
            },
            ec1Height: event.target.ec1Height.value,
            maelstrom: {
                centerPt: event.target.centerPt.value,
                radius1: event.target.radius1.value,
                radius2: event.target.radius2.value,
                callAngle: event.target.callAngle.value
            },
            tweenCurve: "", 
            square1: {
                xyPt1: event.target.sq1Pt1.value,
                xyPt2: event.target.sq1Pt2.value,
                xyPt3: event.target.sq1Pt3.value,
                xyPt4: event.target.sq1Pt4.value,
                height: event.target.sq1Height.value
            },
            guide: {
                xyzPt1: event.target.guidePt1.value,
                xyzPt2: event.target.guidePt2.value,
                length: ""
            },
            wirecut: {
                depth: event.target.cutDepth.value,
                selectDelete: event.target.selectDelete.value
            },
            square2: {
                xyPt1: event.target.sq2Pt1.value,
                xyPt2: event.target.sq2Pt2.value,
                xyPt3: event.target.sq2Pt3.value,
                xyPt4: event.target.sq2Pt4.value,
                height: event.target.sq2Height.value
            },
            ec2: {
                colorShirt: event.target.colorShirt.value,
                colorEye: event.target.colorEye.value
            },
            emailContent: event.target.emailContent.value,
            error: event.target.error.value

        })
    })
    .then(response => { return response.json() })
    .then(mass => {
        const div = document.querySelector("#directive");
        const newDiv = document.createElement("div");
        div.append(newDiv)
        newDiv.class = 'item1';
        newDiv.innerHTML = `
        <ul>
            <li title="Mass Name">${mass.name}</li>
            <li title="Creator">${mass.creator}</li>
            <li title="EC-1 Name">${mass.ec1Name}</li>
            <li>EC-1 Points</li>
            <ul>
                <li title="EC-1 Pt 1">${mass.ec1Points.xyPt1}</li>
                <li title="EC-1 Pt 2">${mass.ec1Points.xyPt2}</li>
                <li title="EC-1 Pt 3">${mass.ec1Points.xyPt3}</li>
                <li title="EC-1 Pt 4">${mass.ec1Points.xyPt4}</li>
                <li title="EC-1 Pt 5">${mass.ec1Points.xyPt5}</li>
                <li title="EC-1 Pt 6">${mass.ec1Points.xyPt6}</li>
            </ul>
            <li title="EC-1 Height">${mass.ec1Height}</li>
            <li>Guide Points</li>
            <ul>
                <li title="Guide Pt 1">${mass.guide.xyzPt1}</li>
                <li title="Guide Pt 2">${mass.guide.xyzPt2}</li>
            </ul>
            <li>Square 2 Points</li>
            <ul>
                <li title="Square 2 Pt 1">${mass.square2.xyPt1}</li>
                <li title="Square 2 Pt 2">${mass.square2.xyPt2}</li>
                <li title="Square 2 Pt 3">${mass.square2.xyPt3}</li>
                <li title="Square 2 Pt 4">${mass.square2.xyPt4}</li>
                <li title="Square 2 Height">${mass.square2.height}</li>
            </ul>
            <li>EC-2</li>
            <ul>
                <li title="Shirt Color">${mass.ec2.colorShirt}</li>
                <li title="Eye Color RGB Values">${mass.ec2.colorEye}</li>
            </ul>
        </ul>
        `
    })
});