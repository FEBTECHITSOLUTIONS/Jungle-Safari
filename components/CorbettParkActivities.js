"use client";

import { useState } from 'react';
import { FiUsers, FiClock, FiMapPin, FiMap, FiCheckCircle, FiInfo, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import { FaBed, FaCar, FaTree } from 'react-icons/fa';

export default function CorbettParkActivities() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const activities = [
    {
      id: 1,
      title: 'Corbett Jeep Safari',
      price: 7500,
      priceUnit: 'jeep',
      image: '/api/placeholder/450/300',
      maxPeople: '6 / jeep',
      time: 'Morning & Evening (3 hours)',
      departure: 'Ramnagar',
      zones: 'Bijrani, Jhirna, Dhela, Durga Devi, Garjiya, Phato',
      inclusion: 'Permit, Jeep Charges, Driver Charges, All Taxes',
      note: 'Guide fee to be paid by the guest on the spot on his own',
      icon: <FaCar className="text-green-600" />
    },
    {
      id: 2,
      title: 'Dhikala Canter Safari',
      price: 2500,
      priceUnit: 'person',
      image: '/api/placeholder/450/300',
      maxPeople: '16 / Canter',
      time: 'Morning & Evening (5 hours)',
      departure: 'Ramnagar',
      zones: 'Dhikala',
      inclusion: '',
      note: '',
      icon: <FaCar className="text-green-600" />
    },
    {
      id: 3,
      title: 'Elephant Ride',
      price: 3500,
      priceUnit: 'elephant',
      image: '/api/placeholder/450/300',
      maxPeople: '4 / Elephant',
      time: 'Morning & Evening (2 hours)',
      departure: 'Ramnagar',
      zones: 'Sitabani (Corbett Landscape)',
      inclusion: '',
      note: '',
      icon: <FaCar className="text-green-600" />
    },
    {
      id: 4,
      title: 'Corbett Night Stay',
      price: 4750,
      priceUnit: 'person',
      image: '/api/placeholder/450/300',
      maxPeople: '',
      time: '',
      departure: '',
      zones: '',
      destination: 'Dhikala, Bijrani, Jhirna, Dhela',
      inclusion: 'Permit Charges, Jeep Charges, Driver Charges, House Keeping, All Taxes',
      note: 'Guide fee to be paid by the guest on the spot on his own',
      icon: <FaBed className="text-green-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <header className="bg-gradient-to-r from-green-800 to-amber-700 py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl text-center font-bold text-white tracking-wider">
            EXPLORE CORBETT NATIONAL PARK
          </h1>
          <p className="text-center text-white/90 mt-2 italic">
            Discover the wilderness of India&#39;s oldest national park
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-green-100"
              onMouseEnter={() => setHoveredCard(activity.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative w-full h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <Image 
                  src={activity.image} 
                  alt={activity.title}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-transform duration-700 ${hoveredCard === activity.id ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute bottom-0 left-0 z-10 p-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    {activity.icon}
                    {activity.title}
                  </h2>
                  <div className="flex items-center mt-1">
                    <span className="text-white font-bold text-lg">₹ {activity.price.toLocaleString()}</span>
                    <span className="text-white/90 text-sm ml-1">/ {activity.priceUnit}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-3">
                {activity.maxPeople && (
                  <div className="flex items-center text-gray-700">
                    <FiUsers className="mr-2 text-green-600" />
                    <span className="text-sm">Max People: <span className="font-medium">{activity.maxPeople}</span></span>
                  </div>
                )}
                
                {activity.time && (
                  <div className="flex items-center text-gray-700">
                    <FiClock className="mr-2 text-green-600" />
                    <span className="text-sm">Time: <span className="font-medium">{activity.time}</span></span>
                  </div>
                )}
                
                {activity.departure && (
                  <div className="flex items-center text-gray-700">
                    <FiMapPin className="mr-2 text-green-600" />
                    <span className="text-sm">Departure: <span className="font-medium">{activity.departure}</span></span>
                  </div>
                )}
                
                {activity.zones && (
                  <div className="flex items-start text-gray-700">
                    <FiMap className="mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Zones: <span className="font-medium">{activity.zones}</span></span>
                  </div>
                )}
                
                {activity.destination && (
                  <div className="flex items-start text-gray-700">
                    <FiMap className="mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Destination: <span className="font-medium">{activity.destination}</span></span>
                  </div>
                )}
                
                {activity.inclusion && (
                  <div className="flex items-start text-gray-700">
                    <FiCheckCircle className="mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Inclusion: <span className="font-medium">{activity.inclusion}</span></span>
                  </div>
                )}
                
                {activity.note && (
                  <div className="flex items-start text-gray-700">
                    <FiInfo className="mr-2 mt-0.5 text-amber-600 flex-shrink-0" />
                    <span className="text-sm">Note: <span className="font-medium">{activity.note}</span></span>
                  </div>
                )}
                
                <button className="w-full mt-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300 flex items-center justify-center group">
                  Book Now
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-amber-100 to-green-100 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-900 flex items-center">
            <FaTree className="mr-2" />
            Why Visit Corbett National Park?
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <FiCheckCircle className="mt-1 mr-2 text-green-600" />
              <p className="text-gray-700">Home to over 600 species of birds and animals including Bengal tigers</p>
            </div>
            <div className="flex items-start">
              <FiCheckCircle className="mt-1 mr-2 text-green-600" />
              <p className="text-gray-700">Diverse landscapes including hills, riverine belts, grasslands and dense forests</p>
            </div>
            <div className="flex items-start">
              <FiCheckCircle className="mt-1 mr-2 text-green-600" />
              <p className="text-gray-700">Eco-friendly tourism practices with focus on conservation</p>
            </div>
            <div className="flex items-start">
              <FiCheckCircle className="mt-1 mr-2 text-green-600" />
              <p className="text-gray-700">Exciting safari experiences in various zones of the park</p>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
}
