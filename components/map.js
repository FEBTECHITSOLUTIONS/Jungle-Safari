import React from "react";

const Map = () => {
  return (
    <>
      {/* Map Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-bl pb-2 bg-clip-text text-transparent  to-green-900  from-green-300 tracking-tight mb-6 flex items-center justify-center gap-3 animate-fade-in">
          Jim Corbett Safari Map
        </h3>
        <div className="relative h-96 w-full max-w-7xl max-h-full mx-auto rounded-lg overflow-hidden shadow-lg ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6215072354976!2d79.05913386655202!3d29.399936230939662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a15f608f9c2b1%3A0x764de3476ad671fd!2z8J2XnfCdl7bwnZe6IPCdl5bwnZe88J2Xv_Cdl6_wnZey8J2YgfCdmIEg8J2YgPCdl67wnZez8J2XrvCdl7_wnZe2KCDwnZmF8J2ZqvCdmaPwnZmc8J2ZofCdmZog8J2ZqPCdmZbwnZmb8J2ZlvCdmafwnZmeICk!5e1!3m2!1sen!2sin!4v1747412331831!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            className="w-full"
            
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
