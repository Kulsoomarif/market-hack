
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Phone, Mail } from "lucide-react";

const TopHeader = () => {


  return (
    <header>
      {/* Top Header */}
      <div className="bg-green-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>
              <Phone /> (225) 555-0118
            </span>
            <span>
              <Mail /> michelle.rivera@example.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us and get a chance to win 80% off</span>
            <div className="flex space-x-2">
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
        </div>
      </div>
      </header>
  );
};

export default TopHeader;
