import React from 'react';

type Props = {};

const AboutUs: React.FC<Props> = (props: Props) => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-xl text-gray-600">Discover more about our mission and vision.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our mission is to connect individuals with their interests by providing an intuitive platform to explore clubs and activities. We are committed to delivering exceptional user experiences and fostering community engagement.
        </p>
        <img src="/assets/about/about1.svg" alt="Mission Visual" className="w-full max-w-4xl mx-auto rounded-lg shadow-xl border border-gray-300" />
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">What We Offer</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Explore a wide range of clubs and activities tailored to your interests. From fitness groups to hobby clubs, our platform makes it easy to find and join communities that matter to you.
        </p>
        <img src="/assets/about/about2.svg" alt="What We Offer" className="w-full max-w-4xl mx-auto rounded-lg shadow-xl border border-gray-300" />
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Get Involved</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Join us in making a difference. Whether you’re looking to join a new club or participate in exciting events, we have something for everyone.
        </p>
        <img src="/assets/about/about3.svg" alt="Get Involved" className="w-full max-w-4xl mx-auto rounded-lg shadow-xl border border-gray-300" />
      </section>
    </div>
  );
};

export default AboutUs;
