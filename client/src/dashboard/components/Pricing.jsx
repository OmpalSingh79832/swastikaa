import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Current Plan',
      price: '₹0',
      features: ['Access to basic features', '1 project', 'Community support'],
      buttonText: 'Get Started',
      bgColor: 'bg-gray-800',
    },
    {
      name: 'Pro Plan',
      price: '₹499/month',
      features: ['Access to all features', 'Unlimited projects', 'Priority support'],
      buttonText: 'Upgrade Now',
      bgColor: 'bg-blue-800',
    },
    {
      name: 'Enterprise Plan',
      price: '₹999/month',
      features: ['Custom solutions', 'Dedicated account manager', '24/7 support'],
      buttonText: 'Contact Us',
      bgColor: 'bg-green-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Pricing Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${plan.bgColor} text-center`}
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="text-gray-300 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200"
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
