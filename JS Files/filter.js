var filterBtn = document.getElementById('filter');
var country = document.getElementById('country');
var size = document.getElementById('size');
var dogs = document.querySelectorAll('.selection');

document.addEventListener('DOMContentLoaded', function() {
    filterBtn.addEventListener('click', function() {
        dogs.forEach(function(el) {
            el.style.display = 'list-item';
        });
        if(country.value == "default" && size.value == "default") {
            dogs.forEach(function(el) {
                el.style.display = 'list-item';
            });
        } else if(country.value != "default" && size.value == "default") {
            dogs.forEach(function(el) {
                if(el.children[0].getAttribute('data-bs-origin') == country.value) {
                    el.style.display = 'list-item';
                } else {
                    el.style.display = 'none';
                };
            });
        } else if(country.value == "default" && size.value != "default") {
            dogs.forEach(function(el) {
                if(el.children[0].getAttribute('data-size') == size.value) {
                    el.style.display = 'list-item';
                } else {
                    el.style.display = 'none';
                };
            });
        } else {
            dogs.forEach(function(el) {
                if(el.children[0].getAttribute('data-size') == size.value && el.children[0].getAttribute('data-bs-origin') == country.value) {
                    el.style.display = 'list-item';
                } else {
                    el.style.display = 'none';
                };
            });
        };
    });
});