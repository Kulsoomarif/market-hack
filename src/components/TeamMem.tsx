import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const TeamMem = () => {
  return (
    <div>
      <section className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 text-center">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="text-center" key={index}>
              <Image
                src={`/team/${index + 1}.jpg`}
                alt={`Team Member ${index + 1}`}
                className="object-cover rounded-md"
                width={392}
                height={231}
              />
              <h4 className="mt-4 text-lg font-medium text-gray-800">Username {index + 1}</h4>
              <p className="text-sm text-gray-500">Profession {index + 1}</p>
              <div className="flex justify-center space-x-2 mt-4">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-600 hover:text-gray-600 text-[2px]"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-blue-600 hover:text-gray-600 text-[2px]"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-blue-600 hover:text-gray-600 text-[2px]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamMem;
