<footer id="footer" class="bottom-menu">
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-md-3">
        <p>&copy;<?php date('Y'); ?> Limelight Health, Inc.</p>
      </div>
      <div class="col-sm-5 col-md-6">
        <?php
        if (has_nav_menu('bottom_links')) :
          wp_nav_menu(array('theme_location' => 'bottom_links', 'menu_class' => 'bottom-links'));
        endif;
      ?>
      </div>
      <div class="col-sm-3 social-media hidden">
        <ul class="bottom-icons pull-right">
          <li><a href="https://twitter.com/LimelightHealth"><span class="fui-twitter"></span></a></li>
          <li><a href="https://twitter.com/LimelightHealth"><span class="fui-linkedin"></span></a></li>
          <li><a href="https://twitter.com/LimelightHealth"><span class="fui-googleplus"></span></a></li>
          <li><a href="https://twitter.com/LimelightHealth"><span class="fui-vimeo"></span></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer><!-- END: Footer -->

<?php wp_footer(); ?>
