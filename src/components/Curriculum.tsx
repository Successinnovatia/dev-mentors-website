import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  PlayCircle, 
  Code, 
  Users, 
  Award,
  ChevronDown,
  ChevronRight,
  Star,
  Download,
  FileText,
  Video
} from 'lucide-react';

const Curriculum: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState('fullstack');
  const [expandedModules, setExpandedModules] = useState<{ [key: string]: boolean }>({});

  const tracks = {
    fullstack: {
      title: 'Full Stack Web Development',
      duration: '6 months',
      level: 'Beginner to Advanced',
      students: 1250,
      description: 'Master modern web development from frontend to backend with hands-on in-person workshops and face-to-face mentorship.',
      prerequisites: ['Basic computer skills', 'Problem-solving mindset'],
      outcomes: [
        'Build 5+ production-ready web applications',
        'Master React, Node.js, and modern databases',
        'Deploy applications to cloud platforms',
        'Understand software engineering best practices',
        'Portfolio ready for job applications'
      ],
      modules: [
        {
          id: 'foundations',
          title: 'Web Development Foundations',
          duration: '4 weeks',
          lessons: 12,
          description: 'Learn the building blocks of web development through hands-on workshops',
          topics: [
            { title: 'HTML5 Fundamentals Workshop', duration: '3 hours', type: 'workshop', completed: true },
            { title: 'CSS3 & Responsive Design Lab', duration: '4 hours', type: 'workshop', completed: true },
            { title: 'JavaScript Basics Workshop', duration: '6 hours', type: 'workshop', completed: false },
            { title: 'DOM Manipulation Lab', duration: '3 hours', type: 'hands-on', completed: false },
            { title: 'Project: Personal Portfolio', duration: '8 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'frontend',
          title: 'Modern Frontend Development',
          duration: '6 weeks',
          lessons: 18,
          description: 'Build interactive user interfaces with React through in-person coding sessions',
          topics: [
            { title: 'React Fundamentals Workshop', duration: '5 hours', type: 'workshop', completed: false },
            { title: 'Components & Props', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'State Management Workshop', duration: '6 hours', type: 'workshop', completed: false },
            { title: 'React Hooks', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Routing & Navigation Lab', duration: '3 hours', type: 'workshop', completed: false },
            { title: 'Project: E-commerce Frontend', duration: '12 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'backend',
          title: 'Backend Development',
          duration: '6 weeks',
          lessons: 16,
          description: 'Create robust server-side applications through hands-on coding workshops',
          topics: [
            { title: 'Node.js Fundamentals Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Express.js Framework', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Database Design & MongoDB Lab', duration: '6 hours', type: 'workshop', completed: false },
            { title: 'RESTful APIs', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Authentication & Security Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Project: Full Stack Application', duration: '15 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'advanced',
          title: 'Advanced Topics & Deployment',
          duration: '4 weeks',
          lessons: 14,
          description: 'Production deployment and advanced concepts through guided workshops',
          topics: [
            { title: 'Testing Strategies Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Performance Optimization', duration: '3 hours', type: 'hands-on', completed: false },
            { title: 'Cloud Deployment Workshop', duration: '5 hours', type: 'workshop', completed: false },
            { title: 'CI/CD Pipelines', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'Final Capstone Project', duration: '20 hours', type: 'project', completed: false }
          ]
        }
      ]
    },
    datascience: {
      title: 'Data Science & Machine Learning',
      duration: '8 months',
      level: 'Intermediate',
      students: 890,
      description: 'Transform data into insights with cutting-edge machine learning techniques through in-person labs and workshops.',
      prerequisites: ['Basic Python knowledge', 'High school mathematics'],
      outcomes: [
        'Build 5+ ML models for real-world problems',
        'Master Python data science ecosystem',
        'Create data visualizations and dashboards',
        'Deploy ML models to production',
        'Contribute to open-source ML projects'
      ],
      modules: [
        {
          id: 'python-foundations',
          title: 'Python for Data Science',
          duration: '3 weeks',
          lessons: 10,
          description: 'Master Python programming for data analysis through hands-on coding labs',
          topics: [
            { title: 'Python Fundamentals Workshop', duration: '3 hours', type: 'workshop', completed: false },
            { title: 'NumPy & Pandas Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Data Cleaning Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Exploratory Data Analysis Lab', duration: '6 hours', type: 'hands-on', completed: false },
            { title: 'Project: Data Analysis Portfolio', duration: '8 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'statistics',
          title: 'Statistics & Probability',
          duration: '4 weeks',
          lessons: 12,
          description: 'Statistical foundations for machine learning through interactive workshops',
          topics: [
            { title: 'Descriptive Statistics Workshop', duration: '3 hours', type: 'workshop', completed: false },
            { title: 'Probability Distributions Lab', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Hypothesis Testing Workshop', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Correlation & Regression Lab', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'Project: Statistical Analysis Report', duration: '10 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'machine-learning',
          title: 'Machine Learning Fundamentals',
          duration: '6 weeks',
          lessons: 16,
          description: 'Build and deploy ML models through hands-on workshops and coding sessions',
          topics: [
            { title: 'ML Algorithms Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Supervised Learning Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Unsupervised Learning Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Model Evaluation Lab', duration: '3 hours', type: 'hands-on', completed: false },
            { title: 'Feature Engineering Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Project: ML Classification Model', duration: '12 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'deep-learning',
          title: 'Deep Learning & Neural Networks',
          duration: '5 weeks',
          lessons: 14,
          description: 'Advanced neural networks and deep learning through practical workshops',
          topics: [
            { title: 'Neural Networks Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'TensorFlow & Keras Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Computer Vision Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'NLP Fundamentals Lab', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'Project: Deep Learning Application', duration: '15 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'deployment',
          title: 'ML Model Deployment',
          duration: '4 weeks',
          lessons: 12,
          description: 'Deploy ML models to production through hands-on deployment workshops',
          topics: [
            { title: 'Model Deployment Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Cloud Platforms Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'API Development Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'MLOps Pipeline Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Final Capstone Project', duration: '20 hours', type: 'project', completed: false }
          ]
        }
      ]
    },
    mobile: {
      title: 'Mobile App Development',
      duration: '5 months',
      level: 'Beginner to Intermediate',
      students: 675,
      description: 'Build native mobile apps for iOS and Android through hands-on workshops and in-person coding sessions.',
      prerequisites: ['Basic programming knowledge', 'Understanding of mobile UI/UX'],
      outcomes: [
        'Build 3+ published mobile applications',
        'Master React Native and Flutter frameworks',
        'Understand mobile app architecture',
        'Deploy apps to App Store and Google Play',
        'Create responsive mobile interfaces'
      ],
      modules: [
        {
          id: 'mobile-foundations',
          title: 'Mobile Development Foundations',
          duration: '3 weeks',
          lessons: 10,
          description: 'Learn mobile development basics through hands-on workshops',
          topics: [
            { title: 'Mobile UI/UX Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'React Native Setup Lab', duration: '3 hours', type: 'hands-on', completed: false },
            { title: 'Components & Navigation Workshop', duration: '5 hours', type: 'workshop', completed: false },
            { title: 'State Management Lab', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'Project: Todo Mobile App', duration: '8 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'native-features',
          title: 'Native Features Integration',
          duration: '4 weeks',
          lessons: 12,
          description: 'Integrate device features through practical coding workshops',
          topics: [
            { title: 'Camera & Gallery Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'GPS & Maps Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Push Notifications Workshop', duration: '3 hours', type: 'workshop', completed: false },
            { title: 'Local Storage Lab', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'Project: Feature-Rich Mobile App', duration: '12 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'backend-integration',
          title: 'Backend Integration & APIs',
          duration: '4 weeks',
          lessons: 14,
          description: 'Connect mobile apps to backend services through hands-on workshops',
          topics: [
            { title: 'REST API Integration Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Firebase Setup Lab', duration: '3 hours', type: 'hands-on', completed: false },
            { title: 'Authentication Workshop', duration: '5 hours', type: 'workshop', completed: false },
            { title: 'Real-time Data Lab', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'Project: Social Media App', duration: '15 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'deployment-publishing',
          title: 'App Deployment & Publishing',
          duration: '3 weeks',
          lessons: 10,
          description: 'Deploy and publish mobile apps through guided workshops',
          topics: [
            { title: 'App Store Guidelines Workshop', duration: '3 hours', type: 'workshop', completed: false },
            { title: 'iOS Deployment Lab', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'Android Publishing Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'App Analytics Lab', duration: '3 hours', type: 'hands-on', completed: false },
            { title: 'Final Portfolio Project', duration: '18 hours', type: 'project', completed: false }
          ]
        }
      ]
    },
    devops: {
      title: 'DevOps & Cloud Engineering',
      duration: '7 months',
      level: 'Advanced',
      students: 520,
      description: 'Master cloud infrastructure and deployment automation through hands-on workshops and practical labs.',
      prerequisites: ['Linux basics', 'Programming experience', 'Networking fundamentals'],
      outcomes: [
        'Design scalable cloud architectures',
        'Implement CI/CD pipelines',
        'Master containerization with Docker & Kubernetes',
        'Automate infrastructure with Terraform',
        'Monitor and optimize production systems'
      ],
      modules: [
        {
          id: 'linux-fundamentals',
          title: 'Linux & System Administration',
          duration: '3 weeks',
          lessons: 12,
          description: 'Master Linux systems through hands-on terminal workshops',
          topics: [
            { title: 'Linux Command Line Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'File Systems & Permissions Lab', duration: '3 hours', type: 'hands-on', completed: false },
            { title: 'Process Management Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Shell Scripting Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Project: System Monitoring Script', duration: '8 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'containerization',
          title: 'Docker & Containerization',
          duration: '4 weeks',
          lessons: 14,
          description: 'Learn containerization through practical Docker workshops',
          topics: [
            { title: 'Docker Fundamentals Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Container Images Lab', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'Docker Compose Workshop', duration: '5 hours', type: 'workshop', completed: false },
            { title: 'Container Networking Lab', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'Project: Containerized Application', duration: '12 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'kubernetes',
          title: 'Kubernetes Orchestration',
          duration: '5 weeks',
          lessons: 16,
          description: 'Master container orchestration through hands-on Kubernetes workshops',
          topics: [
            { title: 'Kubernetes Architecture Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Pods & Services Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Deployments & ConfigMaps Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Ingress & Load Balancing Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Project: Microservices Deployment', duration: '15 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'cicd',
          title: 'CI/CD Pipelines',
          duration: '4 weeks',
          lessons: 12,
          description: 'Build automated deployment pipelines through practical workshops',
          topics: [
            { title: 'Git Workflows Workshop', duration: '3 hours', type: 'workshop', completed: false },
            { title: 'Jenkins Pipeline Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'GitHub Actions Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Testing Automation Lab', duration: '4 hours', type: 'hands-on', completed: false },
            { title: 'Project: Complete CI/CD Pipeline', duration: '12 hours', type: 'project', completed: false }
          ]
        },
        {
          id: 'infrastructure',
          title: 'Infrastructure as Code',
          duration: '5 weeks',
          lessons: 14,
          description: 'Automate infrastructure management through hands-on workshops',
          topics: [
            { title: 'Terraform Fundamentals Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'AWS Resources Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Infrastructure Modules Workshop', duration: '4 hours', type: 'workshop', completed: false },
            { title: 'Monitoring & Logging Lab', duration: '5 hours', type: 'hands-on', completed: false },
            { title: 'Final Infrastructure Project', duration: '20 hours', type: 'project', completed: false }
          ]
        }
      ]
    }
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'workshop': return <Users className="w-4 h-4 text-blue-600" />;
      case 'hands-on': return <Code className="w-4 h-4 text-green-600" />;
      case 'project': return <Award className="w-4 h-4 text-purple-600" />;
      default: return <Users className="w-4 h-4 text-gray-600" />;
    }
  };

  const currentTrack = tracks[selectedTrack as keyof typeof tracks];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive In-Person Course Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Structured in-person learning paths with hands-on workshops, face-to-face mentorship, and real-world applications. 
            All courses are completely free and delivered through local community centers.
          </p>
        </div>

        {/* Track Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(tracks).map(([key, track]) => (
            <button
              key={key}
              onClick={() => setSelectedTrack(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedTrack === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {track.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentTrack.title}</h3>
              <p className="text-gray-600 mb-6">{currentTrack.description}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{currentTrack.duration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">{currentTrack.level}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{currentTrack.students} students enrolled</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Prerequisites</h4>
                <ul className="space-y-2">
                  {currentTrack.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Learning Outcomes</h4>
                <ul className="space-y-2">
                  {currentTrack.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
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
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
              >
              
                Join In-Person Program
              </button>
            </div>
          </div>

          {/* Curriculum Modules */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {currentTrack.modules.map((module, moduleIndex) => (
                <div key={module.id} className="bg-white rounded-xl shadow-lg border border-gray-200">
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                          {moduleIndex + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{module.title}</h4>
                          <p className="text-gray-600">{module.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right text-sm text-gray-500">
                          <div>{module.duration}</div>
                          <div>{module.lessons} lessons</div>
                        </div>
                        {expandedModules[module.id] ? 
                          <ChevronDown className="w-5 h-5 text-gray-400" /> : 
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        }
                      </div>
                    </div>
                  </div>

                  {expandedModules[module.id] && (
                    <div className="border-t border-gray-200 p-6">
                      <div className="space-y-4">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="flex items-center space-x-3">
                              {topic.completed ? 
                                <CheckCircle className="w-5 h-5 text-green-600" /> :
                                <PlayCircle className="w-5 h-5 text-gray-400" />
                              }
                              {getTypeIcon(topic.type)}
                              <div>
                                <h5 className={`font-medium ${topic.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                                  {topic.title}
                                </h5>
                                <div className="flex items-center space-x-2 text-sm text-gray-500">
                                  <span>{topic.duration}</span>
                                  <span>•</span>
                                  <span className="capitalize">{topic.type}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {topic.type === 'project' && (
                                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                                  Project
                                </span>
                              )}
                              <button className="text-blue-600 hover:text-blue-700 p-1">
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress Summary */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Your Progress</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">2/60</div>
                  <div className="text-sm text-gray-600">Lessons Completed</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">0/5</div>
                  <div className="text-sm text-gray-600">Projects Finished</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">3%</div>
                  <div className="text-sm text-gray-600">Course Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;