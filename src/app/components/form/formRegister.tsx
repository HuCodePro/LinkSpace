'use client'; // Ajoute cette ligne en haut de ton fichier pour Next.js 13 ou plus

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// Validation du formulaire avec Yup
const schema = Yup.object().shape({
  email: Yup.string().email('Email invalide').required('Email est requis'),
  password: Yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').required('Mot de passe requis'),
});

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Utilise le schéma de validation
  });

  const onSubmit = (data: any) => {
    console.log('Form submitted', data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700">
        <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8 tracking-wide">Se connecter</h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  placeholder="exemple@domaine.com"
                  className="w-full p-4 mt-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-white"
                />
              )}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">Mot de passe</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full p-4 mt-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-white"
                />
              )}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg text-lg font-medium shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
          >
            Se connecter
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Vous n'avez pas de compte ? <a href="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Créer un compte</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
