const select = {
    env: "prod",
    selectContainer: document.querySelector('#select-container'),
    selectTemplate: document.querySelector('#select-template'),
    optionTemplate: document.querySelector('#option-template'),
    currentDepth: 0,

    init: async function () {
        // Get all categories
        const categories = await select.fetchAllCategories();

        // Create select for level 1 categories
        select.createSelect(categories);
    },

    fetchAllCategories: async function () {
        if (select.env === "dev") {
            const response = await fetch('./js-based/data.json');
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            return data;
        } else {
            const response = await fetch('https://l4ur3l3i.mykreezalid.com/front_api/v1/categories');
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            const categories = data.categories;
            return categories;
        }
    },

    fetchCategory: async function (categoryId) {
        if (select.env === "dev") {
            const response = await fetch('./js-based/data.json');
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            return data;
        } else {
            const response = await fetch('https://l4ur3l3i.mykreezalid.com/front_api/v1/categories/' + categoryId + '/');
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            const category = data.category;
            return category;
        }
    },

    createSelect: function (categories) {
        select.currentDepth += 1;
        const selectClone = select.selectTemplate.content.cloneNode(true);
        const label = selectClone.querySelector('label');
        console.log(label);
        label.htmlFor = 'category-lvl-' + select.currentDepth;
        label.dataset.depth = select.currentDepth;
        label.ariaLabel = 'Category select level ' + select.currentDepth;
        const selectField = selectClone.querySelector('select');
        console.log(selectClone, selectField);
        selectField.name = 'category-lvl-' + select.currentDepth;
        selectField.id = 'category-lvl-' + select.currentDepth;

        Object.values(categories).forEach(category => {
            const option = select.createOption(category);
            selectField.appendChild(option);
        });

        selectField.addEventListener('change', select.handleSelectChange);
        select.selectContainer.appendChild(selectClone);
    },

    createOption: function (category) {
        const optionClone = select.optionTemplate.content.cloneNode(true);
        const option = optionClone.querySelector('option');
        option.value = category.id;
        option.textContent = category.title;
        option.dataset.id = category.id;
        return option;
    },

    handleSelectChange: async function (event) {
        const selectField = event.target;
        // Remove all selects after the current one
        const labelFieldDepth = selectField.previousElementSibling.dataset.depth;
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            if (label.dataset.depth > labelFieldDepth) {
                label.nextElementSibling.remove();
                label.remove();

            }
        });
        select.currentDepth = parseInt(labelFieldDepth);
        const category = await select.fetchCategory(selectField.value);
        if (category.child_count > 0) {
            select.createSelect(category.children);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    select.init();
    console.log('select.js loaded');
});