import ShineBorder from "@/app/components/ui/shine-border";
import React from 'react'
import Cardhome from "../card/cardHome";

function BorderShineHome() {
  return (
    <ShineBorder
    className="relative flex h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
  >
    <Cardhome/>
  
    
  </ShineBorder>
  )
}

export default BorderShineHome