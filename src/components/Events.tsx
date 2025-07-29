import React from 'react';
import { Calendar, Clock, Users, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // <-- Add this import

const Events: React.FC = () => {
  const navigate = useNavigate(); // <-- Add this hook

  const upcomingEvents = [
    {
      title: 'Advanced React Patterns & Performance',
      date: 'March 15, 2024',
      time: '2:00 PM - 4:00 PM PST',
      type: 'Workshop',
      format: ['Virtual', 'In-Person'],
      instructor: 'Sarah Adebayo',
      instructorImage: 'https://images.pexels.com/photos/33176042/pexels-photo-33176042/free-photo-of-focused-woman-working-at-computer-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      attendees: 234,
      maxAttendees: 300,
      price: 'Free',
      difficulty: 'Advanced',
      description: 'Deep dive into advanced React patterns including render props, higher-order components, and performance optimization techniques.',
      topics: ['React Patterns', 'Performance', 'Code Splitting', 'Memoization']
    },
    {
      title: 'System Design Interview Masterclass',
      date: 'March 18, 2024',
      time: '6:00 PM - 8:00 PM PST',
      type: 'Masterclass',
      format: ['Virtual', 'In-Person'],
      instructor: 'James Bosah',
      instructorImage: 'https://images.pexels.com/photos/20595361/pexels-photo-20595361/free-photo-of-portrait-of-a-man-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      attendees: 156,
      maxAttendees: 200,
      price: 'Free',
      difficulty: 'Intermediate',
      description: 'Learn how to approach system design interviews with confidence. Cover scalability, database design, and architecture patterns.',
      topics: ['System Design', 'Scalability', 'Database Design', 'Architecture']
    },
    {
      title: 'Building Microservices with Node.js',
      date: 'March 22, 2024',
      time: '10:00 AM - 12:00 PM PST',
      type: 'Workshop',
      format: ['Hybrid', 'In-Person'],
      instructor: 'Amina Bello',
      instructorImage: 'https://images.pexels.com/photos/33167320/pexels-photo-33167320/free-photo-of-elegant-portrait-of-woman-in-hijab-with-henna-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      attendees: 89,
      maxAttendees: 150,
      price: 'Free',
      difficulty: 'Intermediate',
      description: 'Hands-on workshop covering microservices architecture, API design, and deployment strategies using Node.js.',
      topics: ['Microservices', 'Node.js', 'API Design', 'Docker']
    },
    {
      title: 'Career Transition: From Bootcamp to Big Tech',
      date: 'March 25, 2024',
      time: '3:00 PM - 4:30 PM PST',
      type: 'Panel',
      format: ['Virtual', 'In-Person'],
      instructor: 'Multiple Speakers',
      instructorImage: 'https://images.pexels.com/photos/5060987/pexels-photo-5060987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      attendees: 412,
      maxAttendees: 500,
      price: 'Free',
      difficulty: 'Beginner',
      description: 'Panel discussion with developers who successfully transitioned from bootcamps to top tech companies.',
      topics: ['Career Growth', 'Job Search', 'Interview Prep', 'Networking']
    },
  ];

  const pastEvents = [
    {
      title: 'Introduction to Machine Learning',
      date: 'March 8, 2024',
      attendees: 567,
      rating: 4.8,
      instructor: 'Amina Bello'
    },
    {
      title: 'GraphQL Best Practices',
      date: 'March 5, 2024',
      attendees: 234,
      rating: 4.7,
      instructor: 'Sarah Adebayo'
    },
    {
      title: 'DevOps Pipeline Workshop',
      date: 'March 1, 2024',
      attendees: 189,
      rating: 4.9,
      instructor: 'James Bosah'
    },
  ];

  const eventIds = ['react-patterns', 'system-design', 'microservices', 'career-panel'];

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free In-Person Events & Workshops
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join free in-person coding sessions, workshops, and masterclasses led by volunteer industry experts. 
            Learn the latest technologies and best practices through hands-on collaboration.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'Masterclass' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.type}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        event.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {event.difficulty}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{event.price}</div>
                      {event.format.includes('In-Person') && <MapPin className="w-4 h-4 text-blue-600 inline" />}
                      <div className="text-xs text-gray-500">
                        {event.format.join(' / ')}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.topics.map((topic, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={event.instructorImage}
                      alt={event.instructor}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{event.instructor}</div>
                      <div className="text-sm text-gray-500">Instructor</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}/{event.maxAttendees} registered</span>
                    </div>
                    <button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
                      onClick={() => {
                        const eventId = eventIds[index];
                        navigate(`/register/${eventId}`); // <-- Use router navigation
                      }}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Past Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">{event.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{event.date}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{event.attendees} attended</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-900 font-medium">{event.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">by {event.instructor}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-medium">
            View Event Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;