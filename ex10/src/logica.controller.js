/*sap.ui.controller("ovly.logica", {
	onInit: function () {
	
	}
});

// File: controller/MainController.controller.js
sap.ui.require(["sap/ui/core/mvc/XMLView", "sap/ui/core/mvc/Controller"], function(XMLView, Controller) {
	return Controller.extend("ovly.logica.MainController", {
		
		ex1: function(){
		//	Windows.open("../ex1/ex1.html", "_blank");
		},
		
		onOpenGitHub: function(){
		//   TODO: abrir repositório próprio do GitHub e não o original abaixo
		//	window.open("https://github.com/team-ovly/ui5-troubleshooting-1");
		}
		
	});
});*/

sap.ui.require([
		"sap/ui/core/mvc/Controller"
	],
	function (Controller) {
		return Controller.extend("ovly.logica", {
			
			ex1: function(){
				window.open("../ex1/ex1.html", "_blank");
			},
			
			ex2: function(){
				window.open("../ex2/ex2.html", "_blank");
			},
			
			ex3: function(){
				window.open("../ex3/ex3.html", "_blank");
			},
			
			ex4  : function(){
				window.open("../ex4/ex4.html", "_blank");
			},
						
			ex5: function(){
				window.open("../ex5/ex5.html", "_blank");
			},

			ex6: function(){
				window.open("../ex6/ex6.html", "_blank");
			},
			
			ex7: function(){
				window.open("../ex7/ex7.html", "_blank");
			},
						
			ex8: function(){
				window.open("../ex8/ex8.html", "_blank");
			},
			
			ex9: function(){
				window.open("../ex9/ex9.html", "_blank");
			},
			
			ex10: function(){
				window.open("../ex10/ex10.html", "_blank");
			},
			

												
			onOpenGitHub: function(){
				// TODO: abrir repositório próprio do GitHub e não o original abaixo
				window.open("https://github.com/WandersonSap/ui5-troubleshooting-1");
			}
			
		});
	});