import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black p-8 text-center text-white">
      <div className="grid grid-cols-3 gap-8 text-left">
        
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="h-[283x] w-[198x] object-contain mr-2" 
            />
           
          </div>
        </div>

        <div className="flex flex-col items-start p-5">
          <h4 className="text-[#ED8325] text-lg font-semibold mb-4">Info</h4>
          <ul className="space-y-2">
            <li className="text-white font-semibold drop-shadow-md">Home</li>
            <li className="text-white font-semibold drop-shadow-md">Reunion Registrations</li>
            <li className="text-white font-semibold drop-shadow-md">Participants</li>
            <li className="text-white font-semibold drop-shadow-md">Memories</li>
          </ul>
        </div>

        <div className="flex flex-col items-start p-5">
          <h4 className="text-[#ED8325] text-lg font-semibold mb-4">Contact</h4>
          <p className="text-white font-semibold drop-shadow-md mb-4">+1 (000) 000-0000</p>
          <p className="text-white font-semibold drop-shadow-md">123, Lorem Ipsum is</p>
          <p className="text-white font-semibold drop-shadow-md">xxxxxxxxxxxxxx, CA, 00000</p>
        </div>

      </div>

      <div className="mt-8 border-t border-gray-600 pt-4">
        <p className="text-sm text-left text-white">Copyright © Malai95.com</p>
      </div>
    </footer>
  );
};

export default Footer;
