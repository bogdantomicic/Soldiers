var wrapp = document.querySelector('.wrapp');
var info = document.querySelector('.info');

function makeSoldiers(num) {
    var allSoldiers = [];
    for (let i = 0; i < num; i++) {
        allSoldiers.push(new CreateSoldier);
    }
    return allSoldiers;
};

makeSoldiers();

var soldiers = makeSoldiers(5000);

console.log(soldiers);

displaySoldiers();

function displaySoldiers() {
    for (let i = 0; i < soldiers.length; i++) {
        var newDiv = document.createElement('div');
        newDiv.id = i;
        newDiv.addEventListener('mouseover',showInfo)
        if (soldiers[i].weapon === "sniper") {
            newDiv.className = "sniper"; 
        }else{
            newDiv.className = "soldier"; 
        }
        wrapp.appendChild(newDiv);
    }
}

function showInfo(e) {
    var current = soldiers[this.id];
    info.innerHTML = current.info();
    info.style.top = e.y +15+ 'px';
    info.style.left = e.x +15+ 'px';
}