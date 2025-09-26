import React from "react";
import { FaRegCalendarDays } from "react-icons/fa6";

const TicketCard = ({data}) => {
  // Priority color mapping
  const priorityColor = {
    High: "text-red-600 font-semibold",
    Medium: "text-yellow-600 font-semibold",
    Low: "text-green-600 font-semibold",
  };

  // Status style mapping
  const statusColor = {
    Open: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Resolved: "bg-gray-100 text-gray-700",
  };
    return (
    <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-2 shadow-sm">
      {/* Title + Status */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">
          {data.title}
        </h3>
        <span
          className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${statusColor[data.status]}`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              data.status === "Open"
                ? "bg-green-600"
                : data.status === "Pending"
                ? "bg-yellow-600"
                : "bg-gray-500"
            }`}
          ></span>
          {data.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">{data.description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
        <div className="flex items-center gap-2">
          <span className={priorityColor[data.priority]}>
            {data.priority.toUpperCase()} PRIORITY
          </span>
        </div>
        <span>{data.customer}</span>
        <div className="flex items-center gap-1">
          <FaRegCalendarDays />

          {new Date(data.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
