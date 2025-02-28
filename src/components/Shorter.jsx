import React, { useState } from 'react';
import bg from '../assets/images/bg-shorten-desktop.svg';
import Shortel from './Shortel';

const Shorter = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [error, setError] = useState(false);

  const handleShortenUrl = async () => {
    if (!originalUrl || originalUrl.trim() === '') {
      setError(true);
      console.error('Please enter a valid URL');
      return;
    }
  
    try {
      const response = await fetch('/api/v1/shorten', { // Ścieżka pozostaje taka sama
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `url=${encodeURIComponent(originalUrl)}`,
      });
  
      const text = await response.text(); // Logujemy surową odpowiedź
      console.log('Raw response:', text);
      const data = JSON.parse(text);
      if (data.result_url) {
        setShortenedLinks([...shortenedLinks, { original: originalUrl, shortened: data.result_url }]);
        setOriginalUrl('');
        setError(false);
      } else {
        setError(true);
        console.error('API Error:', data.error || 'Unknown error');
      }
    } catch (error) {
      setError(true);
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div className="relative after:content-[' '] after:bg-graybg after:h-screen after:absolute after:w-screen after:-z-50 after:top-[84px] flex justify-center pr-5">
      <div className="max-w-fit lg:mx-[168px] 3xl:mx-auto 3xl:flex 3xl:justify-center 3xl:flex-col ml-6">
        <div className="bg-[url(src/assets/images/bg-shorten-mobile.svg)] bg-no-repeat bg-right-top lg:bg-[url(src/assets/images/bg-shorten-desktop.svg)] bg-darkviolet py-[24px] lg:py-[52px] px-[24px] lg:px-[64px] rounded-2xl relative self-center min-w-[279px] lg:min-w-none">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <input
              className={`${error ? 'border-3 border-red' : ''} outline-none font-poppins pl-[32px] rounded-xl text-[18px] min-w-[279px] lg:min-w-[769px] min-h-[54px] lg:min-h-[64px] bg-white`}
              type="text"
              placeholder="Shorten a link here..."
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <p className={`${error ? 'block' : 'hidden'} lg:hidden absolute font-poppins text-red italic top-21 text-[15px]`}>Please add a link</p>
            
            <button
              className={`${error ? 'mt-5 lg:mt-0' : ''} min-w-max rounded-xl text-white bg-cyan cursor-pointer hover:font-bold font-bold py-[15px] lg:py-[20px] px-[40px]`}
              onClick={handleShortenUrl}
            >
              Shorten It!
            </button>
          </div>
          <p className={`${error ? 'hidden lg:block' : 'hidden'} absolute font-poppins text-red italic`}>Please add a link</p>
        </div>
        <div className=" bg-graybg pt-[24px] pb-[24px] font-poppins max-w-[1080px]">
          {shortenedLinks.map((link, index) => (
            <Shortel
              key={index}
              originalUrl={link.original}
              shortenedUrl={link.shortened}
            />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Shorter;