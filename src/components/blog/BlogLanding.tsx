import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search} from 'lucide-react';
import ArticleCard from './ArticleCard';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import Pagination from './Pagination';

// Mock blog data - in a real app, this would come from an API
const blogPosts = [
  {
    id: '1',
    slug: 'getting-started-with-react-hooks',
    title: 'Getting Started with React Hooks: A Complete Guide',
    excerpt: 'Learn how to use React Hooks to build more efficient and cleaner functional components. This comprehensive guide covers useState, useEffect, and custom hooks.',
    content: `React Hooks revolutionized the way we write React components...`,
    featuredImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-03-15',
    author: {
      name: 'Yusuf Jimoh',
      avatar: '/yusuf-jimoh-ceo.jpg'
    },
    readTime: '8 min read',
    category: 'React',
    tags: ['React', 'JavaScript', 'Frontend']
  },
  {
    id: '2',
    slug: 'python-data-structures-guide',
    title: 'Python Data Structures: Lists, Dictionaries, and Sets',
    excerpt: 'Master Python\'s built-in data structures with practical examples and best practices. Perfect for beginners and intermediate developers.',
    content: `Python offers several built-in data structures...`,
    featuredImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-03-12',
    author: {
      name: 'Yusuf Jimoh',
      avatar: '/yusuf-jimoh-ceo.jpg'
    },
    readTime: '12 min read',
    category: 'Python',
    tags: ['Python', 'Data Structures', 'Programming']
  },
  {
    id: '3',
    slug: 'go-concurrency-patterns',
    title: 'Go Concurrency Patterns: Goroutines and Channels',
    excerpt: 'Explore Go\'s powerful concurrency model with goroutines and channels. Learn patterns for building scalable concurrent applications.',
    content: `Go\'s concurrency model is one of its strongest features...`,
    featuredImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-03-10',
    author: {
      name: 'Yusuf Jimoh',
      avatar: '/yusuf-jimoh-ceo.jpg'
    },
    readTime: '15 min read',
    category: 'Go',
    tags: ['Go', 'Concurrency', 'Backend']
  },
  {
    id: '4',
    slug: 'swift-ios-development-basics',
    title: 'Swift for iOS Development: Building Your First App',
    excerpt: 'Start your iOS development journey with Swift. Learn the fundamentals and build a simple but functional iOS application.',
    content: `Swift is Apple\'s modern programming language...`,
    featuredImage: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-03-08',
    author: {
      name: 'Yusuf Jimoh',
      avatar: '/yusuf-jimoh-ceo.jpg'
    },
    readTime: '10 min read',
    category: 'Swift',
    tags: ['Swift', 'iOS', 'Mobile Development']
  },
  {
    id: '5',
    slug: 'javascript-async-await-guide',
    title: 'Mastering Async/Await in JavaScript',
    excerpt: 'Learn how to handle asynchronous operations in JavaScript using async/await. Say goodbye to callback hell and promise chains.',
    content: `Asynchronous programming is crucial in JavaScript...`,
    featuredImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-03-05',
    author: {
      name: 'Yusuf Jimoh',
      avatar: '/yusuf-jimoh-ceo.jpg'
    },
    readTime: '7 min read',
    category: 'JavaScript',
    tags: ['JavaScript', 'Async', 'Programming']
  },
  {
    id: '6',
    slug: 'python-web-scraping-tutorial',
    title: 'Web Scraping with Python: BeautifulSoup and Requests',
    excerpt: 'Learn how to extract data from websites using Python. This tutorial covers BeautifulSoup, requests, and best practices for ethical scraping.',
    content: `Web scraping is a powerful technique...`,
    featuredImage: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-03-03',
    author: {
      name: 'Yusuf Jimoh',
      avatar: '/yusuf-jimoh-ceo.jpg'
    },
    readTime: '14 min read',
    category: 'Python',
    tags: ['Python', 'Web Scraping', 'Data']
  },
  {
    id: '7',
    slug: 'go-rest-api-development',
    title: 'Building REST APIs with Go and Gin Framework',
    excerpt: 'Create robust REST APIs using Go and the Gin web framework. Learn routing, middleware, and database integration.',
    content: `Building APIs with Go is straightforward...`,
    featuredImage: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-03-01',
    author: {
      name: 'Yusuf Jimoh',
      avatar: '/yusuf-jimoh-ceo.jpg'
    },
    readTime: '18 min read',
    category: 'Go',
    tags: ['Go', 'API', 'Backend', 'Gin']
  },
  {
    id: '8',
    slug: 'swift-swiftui-fundamentals',
    title: 'SwiftUI Fundamentals: Declarative UI Development',
    excerpt: 'Discover SwiftUI\'s declarative approach to building user interfaces. Learn views, modifiers, and state management.',
    content: `SwiftUI represents a paradigm shift...`,
    featuredImage: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-02-28',
    author: {
      name: 'Yusuf Jimoh',
      avatar: '/yusuf-jimoh-ceo.jpg'
    },
    readTime: '11 min read',
    category: 'Swift',
    tags: ['Swift', 'SwiftUI', 'iOS', 'UI']
  },
  {
    id: '9',
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization: Tips and Techniques',
    excerpt: 'Optimize your React applications for better performance. Learn about memoization, code splitting, and profiling techniques.',
    content: `Performance optimization in React...`,
    featuredImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-02-25',
    author: {
      name: 'Yusuf Jimoh',
      avatar: '/yusuf-jimoh-ceo.jpg'
    },
    readTime: '13 min read',
    category: 'React',
    tags: ['React', 'Performance', 'Optimization']
  }
];

const categories = ['All', 'React', 'Python', 'Go', 'Swift', 'JavaScript'];

const BlogLanding: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const navigate = useNavigate();

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Remove the custom event listener effect
  // Instead, pass a click handler to ArticleCard:
  const handleArticleClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover the latest insights, tutorials, and best practices in software development. 
              Learn from industry experts and level up your coding skills.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <FilterBar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <ArticleCard key={post.id} post={post} onClick={() => handleArticleClick(post.slug)} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogLanding;