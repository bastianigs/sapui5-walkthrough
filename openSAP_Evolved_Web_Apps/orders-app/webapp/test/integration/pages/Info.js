sap.ui.define([
		"sap/ui/test/Opa5",
		"sap/ui/test/actions/Press"
	], function(Opa5, Press) {
		"use strict";

		var sViewName = "ViewName";

		Opa5.createPageObjects({
			onTheInfoPage: {
				actions: {
				},
				assertions: {
					iShouldSeeTheInfoPage : function () {
						return this.waitFor({
							viewName : "Info",
							id: "objectPageLayout",
							success: function (oPage) {
								Opa5.assert.ok(oPage, "Found the info page");
							}
						});
					}
				}
			}
		});
	}
);