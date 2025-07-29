import React from 'react';
import { Star, MapPin} from 'lucide-react';

const Mentors: React.FC = () => {
  const mentors = [
    {
      name: 'Sarah Adebayo',
      role: 'Senior Full Stack Developer',
      company: 'Flutterwave',
      image: 'https://images.pexels.com/photos/33176042/pexels-photo-33176042/free-photo-of-focused-woman-working-at-computer-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      reviews: 127,
      location: 'Lagos, Nigeria',
      experience: '8 years',
      specialties: ['React', 'Node.js', 'System Design'],
      mentees: 45,
      availability: 'Available'
    },
    {
      name: 'James Bosah',
      role: 'Principal Engineer',
      company: 'Connecktme Africa',
      image: 'https://images.pexels.com/photos/20595361/pexels-photo-20595361/free-photo-of-portrait-of-a-man-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
      reviews: 98,
      location: 'Lagos, Nigeria',
      experience: '12 years',
      specialties: ['Python', 'Machine Learning', 'Cloud Architecture'],
      mentees: 62,
      availability: 'Available'
    },
    {
      name: 'Amina Bello',
      role: 'Tech Lead',
      company: 'Cowrywise',
      image: 'https://images.pexels.com/photos/33167320/pexels-photo-33167320/free-photo-of-elegant-portrait-of-woman-in-hijab-with-henna-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      reviews: 156,
      location: 'Los Angeles, CA',
      experience: '5 years',
      specialties: ['JavaScript', 'DevOps', 'Team Leadership'],
      mentees: 38,
      availability: 'Available'
    },
    {
      name: 'Isreal Adesina',
      role: 'Software Architect',
      company: 'Amazon',
      image: 'https://images.pexels.com/photos/5060987/pexels-photo-5060987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.7,
      reviews: 89,
      location: 'Abuja, Nigeria',
      experience: '8 years',
      specialties: ['Java', 'Microservices', 'Database Design'],
      mentees: 71,
      availability: 'Busy'
    },
  ];

  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Volunteer Mentors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with passionate industry professionals who volunteer their time to help 
            the next generation of developers succeed - completely free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      mentor.availability === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {mentor.availability}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">{mentor.role}</p>
                  <p className="text-sm text-blue-600 font-medium mb-3">{mentor.company}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{mentor.rating}</span>
                      <span>({mentor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{mentor.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{mentor.experience} experience</span>
                      <span>{mentor.mentees} mentees</span>
                    </div>
                    {/* <button 
                      onClick={() => {
                        const event = new CustomEvent('navigate', { detail: 'contact' });
                        window.dispatchEvent(event);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium flex items-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Connect</span>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button 
            onClick={() => {
              const event = new CustomEvent('navigate', { detail: 'mentors' });
              window.dispatchEvent(event);
            }}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-medium"
          >
            View All Mentors
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Mentors;