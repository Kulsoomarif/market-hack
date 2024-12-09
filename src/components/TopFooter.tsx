import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const TopFooter = () => {
  return (
    <div className="container mx-auto bg-gray-200 flex items-center justify-between py-4 px-6">
   
      <h1 className="text-lg font-bold">Bandage</h1>

    
      <div className="flex space-x-4">
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-gray-600 hover:text-blue-600 text-lg sm:text-sm"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-gray-600 hover:text-blue-600 text-lg sm:text-sm"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-gray-600 hover:text-blue-600 text-lg sm:text-sm"
        />
      </div>
    </div>
  );
};

export default TopFooter;
