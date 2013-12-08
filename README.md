Ribcage Back Button
=======================

A little view to use with `ribcage-view` that gives you a pure CSS navbar back button.

## Install

```
npm install ribcage-back-button
```

## Usage

```javascript

  var BackButton = require('ribcage-back-button')

  var button = new BackButton({
    action: function () {
      myView.trigger('prev')
    }
  })

```
