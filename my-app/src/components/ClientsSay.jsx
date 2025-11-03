import React from 'react';

// Import images from assets
import people1 from '../assets/people1.png';
import people2 from '../assets/people2.png';
import people3 from '../assets/people3.png';

// Map JSON filenames to imported images
const imageMap = {
  "people1.png": people1,
  "people2.png": people2,
  "people3.png": people3
};

const ClientsSay = ({
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it — hear from businesses we've helped grow.",
  bgColor = "#EFF6FF",
  textColor = "#000000",
  gridCols = "md:grid-cols-3",
  clients = [] // Pass JSON data here
}) => {
  return (
    <div
      className="py-10 px-4 md:px-10"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="mt-2">{subtitle}</p>
      </div>

      {/* Clients Grid */}
      <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* ⭐ Read-only Rating */}
            <div className="flex mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${star <= client.rating ? "text-yellow-400" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.948c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.948a1 1 0 00-.364-1.118L2.075 9.375c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.948z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-left mb-4">{client.review}</p>

            {/* Client Info */}
            <div className="flex items-center space-x-3">
              <img
                src={imageMap[client.img] || client.img}
                alt={client.name}
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{client.name}</h4>
                <p className="text-sm text-gray-600">{client.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSay;
