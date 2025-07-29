import React from 'react';
import { Clock, Users, Trophy, ArrowRight } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: 'Full Stack Web Development',
      duration: '6 months',
      level: 'Beginner to Advanced',
      students: 1250,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      price: 'Free',
      description: 'Master modern web development with hands-on projects and personalized mentorship.',
      outcomes: ['Build 5+ real projects', 'Job placement assistance', 'Portfolio development']
    },
    {
      title: 'Data Science & Machine Learning',
      duration: '8 months',
      level: 'Intermediate',
      students: 890,
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['Python', 'SQL', 'TensorFlow', 'Statistics', 'Data Visualization'],
      price: 'Free',
      description: 'Transform data into insights with cutting-edge machine learning techniques.',
      outcomes: ['5 ML projects', 'Kaggle competitions', 'Industry certifications']
    },
    {
      title: 'Mobile App Development',
      duration: '5 months',
      level: 'Beginner to Intermediate',
      students: 675,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
      price: 'Free',
      description: 'Build native mobile apps for iOS and Android with modern frameworks.',
      outcomes: ['3 published apps', 'App Store optimization', 'User experience design']
    },
    {
      title: 'DevOps & Cloud Engineering',
      duration: '7 months',
      level: 'Advanced',
      students: 520,
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      price: 'Free',
      description: 'Master cloud infrastructure and deployment automation.',
      outcomes: ['Cloud certifications', 'Production deployments', 'Infrastructure as code']
    },
  ];

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Learning Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In-person learning programs with hands-on workshops and face-to-face mentorship designed by industry experts 
            to take you from beginner to job-ready professional - completely free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="h-48 overflow-hidden rounded-t-xl">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  <span className="text-2xl font-bold text-green-600">{program.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{program.students} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy className="w-4 h-4" />
                    <span>{program.level}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Program Outcomes</h4>
                  <ul className="space-y-1">
                    {program.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => {
                    const event = new CustomEvent('navigate', { detail: 'join' });
                    window.dispatchEvent(event);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium flex items-center justify-center space-x-2"
                >
                  <span>Join Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;