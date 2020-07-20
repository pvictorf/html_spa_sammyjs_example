(function($) {
   initApp();
})(jQuery);

function initApp() {
   var app = $.sammy("#app", function() {

      this.use('Template', 'html');

      this.get('/', function(context) {

         let name = 'Developer';

         this.partial('pages/home.html', {name: name});
      });

      this.get('#/about', function(context) {

         this.partial('pages/about.html');

      });
     
   });
   app.run('#/');
}