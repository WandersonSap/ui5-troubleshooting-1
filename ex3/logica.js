function onPressButton(oInformacoesDoEvento) {
	// Um pouco de JS nativo para adicionar a classe 'sapUiBody' no 'body' da página
	// Na prática esta classe será usada em qualquer app

	// TODO: encontrar as chamadas abaixo na documentação do DevDocs ou MDN
	 var oDomBody = document.querySelector("#corpo_da_pagina");
	 oDomBody.classList.add("sapUiBody");
	}

function desenhaTela() {

   new sap.m.Text({
               text : "Idioma"
            }).placeAt("container_label");

	var oInput = new sap.m.Input;
	var sLanguage = sap.ui.getCore().getConfiguration().getLanguage(); // TODO: encontrar documentação deste metodo na documentação
	oInput.setValue(sLanguage); // TODO: encontrar documentação deste metodo na documentação
	oInput.setEnabled(false);
	oInput.placeAt("container_input");

/*	// TODO: ler a documentação do 'constructor' da classe abaixo
	var oCheckbox = new sap.m.CheckBox({
		text: "Right To Left", // Texto inicial
		selected: false,
		select: function (oControlEvent) {
			var oParameters = oControlEvent.getParameters();
			var bSelected = oParameters.selected;
			sap.ui.getCore().getConfiguration().setRTL(bSelected);
		}
	});
	oCheckbox.setText("RTL"); // Texto alterado em tempo de execução
	oCheckbox.placeAt("container_checkbox");
	
	var oRB1 = new sap.m.RadioButton({
	        text: "sap_fiori_3",
	        groupName: "Group1",
	        select: function() {
				
	        }
	    });	
	oRB1.placeAt("container_radio");    
	
	var oRB2 = new sap.m.RadioButton({
	        text: "sap_fiori_3_hcb",
	        groupName: "Group1",
	        select: function() {
				
	        }
	    });	
	oRB2.placeAt("container_radio"); 	

	// TODO: ler a documentação do 'constructor' da classe abaixo
	var oButton = new sap.m.Button("myButton",{
		text: "Aplicar tema",
         press: function() {
             onPressButton()
         }
		
	});
	oButton.placeAt("container_button");*/

}


