"use client";

import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 cursor-pointer hover:border-blue-200 transition-colors">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-primary-100 rounded-lg">
          <Icon size={20} className="text-primary-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
