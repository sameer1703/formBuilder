import control from '../control';

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export default class controlText extends control {

  /**
   * class configuration
   */
  static get definition() {
    return {

      // mi18n custom mappings (defaults to camelCase type)
      mi18n: {
        date: 'dateField',
        file: 'fileUpload',
        email: 'emailField',
        url: 'urlField'
      }
    };
  }

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    return this.markup('input', null, this.config);
  }

  /**
   * onRender callback
   */
  onRender() {
    // Set userData if available
    if(this.config.userData){       
      $('#'+this.config.name).val(this.config.userData[0]);        
    }
  }
}

// register this control for the following types & text subtypes
control.register(['text', 'file', 'date', 'number', 'email', 'url'], controlText);
control.register(['text', 'password', 'color', 'tel'], controlText, 'text');
