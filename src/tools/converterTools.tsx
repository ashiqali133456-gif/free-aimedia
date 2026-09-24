import React, { useState, useMemo } from 'react';
import { ArrowRightLeft, RefreshCw } from 'lucide-react';
import { ToolDefinition } from '../types';

interface ConverterToolsProps {
  tool: ToolDefinition;
}

export const ConverterTools: React.FC<ConverterToolsProps> = ({ tool }) => {
  const [inputValue, setInputValue] = useState<number>(1);
  const [fromUnit, setFromUnit] = useState<string>('');
  const [toUnit, setToUnit] = useState<string>('');

  // Unit definitions and base conversions (converted to a single base unit)
  const config = useMemo(() => {
    switch (tool.slug) {
      case 'length-converter':
        return {
          units: [
            { id: 'm', name: 'Meters (m)', factor: 1 },
            { id: 'km', name: 'Kilometers (km)', factor: 1000 },
            { id: 'cm', name: 'Centimeters (cm)', factor: 0.01 },
            { id: 'mm', name: 'Millimeters (mm)', factor: 0.001 },
            { id: 'mi', name: 'Miles (mi)', factor: 1609.344 },
            { id: 'yd', name: 'Yards (yd)', factor: 0.9144 },
            { id: 'ft', name: 'Feet (ft)', factor: 0.3048 },
            { id: 'in', name: 'Inches (in)', factor: 0.0254 },
            { id: 'nmi', name: 'Nautical Miles', factor: 1852 },
          ],
          defaultFrom: 'm',
          defaultTo: 'ft',
        };

      case 'weight-converter':
        return {
          units: [
            { id: 'kg', name: 'Kilograms (kg)', factor: 1 },
            { id: 'g', name: 'Grams (g)', factor: 0.001 },
            { id: 'mg', name: 'Milligrams (mg)', factor: 0.000001 },
            { id: 't', name: 'Metric Tons (t)', factor: 1000 },
            { id: 'lb', name: 'Pounds (lb)', factor: 0.45359237 },
            { id: 'oz', name: 'Ounces (oz)', factor: 0.028349523 },
            { id: 'st', name: 'Stones (st)', factor: 6.35029 },
          ],
          defaultFrom: 'kg',
          defaultTo: 'lb',
        };

      case 'temperature-converter':
        return {
          units: [
            { id: 'c', name: 'Celsius (°C)', factor: 1 },
            { id: 'f', name: 'Fahrenheit (°F)', factor: 1 },
            { id: 'k', name: 'Kelvin (K)', factor: 1 },
            { id: 'r', name: 'Rankine (°R)', factor: 1 },
          ],
          defaultFrom: 'c',
          defaultTo: 'f',
        };

      case 'area-converter':
        return {
          units: [
            { id: 'sqm', name: 'Square Meters (m²)', factor: 1 },
            { id: 'sqkm', name: 'Square Kilometers (km²)', factor: 1000000 },
            { id: 'sqft', name: 'Square Feet (ft²)', factor: 0.092903 },
            { id: 'sqyd', name: 'Square Yards (yd²)', factor: 0.836127 },
            { id: 'ac', name: 'Acres (ac)', factor: 4046.86 },
            { id: 'ha', name: 'Hectares (ha)', factor: 10000 },
            { id: 'sqmi', name: 'Square Miles (mi²)', factor: 2589988 },
          ],
          defaultFrom: 'sqm',
          defaultTo: 'sqft',
        };

      case 'volume-converter':
        return {
          units: [
            { id: 'l', name: 'Liters (L)', factor: 1 },
            { id: 'ml', name: 'Milliliters (mL)', factor: 0.001 },
            { id: 'gal', name: 'US Gallons (gal)', factor: 3.78541 },
            { id: 'qt', name: 'US Quarts (qt)', factor: 0.946353 },
            { id: 'pt', name: 'US Pints (pt)', factor: 0.473176 },
            { id: 'cup', name: 'US Cups', factor: 0.24 },
            { id: 'floz', name: 'US Fluid Ounces (fl oz)', factor: 0.0295735 },
            { id: 'cum', name: 'Cubic Meters (m³)', factor: 1000 },
          ],
          defaultFrom: 'l',
          defaultTo: 'gal',
        };

      case 'speed-converter':
        return {
          units: [
            { id: 'mps', name: 'Meters per second (m/s)', factor: 1 },
            { id: 'kph', name: 'Kilometers per hour (km/h)', factor: 0.277778 },
            { id: 'mph', name: 'Miles per hour (mph)', factor: 0.44704 },
            { id: 'knot', name: 'Knots (kn)', factor: 0.514444 },
            { id: 'fps', name: 'Feet per second (ft/s)', factor: 0.3048 },
          ],
          defaultFrom: 'kph',
          defaultTo: 'mph',
        };

      case 'time-converter':
        return {
          units: [
            { id: 's', name: 'Seconds (s)', factor: 1 },
            { id: 'ms', name: 'Milliseconds (ms)', factor: 0.001 },
            { id: 'min', name: 'Minutes (min)', factor: 60 },
            { id: 'hr', name: 'Hours (h)', factor: 3600 },
            { id: 'day', name: 'Days (d)', factor: 86400 },
            { id: 'week', name: 'Weeks (wk)', factor: 604800 },
            { id: 'month', name: 'Months (30 days)', factor: 2592000 },
            { id: 'yr', name: 'Years (365 days)', factor: 31536000 },
          ],
          defaultFrom: 'hr',
          defaultTo: 'min',
        };

      case 'data-storage-converter':
        return {
          units: [
            { id: 'b', name: 'Bytes (B)', factor: 1 },
            { id: 'kb', name: 'Kilobytes (KB)', factor: 1024 },
            { id: 'mb', name: 'Megabytes (MB)', factor: 1048576 },
            { id: 'gb', name: 'Gigabytes (GB)', factor: 1073741824 },
            { id: 'tb', name: 'Terabytes (TB)', factor: 1099511627776 },
            { id: 'pb', name: 'Petabytes (PB)', factor: 1125899906842624 },
          ],
          defaultFrom: 'gb',
          defaultTo: 'mb',
        };

      case 'energy-converter':
        return {
          units: [
            { id: 'j', name: 'Joules (J)', factor: 1 },
            { id: 'kj', name: 'Kilojoules (kJ)', factor: 1000 },
            { id: 'cal', name: 'Calories (cal)', factor: 4.184 },
            { id: 'kcal', name: 'Kilocalories (kcal)', factor: 4184 },
            { id: 'wh', name: 'Watt-hours (Wh)', factor: 3600 },
            { id: 'kwh', name: 'Kilowatt-hours (kWh)', factor: 3600000 },
            { id: 'btu', name: 'BTU', factor: 1055.06 },
          ],
          defaultFrom: 'kcal',
          defaultTo: 'kj',
        };

      case 'pressure-converter':
      default:
        return {
          units: [
            { id: 'pa', name: 'Pascals (Pa)', factor: 1 },
            { id: 'kpa', name: 'Kilopascals (kPa)', factor: 1000 },
            { id: 'bar', name: 'Bar', factor: 100000 },
            { id: 'psi', name: 'Pounds/sq inch (PSI)', factor: 6894.76 },
            { id: 'atm', name: 'Atmosphere (atm)', factor: 101325 },
            { id: 'torr', name: 'Torr / mmHg', factor: 133.322 },
          ],
          defaultFrom: 'bar',
          defaultTo: 'psi',
        };
    }
  }, [tool.slug]);

  // Set default units
  const activeFrom = fromUnit || config.defaultFrom;
  const activeTo = toUnit || config.defaultTo;

  // Conversion logic
  const convertedValue = useMemo(() => {
    if (isNaN(inputValue)) return 0;

    // Temperature requires custom non-linear formulas
    if (tool.slug === 'temperature-converter') {
      let celsius = inputValue;
      if (activeFrom === 'f') celsius = ((inputValue - 32) * 5) / 9;
      else if (activeFrom === 'k') celsius = inputValue - 273.15;
      else if (activeFrom === 'r') celsius = ((inputValue - 491.67) * 5) / 9;

      if (activeTo === 'c') return celsius;
      if (activeTo === 'f') return (celsius * 9) / 5 + 32;
      if (activeTo === 'k') return celsius + 273.15;
      if (activeTo === 'r') return ((celsius + 273.15) * 9) / 5;
      return celsius;
    }

    // Standard linear conversions
    const fromUnitObj = config.units.find((u) => u.id === activeFrom);
    const toUnitObj = config.units.find((u) => u.id === activeTo);
    if (!fromUnitObj || !toUnitObj) return 0;

    const inBase = inputValue * fromUnitObj.factor;
    return inBase / toUnitObj.factor;
  }, [inputValue, activeFrom, activeTo, config, tool.slug]);

  const handleSwap = () => {
    setFromUnit(activeTo);
    setToUnit(activeFrom);
  };

  return (
    <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-left">
      {/* Quick Input Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Amount to Convert
          </label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-base font-bold"
          />
        </div>

        <div className="flex md:flex-col items-center justify-center pt-5">
          <button
            type="button"
            onClick={handleSwap}
            title="Swap units"
            className="p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-600 dark:text-blue-400 transition-colors"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Calculated Result
          </label>
          <div className="w-full px-4 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-base font-black text-blue-600 dark:text-blue-400 truncate">
            {Number(convertedValue.toFixed(6)).toString()}
          </div>
        </div>
      </div>

      {/* Selectors Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">From Unit</label>
          <select
            value={activeFrom}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium"
          >
            {config.units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">To Unit</label>
          <select
            value={activeTo}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium"
          >
            {config.units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Multi-unit quick reference table */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">All Common Unit Equivalents for {inputValue} {config.units.find(u => u.id === activeFrom)?.name}</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {config.units.map((u) => {
            let eq = 0;
            if (tool.slug === 'temperature-converter') {
              let c = inputValue;
              if (activeFrom === 'f') c = ((inputValue - 32) * 5) / 9;
              else if (activeFrom === 'k') c = inputValue - 273.15;
              else if (activeFrom === 'r') c = ((inputValue - 491.67) * 5) / 9;

              if (u.id === 'c') eq = c;
              else if (u.id === 'f') eq = (c * 9) / 5 + 32;
              else if (u.id === 'k') eq = c + 273.15;
              else if (u.id === 'r') eq = ((c + 273.15) * 9) / 5;
            } else {
              const fromFactor = config.units.find((f) => f.id === activeFrom)?.factor || 1;
              eq = (inputValue * fromFactor) / u.factor;
            }

            return (
              <div key={u.id} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] font-semibold text-slate-400 block truncate">{u.name}</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 font-mono">
                  {Number(eq.toFixed(4)).toString()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
