'use strict';

const finalgoal = new Date(2024, 3, 9);

function countdown() {
    const finnow = new Date();
    const finrest = finalgoal.getTime() - finnow.getTime();
    const finsec = Math.floor(finrest / 1000) % 60;
    const finmin = Math.floor(finrest / 1000 / 60) % 60;
    const finhours = Math.floor(finrest / 1000 / 60 / 60) % 24;
    const findays = Math.floor(finrest / 1000 / 60 / 60 / 24);
    const fincount = [findays, finhours, finmin, finsec];

    return fincount;
}

function recalc() {
    const fincounter = countdown(finalgoal);
    const fintime = ` ${fincounter[0]}日 ${fincounter[1]}時間 ${fincounter[2]}分 ${fincounter[3]}秒`;
    document.getElementById('finalday').textContent = fintime;
    refresh();  
}

function refresh() {
    setTimeout(() => {
        recalc()
        , 1000}
    );
}