var herdCar = document.getElementById('herdingCarousel');
var houndCar = document.getElementById('houndCarousel');
var molossCar = document.getElementById('molossoidCarousel');
var compCar = document.getElementById('companionCarousel');
var primitCar = document.getElementById('primitiveCarousel');
var toyCar = document.getElementById('toyCarousel');

var herdBtn = document.getElementById('herdingBtn');
var houndBtn = document.getElementById('houndBtn');
var molossBtn = document.getElementById('molossoidBtn');
var compBtn = document.getElementById('companionBtn');
var primitBtn = document.getElementById('primitiveBtn');
var toyBtn = document.getElementById('toyBtn');

var herdDesc = document.getElementById('herdingDesc');
var houndDesc = document.getElementById('houndDesc');
var molossDesc = document.getElementById('molossoidDesc');
var compDesc = document.getElementById('companionDesc');
var primitDesc = document.getElementById('primitiveDesc');
var toyDesc = document.getElementById('toyDesc');

var carousels = document.querySelectorAll('.carousel');
var descs = document.querySelectorAll('.desc');
var dogTitle = document.getElementById('dogTitle');

document.addEventListener('DOMContentLoaded', function() {
    herdBtn.onclick = function() {
        carousels.forEach(function(el) {
            el.style.display = 'none';
        });
        descs.forEach(function(el) {
            el.style.display = 'none';
        });

        herdCar.style.display = 'block';
        herdDesc.style.display = 'block';
        dogTitle.innerHTML = "Herding Dogs"
    };

    houndBtn.onclick = function() {
        carousels.forEach(function(el) {
            el.style.display = 'none';
        });
        descs.forEach(function(el) {
            el.style.display = 'none';
        });

        houndCar.style.display = 'block';
        houndDesc.style.display = 'block';
        dogTitle.innerHTML = "Hound Dogs"
    };

    molossBtn.onclick = function() {
        carousels.forEach(function(el) {
            el.style.display = 'none';
        });
        descs.forEach(function(el) {
            el.style.display = 'none';
        });

        molossCar.style.display = 'block';
        molossDesc.style.display = 'block';
        dogTitle.innerHTML = "Molossoid Dogs"
    };

    compBtn.onclick = function() {
        carousels.forEach(function(el) {
            el.style.display = 'none';
        });
        descs.forEach(function(el) {
            el.style.display = 'none';
        });

        compCar.style.display = 'block';
        compDesc.style.display = 'block';
        dogTitle.innerHTML = "Companion Dogs"
    };

    primitBtn.onclick = function() {
        carousels.forEach(function(el) {
            el.style.display = 'none';
        });
        descs.forEach(function(el) {
            el.style.display = 'none';
        });

        primitCar.style.display = 'block';
        primitDesc.style.display = 'block';
        dogTitle.innerHTML = "Primitive Dogs"
    };

    toyBtn.onclick = function() {
        carousels.forEach(function(el) {
            el.style.display = 'none';
        });
        descs.forEach(function(el) {
            el.style.display = 'none';
        });

        toyCar.style.display = 'block';
        toyDesc.style.display = 'block';
        dogTitle.innerHTML = "Toy Dogs"
    };
});