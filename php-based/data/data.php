<?php

$categories = [
    [
        "object" => "Category",
        "id" => 48023,
        "title" => "Computors",
        "product_count" => 5,
        "child_count" => 0,
        "image" => "https://kreezalid.s3.eu-central-1.amazonaws.com/l4ur3l3i/catalog/categories/bobb_dystpian_world_1940s_styled_computer_and_monitor_2c0f353d_4b8e_418e_af42_a5457dce2ff0.png",
        "image_alt" => "",
        "parent_id" => 0,
        "slug" => "computors",
        "url" => "/listing/category/computors",
        "children" => []
    ],
    [
        "object" => "Category",
        "id" => 48024,
        "title" => "Movilors",
        "product_count" => 5,
        "child_count" => 0,
        "image" => "https://kreezalid.s3.eu-central-1.amazonaws.com/l4ur3l3i/catalog/categories/l4ur3l3i_dystopian_world_1940s_styled_smartphone_cyberpunk_stea_0317d1f7_5085_43c6_ba63_3e9462ba8467.png",
        "image_alt" => "",
        "parent_id" => 0,
        "slug" => "movilors",
        "url" => "/listing/category/movilors",
        "children" => []
    ],
    [
        "object" => "Category",
        "id" => 48025,
        "title" => "Energenerators",
        "product_count" => 0,
        "child_count" => 2,
        "image" => "https://kreezalid.s3.eu-central-1.amazonaws.com/l4ur3l3i/catalog/categories/l4ur3l3i_stunning_background_representing_all_aspects_of_the_in_41c0ee06_2b25_4852_b298_774d81e36bc9_transformed.jpeg",
        "image_alt" => "",
        "parent_id" => 0,
        "slug" => "energenerators",
        "url" => "/listing/category/energenerators",
        "children" => [
            [
                "object" => "Category",
                "id" => 48026,
                "title" => "Energenerators containers",
                "child_count" => 2,
                "image" => "https://kreezalid.s3.eu-central-1.amazonaws.com/l4ur3l3i/catalog/categories/l4ur3l3i_a_glass_box_designed_to_contain_and_secure_high_heat_t_01d348ae_cb8e_43f6_9347_f0d299eed770.png",
                "image_alt" => "",
                "parent_id" => 48025,
                "product_count" => 0,
                "slug" => "energenerators-containers",
                "url" => "/listing/category/energenerators-containers",
                "children" => [
                    [
                        "object" => "Category",
                        "id" => 48059,
                        "title" => "grandchild1",
                        "child_count" => 0,
                        "image" => null,
                        "image_alt" => "",
                        "parent_id" => 48026,
                        "product_count" => 0,
                        "slug" => "grandchild1",
                        "url" => "/listing/category/grandchild1",
                        "children" => []
                    ],
                    [
                        "object" => "Category",
                        "id" => 48060,
                        "title" => "grandchild2",
                        "child_count" => 0,
                        "image" => null,
                        "image_alt" => "",
                        "parent_id" => 48026,
                        "product_count" => 0,
                        "slug" => "dsfdsf",
                        "url" => "/listing/category/dsfdsf",
                        "children" => []
                    ]
                ]
            ],
            [
                "object" => "Category",
                "id" => 48027,
                "title" => "Energenerators Stones",
                "child_count" => 1,
                "image" => "https://kreezalid.s3.eu-central-1.amazonaws.com/l4ur3l3i/catalog/categories/l4ur3l3i_stunning_background_representing_all_aspects_of_the_in_e44e10e7_d1c8_4428_a749_3c637b3ab4c9_transformed.jpeg",
                "image_alt" => "",
                "parent_id" => 48025,
                "product_count" => 0,
                "slug" => "energenerators-stones",
                "url" => "/listing/category/energenerators-stones",
                "children" => [
                    [
                        "object" => "Category",
                        "id" => 48061,
                        "title" => "another grandchild",
                        "child_count" => 0,
                        "image" => null,
                        "image_alt" => "",
                        "parent_id" => 48027,
                        "product_count" => 0,
                        "slug" => "another-grandchild",
                        "url" => "/listing/category/another-grandchild",
                        "children" => []
                    ]
                ]
            ]
        ]
    ],
    // My test case
    [
        "object" => "Category",
        "id" => 50000,
        "title" => "Category_Lvl_1",
        "product_count" => 5,
        "child_count" => 1,
        "image" => "https://kreezalid.s3.eu-central-1.amazonaws.com/l4ur3l3i/catalog/categories/l4ur3l3i_dystopian_world_1940s_styled_smartphone_cyberpunk_stea_0317d1f7_5085_43c6_ba63_3e9462ba8467.png",
        "image_alt" => "",
        "parent_id" => 0,
        "slug" => "movilors",
        "url" => "/listing/category/movilors",
        "children" => [
            [
                "object" => "Category",
                "id" => 50001,
                "title" => "Category_Lvl_2",
                "child_count" => 1,
                "image" => "https://kreezalid.s3.eu-central-1.amazonaws.com/l4ur3l3i/catalog/categories/l4ur3l3i_a_glass_box_designed_to_contain_and_secure_high_heat_t_01d348ae_cb8e_43f6_9347_f0d299eed770.png",
                "image_alt" => "",
                "parent_id" => 50000,
                "product_count" => 0,
                "slug" => "Category_Lvl_2",
                "url" => "/listing/category/Category_Lvl_2",
                "children" => [
                    [
                        "object" => "Category",
                        "id" => 50002,
                        "title" => "Category_Lvl_3",
                        "child_count" => 1,
                        "image" => null,
                        "image_alt" => "",
                        "parent_id" => 50001,
                        "product_count" => 0,
                        "slug" => "Category_Lvl_3",
                        "url" => "/listing/category/Category_Lvl_3",
                        "children" => [
                            [
                                "object" => "Category",
                                "id" => 50003,
                                "title" => "Category_Lvl_4",
                                "child_count" => 1,
                                "image" => null,
                                "image_alt" => "",
                                "parent_id" => 50002,
                                "product_count" => 0,
                                "slug" => "Category_Lvl_4",
                                "url" => "/listing/category/Category_Lvl_4",
                                "children" => [
                                    [
                                        "object" => "Category",
                                        "id" => 50004,
                                        "title" => "Category_Lvl_5",
                                        "child_count" => 0,
                                        "image" => null,
                                        "image_alt" => "",
                                        "parent_id" => 50003,
                                        "product_count" => 0,
                                        "slug" => "Category_Lvl_5",
                                        "url" => "/listing/category/Category_Lvl_5",
                                        "children" => []
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]

            ]
        ]
    ]
];