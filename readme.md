### API PEREZ & PEREZ

1. Clona este proyecto en tu PC.
2. Ejecuta npm install, esto instalara las dependencias.
3. Crea un archivo .env en la raiz del proyecto y copia el contenido del archivo .env.example en el archivo .env.
4. Ponle los valores a las variables de entorno del archivo .env por ejemplo:
    DB_HOST=127.0.0.1
	DB_USER=root
    DB_PASSWORD=12345
    DB_DATABASE=test
    PORT=3306

5. Ejecuta npm run dev para ejecutar la aplicación.

####  Este proyecto contiene una pequeña implementación de swagger.
La cual esta disponible en la siguiente ruta:
https://node-interview2.herokuapp.com/api/docs-cliente/
esto servira para probar algunos endpoints de nuestra api.

#### De igual manera contiene un par de test desarrollados con jest.
Estos test pueden ejecutarse escribiendo el siguiente comando en la consola.
```python
npm run test:watch
```
##### Notas.
- La base de datos esta desarrollada en mysql y esta alojada en heroku.
- La api esta alojada en heroku en el siguiente enlace:
https://node-interview2.herokuapp.com/api

## Desarrollada por Jorge Castillo https://jorgecastillo.pro
