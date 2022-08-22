const clock = document.querySelector('.clock');
const date = document.querySelector('.date');
const local = document.querySelector('.local');

const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
   
    const html = `
<span>${h}</span> :
<span>${m}</span> :
<span>${s}</span>
`;
    clock.innerHTML = html
};
setInterval(tick, 1000);

clock.style.fontSize = '3.5rem';
clock.style.textAlign = 'center'
clock.style.margin = '20px auto'
clock.style.color = 'pink'
clock.style.fontFamily = 'arial'

let newDate = () => {
    const now = new Date();
    const d = now.toDateString();
    const newhtml = `<span>${d}</span>`;
    date.innerHTML = newhtml
};
newDate();
// <<<<<<<<<<<<<<  STYLING >>>>>>>>>>>>>>>>
date.style.fontSize = '1.5rem';
date.style.textAlign = 'center';
date.style.color = '#000';
date.style.opacity = '.6';
date.style.fontFamily = 'arial';


let localRegion = () => {
    const now = new Date();
    const l = now.toTimeString();
    const newHtml = `<span>${l}</span>`;
    local.innerHTML = newHtml;
}
localRegion();
// <<<<<<<<<<<<<<  STYLING >>>>>>>>>>>>>>>>
local.style.fontSize = '0.7rem';
local.style.textAlign = 'center'
local.style.color = '#000';
local.style.opacity = '.6'
local.style.fontFamily = 'arial';
local.style.paddingTop = '10px'