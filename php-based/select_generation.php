<?php

function generate_selects($categories, $level = 1)
{
    if (!$categories) {
        return;
    }

    $labelClass = 'nested-select-lvl' . $level;

    echo '<label for="' . $labelClass . '" class="show">';
    echo '<select name="' . $labelClass . '" id="' . $labelClass . '">';
    echo '<option>-- Choose a category --</option>';

    foreach ($categories as $category) {
        echo '<option 
            value="' . $category['title'] . '" 
            data-id = "' . $category['id'] . '" 
            data-parent-id="' . $category['parent_id'] . '"
            data-child-count="' . $category['child_count'] . '"
            >' . $category['title'] . '</option>';
    }

    echo '</select>';
    echo '</label>';
    echo '<br />';

    foreach ($categories as $category) {
        generate_selects($category['children'], $level + 1);
    }
}