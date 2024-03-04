<?php

function hemauto_enqueue() {
    wp_register_style(
        'hemauto_font_tiltWrap_play_urbanist_and_roadRage',
        'https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Road+Rage&family=Tilt+Warp&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap',
        [],
        null
    );

    wp_register_style(
        'hemauto_bootstrap_icons',
        get_theme_file_uri( 'assets\icons-main\font\bootstrap-icons.css' )
    );

    wp_register_style(
        'hemauto_theme',
        get_theme_file_uri( 'assets\Flexbox-Navigation-Menu.css' )
    );

    wp_enqueue_style( 'hemauto_font_tiltWrap_play_urbanist_and_roadRage' );
    wp_enqueue_style( 'hemauto_bootstrap_icons' );
    wp_enqueue_style( 'hemauto_theme' );
}