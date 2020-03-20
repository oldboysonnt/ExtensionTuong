let keywords = [];
window.onload = function () {
        let btnKW = document.getElementById('btn-listKW');

        btnKW.addEventListener('click', function () {

                let kwvalue = document.getElementById('keyword').value;
                if (!keywords.includes(kwvalue)) {
                        keywords.push(kwvalue);
                        let listKW = document.getElementById('listKeyword');
                        let liKW = document.createElement('li');
                        liKW.innerHTML = kwvalue;
                        listKW.appendChild(liKW);
                }
                
                document.getElementById('keyword').value = "";
                console.log(keywords);
                chrome.storage.sync.set({ kwlist: keywords }, function () {
                        console.log('This is keyword list.');
                })
        });
}
