module.exports = {
    development: {
        js: ['js/jquery-2.1.1.min.js',
			 'js/waypoints.js',
			 'js/jquery.fittext.js',
			 'js/magnific-popup.js',
			 'js/wow.min.js',
			 'js/jquery.nicescroll.min.js',
			 'js/modernizr.js',
			 'js/script.js'],
        css: ['css/default.css', 
			  'css/style.css', 
			  'css/responsive.css', 
			  'css/animate.css', 
			  'css/magnific-popup.css', 
			  'vendor/owl-carousel/owl.carousel.css', 
			  'vendor/owl-carousel/owl.theme.css']
    },
    production: {
        js: ['js/bundle-scripts.js'],
        css: ['css/bundle-styles.css']
    }
}