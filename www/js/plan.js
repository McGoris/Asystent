var ilosc_list;
var id_listy;


function sprawdz(inputnazwa)
{
	return document.getElementById('inputnazwa').value;	
}

function sprawdz_czy_jest_nazwa(inputnazwa)

{
	var nazwa_listy=sprawdz(inputnazwa);
	
	document.getElementById('inputnazwa').value;
	

	
	if (nazwa_listy.length < 1)
	{
		alert ("Podaj nazwę listy!");
	}
	
	else 
	
	{
		
		alert ("nazwa jesty");
	}
	
	
	
}




document.getElementById('listy');

/*
function wypisz_listy() {

for (var i=0; i<=ilosc_list)
{
	var id_elementu;
	
	
}


};

*/