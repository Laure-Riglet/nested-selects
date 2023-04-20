const select = {
    env: "dev",
    selectContainer: document.querySelector('#select-container'),
    selectTemplate: document.querySelector('#select-template'),
    optionTemplate: document.querySelector('#option-template'),

    init: async function () {
        // Get all categories
        const data = await select.fetchAllCategories();
        const categories = data.categories;

        // Create select for level 1 categories
        select.createSelect(undefined, 1, categories);
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
            return data;
        }
    },

    createSelect: function (parentCategory = undefined, level = 1, categories = undefined) {
        const selectClone = select.selectTemplate.content.cloneNode(true);
        const label = selectClone.querySelector('label');
        label.HTMLFor = 'select-label-lvl-' + level;
        const selectField = selectClone.querySelector('select');
        console.log(parentCategory, typeof (parentCategory));
        selectField.id = typeof (parentCategory) !== 'undefined' ? parentCategory.id : 0;
        selectField.name = 'select-field-lvl-' + level;
        selectField.classList = 'show select-field-lvl-' + level;

        if (categories) {
            // Create options for level 1 categories
            Object.values(categories).forEach(category => {
                const option = select.createOption(category);
                selectField.appendChild(option);
            });
        } else {
            Object.values(parentCategory.children).forEach(category => {
                const option = select.createOption(category);
                selectField.appendChild(option);
            });
        }
        select.selectContainer.appendChild(selectClone);
    },

    createOption: function (category) {
        const optionClone = select.optionTemplate.content.cloneNode(true);
        const option = optionClone.querySelector('option');
        option.value = category.title;
        option.textContent = category.title;
        option.dataset.id = category.id;
        option.dataset.parentId = category.parent_id;
        option.dataset.childCount = category.child_count;
        return option;
    },

    onSelectHandler: function (event) {
    },

    getChildren: function (categories, parent_id) {
        const children = [];
        Object.values(categories).forEach(category => {
            if (category.parent_id === parent_id) {
                children.push(category);
            }
        });
        return children;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    select.init();
    console.log('select.js loaded');
});