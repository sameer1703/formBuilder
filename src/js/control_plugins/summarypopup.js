/**
 * Star rating class - show 5 stars with the ability to select a rating
 */

// configure the class for runtime loading
if (!window.fbControls) window.fbControls = [];
window.fbControls.push(function(controlClass) {
  /**
   * Star rating class
   */
  class controlSummarypopup extends controlClass {

    /**
     * Class configuration - return the icons & label related to this control
     * @returndefinition object
     */
    static get definition() {
      return {
        icon: '',
        i18n: {
          default: 'Summary Popup'
        }
      };
    }

    /**
     * javascript & css to load
     */
    configure() {
    }

    /**
     * build a text DOM element, supporting other jquery text form-control's
     * @return {Object} DOM Element to be injected into the form.
     */
    build() {
      return {
        field: this.markup('span', null, this.config.name),
        layout: 'hidden'
      }
    }

    /**
     * onRender callback
     */
    onRender() {
    }
  }

  // register this control for the following types & text subtypes
  controlClass.register('summarypopup', controlSummarypopup);
  return controlSummarypopup;
});
