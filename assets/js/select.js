const select = {
    selectContainer: document.querySelector('#category-select-container'),
    selectTemplate: document.querySelector('#select-template'),
    optionTemplate: document.querySelector('#option-template'),
    currentDepth: 0,

    init: async function () {
        // Get all categories
        const categories = await select.fetchAllCategories();

        // Create select for level 1 categories
        select.createSelect(categories);
    },

    /**
     *  API CALLS
     */

    fetchAllCategories: async function () {
        const response = await fetch('https://l4ur3l3i.mykreezalid.com/front_api/v1/categories');
        if (!response.ok) {
            return;
        }
        const data = await response.json();
        const categories = data.categories;
        return categories;
    },

    fetchCategory: async function (categoryId) {
        const response = await fetch('https://l4ur3l3i.mykreezalid.com/front_api/v1/categories/' + categoryId + '/');
        if (!response.ok) {
            return;
        }
        const data = await response.json();
        const category = data.category;
        return category;
    },

    /**
     *  DOM MANIPULATIONS
     * */

    createSelect: function (categories) {

        select.currentDepth += 1;

        // Duplicate label and select template
        const selectClone = select.selectTemplate.content.cloneNode(true);

        // Set label and select attributes
        const label = selectClone.querySelector('label');
        label.htmlFor = 'category-lvl-' + select.currentDepth;
        label.dataset.depth = select.currentDepth;
        label.ariaLabel = 'Category select level ' + select.currentDepth;

        const selectField = selectClone.querySelector('select');
        selectField.name = 'category-lvl-' + select.currentDepth;
        selectField.id = 'category-lvl-' + select.currentDepth;

        // Create options
        Object.values(categories).forEach(category => {
            const option = select.createOption(category);
            selectField.appendChild(option);
        });

        // Add event listener on select change
        selectField.addEventListener('change', select.handleSelectChange);

        // Append select to the select container in the DOM
        select.selectContainer.appendChild(selectClone);
    },

    createOption: function (category) {

        // Duplicate option template
        const optionClone = select.optionTemplate.content.cloneNode(true);

        // Select and set option attributes
        const option = optionClone.querySelector('option');
        option.value = category.id;
        option.textContent = category.title;

        return option;
    },

    handleSelectChange: async function (event) {

        const selectField = event.target;

        // Get the depth of the current select field
        const labelFieldDepth = selectField.previousElementSibling.dataset.depth;

        // Remove all select fields and labels with a depth higher than the current select field
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            if (label.dataset.depth > labelFieldDepth) {
                label.nextElementSibling.remove();
                label.remove();
            }
        });

        // Update current depth in the counter
        select.currentDepth = parseInt(labelFieldDepth);

        // Get the category object from the selected option
        const category = await select.fetchCategory(selectField.value);

        // Create a new select field if the category has children
        if (category.child_count > 0) {
            select.createSelect(category.children);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    select.init();
    console.log('select.js loaded');
});