import React from 'react'

function Footer() {
  return (
    <div>
<footer
  className="flex flex-col items-center bg-white text-center text-black">
  <div className="container p-6">
    <div className="">
      <p className="flex items-center justify-center">
        <span className='me-4'>Inscrivez-vous gratuitement</span>
        <button
          type="button"
          className="inline-block rounded-full border-2 border-black px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-black hover:text-black focus:border-black focus:text-black focus:outline-none focus:ring-0 active:border-black active:text-black dark:hover:bg-black dark:focus:bg-black"
          data-twe-ripple-init
          data-twe-ripple-color="dark">
          Inscription
        </button>
      </p>
    </div>
  </div>

  <div className="w-full bg-white p-4 text-center">
    © 2024 Copyright:
    <a href="https://tw-elements.com/">TW Elements</a>
  </div>
</footer>
    </div>
  )
}

export default Footer