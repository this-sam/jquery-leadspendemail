/*!
 * LeadSpend Email Validation jQuery Plugin
 * Original author: @this-sam, @leadspend
 * Licensed under the MIT license
 */

;(function( $, window, document, undefined ){
	//Initialize defaults
	var pluginName = 'LeadSpendEmail',
	defaults = {
		leadspendApi: "https://primary.api.leadspend.com/v2/validity/",
		timeout: 5
	};
	
	function LeadSpendEmail( element, options){
		this.element = element;
		this.options = $.extend( {}, defaults, options)
		this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
	};
	
	LeadSpendEmail.jsonpValidateEmail = function() {
		console.log( "THIS From LeadSpendEmail.jsonpValidateEmail call:" );
		console.log( this );
		/*console.log("jsonpValidateEmail called.  Email address val is:");
		console.log( this.element.val() )
		emailAddress = this.element.val();
		
		if (emailAddress){
			$.getJSON( leadspendAPI + encodeURIComponent( emailAddress ) + "?timeout=" + timeout + "&callback=?", null
			).done( function(data, textStatus, jqXHR) {
				console.log( data );
				console.log( emailAddress );
				console.log( this.element );
			}).fail(function( data ) {
				console.log("fail");
			});
		}*/
	};

	LeadSpendEmail.prototype.init = function () {
		console.log( "THIS From LeadSpendEmail.prototype.init:" );
		console.log( this );
		console.log( "Testing reduncancy of $(this.element): ");
		console.log( this.element );
		console.log( $(this.elelment) );
		return $(this.element).on( "focusout", function() {
			console.log( "THIS From LeadSpendEmail.prototype.init bind:" );
			console.log( this ); } );
	};
	
	// A lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
	$.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, 
                new LeadSpendEmail( this, options ));
            }
        });
    }
}( jQuery, window, document ));

