"use client";
import Image from 'next/image';
import React from 'react';

const BuyMeACoffeeButton = () => {
  return (
    <div className="m-2 fixed bottom-0 right-0 p-4">
      <Image
            src="/keepitfree.png"
            width={200}
            height={200}
            alt="keep it free"
            className="mx-auto"
        />

      <a
        href={process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL!}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
            src="/bmc-button.png"
            width={200}
            height={200}
            alt="donate"
            className="mx-auto"
        />
      </a>
    </div>
  );
};

export default BuyMeACoffeeButton;