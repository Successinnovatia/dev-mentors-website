import React from 'react';
import {Users, Award, Target, Heart, Mail, Github, Library} from 'lucide-react';
import Success from './Success';
import { useNavigate } from 'react-router-dom';
const About: React.FC = () => {
  const navigate = useNavigate();
  const founders = [
    {
      name: 'Yusuf Jimoh',
      role: 'Founder & CEO',
      image: '/yusuf-jimoh-ceo.jpg',
      bio: 'Yusuf Jimoh is a Fullstack and Mobile Software Engineer specializing in scalable backend systems and impactful mobile apps across fintech and emerging tech. With expertise in Python, Swift, Kotlin, Java, and C++, he has built solutions used by millions and deployed across sectors like banking, e-commerce, and education. Passionate about mentorship and open-source, Yusuf founded DevMentor to support underrepresented talent and promote inclusive, real-world tech education.',
      background: 'Software Engineer, Community Builder, Education Advocate',
      expertise: ['Software Engineering', 'Community Building', 'Tech Education'],
      social: {
        blog: 'https://jimohyusuph.hashnode.dev',
        github: 'https://github.com/yusuphjoluwasen',
      }
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Accessibility First',
      description: 'We believe quality tech education should be free and accessible to everyone, regardless of background or financial situation.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Our platform is built by the community, for the community. Every mentor volunteers their time to help others succeed.'
    },
    {
      icon: Target,
      title: 'Practical Learning',
      description: 'We focus on real-world skills and hands-on projects that prepare learners for actual software engineering roles.'
    },
    {
      icon: Award,
      title: 'Excellence & Growth',
      description: 'We maintain high standards while fostering a supportive environment where everyone can learn and grow together.'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Lives Changed' },
    { value: '500+', label: 'Volunteer Mentors' },
    { value: '50+', label: 'Countries Reached' },
    { value: '95%', label: 'Job Placement Rate' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                DevMentors
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to democratize software engineering education by connecting 
              aspiring developers with experienced mentors through in-person training and a supportive, free local community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone should have access to quality in-person software engineering education, 
                regardless of their financial situation or background. Our mission is to break down barriers 
                and create local pathways for the next generation of diverse tech talent.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through our free in-person mentorship programs, hands-on workshops, and supportive local community, 
                we're building a more inclusive tech industry where talent and passion matter more than 
                privilege and connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
                  Join Our Mission
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-all font-medium">
                  Become a Mentor
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the culture of our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate technologist and educator dedicated to making quality 
              software engineering education accessible to everyone.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border border-gray-100">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="relative">
                  <img
                    src={founders[0].image}
                    alt={founders[0].name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-4xl font-bold text-gray-900 mb-3">{founders[0].name}</h3>
                  <p className="text-blue-600 font-semibold text-xl mb-4">{founders[0].role}</p>
                  <p className="text-sm text-gray-500 mb-6 font-medium">{founders[0].background}</p>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">{founders[0].bio}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {founders[0].expertise.map((skill, idx) => (
                        <span key={idx} className="bg-white text-blue-800 text-sm px-4 py-2 rounded-full font-medium shadow-sm border border-blue-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-6 justify-center md:justify-start">
                    <a href={founders[0].social.blog} className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-white">
                      <Library className="w-7 h-7" />
                    </a>
                    <a href={founders[0].social.github} className="text-gray-400 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-white">
                      <Github className="w-7 h-7" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <Success />

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to learn, mentor, or contribute to our mission, 
            we'd love to have you as part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/join')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-medium flex items-center justify-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Join as Learner</span>
            </button>
            <button 
              onClick={() => navigate('/join')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all font-medium flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5" />
              <span>Become a Mentor</span>
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all font-medium flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;