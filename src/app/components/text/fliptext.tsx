"use client"

import React from 'react'
import SlightFlip from '../ui/flip-text'

function Fliptext() {
  return (
    <SlightFlip
      className="font-bold -tracking-widest text-white space-x-1 dark:text-white text-2xl md:text-5xl w-full text-center"
      word="Forgez un espace de travail pour votre Entreprise"
    />
  );
}

export default Fliptext;
