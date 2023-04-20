
const lvl1Select = document.getElementById('nested-select-lvl1');

lvl1Select.addEventListener('change', function () {
    console.log('lvl1 changed :' + lvl1Select.value);
});