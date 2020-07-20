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
 
 **Redirecting**
 ```js
 this.get('#/success', function(context) {
         this.partial('pages/success.html');
         setTimeout( () => this.redirect('#/'), 2000 )
});
 ```
 
 **404 Page**
 
```js
this.notFound = (verb, url) => { 
  $('#app').html('404 not found');
}
```

**Render element inside page**

```js
this.get('#/about', function(context) {

  context.render('pages/faq.html')
         .appendTo('body');
});
```



