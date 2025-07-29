import React from 'react';
import { Star, MapPin, Briefcase, TrendingUp, Award } from 'lucide-react';

const Success: React.FC = () => {
  const successStories = [
    {
      name: 'Abimbola Johnson',
      image: 'https://images.pexels.com/photos/33176057/pexels-photo-33176057/free-photo-of-confident-woman-in-logo-t-shirt-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      beforeRole: 'Marketing Coordinator',
      afterRole: 'Full Stack Developer',
      company: 'Paystack',
      location: 'Lagos, Nigeria',
      timeframe: '8 months',
      salary: '$120,000',
      testimonial: 'DevMentors completely transformed my career. The personalized mentorship and hands-on projects gave me the confidence to make the leap into tech.',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      mentor: 'Sarah Adebayo'
    },
    {
      name: 'Fred Williams',
      image: 'https://images.pexels.com/photos/30496626/pexels-photo-30496626/free-photo-of-stylish-young-man-in-blue-tie-portrait.jpeg',
      beforeRole: 'Restaurant Manager',
      afterRole: 'Software Engineer',
      company: 'SwiftPay Africa',
      location: 'Abuja, Nigeria',
      timeframe: '10 months',
      salary: '$105,000',
      testimonial: 'The structured learning path and amazing community support made learning to code feel achievable. Now I am building products used by millions!',
      skills: ['JavaScript', 'React', 'MongoDB', 'Docker'],
      mentor: 'James Bosah'
    },
    {
      name: 'Maryam Usman',
      image: 'https://images.pexels.com/photos/19245168/pexels-photo-19245168/free-photo-of-capturing-the-essence-of-beauty.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      beforeRole: 'Graphic Designer',
      afterRole: 'Frontend Developer',
      company: 'Shopify',
      location: 'Jos, Nigeria',
      timeframe: '6 months',
      salary: '',
      testimonial: 'The mentorship program was incredible. My mentor helped me leverage my design background to become a better developer.',
      skills: ['Vue.js', 'TypeScript', 'CSS', 'Figma'],
      mentor: 'Isreal Adesina'
    },
    {
      name: 'Felix Okeke',
      image: 'https://images.pexels.com/photos/12255303/pexels-photo-12255303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      beforeRole: 'Data Analyst',
      afterRole: 'Machine Learning Engineer',
      company: 'Tesla',
      location: 'Anambra, Nigeria',
      timeframe: '12 months',
      salary: '$140,000',
      testimonial: 'The ML program was exactly what I needed to transition from data analysis to building production ML systems. The industry connections were invaluable.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes'],
      mentor: 'Amina Bello'
    },
  ];

  const achievements = [
    { icon: TrendingUp, value: '95%', label: 'Job Placement Rate' },
    { icon: Briefcase, value: '$98K', label: 'Average Starting Salary' },
    { icon: Award, value: '6 months', label: 'Average Time to Hire' },
    { icon: Star, value: '4.9/5', label: 'Program Rating' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real people, real transformations. See how our community members have successfully 
            transitioned into fulfilling tech careers.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Career Transition</div>
                  <div className="text-sm font-medium text-blue-600">{story.timeframe}</div>
                </div>
                <div className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
                  <span>{story.beforeRole}</span>
                  <span className="text-blue-600">→</span>
                  <span>{story.afterRole}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm font-medium text-gray-900">{story.company}</div>
                 
                </div>
              </div>

              <blockquote className="text-gray-700 italic mb-6">
                "{story.testimonial}"
              </blockquote>

              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-900 mb-2">Skills Learned</div>
                <div className="flex flex-wrap gap-2">
                  {story.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Mentored by <span className="font-medium text-gray-900">{story.mentor}</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
         
        </div>
      </div>
    </section>
  );
};

export default Success;