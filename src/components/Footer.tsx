import React from 'react';
import { Code } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Programs',
      links: [
        {
          name: 'Full Stack Development',
          url: '#'
        },
        {
          name: 'Data Science & ML',
          url: "#"
        },
        {
          name: 'Mobile Development',
          url: '#'
        },
        {
          name: 'DevOps & Cloud',
          url: '#'
        },
        {
          name: 'System Design',
          url: '#'
        },
        {
          name: 'Interview Preparation',
          url: '#'
        }
      ]
    },
    // {
    //   title: 'Resources',
    //   links: [
    //     {
    //       name: 'Learning Paths',
    //       url: '#'
    //     },
    //     {
    //       name: 'Code Challenges',
    //       url: "#"
    //     },
    //     {
    //       name: 'Documentation',
    //       url: '#'
    //     },
    //     // {
    //     //   name: 'Blog',
    //     //   url: '/blog',
    //     // },
    //     {
    //       name: 'Career Guide',
    //       url: '#'
    //     },
    //     // {
    //     //   name: 'Salary Guide',
    //     //   url: '#'
    //     // }
    //   ]
    // },
    {
      title: 'Support',
      links: [
        // {
        //   name: 'Help Center',
        //   url: '#'
        // },
        {
          name: 'Contact Us',
          url: "#"
        },
        {
          name: 'FAQ',
          url: '#'
        },
        // {
        //   name: 'Community Guidelines',
        //   url: '#'
        // },
        // {
        //   name: 'Terms of Service',
        //   url: '#'
        // },
        {
          name: 'Privacy Policy',
          url: '#'
        }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DevMentors</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering the next generation of software engineers through free mentorship, 
                community support, and hands-on learning opportunities.
              </p>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.url} 
                       
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 DevMentors. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;