Ribcage Hambuger Button
=======================

A little view to use with `ribcage-view` that gives you a pure CSS hamburger menu button.

## Install

```
npm install ribcage-hamburger-button
```

## Usage

```javascript

  var Hamburger = require('ribcage-hamburger-button')

  var button = new Hamburger({
    action: function () {
      myView.trigger('toggle:menu')
    }
  })

```
