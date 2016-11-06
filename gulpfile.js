const elixir = require('laravel-elixir');

//require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

// elixir((mix) => {
//     mix.sass('app.scss')
//        .webpack('app.js');
// });

elixir(function(mix) {

	//login page css auth/login
    mix.styles([
        'bootstrap.min.css',
        'bootstrap-responsive.min.css',
        'style.css',
        'style-responsive.css',
        'googleapiscss.css'
    ], 'public/assets/css/login.css');


    //copy fonts
    mix.copy('resources/assets/font', 'public/assets/font');
    mix.copy('public/assets/images', 'public/build/assets/img');

	//master page css home/master
    mix.styles([
        'bootstrap.min.css',
        'bootstrap-responsive.min.css',
 		'jquery-ui-1.8.21.custom.css',
 		'jquery.gritter.css',
 		'fullcalendar.css',
 		'jquery.noty.css',
 		'uniform.default.css',
 		'noty_theme_default.css',
 		'elfinder.min.css',
 		'elfinder.theme.css',
 		'font-awesome.min.css',
 		'font-awesome-ie7.min.css',
 		'glyphicons.css',
 		'halflings.css',
 		'style-forms.css',
 		'jquery.iphone.toggle.css',
        'style.css',
        'style-responsive.css',
        'googleapiscss.css'
    ], 'public/assets/css/master.css');

    //master page js
    mix.scripts([
        'jquery-1.9.1.min.js',
        'jquery-migrate-1.0.0.min.js',
        'jquery-ui-1.10.0.custom.min.js',
        'jquery.ui.touch-punch.js',
        'modernizr.js',
 		'bootstrap.min.js',
 		'jquery.cookie.js',
 		'jquery.uniform.min.js',
 		'jquery.iphone.toggle.js',
 		'retina.js',
 		'fullcalendar.min.js',
 		'jquery.dataTables.min.js',
 		'excanvas.js',
 		'jquery.flot.js',
 		'jquery.flot.pie.js',
 		'jquery.flot.stack.js',
 		'jquery.flot.resize.min.js',
 		'jquery.chosen.min.js',
 		'jquery.elfinder.min.js',
 		'jquery.raty.min.js',
 		'jquery.imagesloaded.js',
 		'jquery.masonry.min.js',
 		'jquery.knob.modified.js',
 		'jquery.sparkline.min.js',
 		'jquery.uploadify-3.1.min.js',
 		'counter.js',
 		'custom.js'       
    ],'public/assets/js/master.js');
    
    //login page js
    mix.scripts([
        'jquery-1.9.1.min.js',
        'jquery-migrate-1.0.0.min.js',
        'jquery-ui-1.10.0.custom.min.js',
        'jquery.ui.touch-punch.js',
        'modernizr.js',
 		'bootstrap.min.js',
 		'jquery.cookie.js',
 		'jquery.uniform.min.js',
 		'jquery.iphone.toggle.js',
 		'retina.js'
 		//'custom.js'       
    ],'public/assets/js/login.js').version([
            'public/assets/css/login.css',
            'public/assets/js/login.js',
            'public/assets/css/master.css',
            'public/assets/js/master.js'
        ]);
});