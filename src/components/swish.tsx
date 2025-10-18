"use client";

import Image, { StaticImageData } from 'next/image';

const copy = (swishNumber: string) => {
  navigator.clipboard.writeText('1233956620');
  alert('Swish-nummer kopierat');
}

export function Swish({ swishNumber, qr }: { swishNumber: string; qr: StaticImageData }) {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 max-w-[300px] flex flex-col justify-center gap-2">
        <button
          className="block md:hidden rounded-2xl bg-carbon hover:bg-carbon/80 transition-colors text-white px-4 py-2"
          onClick={() => copy(swishNumber)}
        >Kopiera numret</button>
        <a href="https://app.swish.nu/paymentrequest">
          <Image
            src={qr}
            alt="QR-kod för swish"
          />
        </a>
      </div>
    </div>

  )
}
