import React from 'react';
import { MessageCircle, Heart, Users, Calendar, ArrowRight } from 'lucide-react';

const Community: React.FC = () => {
  const discussions = [
    {
      title: 'Best practices for React performance optimization',
      author: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 23,
      likes: 45,
      time: '2 hours ago',
      tags: ['React', 'Performance'],
      category: 'Technical Discussion'
    },
    {
      title: 'How to transition from junior to senior developer?',
      author: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 67,
      likes: 128,
      time: '4 hours ago',
      tags: ['Career', 'Growth'],
      category: 'Career Advice'
    },
    {
      title: 'Building microservices with Node.js and Docker',
      author: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 34,
      likes: 89,
      time: '1 day ago',
      tags: ['Node.js', 'Docker', 'Microservices'],
      category: 'Architecture'
    },
    {
      title: 'Debugging strategies for complex applications',
      author: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 19,
      likes: 52,
      time: '2 days ago',
      tags: ['Debugging', 'Tools'],
      category: 'Best Practices'
    },
  ];

  const events = [
    {
      title: 'Live Coding: Building a Real-time Chat App',
      date: 'Today, 7:00 PM PST',
      attendees: 234,
      host: 'David Kim',
      type: 'Workshop'
    },
    {
      title: 'System Design Interview Preparation',
      date: 'Tomorrow, 3:00 PM PST',
      attendees: 156,
      host: 'Sarah Johnson',
      type: 'Masterclass'
    },
    {
      title: 'Open Source Contribution Workshop',
      date: 'Friday, 6:00 PM PST',
      attendees: 89,
      host: 'Michael Chen',
      type: 'Workshop'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thriving Developer Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect, collaborate, and grow with thousands of developers worldwide. 
            Share knowledge, get help, and build lasting relationships.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Community Stats */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">Active Members</span>
                  </div>
                  <span className="font-bold text-gray-900">5,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-600">Daily Discussions</span>
                  </div>
                  <span className="font-bold text-gray-900">342</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-600" />
                    <span className="text-gray-600">Helpful Answers</span>
                  </div>
                  <span className="font-bold text-gray-900">1,856</span>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                    <p className="text-xs text-gray-600 mb-1">{event.date}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>View All Events</span>
              </button>
            </div>
          </div>

          {/* Recent Discussions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Recent Discussions</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1">
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                {discussions.map((discussion, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-3">
                      <img
                        src={discussion.avatar}
                        alt={discussion.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {discussion.category}
                          </span>
                          <span className="text-xs text-gray-500">{discussion.time}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                          {discussion.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                          <span>by {discussion.author}</span>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{discussion.likes} likes</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {discussion.tags.map((tag, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
            Join Community Discussions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;