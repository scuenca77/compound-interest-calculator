# Calculadora de Interés Compuesto

Componente React reutilizable para calcular interés compuesto con UI personalizable.

## Características

- Cálculo de interés compuesto con fórmula financiera precisa
- Aportaciones periódicas opcionales con diferentes frecuencias
- Múltiples frecuencias de capitalización (anual, semestral, trimestral, mensual, diaria)
- Gráfica visual de distribución de capital, aportaciones e intereses (usando Recharts)
- UI totalmente personalizable mediante props (colores, textos, moneda)
- Soporte multiidioma con textos configurables
- Control de visibilidad de campos
- Callback para obtener resultados del cálculo
- Responsive y optimizado para mobile
- Construido con React 18 y Vite

## Requisitos

Tu aplicación debe tener instalado:

- React ^18.0.0
- react-dom ^18.0.0

La librería usa `peerDependencies` para evitar duplicar React en tu proyecto.

## Instalación

### Desde GitHub (Recomendado)

```bash
npm install github:tu-usuario/compound-interest-calculator
```

O con yarn:

```bash
yarn add github:tu-usuario/compound-interest-calculator
```

### Instalación Local (Para desarrollo/testing)

```bash
npm install /ruta/absoluta/al/proyecto/compound-interest-calculator
```

> **Nota**: Reemplaza `tu-usuario` con tu nombre de usuario de GitHub una vez subas el repositorio.

## Uso

### Uso básico

```jsx
import { CompoundInterestCalculator } from 'compound-interest-calculator';
import 'compound-interest-calculator/dist/style.css';

function App() {
  return (
    <div>
      <CompoundInterestCalculator />
    </div>
  );
}
```

> **Importante**: Asegúrate de importar el CSS del componente (`import 'compound-interest-calculator/dist/style.css'`) para que los estilos se apliquen correctamente.

### Con tema personalizado

```jsx
import { CompoundInterestCalculator } from 'compound-interest-calculator';
import 'compound-interest-calculator/dist/style.css';

function App() {
  return (
    <CompoundInterestCalculator
      theme={{
        primaryColor: '#9c27b0',
        accentColor: '#ff6f00',
        backgroundColor: '#f5f5f5',
        textColor: '#333',
        borderColor: '#ddd',
        inputBackground: '#fff'
      }}
    />
  );
}
```

### Con moneda personalizada

```jsx
<CompoundInterestCalculator currency="$" />
```

### Con textos personalizados (multiidioma)

```jsx
<CompoundInterestCalculator
  labels={{
    title: 'Compound Interest Calculator',
    principal: 'Initial Capital',
    contribution: 'Periodic Contribution',
    rate: 'Annual Interest Rate',
    calculateButton: 'Calculate',
    resetButton: 'Reset',
    frequencies: {
      annual: 'Annually',
      monthly: 'Monthly'
    }
  }}
  currency="$"
/>
```

### Ocultar campos específicos

```jsx
<CompoundInterestCalculator
  showFields={{
    principal: true,
    contribution: false,  // Ocultar aportaciones periódicas
    contributionFrequency: false,
    compoundingFrequency: false  // Ocultar frecuencia de capitalización
  }}
/>
```

### Con callback de cálculo

```jsx
import { CompoundInterestCalculator } from 'compound-interest-calculator';
import 'compound-interest-calculator/dist/style.css';

function App() {
  const handleCalculate = (result) => {
    console.log('Resultado:', result);
    // result contiene: { principal, rate, time, frequency, totalAmount, interestEarned }
  };

  return (
    <CompoundInterestCalculator
      onCalculate={handleCalculate}
    />
  );
}
```

### Con clase CSS personalizada

```jsx
import { CompoundInterestCalculator } from 'compound-interest-calculator';
import 'compound-interest-calculator/dist/style.css';
import './mi-estilo.css';

function App() {
  return (
    <CompoundInterestCalculator
      className="mi-calculadora-personalizada"
    />
  );
}
```

## Props

| Prop | Tipo | Descripción | Por defecto |
|------|------|-------------|-------------|
| `className` | `string` | Clase CSS adicional para el componente | `''` |
| `theme` | `object` | Objeto con colores personalizados (ver detalles abajo) | `{}` |
| `onCalculate` | `function` | Callback que se ejecuta al calcular, recibe el resultado como parámetro | `undefined` |
| `labels` | `object` | Textos personalizables para todos los elementos del componente | Ver textos por defecto |
| `currency` | `string` | Símbolo de moneda a mostrar | `'€'` |
| `showFields` | `object` | Controla qué campos mostrar/ocultar | Todos visibles |

### Prop `theme`

