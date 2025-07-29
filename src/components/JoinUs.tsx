import React, { useState } from 'react';
import { Users, Code, Heart, CheckCircle, User, Mail, BookOpen, Target } from 'lucide-react';

const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    interests: [] as string[],
    goals: '',
    hearAbout: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: Users,
      title: 'Free Mentorship',
      description: 'Get paired with experienced local industry professionals who volunteer their time for in-person mentorship.'
    },
    {
      icon: BookOpen,
      title: 'Structured Learning',
      description: 'Access comprehensive in-person curricula and hands-on learning paths designed by local experts.'
    },
    {
      icon: Code,
      title: 'Hands-on Projects',
      description: 'Build real-world applications through in-person workshops and create a portfolio that showcases your skills.'
    },
    {
      icon: Heart,
      title: 'Supportive Community',
      description: 'Join thousands of learners and mentors in a welcoming, inclusive local environment with face-to-face support.'
    }
  ];

  const interestOptions = [
    'Full Stack Web Development',
    'Data Science & Machine Learning',
    'Mobile App Development',
    'DevOps & Cloud Engineering',
    'System Design',
    'Interview Preparation',
    'Career Transition',
    'Open Source Contribution'
  ];

  const stats = [
    { value: '10,000+', label: 'Community Members' },
    { value: '500+', label: 'Volunteer Mentors' },
    { value: '95%', label: 'Job Placement Rate' },
    { value: '50+', label: 'Countries Represented' }
  ];

  if (isSubmitted) {
    return (
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to DevMentors!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Congratulations! You've successfully joined our community of passionate developers and mentors.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Check your email for a welcome message with next steps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Join our community Discord server to connect with others</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Browse available mentors and learning programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Attend our weekly community events and workshops</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
            >
              Explore Community
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Community
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take the first step towards your software engineering career. Join thousands of learners 
              and mentors in a supportive, free local community with in-person training dedicated to your success.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join DevMentors?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in your software engineering journey, completely free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600">
              Fill out this form to join our community and begin your journey.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Experience & Background</h3>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Experience Level *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                  >
                    <option value="">Select your experience level</option>
                    <option value="complete-beginner">Complete Beginner (No coding experience)</option>
                    <option value="some-basics">Some Basics (Familiar with HTML/CSS)</option>
                    <option value="intermediate">Intermediate (Built some projects)</option>
                    <option value="advanced">Advanced (Professional experience)</option>
                    <option value="career-change">Career Change (From another field)</option>
                  </select>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Areas of Interest</h3>
                <p className="text-sm text-gray-600 mb-4">Select all that apply (you can change these later):</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {interestOptions.map((interest, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  What are your goals? *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={4}
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-white"
                  placeholder="Tell us about your career goals, what you hope to achieve, or what you'd like to learn..."
                />
              </div>

              {/* How did you hear about us */}
              <div>
                <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about DevMentors?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="search-engine">Search Engine (Google, Bing, etc.)</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend-referral">Friend or Colleague</option>
                  <option value="online-community">Online Community/Forum</option>
                  <option value="blog-article">Blog or Article</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Joining Community...</span>
                  </>
                ) : (
                  <>
                    <Users className="w-5 h-5" />
                    <span>Join DevMentors Community</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;