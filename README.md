# Weather Forecast Web

## Descripción

Este es un proyecto web para predecir el clima en diferentes ciudades utilizando Next.js. Permite a los usuarios comparar el pronóstico del clima para los próximos 5 días en varios destinos.

## Tecnologías

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [OpenWeather API](https://openweathermap.org/api)

## Requisitos

- **Node.js**: 16.x o superior
- **Yarn**: 1.22 o superior (alternativamente, puedes usar npm)

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el Repositorio**:

    ```bash
    git clone https://github.com/worrington/weather-forecast-web.git
    ```

2. **Navega al Directorio del Proyecto**:

    ```bash
    cd weather-forecast-web
    ```

3. **Instala las Dependencias**:

    ```bash
    yarn install
    ```

4. **Configura el Archivo de Variables de Entorno**:

    Srchivo `.env.local` en la raíz del proyecto y añade las siguientes variables:

    ```env
    NEXT_PUBLIC_OPENWEATHER_API_KEY=tu_api_key_de_openweathermap
    NEXT_PUBLIC_RESERVAMOS_API = https://search.reservamos.mx/api/v2/places
    NEXT_PUBLIC_OPEN_WEATHER_API = https://api.openweathermap.org/data/2.5/forecast
    ```

    Asegúrate de reemplazar `tu_api_key_de_openweathermap` con la clave de API real.

5. **Ejecuta el Proyecto**:

    ```bash
    yarn dev
    ```

## Uso

1. **Accede al Proyecto en tu Navegador**:

    Abre `http://localhost:3000` en tu navegador para ver la aplicación en modo de desarrollo.

2. **Interfaz de Usuario**:

    - Selecciona una ciudad.
    - Consulta el pronóstico del clima para los próximos 5 días.


## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una rama nueva para tu característica o corrección.
3. Envía un pull request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
