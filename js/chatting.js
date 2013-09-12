$.getJSON('http://api.openkeyval.org/locationggg?callback=?', function(data) { $('body').html(data) })

<!-- how to store a thing --!>
$.getJSON('http://api.openkeyval.org/store/?callback=?', {location:'calicalo'}, function(d) { console.log(d) })


$.getJSON('http://api.openkeyval.org/location?callback=?', function(data) { console.log(data) })


function store(k,v, c) {
 var opts = {}
 opts[k]=v
 $.getJSON('http://api.openkeyval.org/store/?callback=?', opts, c)
}

function get(k,c) {
       $.getJSON('http://api.openkeyval.org/' + k + '?callback=?', c)
}


store('chat_message', 'asdf')

get('chat_message', function(d) {
       console.log('stuff with d', d)
})




function store(k,v, c) {
 var opts = {}
 opts[k]=v
 $.getJSON('http://api.openkeyval.org/store/?callback=?', opts, c)
}

function get(k,c) {
       $.getJSON('http://api.openkeyval.org/' + k + '?callback=?', c)
}

setInterval(function(){ get('chat_message', function(d) { console.log(d) })})

store('chat_message', 'asdf')