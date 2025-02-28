// import React from 'react';

// function Footer() {
//   return (
//     <div className="bg-[#001E3C] text-white py-2 text-center">
    
//       <p className="text-sm">
//           Copyright © 2025 Wizia. All rights reserved.
//       </p>
//     </div>
//   );
// }

// export default Footer;


import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-xl text-gray-300">WiZin</span> 
        </div>
        <div>
          <p className="text-sm">Copyright © 2025 Wizia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;