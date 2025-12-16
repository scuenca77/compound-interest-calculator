# Calculadora de Interés Compuesto

Componente React reutilizable para calcular interés compuesto con UI personalizable.

## Instalación

### Desde GitHub

```bash
npm install github:tu-usuario/compound-interest-calculator
```

O con yarn:

```bash
yarn add github:tu-usuario/compound-interest-calculator
```

> **Nota**: Reemplaza `tu-usuario` con tu nombre de usuario de GitHub una vez subas el repositorio.

## Uso

### Uso básico

```jsx
import { CompoundInterestCalculator } from 'compound-interest-calculator';

function App() {
  return (
    <div>
      <CompoundInterestCalculator />
    </div>
  );
}
```

### Con tema personalizado

```jsx
import { CompoundInterestCalculator } from 'compound-interest-calculator';

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

## Licencia

MIT
