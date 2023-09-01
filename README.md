# App de Registro de Productos Financieros
Esta es una aplicación para registrar productos financieros, donde puedes crear, editar, eliminar y listar productos. La aplicación sigue principios SOLID y TDD para asegurar la calidad del código. Los estilos se han implementado utilizando CSS, y para las confirmaciones se utiliza SweetAlert. La aplicación está desarrollada en Angular.

## Instalación
### Ejecución con Docker (recomendado)
1. Clona el repositorio desde: [https://github.com/roberth1927/app-financial-products.git]
2. En la raíz del proyecto, asegúrate de tener Docker instalado en tu sistema.
3. Ejecuta el siguiente comando para construir la imagen Docker de la aplicación:

    ```bash
    docker build -t app-financial-products .
    ```
4.  Una vez que la imagen se haya construido correctamente, puedes ejecutar la aplicación en un contenedor Docker con el siguiente comando:
   
    ```bash
    docker run -p 8080:80 app-financial-products
     ```

5.  Abre un navegador y navega a [http://localhost:8080/] para acceder a la aplicación.

### Ejecución en Modo de Desarrollo (sin Docker)
1. Clona el repositorio desde: [https://github.com/roberth1927/app-financial-products.git]

2. En la raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias:
   ```bash
    npm install
     ```
3. Crea un archivo environment.ts en la ruta /src/environments/ y agrega la variable authorId y la variable apiUrl con el valor adecuado. Este archivo debe tener la siguiente estructura:

     ```typescript
       export const environment = {
         production: false,
         apiUrl: 'URL_BASE',
         authorId: 'ID_DE_AUTOR_AQUI'
       };
    ```
4. Luego, para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:
   
      ```bash
        ng serve
    ```
   
5. Abre un navegador y navega a [http://localhost:4200/] para acceder a la aplicación.

### Ejecución de Pruebas
1. Asegúrate de haber instalado todas las dependencias del proyecto ejecutando:
   ```bash
    npm install
     ```

2. Una vez que todas las dependencias estén instaladas, puedes ejecutar las pruebas con el siguiente comando:
      ```bash
        ng test
    ```
    Esto iniciará el marco de pruebas Karma y ejecutará todas las pruebas en la aplicación.

3. Después de ejecutar las pruebas, verás los resultados en la terminal. Deberías ver una lista de pruebas exitosas y, en caso de que alguna prueba falle, se mostrarán los detalles del fallo.


## Versiones
Angular: 16.1.x
Docker: 20.0.x (para ejecución con Docker)


## Contacto

Si necesitas acceder al archivo environment.ts o tienes alguna pregunta, no dudes en contactarnos a través del correo electrónico: [robinmoralesquiroz@gmail.com]. Si deseas obtener más información sobre cómo ejecutar la aplicación con Docker, también estamos disponibles para ayudarte.
