var ButtonBase = require('ribcage-button')
  , BackButton = ButtonBase.extend({
      className: 'ribcage-back-btn'
    , afterInit: function () {
        this.label = '<i></i> Back';
        this.icon = null;
      }
    });

module.exports = BackButton;
