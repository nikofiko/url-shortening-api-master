import React from 'react';

const Shortel = ({ originalUrl, shortenedUrl }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl) // Kopiuje shortenedUrl do schowka
      .then(() => console.log('URL copied to clipboard'))
      .catch((err) => console.error('Failed to copy URL:', err));
  };

  return (
    <div className="font-poppins bg-graybg pt-[24px] pb-[24px] gap-10">
      <div className="pl-4 pr-4 bg-white flex flex-col lg:flex-row lg:items-center justify-between rounded-xl py-[18px] lg:px-[32px] lg:max-w-none max-w-[330px]">
        <div>
          <h3 className="text-[16px] lg:text-[20px] pb-5 lg:pb-0">{originalUrl}</h3>
        </div>
        <hr className='h-0.5 pb-5 lg:pb-0'/>
        <div className="flex flex-col lg:items-center lg:flex-row">
          <h3 className="text-[16px] lg:text-[20px] text-cyan font-semibold pb-5 lg:pb-0">{shortenedUrl}</h3>
          <button
            className="lg:ml-[24px] rounded-xl text-white bg-cyan cursor-pointer hover:font-bold font-bold pt-[10px] pb-[7px] px-[31px]"
            onClick={handleCopy} // Wywołuje funkcję kopiowania
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shortel;