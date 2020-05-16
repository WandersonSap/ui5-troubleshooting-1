sap.ui.controller("ovly.logica", {
	onInit: function () {
		var sInputId = this.createId("input_idioma");
		var oInput = sap.ui.getCore().byId(sInputId);
		oInput.setValue(sap.ui.getCore().getConfiguration().getLanguage());
	},

	setRtl: function (oControlEvent) {
		var oParameters = oControlEvent.getParameters();
		var bSelected = oParameters.selected;
		sap.ui.getCore().getConfiguration().setRTL(bSelected);
		

	},
	
	scan: function(oDadosDoEvento){
		/**
		* TODO: capturar conteúdo escaneado
		* Vide documentação dos eventos da classe BarcodeScannerButton
		* e usar o evento acionado ao escanear com sucesso um código de barra
		*/
		var sBarcode = oDadosDoEvento.mParameters.text 
		alert(sBarcode);
	}
});