import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import './CompoundInterestCalculator.css';

/**
 * Componente de calculadora de interés compuesto
 * @param {Object} props
 * @param {string} props.className - Clase CSS personalizada
 * @param {Object} props.theme - Objeto de tema con colores personalizables
 * @param {Function} props.onCalculate - Callback que se ejecuta cuando se calcula
 * @param {Object} props.labels - Textos personalizables para el componente
 * @param {string} props.currency - Símbolo de moneda (por defecto '€')
 * @param {Object} props.showFields - Controla qué campos mostrar
 */
const CompoundInterestCalculator = ({
  className = '',
  theme = {},
  onCalculate,
  labels = {},
  currency = '€',
  showFields = {}
}) => {
  // Textos por defecto (español)
  const defaultLabels = {
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
  };

  // Fusionar textos personalizados con los por defecto
  const texts = {
    ...defaultLabels,
    ...labels,
    frequencies: { ...defaultLabels.frequencies, ...(labels.frequencies || {}) },
    placeholders: { ...defaultLabels.placeholders, ...(labels.placeholders || {}) },
    validations: { ...defaultLabels.validations, ...(labels.validations || {}) }
  };

  // Campos visibles por defecto
  const defaultShowFields = {
    principal: true,
    contribution: true,
    contributionFrequency: true,
    compoundingFrequency: true
  };

  const visibleFields = { ...defaultShowFields, ...showFields };

  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('12'); // Mensual por defecto
  const [contribution, setContribution] = useState('');
  const [contributionFrequency, setContributionFrequency] = useState('12'); // Mensual por defecto
  const [result, setResult] = useState(null);

  const frequencies = {
    '1': texts.frequencies.annual,
    '2': texts.frequencies.semiannual,
    '4': texts.frequencies.quarterly,
    '12': texts.frequencies.monthly,
    '365': texts.frequencies.daily
  };

  const calculateCompoundInterest = (e) => {
    e.preventDefault();

    const P = parseFloat(principal) || 0;
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(frequency);
    const PMT = parseFloat(contribution) || 0;
    const contributionFreq = parseFloat(contributionFrequency);

    // Validaciones
    if (isNaN(r) || isNaN(t) || isNaN(n) || isNaN(contributionFreq)) {
      alert(texts.validations.invalidNumbers);
      return;
    }

    if (P < 0 || r < 0 || t <= 0 || n <= 0 || PMT < 0) {
      alert(texts.validations.negativeValues);
      return;
    }

    if (P === 0 && PMT === 0) {
      alert(texts.validations.noPrincipalOrContribution);
      return;
    }

    // Calcular el interés compuesto del capital inicial
    // Fórmula: FV = P(1 + r/n)^(nt)
    const futureValuePrincipal = P * Math.pow((1 + r / n), n * t);

    // Calcular el valor futuro de las aportaciones periódicas
    // Necesitamos ajustar PMT a la frecuencia de capitalización
    // Convertir la aportación a la frecuencia de capitalización
    const paymentsPerYear = contributionFreq;
    const totalPayments = paymentsPerYear * t;

    // FV de anualidad: PMT × [((1 + r/n)^(nt) - 1) / (r/n)]
    // Pero ajustado por la frecuencia de pago
    let futureValueContributions = 0;

    if (PMT > 0 && r > 0) {
      // Tasa por período de capitalización
      const ratePerPeriod = r / n;
      // Total de períodos de capitalización
      const totalCompoundingPeriods = n * t;
      // Períodos de capitalización entre cada aportación
      const compoundingPeriodsPerPayment = n / paymentsPerYear;

      // Calcular el valor futuro de cada aportación
      for (let i = 0; i < totalPayments; i++) {
        // Períodos de capitalización restantes desde esta aportación hasta el final
        const periodsRemaining = totalCompoundingPeriods - (i * compoundingPeriodsPerPayment);
        futureValueContributions += PMT * Math.pow(1 + ratePerPeriod, periodsRemaining);
      }
    } else if (PMT > 0 && r === 0) {
      // Sin interés, solo suma de aportaciones
      futureValueContributions = PMT * totalPayments;
    }

    const totalAmount = futureValuePrincipal + futureValueContributions;
    const totalContributed = P + (PMT * paymentsPerYear * t);
    const interest = totalAmount - totalContributed;

    const calculatedResult = {
      principal: P,
      contribution: PMT,
      contributionFrequency: contributionFreq,
      totalContributed: totalContributed,
      rate: r * 100,
      time: t,
      frequency: n,
      totalAmount: totalAmount,
      interestEarned: interest
    };

    setResult(calculatedResult);

    // Llamar al callback si existe
    if (onCalculate && typeof onCalculate === 'function') {
      onCalculate(calculatedResult);
    }
  };

  const reset = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setFrequency('12');
    setContribution('');
    setContributionFrequency('12');
    setResult(null);
  };

  // Aplicar tema personalizado
  const customStyles = {
    ...(theme.primaryColor && { '--primary-color': theme.primaryColor }),
    ...(theme.accentColor && { '--accent-color': theme.accentColor }),
    ...(theme.backgroundColor && { '--bg-color': theme.backgroundColor }),
    ...(theme.textColor && { '--text-color': theme.textColor }),
    ...(theme.borderColor && { '--border-color': theme.borderColor }),
    ...(theme.inputBackground && { '--input-bg': theme.inputBackground }),
    ...(theme.resultBackground && { '--result-bg': theme.resultBackground }),
    ...(theme.labelColor && { '--label-color': theme.labelColor })
  };

  return (
    <div
      className={`compound-interest-calculator ${className}`}
      style={customStyles}
    >
      <h2>{texts.title}</h2>

      <form onSubmit={calculateCompoundInterest}>
        {visibleFields.principal && (
          <div className="form-group">
            <label htmlFor="principal">{texts.principal} ({currency})</label>
            <input
              type="number"
              id="principal"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder={texts.placeholders.principal}
              step="0.01"
              min="0"
            />
          </div>
        )}

        {visibleFields.contribution && (
          <div className="form-group">
            <label htmlFor="contribution">{texts.contribution} ({currency})</label>
            <input
              type="number"
              id="contribution"
              value={contribution}
              onChange={(e) => setContribution(e.target.value)}
              placeholder={texts.placeholders.contribution}
              step="0.01"
              min="0"
            />
          </div>
        )}

        {visibleFields.contributionFrequency && (
          <div className="form-group">
            <label htmlFor="contributionFrequency">{texts.contributionFrequency}</label>
            <select
              id="contributionFrequency"
              value={contributionFrequency}
              onChange={(e) => setContributionFrequency(e.target.value)}
            >
              {Object.entries(frequencies).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="rate">{texts.rate} (%)</label>
          <input
            type="number"
            id="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder={texts.placeholders.rate}
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">{texts.time} ({texts.timeUnit})</label>
          <input
            type="number"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder={texts.placeholders.time}
            step="0.1"
            required
          />
        </div>

        {visibleFields.compoundingFrequency && (
          <div className="form-group">
            <label htmlFor="frequency">{texts.compoundingFrequency}</label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              required
            >
              {Object.entries(frequencies).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="button-group">
          <button type="submit" className="btn-calculate">
            {texts.calculateButton}
          </button>
          <button type="button" onClick={reset} className="btn-reset">
            {texts.resetButton}
          </button>
        </div>
      </form>

      {result && (
        <div className="result-section">
          <div className="results-layout">
            {/* Resultados numéricos */}
            <div className="results-numbers">
              <h3>{texts.resultsTitle}</h3>
              <div className="result-item">
                <span className="result-label">{texts.principalResult}:</span>
                <span className="result-value">{currency}{result.principal.toFixed(2)}</span>
              </div>
              {result.contribution > 0 && (
                <div className="result-item">
                  <span className="result-label">{texts.contributionsResult}:</span>
                  <span className="result-value">
                    {currency}{(result.contribution * result.contributionFrequency * result.time).toFixed(2)}
                  </span>
                </div>
              )}
              <div className="result-item">
                <span className="result-label">{texts.totalInvested}:</span>
                <span className="result-value">{currency}{result.totalContributed.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span className="result-label">{texts.interestEarned}:</span>
                <span className="result-value accent">{currency}{result.interestEarned.toFixed(2)}</span>
              </div>
              <div className="result-item total">
                <span className="result-label">{texts.totalAmount}:</span>
                <span className="result-value">{currency}{result.totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Gráfica de tarta */}
            <div className="chart-container">
            <h4>{texts.chartTitle}</h4>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={(() => {
                    const chartData = [];
                    if (result.principal > 0) {
                      chartData.push({ name: texts.principalLabel, value: result.principal, color: '#007bff' });
                    }
                    const totalContributions = result.contribution * result.contributionFrequency * result.time;
                    if (totalContributions > 0) {
                      chartData.push({ name: texts.contributionsLabel, value: totalContributions, color: '#6c757d' });
                    }
                    if (result.interestEarned > 0) {
                      chartData.push({ name: texts.interestLabel, value: result.interestEarned, color: '#28a745' });
                    }
                    return chartData;
                  })()}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, value }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = outerRadius + 25;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text
                        x={x}
                        y={y}
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                      >
                        <tspan x={x} dy="0" fill={theme.textColor || '#333'} fontSize="14" fontWeight="600">{`${name}: ${(percent * 100).toFixed(1)}%`}</tspan>
                        <tspan x={x} dy="16" fill={theme.labelColor || '#555'} fontSize="13">{`${currency}${value.toFixed(2)}`}</tspan>
                      </text>
                    );
                  }}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {(() => {
                    const chartData = [];
                    if (result.principal > 0) {
                      chartData.push(<Cell key="principal" fill="#007bff" />);
                    }
                    const totalContributions = result.contribution * result.contributionFrequency * result.time;
                    if (totalContributions > 0) {
                      chartData.push(<Cell key="contributions" fill="#6c757d" />);
                    }
                    if (result.interestEarned > 0) {
                      chartData.push(<Cell key="interest" fill="#28a745" />);
                    }
                    return chartData;
                  })()}
                </Pie>
                <Tooltip formatter={(value) => `${currency}${value.toFixed(2)}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
