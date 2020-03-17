let keywords = [];
window.onload = function() {

let btnKW = document.getElementById('btn-listKW');
btnKW.addEventListener('click', function(){
        let kwvalue = document.getElementById('keyword').value;
        keywords.push(kwvalue);
        let listKW = document.getElementById('listKeyword');
        let liKW = document.createElement('li');
        liKW.innerHTML = kwvalue;
        listKW.appendChild(liKW);
});
console.log(keywords);

}
