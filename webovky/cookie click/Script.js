let Cookies = 0;
let CookiesAlltime = 0;
let CookieClicks = 0;
let CookieMultiplier = 1;
let CPS = 1;
let BakeryName = "Maisner";
const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long', 
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
});
const Names = [
    "Alexander",
    "Benjamin",
    "Christopher",
    "Daniel",
    "Elijah",
    "Abigail",
    "Beatrice",
    "Charlotte",
    "Delilah",
    "Eleanor",
    "Avery",
    "Blake",
    "Casey",
    "Dakota",
    "Emerson"
  ];
let stats = false;

gotoDefault();
pickRandomName();
ClickPerSecond();

document.getElementById("stats").style.height = 100%-150;

function pickRandomName() {
    const randomIndex = Math.floor(Math.random() * Names.length);
    BakeryName = Names[randomIndex];
}
function clickCookie() {
    Cookies += 1 * CookieMultiplier;
    CookiesAlltime += 1 * CookieMultiplier;
    CookieClicks++;
    showCookies();
}
async function ClickPerSecond(){
    await delay(100);
    Cookies += CPS/10;
    CookiesAlltime += CPS/10;
    showCookies();
    ClickPerSecond();
}

function showCookies(){
    document.getElementById("cookieCount").innerHTML = Math.round(Cookies).toString();
    document.querySelector("#bakery").value = BakeryName+"'s bakery";
    document.getElementById("perSecond").innerHTML = "Per second: "+CPS;
    document.title = "Cookie Clicker ("+Math.round(Cookies).toString()+")";
    loadStats();
}

function loadStats() {
    document.getElementById("inbank").innerHTML = "Cookies in bank: " + Math.round(Cookies).toString();
    document.getElementById("inbankalltime").innerHTML = "Cookies in bank (all time): " + Math.round(CookiesAlltime).toString();
    document.getElementById("bigcookieclicks").innerHTML = "Big Cookie clicked: " + CookieClicks;
    document.getElementById("runstart").innerHTML = "Run started: " + formattedDate;
    document.getElementById("buildingsowned").innerHTML = "Buildings owned: " + 0;
    document.getElementById("cookiespersec").innerHTML = "Cookies per second: " + CPS;
    document.getElementById("goldencookieclicks").innerHTML = "Golden cookies clicked: " + 0;
}

function gotoDefault(){
    document.getElementById("normal").style.display = "block";
    document.getElementById("stats").style.display = "none";
}
function gotoStats(){
    document.getElementById("normal").style.display = "none";
    document.getElementById("stats").style.display = "block";
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
