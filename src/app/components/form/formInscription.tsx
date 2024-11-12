'use client'; // Ajoute cette ligne en haut de ton fichier

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const SignupForm = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Email invalide').required('Email est requis'),
    password: Yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').required('Mot de passe requis'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas').required('Confirmer le mot de passe est requis'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('Form submitted', data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700">
        <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8 tracking-wide">
          Créer un compte
        </h1>
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
                  name="email"
                  placeholder="exemple@domaine.com"
                  required
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
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full p-4 mt-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-white"
                />
              )}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 dark:text-gray-300">Confirmer votre mot de passe</label>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="••••••••"
                  required
                  className="w-full p-4 mt-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-white"
                />
              )}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-3 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:ring-offset-gray-800"
                required
              />
              <label htmlFor="terms" className="text-sm font-light text-gray-500 dark:text-gray-400">
                J'accepte les <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-500">Termes et Conditions</a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg text-lg font-medium shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
          >
            Créer un compte
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Vous avez déjà un compte ? <a href="/signin" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Se connecter</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
