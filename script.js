var i1 = document.getElementById('input1');
var i2 = document.getElementById('input2');

var bouton = document.getElementById('bouton');
	bouton.addEventListener('click', calculer);

var result = document.getElementById('result');


function calculer () {
	var select = document.getElementById('select').value;
	var resultat;

	var input1 = i1.value;
	var nb1 = parseInt(input1);

	var input2 = i2.value;
	var nb2 = parseInt(input2);

	function additioner (a, b) {
		var result = nb1 + nb2;
		return result;
	}

	function soustraire (a, b) {
		var result = nb1 - nb2;
		return result;
	}

	function multiplier (a, b) {
		var result = nb1 * nb2;
		return result;
	}

	function diviser (a, b) {
		var result = nb1 / nb2;
		return result;
	}

	if (select == "additioner")
	{
		resultat = additioner(nb1, nb2);
	}
	if (select == "soustraire") {
		resultat = soustraire (nb1, nb2);
	}
	if (select == "multiplier") {
		resultat = multiplier (nb1, nb2);
	}
	if (select == "diviser") {
		resultat = diviser (nb1, nb2);
	}

	resultatCalcul(resultat);
	
}

function resultatCalcul (valeur) {
	if (isNaN(valeur)) {
		alert("Les saises sont incorrectes, veuillez entrer des valeurs numériques");
		result.textContent = " ";
		i1.value=" ";
		i2.value=" ";
	}
	else if(valeur == Infinity) {
		alert("Division par 0 impossible");
		result.textContent = " ";
		i1.value=" ";
		i2.value=" ";
	}
	else
	{
		result.textContent = "= " + valeur;
	}

}

