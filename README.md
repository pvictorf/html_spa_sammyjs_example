# html_spa_sammyjs_example
A example of SPA page with SammyJS 

# Install

Go to js folder and create your routes in app.js [ ./js/app.js ]
see: http://sammyjs.org/docs/api/0.7.4/all#Sammy.Template

```js
this.get('/', function(context) {

  let name = 'Developer';

  this.partial('pages/home.html', {name: name});
});
```

 
 # Commands Essentials
 
 **Template Engine**

Create your template html [ ./pages/home.html ]

```html
<h1>Home Page</h1> 

<div>
   Hello! 
   <b> <%= name %> </b>
</div> 

```
Dont use " (double quotes) in <% %> syntax, because can causes errors in your script and you can use while, for, if statements in your html template.

```html
<div>
   <% if(!name) { %>
      Hello! <b>friend</b>
   <% } %>   
</div>
 ```
 
 **Redirecting - context.redirect(path)**
 
 ```js
 this.get('#/success', function(context) {
         this.partial('pages/success.html');
         setTimeout( () => this.redirect('#/'), 2000 )
});
 ```
 
 
 **404 Page - this.notFound(verb, path)**
 
```js
this.notFound = function(verb, path) {
   $.get("pages/404.html", function(notfound) {$('#app').html(notfound)});
}
```


**Render element inside page - context.render(path).appendTo(elementHTML)**

```js
this.get('#/about', function(context) {

  context.render('pages/faq.html')
         .appendTo('body');
});
```


**Swap - context.swap(element)**
```js
this.get('#/about', function(context) {
  context.swap('loading page...');
});
```

**After router loaded - this.after(callback)** 
```js
this.after(function(context, next) {
         alert('Do after route is loaded');
});
```

**Before enter router - this.before(router, callback)**
```js
this.before('#/contact', function(context, next) {
   alert('Do before access route');
});

this.get('#/contact', function(context, next) {
         context.partial('pages/contact.html');
});
```

**Disabling cache template(Overriding original method)**
```js
this.originalTemplateCache = this.templateCache;
   this.templateCache = function(key, value) {
        if ( key.match(/nocache/) ) {
            return value;
         } else {
            this.originalTemplateCache(key, value);
         }
   };
```

**Using context outside the app scope**
```js
(function($) {
   initApp();
})(jQuery);

function initApp() {

   var app = $.sammy("#app", function() {

      this.use('Template', 'html');

      this.get('/', function(context) {
         context.partial('pages/home.html');
         
         //Form submit event
         $('form').submit( () => { saveUser(context); });
      });

   });

   app.run('#/');
}

async function saveUser(context) {
 // Await ajax request and redirect or do something
   try {
      const user = await $.post('api/user', () => {});
   } catch(e) {
      console.log(e);
   }
  
   context.redirect('#/user-info.html');
}
```

