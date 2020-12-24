export const utilService = {
    makeId,
    changeStampToDate
};

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}
function changeStampToDate(timeStamp) {
    const newDate = Date.now();
    const diff = newDate - timeStamp;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const notMilliSecTime = new Date(timeStamp * 1000)
    if (days > 0) {
        let date = notMilliSecTime.toLocaleString("en-US", { weekday: "short" });
        date += ' ' + notMilliSecTime.toLocaleString("en-US", { month: "short" });
        console.log(date);
        return date;
    }
    if (hours > 0) {
        let date = (hours < 10) ? '0' + hours : hours;
        date += ':'(minutes < 10) ? '0' + minutes : minutes;
        return date;
    }
    else {
        return 'Now'
    }
}