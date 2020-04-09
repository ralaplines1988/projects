## A javascript library for making HTML reusable

CDN Address : *cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.js*

### How to use

1. Grab the HTML stored in the Handlebars script
```
//in example.js

const source = document.getElementById('ice-cream').innerHTML; //raw HTML

//the id must match the id of script inside head of html
```
```
//in example.html

<head>
  <script id="ice-cream" type="text/x-handlebars-template">
      <h2>Why {{flavor}} is the best</h2>
      <p>
        It is without a doubt that {{flavor}} is the best ice cream flavor in the world. 
        If it was left to me, I would have {{flavor}} ice cream all year round. The next time I get ice cream, 
        I will be getting {{flavor}} because why get something else when when you can get the best.
      </p>
  </script>
</head>

//note that the type is text/x-handlebars-template, which make the script as an object of handlebar.js
//use double braces to catch the value of flavor of const context
```
2. Use Handlebars.compile() to return a templating function
```
//in example.js

const template = Handlebars.compile(source);

//use source as an argument of Handlebars.compile function
```
3. Pass in a context object to the templating function to get a compiled template
```
//in example.js

const context = {
  flavor: 'chocolate'
};

const compiledHtml = template(context);
```
4. Render the compiled template onto the web page
```
//in example.js

const iceCreamText = document.getElementById('scream');
iceCreamText.innerHTML = compiledHtml;
```
```
//in example.html

<div id="scream"></div>
<!-- it will catch the innerHTML from const compiledHtml -->
```
---

### Conditional of Handlebar.js

```
//use {{#if argument}} & {{/if}} to open and to close the conditional

{{#if argument}}
  // Code to include if the provided argument is truthy 
{{else}}
  // Code to include if the provided argument is falsy 
{{/if}}
```
---

### When you want to iterate through an array

```
{{#each someArray}}
  <p>{{this}} is the current element!</p>
{{/each}}

//{{each}} block would always be paired with an array like below
```
```
const context = {
  someArray: ['First', 'Second', 'Third'] 
}
```
```
<p>First is the current element!</p>
<p>Second is the current element!</p>
<p>Third is the current element!</p>
```

Or

```
{{#each someArray}}
  <p>The current shape is: {{this.shape}}!</p>
{{/each}}

//use this.shape to access the shape property of the element which is being iterated over
```
```
const context = {
  someArray: [
    {shape: 'Triangle'},
    {shape: 'Circle'},
    {shape: 'Square'}
  ] 
}

//with objects of an array
```
```
//result

<p>The current shape is: Triangle!</p>
<p>The current shape is: Circle!</p>
<p>The current shape is: Square!</p>
```
---

### Combine them together

```
//example 

{{#each languages}}
  <div class="card">
    {{#if this.modern}}
      <p>I should learn {{this.name}}.</p>
    {{else}}
      <p>When I have time, I'll learn {{this.name}}</p>
    {{/if}}
  </div>
{{/each}}
```