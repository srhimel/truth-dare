var truth, dare, player, choice, playTime, startFrom;
truth = ['bolo ajke ki khaicho', 'tomar haate ki', 'kothay gechila', 'koto paicho test a'];
dare = ['khater thika laf deo', 'bilai re khoca deo', 'cini chara ca khao', 'ore kamor deo'];
player = ['himel', 'anik', 'naim'];
choice = ['truth', 'dare'];
playTime = 10;
startFrom = 0;

function arrayLength(arrName) {
    return arrName.length;
}

function selection(type) {
    return type[Math.floor(Math.random() * arrayLength(type))];
}
while (startFrom < playTime) {
    if (selection(choice) == 'truth') {
        console.log(selection(player), ' You Choosed ', selection(choice), "and you will say: ", selection(truth));
    } else {
        console.log(selection(player), ' You Choosed ', selection(choice), "and you will do: ", selection(dare));
    }
    startFrom++;
}