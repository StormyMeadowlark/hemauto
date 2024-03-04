<?php 

remove_action( 'shutdown', 'wp_ob_end_flush_all', 1 );

// Variables

// Includes
include(get_theme_file_path( '/includes/front/enqueue.php' ));

// Hooks
add_action( 'wp_enqueue_scripts', 'hemauto_enqueue' );