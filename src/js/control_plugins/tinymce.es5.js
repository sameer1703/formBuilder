'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Star rating class - show 5 stars with the ability to select a rating
 */

// configure the class for runtime loading
if (!window.fbControls) window.fbControls = [];
window.fbControls.push(function (controlClass) {
  /**
   * Star rating class
   */
  var controlTinymce = function (_controlClass) {
    _inherits(controlTinymce, _controlClass);

    function controlTinymce() {
      _classCallCheck(this, controlTinymce);

      return _possibleConstructorReturn(this, (controlTinymce.__proto__ || Object.getPrototypeOf(controlTinymce)).apply(this, arguments));
    }

    _createClass(controlTinymce, [{
      key: 'configure',


      /**
       * javascript & css to load
       */
      value: function configure() {
        this.js = ['//cdn.tinymce.com/4/tinymce.min.js'];

        // additional javascript config
        if (this.classConfig.js) {
          var js = this.classConfig.js;
          if (!Array.isArray(js)) {
            js = new Array(js);
          }
          this.js.concat(js);
          delete this.classConfig.js;
        }

        // additional css config
        if (this.classConfig.css) {
          this.css = this.classConfig.css;
        }

        // configure the tinyMCE editor defaults
        this.editorOptions = {
          height: 250,
          paste_data_images: true,
          plugins: ['code'],
          toolbar: 'code'
        };
      }

      /**
       * build a text DOM element, supporting other jquery text form-control's
       * @return {Object} DOM Element to be injected into the form.
       */

    }, {
      key: 'build',
      value: function build() {
        var _config = this.config,
            _config$value = _config.value,
            value = _config$value === undefined ? '' : _config$value,
            attrs = _objectWithoutProperties(_config, ['value']);

        this.field = this.markup('textarea', this.parsedHtml(value), attrs);
        // Make the editor read only if disabled is set on the textarea
        if (attrs.disabled) {
          this.editorOptions.readonly = true;
        }
        return this.field;
      }

      /**
       * onRender callback
       */

    }, {
      key: 'onRender',
      value: function onRender() {
        if (window.tinymce.editors[this.id]) {
          window.tinymce.editors[this.id].remove();
        }

        // define options & allow them to be overwritten in the class config
        var options = $.extend(this.editorOptions, this.classConfig);
        options.target = this.field;
        // initialise the editor
        window.tinymce.init(options);

        // Set userData
        if (this.config.userData) {
          window.tinymce.editors[this.id].setContent(this.parsedHtml(this.config.userData[0]));
        }
      }
    }], [{
      key: 'definition',


      /**
       * Class configuration - return the icons & label related to this control
       * @returndefinition object
       */
      get: function get() {
        return {
          icon: '',
          i18n: {
            default: 'Code Editor'
          }
        };
      }
    }]);

    return controlTinymce;
  }(controlClass);

  // register this control for the following types & text subtypes


  controlClass.register('codeeditor', controlTinymce);
  return controlTinymce;
});