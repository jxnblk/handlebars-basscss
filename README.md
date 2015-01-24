# Handlebars Basscss
UI element helpers for Handlebars and Basscss


# Getting Started

Link to or include [Basscss](http://basscss.com) in your template head.

```
<link rel="stylesheet" href="/css/basscss.css">
```

Install `handlebars-basscss` in your project.

```bash
npm install --save handlebars-basscss
```

Register all Basscss helpers with Handlebars.

```js
var Handlebars = require('handlebars');
Handlebars.registerHelper(require('handlebars-basscss');
```

Or, register helpers on an individual basis.

```js
var basscss = require('handlebars-basscss');
Handlebars.registerHelper({
  panel: basscss.panel,
  message: basscss.message
});
```

# Global Options

All helpers accept the following attributes: `id`, `class`, `style`, `href`, `rel`, `title`, and `alt`.

# Button

```html
{{button "Default" }}
{{button "Gray" color="gray" }}
{{button "Blue" color="blue" }}
{{button "Red" color="red" }}
{{button "Blue Outline" color="blue-outline" }}
```

# Nav Item

```html
{{navItem "Burgers" href="#nav-item" }}
{{navItem "Fries" href="#nav-item" }}
{{navItem "Shake" href="#nav-item" }}
```

```html
{{navItem "Burgers" href="#nav-item" block="true" }}
{{navItem "Fries" href="#nav-item" block="true" }}
{{navItem "Shake" href="#nav-item" block="true" }}
```

# Badge

```html
{{badge "Default" }}
{{badge "Info" type="info" }}
{{badge "Success" type="success" }}
{{badge "Warning" type="warning" }}
{{badge "Error" type="error" }}
```

# Message

```html
{{message 'Default flash message' }}
{{message 'Info flash message' type="info" }}
{{message 'Success flash message' type="success" }}
{{message 'Warning flash message' type="warning" }}
{{message 'Error flash message with dismiss' type="error" dismiss="console.log('bye bye');this.parentNode.remove()" }}
```

<!--
# Pagination

```html
{{pagination current="3" pages=pages previous="#previous" next="#next" }}
```
-->

# Media Object

```html
{{#media img="//basscss.com/docs/placeholder.svg" imgWidth="128" }}
  <h2 class="m0">Media Object</h2>
  <p class="m0">With variable body content</p>
{{/media }}
```

```html
{{#media imgRight="//basscss.com/docs/placeholder.svg" imgWidth="128" }}
  <h2 class="m0">Media Object</h2>
  <p class="m0">With image to the right</p>
{{/media }}
```

# Flag Object

```html
{{#flag img="//basscss.com/docs/placeholder.svg" imgWidth="192" }}
  <h2 class="m0">Flag Object</h2>
  <p class="m0">Vertically centered media object</p>
{{/flag}}
```

# Panel

```html
{{#panel header="Panel" }}
  <h2>Panel with header but no footer</h2>
{{/panel}}
```

```html
{{#panel header="Panel" footer="Footer" }}
  <h2>Panel with header and footer</h2>
{{/panel}}
```

```html
{{#panel header="Panel" type="info" }}
  <h2>Info Panel</h2>
{{/panel}}
```

```html
{{#panel header="Panel" type="success" }}
  <h2>Success Panel</h2>
{{/panel}}
```

```html
{{#panel header="Panel" type="warning" }}
  <h2>Warning Panel</h2>
{{/panel}}
```

```html
{{#panel header="Panel" type="error" }}
  <h2>Error Panel</h2>
{{/panel}}
```

# Card

```html
<div class="flex flex-wrap mxn2">
  <div class="col-6 md-col-4 px2">
    {{#card img="//basscss.com/docs/placeholder.svg" class="inline-block" }}
      <h1 class="m0">Default Card</h1>
      <p class="m0">Bacon cheeseburger with fries</p>
    {{/card}}
  </div>
  <div class="col-6 md-col-4 px2">
    {{#card type="info" img="//basscss.com/docs/placeholder.svg" }}
      <h1 class="m0">Info Card</h1>
      <p class="m0">Bacon cheeseburger with fries</p>
    {{/card}}
  </div>
  <div class="col-6 md-col-4 px2">
    {{#card type="success" img="//basscss.com/docs/placeholder.svg" }}
      <h1 class="m0">Success Card</h1>
      <p class="m0">Bacon cheeseburger with fries</p>
    {{/card}}
  </div>
  <div class="col-6 md-col-4 px2">
    {{#card type="warning" img="//basscss.com/docs/placeholder.svg" }}
      <h1 class="m0">Warning Card</h1>
      <p class="m0">Bacon cheeseburger with fries</p>
    {{/card}}
  </div>
  <div class="col-6 md-col-4 px2">
    {{#card type="error" img="//basscss.com/docs/placeholder.svg" }}
      <h1 class="m0">Error Card</h1>
      <p class="m0">Bacon cheeseburger with fries</p>
    {{/card}}
  </div>
  <div class="col-6 md-col-4 px2">
    {{#card }}
      <h1 class="m0">Imageless Card</h1>
      <p class="m0">Bacon cheeseburger with fries</p>
      <button class="button-blue">Pancake</button>
      <button class="button-light-gray">Batter</button>
    {{/card}}
  </div>
</div>
```

# Nav

```html
{{#nav id="nav" }}
  {{navItem "Nav link" href="#nav-item" }}
  {{navItem "Nav link" href="#nav-item" }}
  {{navItem "Nav link" href="#nav-item" }}
{{/nav}}
```

# Navbar

```html
{{#navbar }}
  {{navItem "Home" href="#nav-item" }}
  {{navItem "Burgers" href="#nav-item" }}
  {{navItem "Fries" href="#nav-item" }}
{{/navbar}}
```

```html
{{#navbar type="dark" }}
  {{navItem "Home" href="#nav-item" inverse="true" tall="true" }}
  {{navItem "Burgers" href="#nav-item" inverse="true" tall="true" }}
  {{navItem "Fries" href="#nav-item" inverse="true" tall="true" }}
{{/navbar}}
```

# Dropdown
(Requires Javascript)

```html
{{#dropdown "Actions" id="dropdown-1" class="mr1 mb2" }}
  <a href="#" class="button block button-nav-light">Item</a>
  {{navItem "Action" href="#dropdown" block="true" }}
  {{navItem "Edit" href="#dropdown" block="true" }}
  {{navItem "Remove" href="#dropdown" block="true" }}
{{/dropdown}}
```

```html
{{#dropdown "More Actions" id="dropdown-2" buttonClass="button-blue" class="mr1 mb2" }}
  {{navItem "Action" href="#dropdown" block="true" }}
  {{navItem "Action" href="#dropdown" block="true" }}
  {{navItem "Action" href="#dropdown" block="true" }}
{{/dropdown}}
{{#dropdown "More Actions" id="dropdown-3" buttonClass="button-nav-light" class="mr1 mb2" }}
  {{navItem "Action" href="#dropdown" block="true" }}
  {{navItem "Action" href="#dropdown" block="true" }}
  {{navItem "Action" href="#dropdown" block="true" }}
{{/dropdown}}
```

# Button Group

```html
{{#buttonGroup class="mr2"}}
  {{button "Blue" color="blue" group="true" active="true" }}
  {{button "Blue" color="blue" group="true" }}
  {{button "Blue" color="blue" group="true" }}
{{/buttonGroup}}
{{#buttonGroup}}
  {{button "Red" color="red" group="true" }}
  {{button "Default" group="true" active="true" }}
  {{button "Default" group="true" }}
{{/buttonGroup}}
```

<!--

---

### To do: 
- [x] NavItem
- [x] Nav
- [x] Dropdown
- [x] Button
- [x] ButtonGroup
- [x] Panel
- [x] Message (alert)
- [x] Card
- [x] Pagination
- [x] Badge
- [x] Media Object
- [x] Flag Object
- [ ] Navbar
- [ ] Tabs
- [ ] Breadcrumbs
- [ ] Modal

- [ ] InputGroup
-->

