
# Alura store - análisis de datos de ventas 📊

Este proyecto consiste en un análisis para evaluar el desempeño comercial de cuatro tiendas distintas y proporcionar insights estratégicos.

## El propósito del análisis realizado

El objetivo principal es transformar datos brutos de ventas en información accionable. A través de este análisis, buscamos responder preguntas clave de negocio como:

* ¿Cuál de las cuatro tiendas genera la mayor facturación total?
* ¿Qué categorías de productos tienen mayor demanda en cada tienda?
* ¿Cómo es la satisfacción del cliente basada en las calificaciones recibidas?
* ¿Cuál es el impacto de los costos de envío en la operación?

## La estructura del proyecto y organización de los archivos

La organización de los archivos en este repositorio es la siguiente:

* `Primer_challenge.ipynb`: Notebook principal de Jupyter que contiene todo el código de Python, las visualizaciones y las conclusiones.
* `README.md`: Este archivo, que proporciona una descripción general del proyecto.
* **Datasets**: El notebook procesa cuatro fuentes de datos principales representadas por las variables `tienda_1`, `tienda_2`, `tienda_3` y `tienda_4`.

## Ejemplos de gráficos e insights obtenidos

Durante el desarrollo del notebook, se generaron diversos gráficos para facilitar la comprensión de los datos:

1. **Comparativa de ingresos:** Se utilizó un gráfico de barras para identificar qué tienda lidera en ventas totales.
2. **Distribución de calificaciones:** Visualizaciones para entender la experiencia del usuario y la calidad del servicio.
3. **Top categorías:** Análisis de los productos más vendidos para optimizar el inventario.

> **Insight clave:** El análisis permite determinar no solo quién vende más, sino quién es más eficiente considerando el margen de satisfacción y los costos operativos de cada sucursal.

## Instrucciones para ejecutar el notebook

Para ejecutar este proyecto localmente, asegúrate de tener instalado Python 3.x y las librerías necesarias.

1. **Clonar el repositorio:**
```bash
git clone https://github.com/lucassaeztoledo/ProyectosAlura.git
cd ProyectosAlura

```


2. **Instalar dependencias:**
```bash
pip install pandas matplotlib seaborn

```


3. **Abrir el entorno:**
Puedes usar Jupyter Notebook o VS Code:
```bash
jupyter notebook Primer_challenge.ipynb

```


4. **Ejecutar celdas:** Asegúrate de ejecutar las celdas en orden secuencial para cargar correctamente los DataFrames y visualizar los resultados.