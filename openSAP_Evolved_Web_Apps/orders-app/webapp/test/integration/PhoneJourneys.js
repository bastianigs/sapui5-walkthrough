sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourneyPhone",
	"./NotFoundJourneyPhone"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({

		arrangements: new Startup(),
		viewNamespace: "opensap.orders.Orders.view.",
		autoWait: true
	});
});
