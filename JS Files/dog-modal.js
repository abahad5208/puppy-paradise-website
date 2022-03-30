document.getElementById('detailsModal').addEventListener('show.bs.modal', function (event) {
    var link = event.relatedTarget;

    document.getElementById('dg-image').src = "Dogs/" + link.getAttribute('data-bs-img') + ".webp";
    document.getElementById('dg-image-small').src = "Dogs/" + link.getAttribute('data-bs-img') + ".webp";
    document.getElementById('dg-image').alt = link.innerText;
    document.getElementById('dg-image-small').alt = link.innerText;
    document.getElementById('dogDetailsModal').innerHTML = link.innerText;
    document.getElementById('dg-height').innerHTML = link.getAttribute('data-bs-height');
    document.getElementById('dg-weight').innerHTML = link.getAttribute('data-bs-weight');
    document.getElementById('dg-color').innerHTML = link.getAttribute('data-bs-colors');
    document.getElementById('dg-hair').innerHTML = link.getAttribute('data-bs-hair');
    document.getElementById('dg-desc').innerHTML = link.getAttribute('data-bs-desc');
    document.getElementById('dg-special').innerHTML = link.getAttribute('data-bs-special');
    document.getElementById('dg-origin').innerHTML = link.getAttribute('data-bs-origin');
    document.getElementById('dg-loc').innerHTML = link.getAttribute('data-bs-loc');
    document.getElementById('dg-life').innerHTML = link.getAttribute('data-bs-life');

    document.getElementById('dg-height-small').innerHTML = link.getAttribute('data-bs-height');
    document.getElementById('dg-weight-small').innerHTML = link.getAttribute('data-bs-weight');
    document.getElementById('dg-color-small').innerHTML = link.getAttribute('data-bs-colors');
    document.getElementById('dg-hair-small').innerHTML = link.getAttribute('data-bs-hair');
    document.getElementById('dg-desc-small').innerHTML = link.getAttribute('data-bs-desc');
    document.getElementById('dg-special-small').innerHTML = link.getAttribute('data-bs-special');
    document.getElementById('dg-origin-small').innerHTML = link.getAttribute('data-bs-origin');
    document.getElementById('dg-loc-small').innerHTML = link.getAttribute('data-bs-loc');
    document.getElementById('dg-life-small').innerHTML = link.getAttribute('data-bs-life');
});