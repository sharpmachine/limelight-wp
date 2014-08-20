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
      <div class="col-sm-3 social-media">
        <ul class="bottom-icons pull-right">
          <li><a href="https://twitter.com/LimelightHealth"><span class="fui-twitter"></span></a></li>
          <li><a href="https://www.facebook.com/pages/Limelight-Health/1465705527013013?ref_type=bookmark"><span class="fui-facebook"></span></a></li>
          <li><a href="http://instagram.com/limelighthealth"><i class="fa fa-instagram"></i></a></li>
          <li><a href="http://www.pinterest.com/limelighthealth/"><span class="fui-pinterest"></span></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer><!-- END: Footer -->

<?php wp_footer(); ?>
