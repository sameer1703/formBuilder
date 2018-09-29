/**
 * Star rating class - show 5 stars with the ability to select a rating
 */

// configure the class for runtime loading
if (!window.fbControls) window.fbControls = [];
window.fbControls.push(function(controlClass) {
  /**
   * Star rating class
   */
  class controlTinymce extends controlClass {

    /**
     * Class configuration - return the icons & label related to this control
     * @returndefinition object
     */
    static get definition() {
      return {
        icon: '',
        i18n: {
          default: 'Code Editor'
        }
      };
    }

    /**
     * javascript & css to load
     */
    configure() {
      this.js = ['//cdn.tinymce.com/4/tinymce.min.js'];

      // additional javascript config
      if (this.classConfig.js) {
        let js = this.classConfig.js;
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
        plugins: [
          'code'
        ],
        toolbar: 'code'
      };
    }

    /**
     * build a text DOM element, supporting other jquery text form-control's
     * @return {Object} DOM Element to be injected into the form.
     */
    build() {
      let {value = '', ...attrs} = this.config;
      this.field = this.markup('textarea', this.parsedHtml(value), attrs);
      // Make the editor read only if disabled is set on the textarea
      if(attrs.disabled){
        this.editorOptions.readonly = true;    
      }
      return this.field;
    }

    /**
     * onRender callback
     */
    onRender() {
      if (window.tinymce.editors[this.id]) {
        window.tinymce.editors[this.id].remove();
      }

      // define options & allow them to be overwritten in the class config
      let options = $.extend(this.editorOptions, this.classConfig);
      options.target = this.field;
      // initialise the editor
      window.tinymce.init(options);
      
      // Set userData
      if(this.config.userData){
        window.tinymce.editors[this.id].setContent(this.parsedHtml(this.config.userData[0]));
      }
    }
  }

  // register this control for the following types & text subtypes
  controlClass.register('codeeditor', controlTinymce);
  return controlTinymce;
});
