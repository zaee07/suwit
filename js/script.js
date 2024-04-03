function getComp() {
    const comp = Math.random();
    if (comp <0.34)  return 'gajah';
    if (comp >=0.34 && comp < 0.67) return 'manusia';
    return 'semut';
}

function getHasil(comp, player) {
    if(player == comp) return "seri";
    if (player == 'gajah') return (comp == 'manusia') ? 'menang' : 'kalah';
    if (player == 'semut') return (comp == 'manusia') ? 'kalah' : 'menang';
    if (player == 'manusia') return (comp == 'gajah') ? 'kalah' : 'menang';
}

function cycle () {
    const imgComp = document.querySelector('.img-comp');
    const img = ['gajah', 'semut', 'manusia'];
    let i =0;
    const start = new Date().getTime();

    setInterval(()=>{
        if (new Date().getTime()-start > 1000) {clearInterval;return;}
        imgComp.setAttribute('src', `img/${img[i++]}.png`);
        if (i==img.length) i=0;
    }, 150);
}

const select = document.querySelectorAll('li img');
select.forEach((u)=>{
    u.addEventListener('click', ()=>{
        const comp = getComp();
        const classes = u.className.split(' ');
        const player = classes[classes.length-1];
        const hasil = getHasil(comp, player);
        cycle();
        setTimeout(()=> {
            const imgComp = document.querySelector('.img-comp');
            imgComp.setAttribute('src', `img/${comp}.png`);

            const info = document.querySelector('.info');
            if (hasil == 'menang') {
                info.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Kamu ${hasil}!</strong> You should check in on some of those fields below.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            } else {
                info.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Kamu ${hasil}!</strong> You should check in on some of those fields below.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
                
            }
        },1000)
    })
})