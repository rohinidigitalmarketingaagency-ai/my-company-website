import React from 'react';

export default function TermsOfService({ navigateTo }) {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-extrabold text-textPrimary mb-8">Terms of Service</h1>
        <div className="text-textSecondary space-y-6 leading-relaxed">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to Rohini Digital Marketing Agency!
          </p>
          <p>
            These terms and conditions outline the rules and regulations for the use of Rohini Digital Marketing Agency's Website.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use our website if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-bold text-textPrimary mt-10 mb-4">Cookies</h2>
          <p>
            We employ the use of cookies. By accessing the website, you agreed to use cookies in agreement with the Rohini Digital Marketing Agency's Privacy Policy.
          </p>
          <p>
            Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
          </p>

          <h2 className="text-2xl font-bold text-textPrimary mt-10 mb-4">License</h2>
          <p>
            Unless otherwise stated, Rohini Digital Marketing Agency and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access this from the website for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Republish material from the website</li>
            <li>Sell, rent or sub-license material from the website</li>
            <li>Reproduce, duplicate or copy material from the website</li>
            <li>Redistribute content from the website</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
