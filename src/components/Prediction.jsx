import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Info, AlertCircle, CheckCircle } from 'lucide-react';

const numberOrEmpty = (v) => (v === '' || v === null || v === undefined ? '' : Number(v));

const Prediction = () => {
  const [inputs, setInputs] = useState({
    meanRadius: '',
    texture: '',
    smoothness: '',
    compactness: '',
  });
  const [result, setResult] = useState(null);

  const canPredict = useMemo(() => {
    return Object.values(inputs).every((v) => v !== '' && !Number.isNaN(Number(v)));
  }, [inputs]);

  const onChange = (e) => {
    const { name, value } = e.target;
    // allow empty string so users can clear inputs
    if (value === '') {
      setInputs((s) => ({ ...s, [name]: '' }));
      return;
    }
    const asNum = Number(value);
    if (!Number.isNaN(asNum)) {
      setInputs((s) => ({ ...s, [name]: asNum }));
    }
  };

  const predict = (e) => {
    e.preventDefault();
    if (!canPredict) return;

    // Simple educational scoring inspired by logistic regression idea.
    // Normalize rough ranges to keep values comparable.
    const r = Number(inputs.meanRadius);
    const t = Number(inputs.texture);
    const s = Number(inputs.smoothness);
    const c = Number(inputs.compactness);

    // Rough scaling based on common ranges from WDBC dataset (not exact):
    const rn = (r - 14) / 6; // mean radius ~ [6, 28]
    const tn = (t - 19) / 7; // texture ~ [9, 40]
    const sn = (s - 0.1) / 0.05; // smoothness ~ [0.05, 0.2]
    const cn = (c - 0.1) / 0.08; // compactness ~ [0.02, 0.4]

    // Weighted sum (positive weights push toward malignant)
    const z = 0.9 * rn + 0.6 * tn + 0.7 * sn + 0.8 * cn - 0.2; // bias term
    const prob = 1 / (1 + Math.exp(-z));

    const confidence = Math.round(prob * 100);
    const malignant = prob >= 0.5;

    const explanation = malignant
      ? 'Inputs indicate higher values on features often associated with malignant tumors.'
      : 'Inputs align more closely with patterns commonly seen in benign tumors.';

    setResult({
      label: malignant ? 'Malignant (educational)' : 'Benign (educational)',
      confidence,
      explanation,
      prob,
    });
  };

  return (
    <section id="predict" className="relative py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-pink-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">Prediction Input</h3>
            <p className="mt-1 text-sm text-slate-600">
              Enter measurements to receive an educational prediction. Values are not stored.
            </p>

            <form onSubmit={predict} className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { name: 'meanRadius', label: 'Mean radius', placeholder: 'e.g., 14.5' },
                { name: 'texture', label: 'Texture', placeholder: 'e.g., 19.3' },
                { name: 'smoothness', label: 'Smoothness', placeholder: 'e.g., 0.1' },
                { name: 'compactness', label: 'Compactness', placeholder: 'e.g., 0.12' },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor={f.name}>
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    inputMode="decimal"
                    type="text"
                    value={numberOrEmpty(inputs[f.name])}
                    onChange={onChange}
                    placeholder={f.placeholder}
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    required
                  />
                </div>
              ))}

              <div className="sm:col-span-2 flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Info className="w-4 h-4" />
                  Example ranges: radius 6–28, texture 9–40, smoothness 0.05–0.2, compactness 0.02–0.4
                </div>
                <button
                  type="submit"
                  disabled={!canPredict}
                  className="px-5 py-2.5 rounded-md text-white bg-gradient-to-r from-pink-500 to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed shadow hover:shadow-lg transition-shadow"
                >
                  Predict
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">Results</h3>
            {!result ? (
              <p className="mt-3 text-slate-600">
                Submit the form to see the predicted label and confidence. The explanation will
                summarize how the inputs relate to typical patterns in the dataset.
              </p>
            ) : (
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  {result.prob >= 0.5 ? (
                    <AlertCircle className="w-6 h-6 text-pink-600" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  )}
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{result.label}</div>
                    <div className="text-sm text-slate-600">Confidence: {result.confidence}%</div>
                  </div>
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-4">
                  <div className="text-sm text-slate-700">{result.explanation}</div>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Feature Summary</div>
                  <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-y-1">
                    <li>Mean radius: <span className="font-medium">{inputs.meanRadius}</span></li>
                    <li>Texture: <span className="font-medium">{inputs.texture}</span></li>
                    <li>Smoothness: <span className="font-medium">{inputs.smoothness}</span></li>
                    <li>Compactness: <span className="font-medium">{inputs.compactness}</span></li>
                  </ul>
                </div>
                <div className="text-xs text-slate-500">
                  This tool is for educational and research purposes only and is not a medical device or diagnosis.
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prediction;
