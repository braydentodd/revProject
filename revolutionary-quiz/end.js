const colonies = Array.from(document.querySelectorAll('.colony-text'));

var hammersIndex = document.getElementById('hammers')
var chunksIndex = document.getElementById('chunks')
var wafflesIndex = document.getElementById('waffles')
var nuggetsIndex = document.getElementById('nuggets')
var yetisIndex = document.getElementById('yetis')

hammersIndex.innerHTML=hammers + '%'
chunksIndex.innerHTML=chunks + '%'
wafflesIndex.innerHTML=waffles + '%'
nuggetsIndex.innerHTML=nuggets + '%'
yetisIndex.innerHTML=yetis + '%'