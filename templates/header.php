<header role="banner">
<!-- START: Navigation -->
<div class="navbar-wrapper">
  <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="<?php bloginfo('url' ); ?>"><img src="<?php bloginfo('template_directory' ); ?>/assets/img/logo.svg" class="img-responsive" alt="logo" width="200px"></a>
      </div>
      <div class="navbar-collapse collapse">
          <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav navbar-right'));
        endif;
      ?>
      </div>
    </div>
  </div>
</div>
<!-- END: Navigation -->
</header>
