sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        
        formatter: formatter,
        onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

        onFilterInvoices : function () {
            var aFilter = [];
            var sNameQuery = this.byId( "filterByName" ).mProperties.value; // or _lastValue ? most probably none c:
            var sStatusQuery = this.byId( "filterByStatus" ).mProperties.value;

            if (sNameQuery) aFilter.push( new Filter("ProductName", FilterOperator.Contains, sNameQuery) );
            if (sStatusQuery) aFilter.push( new Filter("Status", FilterOperator.Contains, sStatusQuery) );

            var oList = this.byId( "invoiceList" );
            var oBinding = oList.getBinding( "items" );
            oBinding.filter( aFilter );

            /* walkthrough example below */
            /*
                // build filter array
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
                }

                // filter binding
                var oList = this.byId("invoiceList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            */
        },

        onPress : function (oEvent) {
            var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			});
		}
    });
});