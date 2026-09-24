import React, { useState, useMemo } from 'react';
import { Calculator, Calendar, DollarSign, Activity, Percent, Clock, AlertCircle } from 'lucide-react';
import { ToolDefinition } from '../types';

interface CalculatorToolsProps {
  tool: ToolDefinition;
}

export const CalculatorTools: React.FC<CalculatorToolsProps> = ({ tool }) => {
  // Age Calculator State
  const [birthDate, setBirthDate] = useState<string>('2000-01-01');

  // Percentage State
  const [percMode, setPercMode] = useState<'of' | 'is' | 'change'>('of');
  const [percX, setPercX] = useState<number>(20);
  const [percY, setPercY] = useState<number>(250);

  // Average State
  const [avgInput, setAvgInput] = useState<string>('12, 18, 24, 30, 36, 42');

  // Discount & Margin State
  const [price, setPrice] = useState<number>(100);
  const [discountPercent, setDiscountPercent] = useState<number>(20);
  const [costPrice, setCostPrice] = useState<number>(60);
  const [sellingPrice, setSellingPrice] = useState<number>(100);

  // Loan EMI & Interest State
  const [principal, setPrincipal] = useState<number>(50000);
  const [rate, setRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(5);
  const [compoundFreq, setCompoundFreq] = useState<number>(12); // monthly

  // Tip State
  const [billAmount, setBillAmount] = useState<number>(85);
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [splitCount, setSplitCount] = useState<number>(2);

  // Date Diff State
  const [startDate, setStartDate] = useState<string>('2024-01-01');
  const [endDate, setEndDate] = useState<string>('2026-12-31');

  // Time Diff State
  const [startTime, setStartTime] = useState<string>('09:00');
  const [endTime, setEndTime] = useState<string>('17:30');

  // GST / VAT State
  const [taxAmount, setTaxAmount] = useState<number>(1000);
  const [taxRate, setTaxRate] = useState<number>(18);
  const [taxType, setTaxType] = useState<'add' | 'remove'>('add');

  // Fractions & Ratios
  const [fracA, setFracA] = useState<{ n: number; d: number }>({ n: 1, d: 2 });
  const [fracB, setFracB] = useState<{ n: number; d: number }>({ n: 3, d: 4 });
  const [fracOp, setFracOp] = useState<'+' | '-' | '*' | '/'>('+');

  const [ratioA, setRatioA] = useState<number>(16);
  const [ratioB, setRatioB] = useState<number>(9);
  const [ratioC, setRatioC] = useState<number>(1920);

  // Math State
  const [numInput, setNumInput] = useState<number>(144);

  // Scientific Calc Screen
  const [calcDisplay, setCalcDisplay] = useState<string>('0');

  // Health State
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(30);
  const [heightCm, setHeightCm] = useState<number>(175);
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(9);
  const [weightKg, setWeightKg] = useState<number>(70);
  const [weightLbs, setWeightLbs] = useState<number>(154);
  const [activityLevel, setActivityLevel] = useState<number>(1.55);

  // Age Calculator computation
  const ageResults = useMemo(() => {
    if (!birthDate) return null;
    const bday = new Date(birthDate);
    const now = new Date();
    if (isNaN(bday.getTime())) return null;

    let years = now.getFullYear() - bday.getFullYear();
    let months = now.getMonth() - bday.getMonth();
    let days = now.getDate() - bday.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const diffTime = Math.abs(now.getTime() - bday.getTime());
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;

    // Next birthday calculation
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), bday.getDate());
    if (now > nextBday) {
      nextBday = new Date(now.getFullYear() + 1, bday.getMonth(), bday.getDate());
    }
    const daysUntilBday = Math.ceil((nextBday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    return { years, months, days, totalDays, totalWeeks, totalHours, daysUntilBday };
  }, [birthDate]);

  // Percentage computation
  const percResult = useMemo(() => {
    if (percMode === 'of') {
      return (percX / 100) * percY;
    } else if (percMode === 'is') {
      return percY !== 0 ? (percX / percY) * 100 : 0;
    } else {
      return percX !== 0 ? ((percY - percX) / percX) * 100 : 0;
    }
  }, [percMode, percX, percY]);

  // Average computation
  const avgResults = useMemo(() => {
    const nums = avgInput
      .split(/[, \s]+/)
      .map((s) => parseFloat(s.trim()))
      .filter((n) => !isNaN(n));

    if (nums.length === 0) return null;

    const count = nums.length;
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    const mean = sum / count;
    const sorted = [...nums].sort((a, b) => a - b);
    const min = sorted[0];
    const max = sorted[sorted.length - 1];
    const range = max - min;
    const median =
      count % 2 === 0
        ? (sorted[count / 2 - 1] + sorted[count / 2]) / 2
        : sorted[Math.floor(count / 2)];

    return { count, sum, mean, median, min, max, range };
  }, [avgInput]);

  // Discount computation
  const discountResults = useMemo(() => {
    const savings = (price * discountPercent) / 100;
    const finalPrice = Math.max(0, price - savings);
    return { savings, finalPrice };
  }, [price, discountPercent]);

  // Margin computation
  const marginResults = useMemo(() => {
    const profit = sellingPrice - costPrice;
    const margin = sellingPrice !== 0 ? (profit / sellingPrice) * 100 : 0;
    const markup = costPrice !== 0 ? (profit / costPrice) * 100 : 0;
    return { profit, margin, markup };
  }, [costPrice, sellingPrice]);

  // Loan EMI computation
  const loanResults = useMemo(() => {
    const p = principal;
    const r = rate / (12 * 100);
    const n = tenureYears * 12;

    if (r === 0) {
      const emi = p / n;
      return { emi, totalInterest: 0, totalPayment: p };
    }

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;

    return { emi, totalInterest, totalPayment };
  }, [principal, rate, tenureYears]);

  // Simple and Compound Interest
  const interestResults = useMemo(() => {
    const si = (principal * rate * tenureYears) / 100;
    const siTotal = principal + si;

    // Compound Interest: A = P(1 + r/n)^(nt)
    const n = compoundFreq;
    const ciTotal = principal * Math.pow(1 + rate / 100 / n, n * tenureYears);
    const ciInterest = ciTotal - principal;

    return { si, siTotal, ciInterest, ciTotal };
  }, [principal, rate, tenureYears, compoundFreq]);

  // Tip computation
  const tipResults = useMemo(() => {
    const tipAmount = (billAmount * tipPercent) / 100;
    const totalWithTip = billAmount + tipAmount;
    const count = Math.max(1, splitCount);
    const tipPerPerson = tipAmount / count;
    const totalPerPerson = totalWithTip / count;
    return { tipAmount, totalWithTip, tipPerPerson, totalPerPerson };
  }, [billAmount, tipPercent, splitCount]);

  // Date difference computation
  const dateDiffResults = useMemo(() => {
    const d1 = new Date(startDate);
    const d2 = new Date(endDate);
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return null;

    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const years = (totalDays / 365.25).toFixed(1);
    return { totalDays, totalWeeks, years };
  }, [startDate, endDate]);

  // GST / VAT
  const taxResults = useMemo(() => {
    const amt = taxAmount;
    const r = taxRate;
    if (taxType === 'add') {
      const tax = (amt * r) / 100;
      const total = amt + tax;
      return { tax, total, base: amt };
    } else {
      const base = amt / (1 + r / 100);
      const tax = amt - base;
      return { tax, total: amt, base };
    }
  }, [taxAmount, taxRate, taxType]);

  // BMI computation
  const bmiResults = useMemo(() => {
    let weight = weightKg;
    let heightM = heightCm / 100;

    if (unitSystem === 'imperial') {
      weight = weightLbs * 0.45359237;
      const totalInches = heightFt * 12 + heightIn;
      heightM = totalInches * 0.0254;
    }

    if (heightM <= 0 || weight <= 0) return null;
    const bmi = weight / (heightM * heightM);

    let category = 'Normal weight';
    let colorClass = 'text-emerald-600 dark:text-emerald-400';
    if (bmi < 18.5) {
      category = 'Underweight';
      colorClass = 'text-blue-600 dark:text-blue-400';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
      colorClass = 'text-amber-600 dark:text-amber-400';
    } else if (bmi >= 30) {
      category = 'Obesity';
      colorClass = 'text-red-600 dark:text-red-400';
    }

    // Healthy weight range (BMI 18.5 - 24.9)
    const minHealthyKg = 18.5 * heightM * heightM;
    const maxHealthyKg = 24.9 * heightM * heightM;

    return {
      bmi: bmi.toFixed(1),
      category,
      colorClass,
      minHealthyKg: minHealthyKg.toFixed(1),
      maxHealthyKg: maxHealthyKg.toFixed(1),
    };
  }, [unitSystem, weightKg, heightCm, weightLbs, heightFt, heightIn]);

  // BMR & Calorie computation
  const bmrResults = useMemo(() => {
    let weight = weightKg;
    let height = heightCm;

    if (unitSystem === 'imperial') {
      weight = weightLbs * 0.45359237;
      height = (heightFt * 12 + heightIn) * 2.54;
    }

    // Mifflin-St Jeor Equation
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr += gender === 'male' ? 5 : -161;

    const maintenanceCalories = Math.round(bmr * activityLevel);
    const mildLoss = Math.round(maintenanceCalories - 250);
    const standardLoss = Math.round(maintenanceCalories - 500);
    const extremeLoss = Math.round(maintenanceCalories - 1000);
    const weightGain = Math.round(maintenanceCalories + 500);

    return {
      bmr: Math.round(bmr),
      maintenanceCalories,
      mildLoss,
      standardLoss,
      extremeLoss,
      weightGain,
    };
  }, [unitSystem, gender, age, heightCm, heightFt, heightIn, weightKg, weightLbs, activityLevel]);

  // Scientific Calc evaluation helper
  const handleCalcClick = (val: string) => {
    if (val === 'C') {
      setCalcDisplay('0');
    } else if (val === '=') {
      try {
        // Safe math evaluation
        const sanitized = calcDisplay
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/\^/g, '**')
          .replace(/π/g, 'Math.PI')
          .replace(/e/g, 'Math.E')
          .replace(/sin\(/g, 'Math.sin(')
          .replace(/cos\(/g, 'Math.cos(')
          .replace(/tan\(/g, 'Math.tan(')
          .replace(/log\(/g, 'Math.log10(')
          .replace(/ln\(/g, 'Math.log(')
          .replace(/sqrt\(/g, 'Math.sqrt(');

        // eslint-disable-next-line no-eval
        const evaluated = Function(`'use strict'; return (${sanitized})`)();
        setCalcDisplay(String(parseFloat(evaluated.toFixed(8))));
      } catch {
        setCalcDisplay('Error');
      }
    } else {
      setCalcDisplay((prev) => (prev === '0' || prev === 'Error' ? val : prev + val));
    }
  };

  return (
    <div className="space-y-6 text-left">
      {/* 1. Age Calculator */}
      {tool.slug === 'age-calculator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="max-w-xs">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Select Date of Birth
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium"
            />
          </div>

          {ageResults && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 sm:col-span-3">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                  Exact Age
                </span>
                <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">
                  {ageResults.years} <span className="text-sm font-normal text-slate-500">years</span>,{' '}
                  {ageResults.months} <span className="text-sm font-normal text-slate-500">months</span>,{' '}
                  {ageResults.days} <span className="text-sm font-normal text-slate-500">days</span>
                </p>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-2">
                  🎂 Next Birthday in: {ageResults.daysUntilBday} days
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Days</span>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                  {ageResults.totalDays.toLocaleString()}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Weeks</span>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                  {ageResults.totalWeeks.toLocaleString()}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Hours</span>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                  {ageResults.totalHours.toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. Percentage Calculator */}
      {tool.slug === 'percentage-calculator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setPercMode('of')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                percMode === 'of' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              What is X% of Y?
            </button>
            <button
              onClick={() => setPercMode('is')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                percMode === 'is' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              X is what % of Y?
            </button>
            <button
              onClick={() => setPercMode('change')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                percMode === 'change' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              % Increase / Decrease
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {percMode === 'of' ? 'Percentage (X %)' : percMode === 'is' ? 'Value (X)' : 'Initial Value (X)'}
              </label>
              <input
                type="number"
                value={percX}
                onChange={(e) => setPercX(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {percMode === 'of' ? 'Total (Y)' : percMode === 'is' ? 'Total (Y)' : 'Final Value (Y)'}
              </label>
              <input
                type="number"
                value={percY}
                onChange={(e) => setPercY(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
              />
            </div>
          </div>

          <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Calculated Result</span>
            <p className="text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">
              {percResult.toFixed(2)}
              {percMode !== 'of' && '%'}
            </p>
          </div>
        </div>
      )}

      {/* 3. Average Calculator */}
      {tool.slug === 'average-calculator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Enter numbers (separated by commas or spaces)
            </label>
            <textarea
              rows={3}
              value={avgInput}
              onChange={(e) => setAvgInput(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-mono"
            />
          </div>

          {avgResults && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 sm:col-span-2">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Mean (Average)</span>
                <p className="text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">{avgResults.mean.toFixed(2)}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Median</span>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">{avgResults.median}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Sum</span>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">{avgResults.sum}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Min / Max</span>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {avgResults.min} / {avgResults.max}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Count</span>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">{avgResults.count}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. Discount & Profit Margin */}
      {(tool.slug === 'discount-calculator' || tool.slug === 'profit-margin-calculator') && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          {tool.slug === 'discount-calculator' ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Original Price ($)
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">Final Price</span>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">
                    ${discountResults.finalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-xs text-slate-400 font-semibold uppercase">You Save</span>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1">
                    ${discountResults.savings.toFixed(2)}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Cost of Goods ($)
                  </label>
                  <input
                    type="number"
                    value={costPrice}
                    onChange={(e) => setCostPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Selling Price ($)
                  </label>
                  <input
                    type="number"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Gross Margin</span>
                  <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                    {marginResults.margin.toFixed(1)}%
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-xs text-slate-400 font-semibold uppercase">Markup</span>
                  <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                    {marginResults.markup.toFixed(1)}%
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-xs text-slate-400 font-semibold uppercase">Net Profit</span>
                  <p className="text-2xl font-black text-emerald-600 mt-1">${marginResults.profit.toFixed(2)}</p>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* 5. Loan EMI & Interest */}
      {(tool.slug === 'loan-emi-calculator' ||
        tool.slug === 'simple-interest-calculator' ||
        tool.slug === 'compound-interest-calculator') && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Principal Amount ($)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Annual Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Tenure (Years)
              </label>
              <input
                type="number"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
              />
            </div>
          </div>

          {tool.slug === 'loan-emi-calculator' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Monthly EMI</span>
                <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                  ${loanResults.emi.toFixed(2)}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Interest</span>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  ${loanResults.totalInterest.toFixed(2)}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Payment</span>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  ${loanResults.totalPayment.toFixed(2)}
                </p>
              </div>
            </div>
          )}

          {tool.slug === 'simple-interest-calculator' && (
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Simple Interest</span>
                <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                  ${interestResults.si.toFixed(2)}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Maturity Value</span>
                <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                  ${interestResults.siTotal.toFixed(2)}
                </p>
              </div>
            </div>
          )}

          {tool.slug === 'compound-interest-calculator' && (
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/60">
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase">Compound Interest</span>
                <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                  ${interestResults.ciInterest.toFixed(2)}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-xs text-slate-400 font-semibold uppercase">Future Total Balance</span>
                <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                  ${interestResults.ciTotal.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 6. Tip Calculator */}
      {tool.slug === 'tip-calculator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Bill Amount ($)
              </label>
              <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Tip Percentage ({tipPercent}%)
              </label>
              <div className="flex gap-1.5 pt-1">
                {[10, 15, 18, 20, 25].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => setTipPercent(pct)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${
                      tipPercent === pct
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Split by People
              </label>
              <input
                type="number"
                min="1"
                value={splitCount}
                onChange={(e) => setSplitCount(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Tip Amount</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                ${tipResults.tipAmount.toFixed(2)}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-xs text-slate-400 font-semibold uppercase">Total Bill</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                ${tipResults.totalWithTip.toFixed(2)}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">Tip / Person</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                ${tipResults.tipPerPerson.toFixed(2)}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-xs text-slate-400 font-semibold uppercase">Total / Person</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                ${tipResults.totalPerPerson.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 7. BMI Calculator */}
      {tool.slug === 'bmi-calculator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="flex gap-3 mb-2">
            <button
              onClick={() => setUnitSystem('metric')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                unitSystem === 'metric'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Metric (cm / kg)
            </button>
            <button
              onClick={() => setUnitSystem('imperial')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                unitSystem === 'imperial'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Imperial (ft, in / lbs)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {unitSystem === 'metric' ? (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Height (ft)
                    </label>
                    <input
                      type="number"
                      value={heightFt}
                      onChange={(e) => setHeightFt(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Inches (in)
                    </label>
                    <input
                      type="number"
                      value={heightIn}
                      onChange={(e) => setHeightIn(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Weight (lbs)
                  </label>
                  <input
                    type="number"
                    value={weightLbs}
                    onChange={(e) => setWeightLbs(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                  />
                </div>
              </>
            )}
          </div>

          {bmiResults && (
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">Your Body Mass Index (BMI)</span>
                <p className="text-4xl font-black text-slate-900 dark:text-slate-100 mt-1">{bmiResults.bmi}</p>
                <p className={`text-sm font-bold mt-1 ${bmiResults.colorClass}`}>Category: {bmiResults.category}</p>
              </div>

              <div className="text-right text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <p>
                  Normal BMI Range: <strong className="text-slate-700 dark:text-slate-300">18.5 – 24.9</strong>
                </p>
                <p>
                  Healthy Weight Range:{' '}
                  <strong className="text-slate-700 dark:text-slate-300">
                    {bmiResults.minHealthyKg} – {bmiResults.maxHealthyKg} kg
                  </strong>
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 8. BMR & Calorie Calculator */}
      {(tool.slug === 'bmr-calculator' || tool.slug === 'calorie-calculator') && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Age (Years)</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Height (cm)</label>
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              />
            </div>
          </div>

          {tool.slug === 'calorie-calculator' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Activity Level
              </label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              >
                <option value={1.2}>Sedentary: little or no exercise</option>
                <option value={1.375}>Light: exercise 1-3 times/week</option>
                <option value={1.55}>Moderate: exercise 4-5 times/week</option>
                <option value={1.725}>Active: daily exercise or intense sports 3-4 times/week</option>
                <option value={1.9}>Very Active: intense exercise 6-7 times/week</option>
              </select>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Basal Metabolic Rate</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                {bmrResults.bmr} <span className="text-xs font-normal text-slate-500">kcal/day</span>
              </p>
            </div>
            {tool.slug === 'calorie-calculator' && (
              <>
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">Maintenance</span>
                  <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                    {bmrResults.maintenanceCalories} <span className="text-xs font-normal text-slate-500">kcal</span>
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-xs text-slate-400 font-semibold uppercase">Weight Loss (-0.5 kg/wk)</span>
                  <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                    {bmrResults.standardLoss} <span className="text-xs font-normal text-slate-500">kcal</span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 9. Scientific Calculator */}
      {tool.slug === 'scientific-calculator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm max-w-md mx-auto space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-right text-2xl font-bold overflow-x-auto min-h-[60px] flex items-center justify-end">
            {calcDisplay}
          </div>

          <div className="grid grid-cols-4 gap-2">
            {['sin(', 'cos(', 'tan(', 'C', 'log(', 'ln(', 'sqrt(', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '(', ')', '^', 'π', 'e', '='].map(
              (btn) => (
                <button
                  key={btn}
                  onClick={() => handleCalcClick(btn)}
                  className={`py-3 rounded-xl font-semibold text-sm transition-colors ${
                    btn === '='
                      ? 'bg-blue-600 text-white hover:bg-blue-700 col-span-2'
                      : btn === 'C'
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : isNaN(Number(btn)) && btn !== '.'
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {btn}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* 10. Square Root & General Math */}
      {tool.slug === 'square-root-calculator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="max-w-xs">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Enter Number</label>
            <input
              type="number"
              value={numInput}
              onChange={(e) => setNumInput(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Square Root (√x)</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                {numInput >= 0 ? Math.sqrt(numInput).toFixed(4) : 'NaN'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-xs text-slate-400 font-semibold uppercase">Cube Root (∛x)</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                {Math.cbrt(numInput).toFixed(4)}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-xs text-slate-400 font-semibold uppercase">Square (x²)</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                {(numInput * numInput).toLocaleString()}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-xs text-slate-400 font-semibold uppercase">Cube (x³)</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                {(numInput * numInput * numInput).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 11. Date / Time Difference */}
      {(tool.slug === 'date-difference-calculator' || tool.slug === 'time-difference-calculator') && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          {tool.slug === 'date-difference-calculator' ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                  />
                </div>
              </div>

              {dateDiffResults && (
                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Total Days</span>
                    <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                      {dateDiffResults.totalDays} Days
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                    <span className="text-xs text-slate-400 font-semibold uppercase">Total Weeks</span>
                    <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                      {dateDiffResults.totalWeeks} Weeks
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                    <span className="text-xs text-slate-400 font-semibold uppercase">Years</span>
                    <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                      ~{dateDiffResults.years} Years
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Start Time</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">End Time</label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* 12. GST & VAT Calculator */}
      {(tool.slug === 'gst-calculator' || tool.slug === 'vat-calculator') && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="flex gap-3 mb-2">
            <button
              onClick={() => setTaxType('add')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                taxType === 'add'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Add Tax (Exclusive)
            </button>
            <button
              onClick={() => setTaxType('remove')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                taxType === 'remove'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Remove Tax (Inclusive)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Amount ($)
              </label>
              <input
                type="number"
                value={taxAmount}
                onChange={(e) => setTaxAmount(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Rate (%): {taxRate}%
              </label>
              <div className="flex gap-2">
                {[5, 12, 18, 20, 28].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setTaxRate(r)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      taxRate === r ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
                    }`}
                  >
                    {r}%
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Total Amount</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">${taxResults.total.toFixed(2)}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-xs text-slate-400 font-semibold uppercase">Net / Base Price</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">${taxResults.base.toFixed(2)}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-xs text-slate-400 font-semibold uppercase">Tax Value</span>
              <p className="text-2xl font-black text-amber-600 mt-1">${taxResults.tax.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}

      {/* 13. Fraction & Ratio Calculators */}
      {tool.slug === 'fraction-calculator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="space-y-1 w-20">
              <input
                type="number"
                value={fracA.n}
                onChange={(e) => setFracA({ ...fracA, n: Number(e.target.value) })}
                className="w-full text-center py-1.5 border rounded"
              />
              <div className="h-0.5 bg-slate-300 dark:bg-slate-700" />
              <input
                type="number"
                value={fracA.d}
                onChange={(e) => setFracA({ ...fracA, d: Number(e.target.value) })}
                className="w-full text-center py-1.5 border rounded"
              />
            </div>

            <select
              value={fracOp}
              onChange={(e) => setFracOp(e.target.value as '+' | '-' | '*' | '/')}
              className="text-lg font-bold border rounded px-2 py-1"
            >
              <option value="+">+</option>
              <option value="-">−</option>
              <option value="*">×</option>
              <option value="/">÷</option>
            </select>

            <div className="space-y-1 w-20">
              <input
                type="number"
                value={fracB.n}
                onChange={(e) => setFracB({ ...fracB, n: Number(e.target.value) })}
                className="w-full text-center py-1.5 border rounded"
              />
              <div className="h-0.5 bg-slate-300 dark:bg-slate-700" />
              <input
                type="number"
                value={fracB.d}
                onChange={(e) => setFracB({ ...fracB, d: Number(e.target.value) })}
                className="w-full text-center py-1.5 border rounded"
              />
            </div>

            <span className="text-2xl font-bold">=</span>

            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Result</span>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {fracOp === '+'
                  ? `${fracA.n * fracB.d + fracB.n * fracA.d} / ${fracA.d * fracB.d}`
                  : fracOp === '-'
                  ? `${fracA.n * fracB.d - fracB.n * fracA.d} / ${fracA.d * fracB.d}`
                  : fracOp === '*'
                  ? `${fracA.n * fracB.n} / ${fracA.d * fracB.d}`
                  : `${fracA.n * fracB.d} / ${fracA.d * fracB.n}`}
              </p>
            </div>
          </div>
        </div>
      )}

      {tool.slug === 'ratio-calculator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <p className="text-xs text-slate-500">Calculate ratio proportion: A : B = C : D</p>
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="number"
              value={ratioA}
              onChange={(e) => setRatioA(Number(e.target.value))}
              className="w-24 text-center py-2 border rounded-lg font-semibold"
            />
            <span className="font-bold">:</span>
            <input
              type="number"
              value={ratioB}
              onChange={(e) => setRatioB(Number(e.target.value))}
              className="w-24 text-center py-2 border rounded-lg font-semibold"
            />
            <span className="font-bold">=</span>
            <input
              type="number"
              value={ratioC}
              onChange={(e) => setRatioC(Number(e.target.value))}
              className="w-24 text-center py-2 border rounded-lg font-semibold"
            />
            <span className="font-bold">:</span>
            <div className="w-28 text-center py-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 font-bold text-blue-600">
              {ratioA !== 0 ? ((ratioB * ratioC) / ratioA).toFixed(2) : 0}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
