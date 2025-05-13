import React from "react";

const Map = () => {
  return (
    <>
      {/* Map Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-bl pb-2 bg-clip-text text-transparent  to-green-900  from-green-300 tracking-tight mb-6 flex items-center justify-center gap-3 animate-fade-in">
          Jim Corbett Safari Map
        </h3>
        <div className="relative h-96 w-full max-w-7xl max-h-full mx-auto rounded-lg overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4032.0759003639455!2d79.06801346656812!3d29.398295154002643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIzJzUzLjMiTiA3OcKwMDQnMDUuOCJF!5e1!3m2!1sen!2sin!4v1747045650881!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            className="w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-green-700 mt-6 max-w-2xl mx-auto animate-fade-in delay-100">
          Navigate the <strong>Jim Corbett Safari</strong> zones with our map,
          highlighting key areas like Dhikala, Bijrani, Jhirna, and more for
          your <strong>Jungle Safari</strong> adventure.
        </p>
      </div>
    </>
  );
};

export default Map;
