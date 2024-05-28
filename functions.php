<?php

function my_handle() {
    register_block_style('core/image',array(
        "name"=>"funky-image",
        "label"=>"Funky Image",
        "inline_style"=>".wp-block-image.is-style-funky-image img{
            padding:20px;
            background:linear-gradient:var(--wp--preset--gradient--gradient-1);
            border-radius:20px;
        }"
    ));
}

add_action('init','my_handle');

function montheme_enqueue_scripts() {
    wp_enqueue_script(
        'mon-theme-full-width-section',
        get_template_directory_uri() . '/blocks/dist/full-width-section.js',
        array('wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-element', 'wp-blob', 'wp-data', 'wp-html-entities', 'wp-block-editor'),
        filemtime( get_template_directory() . '/blocks/dist/full-width-section.js' ),
        true
    );
}
add_action('enqueue_block_editor_assets', 'montheme_enqueue_scripts');