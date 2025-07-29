import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, CheckCircle, ArrowLeft } from 'lucide-react';
import { useParams } from 'react-router-dom';

interface EventRegisterProps {
  onBack: () => void;
}

const EventRegister: React.FC<EventRegisterProps> = ({ onBack }) => {
  const { eventId } = useParams();
  

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    dietaryRestrictions: '',
    emergencyContact: '',
    emergencyPhone: '',
    hearAbout: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock event data - in a real app, this would come from props or API
  const events = {
    'react-patterns': {
      title: 'Advanced React Patterns & Performance',
      date: 'March 15, 2024',
      time: '2:00 PM - 4:00 PM PST',
      location: 'Tech Community Center, San Francisco',
      instructor: 'Sarah Adebayo',
      instructorImage: 'https://images.pexels.com/photos/33176042/pexels-photo-33176042/free-photo-of-focused-woman-working-at-computer-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      attendees: 234,
      maxAttendees: 300,
      description: 'Deep dive into advanced React patterns including render props, higher-order components, and performance optimization techniques.',
      topics: ['React Patterns', 'Performance', 'Code Splitting', 'Memoization'],
      requirements: ['Laptop with Node.js installed', 'Basic React knowledge', 'Code editor (VS Code recommended)']
    },
    'system-design': {
      title: 'System Design Interview Masterclass',
      date: 'March 18, 2024',
      time: '6:00 PM - 8:00 PM PST',
      location: 'Innovation Hub, San Francisco',
      instructor: 'James Bosah',
      instructorImage: 'https://images.pexels.com/photos/20595361/pexels-photo-20595361/free-photo-of-portrait-of-a-man-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      attendees: 156,
      maxAttendees: 200,
      description: 'Learn how to approach system design interviews with confidence. Cover scalability, database design, and architecture patterns.',
      topics: ['System Design', 'Scalability', 'Database Design', 'Architecture'],
      requirements: ['Notebook and pen', 'Basic understanding of web applications', 'Whiteboard practice recommended']
    },
    'microservices': {
      title: 'Building Microservices with Node.js',
      date: 'March 22, 2024',
      time: '10:00 AM - 12:00 PM PST',
      location: 'Developer Workshop Space, San Francisco',
      instructor: 'Amina Bello',
      instructorImage: 'https://images.pexels.com/photos/33167320/pexels-photo-33167320/free-photo-of-elegant-portrait-of-woman-in-hijab-with-henna-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      attendees: 89,
      maxAttendees: 150,
      description: 'Hands-on workshop covering microservices architecture, API design, and deployment strategies using Node.js.',
      topics: ['Microservices', 'Node.js', 'API Design', 'Docker'],
      requirements: ['Laptop with Docker installed', 'Node.js experience', 'Postman or similar API testing tool']
    },
    'career-panel': {
      title: 'Career Transition: From Bootcamp to Big Tech',
      date: 'March 25, 2024',
      time: '3:00 PM - 4:30 PM PST',
      location: 'Community Learning Center, San Francisco',
      instructor: 'Multiple Speakers',
      instructorImage: 'https://images.pexels.com/photos/5060987/pexels-photo-5060987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      attendees: 412,
      maxAttendees: 500,
      description: 'Panel discussion with developers who successfully transitioned from bootcamps to top tech companies.',
      topics: ['Career Growth', 'Job Search', 'Interview Prep', 'Networking'],
      requirements: ['Notebook for taking notes', 'Questions prepared for Q&A', 'LinkedIn profile updated']
    }
  };

  const currentEvent = events[eventId as keyof typeof events] || events['react-patterns'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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

  if (isSubmitted) {
    return (
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Registration Successful!</h2>
            <p className="text-xl text-gray-600 mb-8">
              You've successfully registered for <strong>{currentEvent.title}</strong>
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h3>
              <div className="text-left space-y-2 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>{currentEvent.date} at {currentEvent.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>{currentEvent.location}</span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What to bring:</h3>
              <ul className="text-left space-y-2 text-gray-700">
                {currentEvent.requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBack}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
              >
                Back to Events
              </button>
              <button 
                onClick={() => {
                  const event = new CustomEvent('navigate', { detail: 'events' });
                  window.dispatchEvent(event);
                }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-all font-medium"
              >
                View All Events
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Events</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Register for Event
            </h1>
            <p className="text-lg text-gray-600">
              Secure your spot at this free in-person workshop
            </p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
            <div className="flex items-start space-x-6">
              <img
                src={currentEvent.instructorImage}
                alt={currentEvent.instructor}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentEvent.title}</h2>
                <p className="text-gray-600 mb-4">{currentEvent.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>{currentEvent.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>{currentEvent.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{currentEvent.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>{currentEvent.attendees}/{currentEvent.maxAttendees} registered</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentEvent.topics.map((topic, idx) => (
                    <span key={idx} className="bg-white text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>

              {/* Emergency Contact */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Name *
                    </label>
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      required
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Contact person name"
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Phone *
                    </label>
                    <input
                      type="tel"
                      id="emergencyPhone"
                      name="emergencyPhone"
                      required
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Restrictions or Allergies
                </label>
                <textarea
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  rows={3}
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Please let us know about any dietary restrictions or allergies..."
                />
              </div>

              <div>
                <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about this event?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="website">DevMentors Website</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend">Friend or Colleague</option>
                  <option value="newsletter">Newsletter</option>
                  <option value="search">Search Engine</option>
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
                    <span>Registering...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Register for Event</span>
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

export default EventRegister;