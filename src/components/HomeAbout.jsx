import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Microscope } from 'lucide-react';

const HomeAbout = () => {
  return (
    <div>
      {/* Home / Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blue-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-pink-700 bg-pink-50 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Activity className="w-4 h-4" /> Early Detection Matters
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
                Breast Cancer Prediction System
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                A supportive, educational experience to understand risk predictions using
                machine learning. Learn how input features relate to outcomes and why
                early screening can save lives.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#predict" className="px-5 py-3 rounded-md text-white bg-gradient-to-r from-pink-500 to-blue-500 shadow hover:shadow-lg transition-shadow">
                  Try the Predictor
                </a>
                <a href="#about" className="px-5 py-3 rounded-md border border-pink-200 text-pink-700 hover:bg-pink-50">
                  How it Works
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-200/60 to-blue-200/60 p-1">
                <div className="w-full h-full rounded-3xl bg-white/70 backdrop-blur flex items-center justify-center">
                  <Microscope className="w-28 h-28 text-pink-500" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About the Model */}
      <section id="about" className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">About the Model</h2>
              <p className="mt-4 text-slate-600">
                This educational tool demonstrates how AI models can analyze clinical features to
                predict whether a tumor is likely benign or malignant. Models are typically trained
                on reputable datasets like the Wisconsin Diagnostic Breast Cancer dataset, learning
                relationships between measurements and outcomes.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-700">1</span>
                  Data preparation: features such as mean radius, texture, smoothness, and
                  compactness are standardized.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-700">2</span>
                  Model training: algorithms learn patterns that separate benign from malignant
                  cases.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-700">3</span>
                  Inference: new inputs are processed to produce a prediction and confidence score.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Interpretable Features</h3>
              </div>
              <p className="mt-3 text-slate-600">
                Each input corresponds to a clinical measurement. While models can be highly
                accurate, they are not a substitute for professional medical advice or
                diagnostic procedures.
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Mean radius', desc: 'Average size of the cell nuclei.' },
                  { label: 'Texture', desc: 'Variation in pixel intensity.' },
                  { label: 'Smoothness', desc: 'Local variation in radius lengths.' },
                  { label: 'Compactness', desc: 'Perimeter^2 / area - 1.0.' },
                ].map((f) => (
                  <div key={f.label} className="rounded-lg border border-pink-100 bg-white p-4">
                    <div className="font-medium text-slate-800">{f.label}</div>
                    <div className="text-sm text-slate-600">{f.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
