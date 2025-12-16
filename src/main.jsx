import React from 'react';
import ReactDOM from 'react-dom/client';
import CompoundInterestCalculator from './CompoundInterestCalculator';

const DemoSection = ({ title, description, children }) => (
  <div style={{
    marginTop: '3rem',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
    <h2 style={{ marginTop: 0, color: '#333' }}>{title}</h2>
    {description && <p style={{ color: '#666', marginBottom: '1.5rem' }}>{description}</p>}
    {children}
  </div>
);

// Archivo de desarrollo para probar el componente
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '1rem' }}>
        Demo - Calculadora de Interés Compuesto
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
        Ejemplos de personalización mediante props
      </p>

      {/* Ejemplo 1: Básico */}
      <DemoSection
        title="1. Configuración por defecto"
        description="Calculadora básica sin personalización, con todos los campos visibles."
      >
        <CompoundInterestCalculator />
      </DemoSection>

      {/* Ejemplo 2: Tema personalizado completo */}
      <DemoSection
        title="2. Tema personalizado completo"
        description="Colores personalizados y callback para capturar resultados."
      >
        <CompoundInterestCalculator
          theme={{
            primaryColor: '#9c27b0',
            accentColor: '#ff6f00',
            backgroundColor: '#fafafa',
            textColor: '#1a1a1a',
            borderColor: '#9c27b0',
            inputBackground: '#fff'
          }}
          onCalculate={(result) => {
            console.log('Resultado del cálculo:', result);
          }}
        />
      </DemoSection>

      {/* Ejemplo 3: Inglés con dólares */}
      <DemoSection
        title="3. English version with USD"
        description="Fully translated to English with dollar currency."
      >
        <CompoundInterestCalculator
          currency="$"
          labels={{
            title: 'Compound Interest Calculator',
            principal: 'Initial Capital',
            contribution: 'Periodic Contribution',
            contributionFrequency: 'Contribution Frequency',
            rate: 'Annual Interest Rate',
            time: 'Time',
            timeUnit: 'years',
            compoundingFrequency: 'Compounding Frequency',
            calculateButton: 'Calculate',
            resetButton: 'Reset',
            resultsTitle: 'Results',
            principalResult: 'Initial Capital',
            contributionsResult: 'Total Contributions',
            totalInvested: 'Total Invested',
            interestEarned: 'Interest Earned',
            totalAmount: 'Final Total Amount',
            chartTitle: 'Distribution',
            principalLabel: 'Initial Capital',
            contributionsLabel: 'Contributions',
            interestLabel: 'Interest Earned',
            frequencies: {
              annual: 'Annually',
              semiannual: 'Semi-annually',
              quarterly: 'Quarterly',
              monthly: 'Monthly',
              daily: 'Daily'
            },
            placeholders: {
              principal: 'Ex: 10000 (optional if there are contributions)',
              contribution: 'Ex: 200 (optional)',
              rate: 'Ex: 5',
              time: 'Ex: 10'
            },
            validations: {
              invalidNumbers: 'Please enter valid numeric values',
              negativeValues: 'Values cannot be negative',
              noPrincipalOrContribution: 'You must enter at least an initial capital or a periodic contribution'
            }
          }}
          theme={{
            primaryColor: '#0066cc',
            accentColor: '#00aa44'
          }}
        />
      </DemoSection>

      {/* Ejemplo 4: Versión simplificada */}
      <DemoSection
        title="4. Versión simplificada"
        description="Solo capital inicial, sin aportaciones periódicas ni frecuencia de capitalización visible."
      >
        <CompoundInterestCalculator
          showFields={{
            principal: true,
            contribution: false,
            contributionFrequency: false,
            compoundingFrequency: false
          }}
          theme={{
            primaryColor: '#2c3e50',
            accentColor: '#e74c3c'
          }}
        />
      </DemoSection>

      {/* Ejemplo 5: Tema oscuro */}
      <DemoSection
        title="5. Tema oscuro"
        description="Ejemplo con colores oscuros y moneda en libras."
      >
        <CompoundInterestCalculator
          currency="£"
          theme={{
            primaryColor: '#bb86fc',
            accentColor: '#03dac6',
            backgroundColor: '#1e1e1e',
            textColor: '#e1e1e1',
            borderColor: '#3a3a3a',
            inputBackground: '#2d2d2d',
            resultBackground: '#252525',
            labelColor: '#a0a0a0'
          }}
        />
      </DemoSection>

    </div>
  </React.StrictMode>
);
