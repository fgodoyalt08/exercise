### Amalgama Ejercicio

- modelar ejércitos.

#### Clases
#####Army
######Metodos
-	toTrain
		#####Descripcion: 
		Permite mejorar los puntos de fuerza de un soldado
		#####Como se usa:
		army.toTrain(numeroSoldado)


-	toTransform
		#####Descripcion: 
		Permite transformar un soldado en una mejor version
		Solo disponible para soldados tipo Piqueros y Arqueros
		#####Como se usa:
		army.toTransform(numeroSoldado)
-	war
		#####Descripcion: 
		Atacar a un ejercito
		El ganador recibe 100 monedas, el perdeor pierde sus 2 mejores soldados y si empatan ambos pierden 1 soldado al azard
		#####Como se usa:
		army.war(enemyArmy)

###Civilizaciones
-Hay solo 3 tipos de civilizaciones disponibles
-		chinos
-		ingless
-		bizantinos

###Prepara tu Ejercito
####Como usar la clase Army
let ingleses = new Army('ingleses')
let chinos = new Army('chinos')

ingleses.toTrain(15) //Mejora la fuerza del soldado numero 1
ingleses.toTransform(20) //Transforma el soldado en su mejor version 

ingleses.war(chinos) //Ataca al ejercito chino
###Fin