Objeto con las siguientes propiedades opcionales:

```javascript
{
  primaryColor: '#007bff',      // Color principal (botones, bordes activos)
  accentColor: '#28a745',       // Color de acento (interés ganado)
  backgroundColor: '#ffffff',    // Color de fondo del componente
  textColor: '#333',            // Color del texto
  borderColor: '#ddd',          // Color de bordes
  inputBackground: '#f9f9f9'    // Color de fondo de inputs
}
```

### Prop `labels`

Objeto con textos personalizables. Propiedades principales:

```javascript
{
  title: 'Calculadora de Interés Compuesto',
  principal: 'Capital Inicial',
  contribution: 'Aportación Periódica',
  contributionFrequency: 'Frecuencia de Aportación',
  rate: 'Tasa de Interés Anual',
  time: 'Tiempo',
  timeUnit: 'años',
  compoundingFrequency: 'Frecuencia de Capitalización',
  calculateButton: 'Calcular',
  resetButton: 'Reiniciar',
  resultsTitle: 'Resultados',
  principalResult: 'Capital Inicial',
  contributionsResult: 'Aportaciones Totales',
  totalInvested: 'Total Invertido',
  interestEarned: 'Interés Ganado',
  totalAmount: 'Monto Total Final',
  chartTitle: 'Distribución',
  principalLabel: 'Capital Inicial',
  contributionsLabel: 'Aportaciones',
  interestLabel: 'Interés Ganado',
  frequencies: {
    annual: 'Anual',
    semiannual: 'Semestral',
    quarterly: 'Trimestral',
    monthly: 'Mensual',
    daily: 'Diario'
  },
  placeholders: {
    principal: 'Ej: 10000 (opcional si hay aportaciones)',
    contribution: 'Ej: 200 (opcional)',
    rate: 'Ej: 5',
    time: 'Ej: 10'
  },
  validations: {
    invalidNumbers: 'Por favor, ingresa valores numéricos válidos',
    negativeValues: 'Los valores no pueden ser negativos',
    noPrincipalOrContribution: 'Debes ingresar al menos un capital inicial o una aportación periódica'
  }
}
```

### Prop `showFields`

Objeto para controlar la visibilidad de campos:

```javascript
{
  principal: true,                  // Mostrar campo de capital inicial
  contribution: true,               // Mostrar campo de aportación periódica
  contributionFrequency: true,      // Mostrar selector de frecuencia de aportación
  compoundingFrequency: true        // Mostrar selector de frecuencia de capitalización
}
```

## Objeto de resultado

Cuando se realiza un cálculo, el callback `onCalculate` recibe un objeto con la siguiente estructura:

```javascript
{
  principal: 10000,             // Capital inicial
  contribution: 200,            // Aportación periódica
  contributionFrequency: 12,    // Frecuencia de aportación
  totalContributed: 34000,      // Total invertido (capital + aportaciones)
  rate: 5,                      // Tasa de interés anual (%)
  time: 10,                     // Tiempo en años
  frequency: 12,                // Frecuencia de capitalización
  totalAmount: 41139.47,        // Monto total final
  interestEarned: 7139.47       // Interés ganado
}
```

## Desarrollo

### Requisitos previos

- Node.js 16 o superior
- npm o yarn

### Instalación de dependencias

```bash
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo en `http://localhost:5173` donde podrás ver ejemplos del componente.

### Build de la librería

```bash
npm run build
```

Esto generará los archivos de distribución en la carpeta `dist/`.

### Vista previa del build

```bash
npm run preview
```

## Publicación en GitHub

Para que otros puedan instalar tu librería desde GitHub, sigue estos pasos:

### 1. Construir la librería

Antes de hacer commit y push, asegúrate de construir la librería:

```bash
npm run build
```

Esto generará los archivos en `dist/` que son necesarios para que funcione la librería.

### 2. Verificar archivos incluidos

Asegúrate de que la carpeta `dist/` NO esté en `.gitignore` (debe ser committeada al repositorio para que GitHub la incluya).

El `package.json` ya está configurado con el campo `files: ["dist"]` para incluir solo los archivos necesarios.

### 3. Commit y push

```bash
git add .
git commit -m "Build de la librería para publicación"
git push origin main
```

### 4. Instalación desde GitHub

Una vez publicado, otros usuarios podrán instalar tu librería con:

```bash
npm install github:tu-usuario/compound-interest-calculator
```

### 5. Versionado (Opcional)

Para crear versiones específicas, usa git tags:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Los usuarios podrán instalar versiones específicas:

```bash
npm install github:tu-usuario/compound-interest-calculator#v1.0.0
```

## Licencia

MIT
