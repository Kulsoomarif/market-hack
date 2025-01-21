import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Phone, Mail } from "lucide-react";

const TopHeader = () => {
  return (
    <header>
      
      <div className="bg-green-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="mr-2" /> (225) 555-0118
            </span>
            <span className="flex items-center">
              <Mail className="mr-2" /> michelle.rivera@example.com
            </span>
          </div>

        
          <div className="flex items-center space-x-4">
            <span>Follow Us and get a chance to win 80% off</span>
            <div className="flex space-x-2">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white hover:text-blue-600 text-lg sm:text-sm"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white hover:text-pink-600 text-lg sm:text-sm"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white hover:text-blue-400 text-lg sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;