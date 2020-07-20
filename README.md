# html_spa_sammyjs_example
A example of SPA page with SammyJS 

# Install

1 - Go to js folder and create your routes in app.js [ ./js/app.js ]
see: http://sammyjs.org/docs/api/0.7.4/all#Sammy.Template

```js
this.get('/', function(context) {

  let name = 'Developer';

  this.partial('pages/home.html', {name: name});
});
```

2 - Create your template html [ ./pages/home.html ]

```html
<h1>Home Page</h1> 

<div>
   Hello! 
   <b> <%= name %> </b>
</div> 

```
3 - Dont use " (double quotes) in <% %> syntax, because can causes errors in your script and you can use while, for, if statements in your html template.

```html
<div>
   <% if(!name) { %>
      Hello! <b>friend</b>
   <% } %>   
</div>
 ```
