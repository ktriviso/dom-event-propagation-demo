/* eslint-env browser */
const section = document.querySelector('section');

const rnd = num => Math.floor(Math.random() * num);
let currentColor = rnd(255);

// when the click event finally propagates here,
// and swap out the color
section.addEventListener('click', () => {
  currentColor = rnd(255);
});

// make n boxes and keep track of their id as i
const makeBox = (n, i) => {
  const box = document.createElement('div');
  box.className = 'box';
  const flipColor = () => {
    box.style.backgroundColor = `hsla(${currentColor}, 80%, 20%, .17)`;
  };

  // The click event propagates in near-realtime (dumb humans)
  // Let's set a timeout so your inferior eyes can see it.
    box.addEventListener('click', (event) => {
        //event.stopPropagation();
        //this will make only one box at a time change
        //view the events in the console!!!!
        //preventDefault doesnt work because a div does not have default events
        setTimeout(flipColor, 200 - (20 * i))
        console.log(event)
    });
  return box;
};

// Make 25 boxes
const boxes = [...Array(25)].map(makeBox)
  .reverse()
  .reduce((b, a) => {
    a.appendChild(b);
    return a;
  });

// append the boxes to the section
section.appendChild(boxes);
