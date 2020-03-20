
document.getElementById('edit').addEventListener('click', function () {
    window.open("inputkeywords.html");
})


chrome.storage.local.get('kwlistStats', function (data) {
    kwlistStats = data.kwlistStats;
    for (let kw of kwlistStats) {
        let listKW = document.getElementById('kwlist');
        let liKW = document.createElement('div');
        liKW.innerHTML = `${kw[0]}   :   ${kw[1]}`;
        listKW.appendChild(liKW);
    }
});

