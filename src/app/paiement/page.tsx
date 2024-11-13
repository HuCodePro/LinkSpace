'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Importation de useSearchParams
import Navbar from '../components/nav/navbar';
import Footer from '../components/footer/footer';

const PaymentPage = () => {
  const searchParams = useSearchParams(); // Utilisation de useSearchParams
  const planName = searchParams.get('planName');
  const planPrice = searchParams.get('planPrice');

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Validation des champs
    const formErrors = {};
    if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
      formErrors['cardNumber'] = 'Veuillez entrer un numéro de carte valide';
    }
    if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      formErrors['expiryDate'] = 'Veuillez entrer une date d\'expiration valide (MM/AA)';
    }
    if (!cvv || !/^\d{3}$/.test(cvv)) {
      formErrors['cvv'] = 'Veuillez entrer un CVV valide (3 chiffres)';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 min-h-screen flex flex-col justify-center py-8 px-4">
        <div className="max-w-4xl w-full mx-auto bg-white shadow-2xl rounded-lg p-10">

          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Finalisez votre abonnement à {planName}</h1>

          <div className="text-center mb-6">
            <p className="text-xl font-semibold text-gray-700">Vous avez choisi le plan <span className="text-indigo-600">{planName}</span></p>
            <p className="text-lg text-gray-600">Montant à payer : <span className="text-2xl font-semibold text-indigo-600">{planPrice}</span></p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Numéro de carte</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="mt-1 block w-full p-3 border rounded-lg text-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Date d'expiration</label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="mt-1 block w-full p-3 border rounded-lg text-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="MM/AA"
                  />
                  {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                </div>

                <div className="w-1/2">
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="mt-1 block w-full p-3 border rounded-lg text-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 disabled:bg-gray-400"
              >
                {isSubmitting ? 'Traitement...' : 'Payer'}
              </button>
            </div>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
