sap.ui.define([
	"sap/ui/base/Object",
	"sap/m/MessageToast"
	
], function(Object, MessageToast) {
	"use strict";
	
	return Object.extend( "HelloWorld.Sample", {
		
		doSomething: function() {
			var sHelloWorld = "Hello world";
			
			MessageToast.show( sHelloWorld, { duration: 1000 });
			
			this.oObject = 5;
			return;
		}
	});
});