import React from "react";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Twitter,
  Linkedin,
  BookOpen,
  Copy,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";

// interface ArticleDetailProps {
//   slug?: string;
//   onBack: () => void;
// }

// Comprehensive blog data with full content for each article
const blogPosts = [
  {
    id: "1",
    slug: "getting-started-with-react-hooks",
    title: "Getting Started with React Hooks: A Complete Guide",
    excerpt:
      "Learn how to use React Hooks to build more efficient and cleaner functional components. This comprehensive guide covers useState, useEffect, and custom hooks.",
    content: `
      <h2 id="introduction-to-react-hooks">Introduction to React Hooks</h2>
      <p>React Hooks revolutionized the way we write React components by allowing us to use state and other React features in functional components. Before hooks, you had to use class components to manage state and lifecycle methods.</p>
      
      <h2 id="what-are-react-hooks">What are React Hooks?</h2>
      <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.</p>
      
      <h3 id="the-usestate-hook">The useState Hook</h3>
      <p>The useState hook is the most commonly used hook. It allows you to add state to functional components:</p>
      
      <pre><code class="language-javascript">import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
  &lt;div&gt;
    &lt;p&gt;You clicked {count} times&lt;/p&gt;
    &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
      Click me
    &lt;/button&gt;
  &lt;/div&gt;
);
}</code></pre>
      
      <h3 id="the-useeffect-hook">The useEffect Hook</h3>
      <p>The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in React classes.</p>
      
      <pre><code class="language-javascript">import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
  &lt;div&gt;
    &lt;p&gt;You clicked {count} times&lt;/p&gt;
    &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
      Click me
    &lt;/button&gt;
  &lt;/div&gt;
);
}</code></pre>
      
      <h2 id="custom-hooks">Custom Hooks</h2>
      <p>Custom hooks are JavaScript functions whose names start with "use" and that may call other hooks. They let you extract component logic into reusable functions.</p>
      
      <pre><code class="language-javascript">function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}</code></pre>
      
      <h2 id="best-practices">Best Practices</h2>
      <ul>
        <li>Only call hooks at the top level of your React function</li>
        <li>Only call hooks from React function components or custom hooks</li>
        <li>Use the ESLint plugin for hooks to enforce these rules</li>
        <li>Extract custom hooks when you have complex stateful logic</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>React Hooks provide a more direct API to the React concepts you already know. They offer a powerful and flexible way to compose behavior and share logic between components.</p>
    `,
    featuredImage:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200",
    publishDate: "2024-03-15",
    author: {
      name: "Yusuf Jimoh",
      avatar: "/yusuf-jimoh-ceo.jpg",
    },
    readTime: "8 min read",
    category: "React",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: "2",
    slug: "python-data-structures-guide",
    title: "Python Data Structures: Lists, Dictionaries, and Sets",
    excerpt:
      "Master Python's built-in data structures with practical examples and best practices. Perfect for beginners and intermediate developers.",
    content: `
      <h2 id="introduction-to-python-data-structures">Introduction to Python Data Structures</h2>
      <p>Python offers several built-in data structures that are essential for effective programming. Understanding when and how to use each one is crucial for writing efficient Python code.</p>
      
      <h2 id="lists">Lists</h2>
      <p>Lists are ordered, mutable collections that can contain items of different data types:</p>
      
      <pre><code class="language-python"># Creating lists
fruits = ['apple', 'banana', 'orange']
numbers = [1, 2, 3, 4, 5]
mixed = ['hello', 42, True, 3.14]

# List operations
fruits.append('grape')
fruits.insert(1, 'kiwi')
fruits.remove('banana')
print(fruits[0])  # First item</code></pre>
      
      <h3 id="list-comprehensions">List Comprehensions</h3>
      <p>List comprehensions provide a concise way to create lists:</p>
      
      <pre><code class="language-python"># Traditional approach
squares = []
for x in range(10):
    squares.append(x**2)

# List comprehension
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]</code></pre>
      
      <h2 id="dictionaries">Dictionaries</h2>
      <p>Dictionaries are unordered collections of key-value pairs:</p>
      
      <pre><code class="language-python"># Creating dictionaries
person = {
    'name': 'John Doe',
    'age': 30,
    'city': 'New York'
}

# Dictionary operations
person['email'] = 'john@example.com'
age = person.get('age', 0)
del person['city']

# Dictionary comprehension
squares_dict = {x: x**2 for x in range(5)}</code></pre>
      
      <h2 id="sets">Sets</h2>
      <p>Sets are unordered collections of unique elements:</p>
      
      <pre><code class="language-python"># Creating sets
colors = {'red', 'green', 'blue'}
numbers = set([1, 2, 3, 4, 5])

# Set operations
colors.add('yellow')
colors.remove('red')
colors.discard('purple')  # Won't raise error if not found

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
union = set1 | set2
intersection = set1 & set2
difference = set1 - set2</code></pre>
      
      <h2 id="when-to-use-each-data-structure">When to Use Each Data Structure</h2>
      <ul>
        <li><strong>Lists:</strong> When you need ordered, mutable collections</li>
        <li><strong>Dictionaries:</strong> When you need key-value mappings</li>
        <li><strong>Sets:</strong> When you need unique elements and set operations</li>
      </ul>
      
      <h2 id="performance-considerations">Performance Considerations</h2>
      <p>Understanding the time complexity of operations helps you choose the right data structure:</p>
      <ul>
        <li>List access: O(1), search: O(n), insertion: O(n)</li>
        <li>Dictionary access: O(1), search: O(1), insertion: O(1)</li>
        <li>Set membership test: O(1), insertion: O(1)</li>
      </ul>
    `,
    featuredImage:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
    publishDate: "2024-03-12",
    author: {
      name: "Yusuf Jimoh",
      avatar: "/yusuf-jimoh-ceo.jpg",
    },
    readTime: "12 min read",
    category: "Python",
    tags: ["Python", "Data Structures", "Programming"],
  },
  {
    id: "3",
    slug: "go-concurrency-patterns",
    title: "Go Concurrency Patterns: Goroutines and Channels",
    excerpt:
      "Explore Go's powerful concurrency model with goroutines and channels. Learn patterns for building scalable concurrent applications.",
    content: `
      <h2 id="introduction-to-go-concurrency">Introduction to Go Concurrency</h2>
      <p>Go's concurrency model is one of its strongest features, built around the concept of goroutines and channels. This approach makes it easy to write programs that can handle thousands of concurrent operations efficiently.</p>
      
      <h2 id="goroutines">Goroutines</h2>
      <p>Goroutines are lightweight threads managed by the Go runtime. They're much cheaper than OS threads and you can run thousands of them concurrently.</p>
      
      <pre><code class="language-go">package main

import (
    "fmt"
    "time"
)

func sayHello(name string) {
    for i := 0; i < 3; i++ {
        fmt.Printf("Hello, %s! (%d)\n", name, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    // Start goroutines
    go sayHello("Alice")
    go sayHello("Bob")
    
    // Wait for goroutines to finish
    time.Sleep(1 * time.Second)
}</code></pre>
      
      <h2 id="channels">Channels</h2>
      <p>Channels are the pipes that connect concurrent goroutines. You can send values into channels from one goroutine and receive those values into another goroutine.</p>
      
      <pre><code class="language-go">package main

import "fmt"

func sum(s []int, c chan int) {
    sum := 0
    for _, v := range s {
        sum += v
    }
    c <- sum // Send sum to channel
}

func main() {
    s := []int{7, 2, 8, -9, 4, 0}
    
    c := make(chan int)
    go sum(s[:len(s)/2], c)
    go sum(s[len(s)/2:], c)
    
    x, y := <-c, <-c // Receive from channel
    
    fmt.Println(x, y, x+y)
}</code></pre>
      
      <h3 id="buffered-channels">Buffered Channels</h3>
      <p>Channels can be buffered. Provide the buffer length as the second argument to make to initialize a buffered channel:</p>
      
      <pre><code class="language-go">func main() {
    ch := make(chan int, 2)
    ch <- 1
    ch <- 2
    fmt.Println(<-ch)
    fmt.Println(<-ch)
}</code></pre>
      
      <h2 id="select-statement">Select Statement</h2>
      <p>The select statement lets a goroutine wait on multiple communication operations:</p>
      
      <pre><code class="language-go">func fibonacci(c, quit chan int) {
    x, y := 0, 1
    for {
        select {
        case c <- x:
            x, y = y, x+y
        case <-quit:
            fmt.Println("quit")
            return
        }
    }
}</code></pre>
      
      <h2 id="worker-pool-pattern">Worker Pool Pattern</h2>
      <p>A common pattern in Go is the worker pool, where you have a fixed number of workers processing jobs from a queue:</p>
      
      <pre><code class="language-go">func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("worker %d started job %d\n", id, j)
        time.Sleep(time.Second)
        fmt.Printf("worker %d finished job %d\n", id, j)
        results <- j * 2
    }
}

func main() {
    const numJobs = 5
    jobs := make(chan int, numJobs)
    results := make(chan int, numJobs)

    // Start 3 workers
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }

    // Send jobs
    for j := 1; j <= numJobs; j++ {
        jobs <- j
    }
    close(jobs)

    // Collect results
    for a := 1; a <= numJobs; a++ {
        <-results
    }
}</code></pre>
      
      <h2 id="best-practices">Best Practices</h2>
      <ul>
        <li>Don't communicate by sharing memory; share memory by communicating</li>
        <li>Use channels to orchestrate and coordinate goroutines</li>
        <li>Close channels when you're done sending</li>
        <li>Use select with default for non-blocking operations</li>
        <li>Be careful with shared state and use mutexes when necessary</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Go's concurrency primitives make it easy to write efficient concurrent programs. By understanding goroutines, channels, and common patterns, you can build scalable applications that take full advantage of modern multi-core systems.</p>
    `,
    featuredImage:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200",
    publishDate: "2024-03-10",
    author: {
      name: "Yusuf Jimoh",
      avatar: "/yusuf-jimoh-ceo.jpg",
    },
    readTime: "15 min read",
    category: "Go",
    tags: ["Go", "Concurrency", "Backend"],
  },
  {
    id: "4",
    slug: "swift-ios-development-basics",
    title: "Swift for iOS Development: Building Your First App",
    excerpt:
      "Start your iOS development journey with Swift. Learn the fundamentals and build a simple but functional iOS application.",
    content: `
      <h2 id="introduction-to-swift">Introduction to Swift</h2>
      <p>Swift is Apple's modern programming language for iOS, macOS, watchOS, and tvOS development. It's designed to be safe, fast, and expressive, making it an excellent choice for building iOS applications.</p>
      
      <h2 id="swift-basics">Swift Basics</h2>
      <p>Let's start with the fundamental concepts of Swift programming:</p>
      
      <h3 id="variables-and-constants">Variables and Constants</h3>
      <pre><code class="language-swift">// Constants (immutable)
let name = "John Doe"
let age = 25

// Variables (mutable)
var score = 0
var isPlaying = true

// Type annotations
let pi: Double = 3.14159
var message: String = "Hello, World!"</code></pre>
      
      <h3 id="optionals">Optionals</h3>
      <p>Optionals are a key feature of Swift that handle the absence of a value:</p>
      
      <pre><code class="language-swift">var optionalString: String? = "Hello"
var optionalNumber: Int? = nil

// Optional binding
if let unwrappedString = optionalString {
    print("String is: \(unwrappedString)")
} else {
    print("String is nil")
}

// Nil coalescing operator
let defaultName = optionalString ?? "Unknown"</code></pre>
      
      <h2 id="building-your-first-app">Building Your First App</h2>
      <p>Let's create a simple "Hello World" iOS app using SwiftUI:</p>
      
      <h3 id="creating-the-main-view">Creating the Main View</h3>
      <pre><code class="language-swift">import SwiftUI

struct ContentView: View {
    @State private var name = ""
    @State private var showingGreeting = false
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Welcome to iOS Development!")
                .font(.largeTitle)
                .fontWeight(.bold)
                .multilineTextAlignment(.center)
            
            TextField("Enter your name", text: $name)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding(.horizontal)
            
            Button("Say Hello") {
                showingGreeting = true
            }
            .buttonStyle(.borderedProminent)
            .disabled(name.isEmpty)
            
            if showingGreeting {
                Text("Hello, \(name)!")
                    .font(.title2)
                    .foregroundColor(.blue)
                    .animation(.easeInOut, value: showingGreeting)
            }
        }
        .padding()
    }
}</code></pre>
      
      <h3 id="app-structure">App Structure</h3>
      <pre><code class="language-swift">import SwiftUI

@main
struct MyFirstAppApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}</code></pre>
      
      <h2 id="working-with-data">Working with Data</h2>
      <p>Let's create a simple todo list to demonstrate data handling:</p>
      
      <pre><code class="language-swift">struct TodoItem: Identifiable {
    let id = UUID()
    var title: String
    var isCompleted: Bool = false
}

struct TodoListView: View {
    @State private var todos: [TodoItem] = []
    @State private var newTodoTitle = ""
    
    var body: some View {
        NavigationView {
            VStack {
                HStack {
                    TextField("New todo", text: $newTodoTitle)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    
                    Button("Add") {
                        addTodo()
                    }
                    .disabled(newTodoTitle.isEmpty)
                }
                .padding()
                
                List {
                    ForEach(todos) { todo in
                        HStack {
                            Text(todo.title)
                                .strikethrough(todo.isCompleted)
                            Spacer()
                            Button(todo.isCompleted ? "Undo" : "Done") {
                                toggleTodo(todo)
                            }
                        }
                    }
                    .onDelete(perform: deleteTodos)
                }
            }
            .navigationTitle("My Todos")
        }
    }
    
    private func addTodo() {
        let newTodo = TodoItem(title: newTodoTitle)
        todos.append(newTodo)
        newTodoTitle = ""
    }
    
    private func toggleTodo(_ todo: TodoItem) {
        if let index = todos.firstIndex(where: { $0.id == todo.id }) {
            todos[index].isCompleted.toggle()
        }
    }
    
    private func deleteTodos(offsets: IndexSet) {
        todos.remove(atOffsets: offsets)
    }
}</code></pre>
      
      <h2 id="key-concepts">Key Concepts</h2>
      <ul>
        <li><strong>@State:</strong> Property wrapper for managing local state</li>
        <li><strong>@Binding:</strong> Creates a two-way connection between views</li>
        <li><strong>Identifiable:</strong> Protocol for uniquely identifying items in lists</li>
        <li><strong>NavigationView:</strong> Container for navigation-based user interfaces</li>
      </ul>
      
      <h2 id="next-steps">Next Steps</h2>
      <p>Now that you've built your first iOS app, consider exploring:</p>
      <ul>
        <li>Core Data for persistent storage</li>
        <li>Networking with URLSession</li>
        <li>Advanced SwiftUI animations</li>
        <li>App architecture patterns (MVVM, Clean Architecture)</li>
        <li>Testing your iOS applications</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Swift and SwiftUI provide a powerful and intuitive way to build iOS applications. With these fundamentals, you're ready to start building more complex and feature-rich iOS apps.</p>
    `,
    featuredImage:
      "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200",
    publishDate: "2024-03-08",
    author: {
      name: "Yusuf Jimoh",
      avatar: "/yusuf-jimoh-ceo.jpg",
    },
    readTime: "10 min read",
    category: "Swift",
    tags: ["Swift", "iOS", "Mobile Development"],
  },
  {
    id: "5",
    slug: "javascript-async-await-guide",
    title: "Mastering Async/Await in JavaScript",
    excerpt:
      "Learn how to handle asynchronous operations in JavaScript using async/await. Say goodbye to callback hell and promise chains.",
    content: `
      <h2 id="introduction-to-async-programming">Introduction to Async Programming</h2>
      <p>Asynchronous programming is crucial in JavaScript for handling operations that take time, such as API calls, file operations, or timers. The async/await syntax makes asynchronous code look and behave more like synchronous code.</p>
      
      <h2 id="from-callbacks-to-promises">From Callbacks to Promises</h2>
      <p>Before async/await, we used callbacks and promises:</p>
      
      <h3 id="callback-hell">Callback Hell</h3>
      <pre><code class="language-javascript">// Callback hell example
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            getEvenEvenMoreData(c, function(d) {
                // ... and so on
            });
        });
    });
});</code></pre>
      
      <h3 id="promises">Promises</h3>
      <pre><code class="language-javascript">// Promise chain
getData()
    .then(a => getMoreData(a))
    .then(b => getEvenMoreData(b))
    .then(c => getEvenEvenMoreData(c))
    .then(d => {
        // Handle final result
    })
    .catch(error => {
        // Handle any error in the chain
    });</code></pre>
      
      <h2 id="async-await-syntax">Async/Await Syntax</h2>
      <p>Async/await makes asynchronous code much more readable:</p>
      
      <pre><code class="language-javascript">async function fetchData() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getEvenMoreData(b);
        const d = await getEvenEvenMoreData(c);
        
        return d;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}</code></pre>
      
      <h2 id="practical-examples">Practical Examples</h2>
      
      <h3 id="fetching-api-data">Fetching API Data</h3>
      <pre><code class="language-javascript">async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        return null;
    }
}

// Usage
async function displayUser(userId) {
    const user = await fetchUserData(userId);
    if (user) {
        console.log(\`User: \${user.name}, Email: \${user.email}\`);
    }
}</code></pre>
      
      <h3 id="parallel-execution">Parallel Execution</h3>
      <pre><code class="language-javascript">// Sequential execution (slower)
async function fetchDataSequential() {
    const user = await fetchUser();
    const posts = await fetchPosts();
    const comments = await fetchComments();
    
    return { user, posts, comments };
}

// Parallel execution (faster)
async function fetchDataParallel() {
    const [user, posts, comments] = await Promise.all([
        fetchUser(),
        fetchPosts(),
        fetchComments()
    ]);
    
    return { user, posts, comments };
}</code></pre>
      
      <h3 id="handling-multiple-promises">Handling Multiple Promises</h3>
      <pre><code class="language-javascript">// Promise.all - fails if any promise fails
async function fetchAllData() {
    try {
        const results = await Promise.all([
            fetchData1(),
            fetchData2(),
            fetchData3()
        ]);
        return results;
    } catch (error) {
        console.error('One or more requests failed:', error);
    }
}

// Promise.allSettled - waits for all promises regardless of outcome
async function fetchAllDataSettled() {
    const results = await Promise.allSettled([
        fetchData1(),
        fetchData2(),
        fetchData3()
    ]);
    
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(\`Request \${index + 1} succeeded:\`, result.value);
        } else {
            console.log(\`Request \${index + 1} failed:\`, result.reason);
        }
    });
}</code></pre>
      
      <h2 id="error-handling">Error Handling</h2>
      <p>Proper error handling is crucial in async functions:</p>
      
      <pre><code class="language-javascript">async function robustApiCall(url) {
    const maxRetries = 3;
    let lastError;
    
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
            }
            
            return await response.json();
        } catch (error) {
            lastError = error;
            console.log(\`Attempt \${i + 1} failed:\`, error.message);
            
            if (i < maxRetries - 1) {
                // Wait before retrying
                await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
            }
        }
    }
    
    throw new Error(\`Failed after \${maxRetries} attempts: \${lastError.message}\`);
}</code></pre>
      
      <h2 id="best-practices">Best Practices</h2>
      <ul>
        <li><strong>Always use try/catch:</strong> Handle errors properly in async functions</li>
        <li><strong>Use Promise.all for parallel operations:</strong> Don't await unnecessarily in sequence</li>
        <li><strong>Don't forget to return:</strong> Async functions should return promises</li>
        <li><strong>Avoid async in loops:</strong> Use Promise.all or for...of instead</li>
        <li><strong>Handle loading states:</strong> Show users that operations are in progress</li>
      </ul>
      
      <h2 id="common-pitfalls">Common Pitfalls</h2>
      <pre><code class="language-javascript">// ❌ Wrong: Sequential execution when parallel is possible
async function badExample() {
    const user = await fetchUser();
    const posts = await fetchPosts(); // This waits unnecessarily
    return { user, posts };
}

// ✅ Correct: Parallel execution
async function goodExample() {
    const [user, posts] = await Promise.all([
        fetchUser(),
        fetchPosts()
    ]);
    return { user, posts };
}

// ❌ Wrong: Using async/await in array methods incorrectly
async function processItems(items) {
    return items.map(async item => {
        return await processItem(item); // This doesn't work as expected
    });
}

// ✅ Correct: Proper handling of async operations in arrays
async function processItems(items) {
    const promises = items.map(item => processItem(item));
    return await Promise.all(promises);
}</code></pre>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Async/await is a powerful feature that makes asynchronous JavaScript code more readable and maintainable. By understanding its proper usage, error handling, and common patterns, you can write more robust and efficient applications.</p>
    `,
    featuredImage:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
    publishDate: "2024-03-05",
    author: {
      name: "Yusuf Jimoh",
      avatar: "/yusuf-jimoh-ceo.jpg",
    },
    readTime: "7 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Async", "Programming"],
  },
  {
    id: "6",
    slug: "python-web-scraping-tutorial",
    title: "Web Scraping with Python: BeautifulSoup and Requests",
    excerpt:
      "Learn how to extract data from websites using Python. This tutorial covers BeautifulSoup, requests, and best practices for ethical scraping.",
    content: `
      <h2 id="introduction-to-web-scraping">Introduction to Web Scraping</h2>
      <p>Web scraping is a powerful technique for extracting data from websites. Python provides excellent libraries like requests and BeautifulSoup that make web scraping accessible and efficient.</p>
      
      <h2 id="setting-up-your-environment">Setting Up Your Environment</h2>
      <p>First, install the required libraries:</p>
      
      <pre><code class="language-bash">pip install requests beautifulsoup4 lxml</code></pre>
      
      <h2 id="basic-web-scraping">Basic Web Scraping</h2>
      <p>Let's start with a simple example:</p>
      
      <pre><code class="language-python">import requests
from bs4 import BeautifulSoup

# Make a request to the website
url = "https://example.com"
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Extract the title
    title = soup.find('title').text
    print(f"Page title: {title}")
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")</code></pre>
      
      <h2 id="finding-elements">Finding Elements</h2>
      <p>BeautifulSoup provides various methods to find elements:</p>
      
      <pre><code class="language-python">import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find by tag
first_quote = soup.find('span', class_='text')
print(f"First quote: {first_quote.text}")

# Find all elements
all_quotes = soup.find_all('span', class_='text')
print(f"Total quotes found: {len(all_quotes)}")

# Find by CSS selector
authors = soup.select('.author')
for author in authors[:3]:
    print(f"Author: {author.text}")

# Find by attributes
quote_containers = soup.find_all('div', class_='quote')
for container in quote_containers[:2]:
    quote = container.find('span', class_='text').text
    author = container.find('small', class_='author').text
    print(f'"{quote}" - {author}')</code></pre>
      
      <h2 id="handling-forms-and-sessions">Handling Forms and Sessions</h2>
      <p>Sometimes you need to handle login forms or maintain sessions:</p>
      
      <pre><code class="language-python">import requests
from bs4 import BeautifulSoup

# Create a session to persist cookies
session = requests.Session()

# Login example
login_url = "https://example.com/login"
login_data = {
    'username': 'your_username',
    'password': 'your_password'
}

# Post login data
login_response = session.post(login_url, data=login_data)

if login_response.status_code == 200:
    # Now access protected pages
    protected_url = "https://example.com/protected"
    protected_response = session.get(protected_url)
    
    if protected_response.status_code == 200:
        soup = BeautifulSoup(protected_response.content, 'html.parser')
        # Extract data from protected page
        print("Successfully accessed protected content")
</code></pre>
      
      <h2 id="handling-dynamic-content">Handling Dynamic Content</h2>
      <p>For JavaScript-heavy sites, you might need Selenium:</p>
      
      <pre><code class="language-python"># First install: pip install selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Set up the driver (make sure you have chromedriver installed)
driver = webdriver.Chrome()

try:
    # Navigate to the page
    driver.get("https://example.com")
    
    # Wait for an element to load
    wait = WebDriverWait(driver, 10)
    element = wait.until(
        EC.presence_of_element_located((By.CLASS_NAME, "dynamic-content"))
    )
    
    # Extract data
    content = element.text
    print(f"Dynamic content: {content}")
    
finally:
    driver.quit()</code></pre>
      
      <h2 id="data-processing-and-storage">Data Processing and Storage</h2>
      <p>Process and store your scraped data:</p>
      
      <pre><code class="language-python">import requests
from bs4 import BeautifulSoup
import csv
import json
from datetime import datetime

def scrape_quotes():
    url = "https://quotes.toscrape.com"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    quotes_data = []
    
    quote_containers = soup.find_all('div', class_='quote')
    for container in quote_containers:
        quote_text = container.find('span', class_='text').text
        author = container.find('small', class_='author').text
        tags = [tag.text for tag in container.find_all('a', class_='tag')]
        
        quote_data = {
            'text': quote_text,
            'author': author,
            'tags': tags,
            'scraped_at': datetime.now().isoformat()
        }
        quotes_data.append(quote_data)
    
    return quotes_data

# Save to JSON
quotes = scrape_quotes()
with open('quotes.json', 'w', encoding='utf-8') as f:
    json.dump(quotes, f, ensure_ascii=False, indent=2)

# Save to CSV
with open('quotes.csv', 'w', newline='', encoding='utf-8') as f:
    if quotes:
        writer = csv.DictWriter(f, fieldnames=['text', 'author', 'tags', 'scraped_at'])
        writer.writeheader()
        for quote in quotes:
            # Convert tags list to string for CSV
            quote['tags'] = ', '.join(quote['tags'])
            writer.writerow(quote)</code></pre>
      
      <h2 id="best-practices-and-ethics">Best Practices and Ethics</h2>
      <ul>
        <li><strong>Respect robots.txt:</strong> Check the website's robots.txt file</li>
        <li><strong>Rate limiting:</strong> Don't overwhelm servers with requests</li>
        <li><strong>User agents:</strong> Use appropriate user agent strings</li>
        <li><strong>Handle errors gracefully:</strong> Implement proper error handling</li>
        <li><strong>Legal compliance:</strong> Ensure you have permission to scrape</li>
      </ul>
      
      <pre><code class="language-python">import requests
from bs4 import BeautifulSoup
import time
import random

class EthicalScraper:
    def __init__(self, delay_range=(1, 3)):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        self.delay_range = delay_range
    
    def get_page(self, url):
        try:
            # Random delay between requests
            delay = random.uniform(*self.delay_range)
            time.sleep(delay)
            
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            return response
        except requests.RequestException as e:
            print(f"Error fetching {url}: {e}")
            return None
    
    def scrape_with_retry(self, url, max_retries=3):
        for attempt in range(max_retries):
            response = self.get_page(url)
            if response:
                return BeautifulSoup(response.content, 'html.parser')
            
            if attempt < max_retries - 1:
                wait_time = 2 ** attempt  # Exponential backoff
                print(f"Retrying in {wait_time} seconds...")
                time.sleep(wait_time)
        
        return None

# Usage
scraper = EthicalScraper()
soup = scraper.scrape_with_retry("https://example.com")</code></pre>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Web scraping with Python is a powerful skill for data collection and analysis. Remember to always scrape responsibly, respect website terms of service, and implement proper error handling and rate limiting in your scrapers.</p>
    `,
    featuredImage:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    publishDate: "2024-03-03",
    author: {
      name: "Yusuf Jimoh",
      avatar: "/yusuf-jimoh-ceo.jpg",
    },
    readTime: "14 min read",
    category: "Python",
    tags: ["Python", "Web Scraping", "Data"],
  },
  {
    id: "7",
    slug: "go-rest-api-development",
    title: "Building REST APIs with Go and Gin Framework",
    excerpt:
      "Create robust REST APIs using Go and the Gin web framework. Learn routing, middleware, and database integration.",
    content: `
      <h2 id="introduction-to-go-apis">Introduction to Go APIs</h2>
      <p>Go is an excellent choice for building REST APIs due to its performance, simplicity, and excellent standard library. The Gin framework makes API development even more straightforward with its minimalist design and powerful features.</p>
      
      <h2 id="setting-up-gin">Setting Up Gin</h2>
      <p>First, let's set up a new Go project and install Gin:</p>
      
      <pre><code class="language-bash"># Initialize a new Go module
go mod init api-example

# Install Gin
go get github.com/gin-gonic/gin</code></pre>
      
      <h2 id="basic-api-structure">Basic API Structure</h2>
      <p>Let's create a simple API with basic CRUD operations:</p>
      
      <pre><code class="language-go">package main

import (
    "net/http"
    "strconv"
    
    "github.com/gin-gonic/gin"
)

type Book struct {
    ID     int    \`json:"id"\`
    Title  string \`json:"title"\`
    Author string \`json:"author"\`
    Year   int    \`json:"year"\`
}

var books = []Book{
    {ID: 1, Title: "The Go Programming Language", Author: "Alan Donovan", Year: 2015},
    {ID: 2, Title: "Clean Code", Author: "Robert Martin", Year: 2008},
}

func main() {
    // Create Gin router
    r := gin.Default()
    
    // Define API routes
    api := r.Group("/api/v1")
    {
        api.GET("/books", getBooks)
        api.GET("/books/:id", getBook)
        api.POST("/books", createBook)
        api.PUT("/books/:id", updateBook)
        api.DELETE("/books/:id", deleteBook)
    }
    
    // Start server on port 8080
    r.Run(":8080")
}</code></pre>
      
      <h2 id="implementing-handlers">Implementing Handlers</h2>
      <p>Now let's implement the handler functions:</p>
      
      <pre><code class="language-go">// GET /api/v1/books
func getBooks(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
        "data": books,
        "count": len(books),
    })
}

// GET /api/v1/books/:id
func getBook(c *gin.Context) {
    id, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": "Invalid book ID",
        })
        return
    }
    
    for _, book := range books {
        if book.ID == id {
            c.JSON(http.StatusOK, gin.H{
                "data": book,
            })
            return
        }
    }
    
    c.JSON(http.StatusNotFound, gin.H{
        "error": "Book not found",
    })
}

// POST /api/v1/books
func createBook(c *gin.Context) {
    var newBook Book
    
    if err := c.ShouldBindJSON(&newBook); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": err.Error(),
        })
        return
    }
    
    // Generate new ID
    newBook.ID = len(books) + 1
    books = append(books, newBook)
    
    c.JSON(http.StatusCreated, gin.H{
        "data": newBook,
        "message": "Book created successfully",
    })
}

// PUT /api/v1/books/:id
func updateBook(c *gin.Context) {
    id, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": "Invalid book ID",
        })
        return
    }
    
    var updatedBook Book
    if err := c.ShouldBindJSON(&updatedBook); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": err.Error(),
        })
        return
    }
    
    for i, book := range books {
        if book.ID == id {
            updatedBook.ID = id
            books[i] = updatedBook
            c.JSON(http.StatusOK, gin.H{
                "data": updatedBook,
                "message": "Book updated successfully",
            })
            return
        }
    }
    
    c.JSON(http.StatusNotFound, gin.H{
        "error": "Book not found",
    })
}

// DELETE /api/v1/books/:id
func deleteBook(c *gin.Context) {
    id, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": "Invalid book ID",
        })
        return
    }
    
    for i, book := range books {
        if book.ID == id {
            books = append(books[:i], books[i+1:]...)
            c.JSON(http.StatusOK, gin.H{
                "message": "Book deleted successfully",
            })
            return
        }
    }
    
    c.JSON(http.StatusNotFound, gin.H{
        "error": "Book not found",
    })
}</code></pre>
      
      <h2 id="adding-middleware">Adding Middleware</h2>
      <p>Middleware functions run before your handlers and can be used for logging, authentication, CORS, etc.:</p>
      
      <pre><code class="language-go">import (
    "log"
    "time"
    "github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
)

// Custom logging middleware
func Logger() gin.HandlerFunc {
    return func(c *gin.Context) {
        start := time.Now()
        path := c.Request.URL.Path
        raw := c.Request.URL.RawQuery
        
        // Process request
        c.Next()
        
        // Log request details
        latency := time.Since(start)
        clientIP := c.ClientIP()
        method := c.Request.Method
        statusCode := c.Writer.Status()
        
        if raw != "" {
            path = path + "?" + raw
        }
        
        log.Printf("[%s] %s %s %d %v",
            clientIP,
            method,
            path,
            statusCode,
            latency,
        )
    }
}

// Authentication middleware
func AuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        token := c.GetHeader("Authorization")
        
        if token == "" {
            c.JSON(http.StatusUnauthorized, gin.H{
                "error": "Authorization header required",
            })
            c.Abort()
            return
        }
        
        // Validate token (simplified example)
        if token != "Bearer valid-token" {
            c.JSON(http.StatusUnauthorized, gin.H{
                "error": "Invalid token",
            })
            c.Abort()
            return
        }
        
        c.Next()
    }
}

func main() {
    r := gin.New()
    
    // Add middleware
    r.Use(Logger())
    r.Use(gin.Recovery())
    
    // CORS middleware
    config := cors.DefaultConfig()
    config.AllowOrigins = []string{"http://localhost:3000"}
    config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
    r.Use(cors.New(config))
    
    // Public routes
    public := r.Group("/api/v1")
    {
        public.GET("/books", getBooks)
        public.GET("/books/:id", getBook)
    }
    
    // Protected routes
    protected := r.Group("/api/v1")
    protected.Use(AuthMiddleware())
    {
        protected.POST("/books", createBook)
        protected.PUT("/books/:id", updateBook)
        protected.DELETE("/books/:id", deleteBook)
    }
    
    r.Run(":8080")
}</code></pre>
      
      <h2 id="database-integration">Database Integration</h2>
      <p>Let's integrate with a PostgreSQL database using GORM:</p>
      
      <pre><code class="language-bash"># Install GORM and PostgreSQL driver
go get gorm.io/gorm
go get gorm.io/driver/postgres</code></pre>
      
      <pre><code class="language-go">import (
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

type Book struct {
    ID     uint   \`json:"id" gorm:"primaryKey"\`
    Title  string \`json:"title" gorm:"not null"\`
    Author string \`json:"author" gorm:"not null"\`
    Year   int    \`json:"year"\`
}

var db *gorm.DB

func initDatabase() {
    dsn := "host=localhost user=username password=password dbname=bookstore port=5432 sslmode=disable"
    var err error
    db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }
    
    // Auto migrate the schema
    db.AutoMigrate(&Book{})
}

// Updated handlers using database
func getBooks(c *gin.Context) {
    var books []Book
    result := db.Find(&books)
    
    if result.Error != nil {
        c.JSON(http.StatusInternalServerError, gin.H{
            "error": "Failed to fetch books",
        })
        return
    }
    
    c.JSON(http.StatusOK, gin.H{
        "data": books,
        "count": len(books),
    })
}

func createBook(c *gin.Context) {
    var newBook Book
    
    if err := c.ShouldBindJSON(&newBook); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": err.Error(),
        })
        return
    }
    
    result := db.Create(&newBook)
    if result.Error != nil {
        c.JSON(http.StatusInternalServerError, gin.H{
            "error": "Failed to create book",
        })
        return
    }
    
    c.JSON(http.StatusCreated, gin.H{
        "data": newBook,
        "message": "Book created successfully",
    })
}

func main() {
    initDatabase()
    
    r := gin.Default()
    // ... rest of the setup
}</code></pre>
      
      <h2 id="input-validation">Input Validation</h2>
      <p>Add proper input validation using struct tags:</p>
      
      <pre><code class="language-go">type Book struct {
    ID     uint   \`json:"id" gorm:"primaryKey"\`
    Title  string \`json:"title" binding:"required,min=1,max=200" gorm:"not null"\`
    Author string \`json:"author" binding:"required,min=1,max=100" gorm:"not null"\`
    Year   int    \`json:"year" binding:"required,min=1000,max=2100"\`
}

type CreateBookRequest struct {
    Title  string \`json:"title" binding:"required,min=1,max=200"\`
    Author string \`json:"author" binding:"required,min=1,max=100"\`
    Year   int    \`json:"year" binding:"required,min=1000,max=2100"\`
}

func createBook(c *gin.Context) {
    var req CreateBookRequest
    
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": "Validation failed",
            "details": err.Error(),
        })
        return
    }
    
    book := Book{
        Title:  req.Title,
        Author: req.Author,
        Year:   req.Year,
    }
    
    result := db.Create(&book)
    if result.Error != nil {
        c.JSON(http.StatusInternalServerError, gin.H{
            "error": "Failed to create book",
        })
        return
    }
    
    c.JSON(http.StatusCreated, gin.H{
        "data": book,
        "message": "Book created successfully",
    })
}</code></pre>
      
      <h2 id="testing-your-api">Testing Your API</h2>
      <p>Write tests for your API endpoints:</p>
      
      <pre><code class="language-go">package main

import (
    "bytes"
    "encoding/json"
    "net/http"
    "net/http/httptest"
    "testing"
    
    "github.com/gin-gonic/gin"
    "github.com/stretchr/testify/assert"
)

func setupRouter() *gin.Engine {
    gin.SetMode(gin.TestMode)
    r := gin.Default()
    
    api := r.Group("/api/v1")
    {
        api.GET("/books", getBooks)
        api.POST("/books", createBook)
    }
    
    return r
}

func TestGetBooks(t *testing.T) {
    router := setupRouter()
    
    w := httptest.NewRecorder()
    req, _ := http.NewRequest("GET", "/api/v1/books", nil)
    router.ServeHTTP(w, req)
    
    assert.Equal(t, 200, w.Code)
    
    var response map[string]interface{}
    err := json.Unmarshal(w.Body.Bytes(), &response)
    assert.NoError(t, err)
    assert.Contains(t, response, "data")
}

func TestCreateBook(t *testing.T) {
    router := setupRouter()
    
    book := CreateBookRequest{
        Title:  "Test Book",
        Author: "Test Author",
        Year:   2023,
    }
    
    jsonValue, _ := json.Marshal(book)
    w := httptest.NewRecorder()
    req, _ := http.NewRequest("POST", "/api/v1/books", bytes.NewBuffer(jsonValue))
    req.Header.Set("Content-Type", "application/json")
    
    router.ServeHTTP(w, req)
    
    assert.Equal(t, 201, w.Code)
}</code></pre>
      
      <h2 id="best-practices">Best Practices</h2>
      <ul>
        <li><strong>Use proper HTTP status codes:</strong> 200, 201, 400, 404, 500, etc.</li>
        <li><strong>Implement proper error handling:</strong> Return consistent error responses</li>
        <li><strong>Use middleware for cross-cutting concerns:</strong> Logging, authentication, CORS</li>
        <li><strong>Validate input data:</strong> Use struct tags and custom validators</li>
        <li><strong>Structure your code:</strong> Separate handlers, models, and database logic</li>
        <li><strong>Write tests:</strong> Test your API endpoints thoroughly</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Building REST APIs with Go and Gin is straightforward and powerful. The combination provides excellent performance, clean code structure, and robust features for building production-ready APIs.</p>
    `,
    featuredImage:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200",
    publishDate: "2024-03-01",
    author: {
      name: "Yusuf Jimoh",
      avatar: "/yusuf-jimoh-ceo.jpg",
    },
    readTime: "18 min read",
    category: "Go",
    tags: ["Go", "API", "Backend", "Gin"],
  },
  {
    id: "8",
    slug: "swift-swiftui-fundamentals",
    title: "SwiftUI Fundamentals: Declarative UI Development",
    excerpt:
      "Discover SwiftUI's declarative approach to building user interfaces. Learn views, modifiers, and state management.",
    content: `
      <h2 id="introduction-to-swiftui">Introduction to SwiftUI</h2>
      <p>SwiftUI represents a paradigm shift in iOS development, moving from imperative UIKit to a declarative approach. With SwiftUI, you describe what your UI should look like and how it should behave, and the framework handles the rest.</p>
      
      <h2 id="basic-views">Basic Views</h2>
      <p>SwiftUI provides many built-in views for creating user interfaces:</p>
      
      <pre><code class="language-swift">import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 20) {
            // Text view
            Text("Hello, SwiftUI!")
                .font(.largeTitle)
                .fontWeight(.bold)
                .foregroundColor(.blue)
            
            // Image view
            Image(systemName: "star.fill")
                .font(.system(size: 50))
                .foregroundColor(.yellow)
            
            // Button view
            Button("Tap Me") {
                print("Button tapped!")
            }
            .buttonStyle(.borderedProminent)
            
            // TextField
            TextField("Enter your name", text: .constant(""))
                .textFieldStyle(.roundedBorder)
                .padding(.horizontal)
        }
        .padding()
    }
}</code></pre>
      
      <h2 id="layout-containers">Layout Containers</h2>
      <p>SwiftUI provides several container views for organizing your UI:</p>
      
      <pre><code class="language-swift">struct LayoutExamples: View {
    var body: some View {
        ScrollView {
            VStack(spacing: 30) {
                // HStack - Horizontal layout
                HStack {
                    Text("Left")
                    Spacer()
                    Text("Center")
                    Spacer()
                    Text("Right")
                }
                .padding()
                .background(Color.gray.opacity(0.2))
                .cornerRadius(10)
                
                // ZStack - Layered layout
                ZStack {
                    Rectangle()
                        .fill(Color.blue)
                        .frame(width: 200, height: 100)
                    
                    Text("Overlay Text")
                        .foregroundColor(.white)
                        .font(.headline)
                }
                
                // LazyVGrid - Grid layout
                LazyVGrid(columns: [
                    GridItem(.flexible()),
                    GridItem(.flexible()),
                    GridItem(.flexible())
                ], spacing: 10) {
                    ForEach(1...9, id: \.self) { number in
                        Rectangle()
                            .fill(Color.green)
                            .frame(height: 60)
                            .overlay(
                                Text("\(number)")
                                    .foregroundColor(.white)
                                    .font(.title)
                            )
                    }
                }
                .padding()
            }
        }
    }
}</code></pre>
      
      <h2 id="state-management">State Management</h2>
      <p>SwiftUI uses property wrappers to manage state and data flow:</p>
      
      <pre><code class="language-swift">struct StateExample: View {
    @State private var counter = 0
    @State private var name = ""
    @State private var isToggled = false
    
    var body: some View {
        VStack(spacing: 20) {
            // @State for local state
            Text("Counter: \(counter)")
                .font(.title)
            
            HStack {
                Button("Decrease") {
                    counter -= 1
                }
                .buttonStyle(.bordered)
                
                Button("Increase") {
                    counter += 1
                }
                .buttonStyle(.borderedProminent)
            }
            
            // TextField with @State binding
            TextField("Enter your name", text: $name)
                .textFieldStyle(.roundedBorder)
                .padding(.horizontal)
            
            if !name.isEmpty {
                Text("Hello, \(name)!")
                    .font(.headline)
                    .foregroundColor(.blue)
            }
            
            // Toggle with @State
            Toggle("Enable notifications", isOn: $isToggled)
                .padding(.horizontal)
            
            if isToggled {
                Text("Notifications enabled")
                    .foregroundColor(.green)
            }
        }
        .padding()
    }
}</code></pre>
      
      <h2 id="data-binding">Data Binding</h2>
      <p>Learn how to pass data between views using @Binding:</p>
      
      <pre><code class="language-swift">struct ParentView: View {
    @State private var sharedText = ""
    @State private var isPresented = false
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Shared text: \(sharedText)")
                .font(.headline)
            
            Button("Show Child View") {
                isPresented = true
            }
            .buttonStyle(.borderedProminent)
        }
        .sheet(isPresented: $isPresented) {
            ChildView(text: $sharedText, isPresented: $isPresented)
        }
    }
}

struct ChildView: View {
    @Binding var text: String
    @Binding var isPresented: Bool
    
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                Text("Edit the shared text:")
                    .font(.headline)
                
                TextField("Enter text", text: $text)
                    .textFieldStyle(.roundedBorder)
                    .padding()
                
                Button("Done") {
                    isPresented = false
                }
                .buttonStyle(.borderedProminent)
            }
            .navigationTitle("Child View")
            .navigationBarTitleDisplayMode(.inline)
        }
    }
}</code></pre>
      
      <h2 id="lists-and-navigation">Lists and Navigation</h2>
      <p>Create dynamic lists and navigation flows:</p>
      
      <pre><code class="language-swift">struct Item: Identifiable {
    let id = UUID()
    let name: String
    let description: String
}

struct ListView: View {
    let items = [
        Item(name: "SwiftUI", description: "Declarative UI framework"),
        Item(name: "Combine", description: "Reactive programming framework"),
        Item(name: "Core Data", description: "Data persistence framework")
    ]
    
    var body: some View {
        NavigationView {
            List(items) { item in
                NavigationLink(destination: DetailView(item: item)) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text(item.name)
                            .font(.headline)
                        Text(item.description)
                            .font(.caption)
                            .foregroundColor(.secondary)
                    }
                    .padding(.vertical, 4)
                }
            }
            .navigationTitle("Frameworks")
        }
    }
}

struct DetailView: View {
    let item: Item
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text(item.name)
                .font(.largeTitle)
                .fontWeight(.bold)
            
            Text(item.description)
                .font(.body)
                .foregroundColor(.secondary)
            
            Spacer()
        }
        .padding()
        .navigationTitle(item.name)
        .navigationBarTitleDisplayMode(.inline)
    }
}</code></pre>
      
      <h2 id="custom-views-and-modifiers">Custom Views and Modifiers</h2>
      <p>Create reusable custom views and modifiers:</p>
      
      <pre><code class="language-swift">// Custom View
struct CustomButton: View {
    let title: String
    let action: () -> Void
    let color: Color
    
    var body: some View {
        Button(action: action) {
            Text(title)
                .font(.headline)
                .foregroundColor(.white)
                .padding()
                .frame(maxWidth: .infinity)
                .background(color)
                .cornerRadius(10)
        }
    }
}

// Custom ViewModifier
struct CardStyle: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding()
            .background(Color.white)
            .cornerRadius(10)
            .shadow(color: .gray.opacity(0.3), radius: 5, x: 0, y: 2)
    }
}

extension View {
    func cardStyle() -> some View {
        modifier(CardStyle())
    }
}

// Usage
struct CustomViewExample: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("Custom Views Example")
                .font(.title)
                .cardStyle()
            
            CustomButton(
                title: "Primary Action",
                action: { print("Primary tapped") },
                color: .blue
            )
            
            CustomButton(
                title: "Secondary Action",
                action: { print("Secondary tapped") },
                color: .green
            )
        }
        .padding()
    }
}</code></pre>
      
      <h2 id="animations">Animations</h2>
      <p>Add smooth animations to your SwiftUI views:</p>
      
      <pre><code class="language-swift">struct AnimationExample: View {
    @State private var isRotated = false
    @State private var scale: CGFloat = 1.0
    @State private var offset: CGSize = .zero
    
    var body: some View {
        VStack(spacing: 40) {
            // Rotation animation
            Rectangle()
                .fill(Color.blue)
                .frame(width: 100, height: 100)
                .rotationEffect(.degrees(isRotated ? 180 : 0))
                .animation(.easeInOut(duration: 1), value: isRotated)
                .onTapGesture {
                    isRotated.toggle()
                }
            
            // Scale animation
            Circle()
                .fill(Color.red)
                .frame(width: 80, height: 80)
                .scaleEffect(scale)
                .animation(.spring(response: 0.5, dampingFraction: 0.6), value: scale)
                .onTapGesture {
                    scale = scale == 1.0 ? 1.5 : 1.0
                }
            
            // Offset animation with gesture
            RoundedRectangle(cornerRadius: 10)
                .fill(Color.green)
                .frame(width: 100, height: 100)
                .offset(offset)
                .gesture(
                    DragGesture()
                        .onChanged { value in
                            offset = value.translation
                        }
                        .onEnded { _ in
                            withAnimation(.spring()) {
                                offset = .zero
                            }
                        }
                )
            
            Button("Animate All") {
                withAnimation(.easeInOut(duration: 1)) {
                    isRotated.toggle()
                    scale = scale == 1.0 ? 1.5 : 1.0
                }
            }
            .buttonStyle(.borderedProminent)
        }
        .padding()
    }
}</code></pre>
      
      <h2 id="best-practices">Best Practices</h2>
      <ul>
        <li><strong>Keep views small and focused:</strong> Break complex views into smaller components</li>
        <li><strong>Use @State for local state:</strong> Keep state as close to where it's used as possible</li>
        <li><strong>Prefer @StateObject over @ObservedObject:</strong> For view-owned objects</li>
        <li><strong>Use PreviewProvider:</strong> Create previews for faster development</li>
        <li><strong>Extract subviews:</strong> When body becomes too complex</li>
        <li><strong>Use proper data flow:</strong> Understand when to use @State, @Binding, @ObservedObject</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>SwiftUI's declarative approach makes building user interfaces more intuitive and maintainable. By understanding views, state management, and data flow, you can create powerful and responsive iOS applications with less code and better performance.</p>
    `,
    featuredImage:
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1200",
    publishDate: "2024-02-28",
    author: {
      name: "Yusuf Jimoh",
      avatar: "/yusuf-jimoh-ceo.jpg",
    },
    readTime: "11 min read",
    category: "Swift",
    tags: ["Swift", "SwiftUI", "iOS", "UI"],
  },
  {
    id: "9",
    slug: "react-performance-optimization",
    title: "React Performance Optimization: Tips and Techniques",
    excerpt:
      "Optimize your React applications for better performance. Learn about memoization, code splitting, and profiling techniques.",
    content: `
      <h2 id="introduction-to-react-performance">Introduction to React Performance</h2>
      <p>Performance optimization in React is crucial for creating smooth, responsive user experiences. This guide covers essential techniques and best practices for optimizing React applications.</p>
      
      <h2 id="understanding-react-rendering">Understanding React Rendering</h2>
      <p>Before optimizing, it's important to understand how React renders components:</p>
      
      <pre><code class="language-javascript">// React rendering cycle
function MyComponent({ data }) {
  console.log('Component rendering'); // This runs on every render
  
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

// Parent component
function App() {
  const [count, setCount] = useState(0);
  const [data] = useState({ title: 'Hello', description: 'World' });
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      {/* MyComponent re-renders even though data hasn't changed */}
      <MyComponent data={data} />
    </div>
  );
}</code></pre>
      
      <h2 id="react-memo">React.memo</h2>
      <p>Use React.memo to prevent unnecessary re-renders of functional components:</p>
      
      <pre><code class="language-javascript">import React, { memo, useState } from 'react';

// Without memo - re-renders on every parent update
const ExpensiveComponent = ({ data }) => {
  console.log('ExpensiveComponent rendering');
  
  // Simulate expensive calculation
  const expensiveValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, []);
  
  return (
    <div>
      <h3>{data.title}</h3>
      <p>Expensive calculation result: {expensiveValue}</p>
    </div>
  );
};

// With memo - only re-renders when props change
const OptimizedComponent = memo(({ data }) => {
  console.log('OptimizedComponent rendering');
  
  const expensiveValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, []);
  
  return (
    <div>
      <h3>{data.title}</h3>
      <p>Expensive calculation result: {expensiveValue}</p>
    </div>
  );
});

// Custom comparison function
const SmartComponent = memo(({ user, settings }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Theme: {settings.theme}</p>
    </div>
  );
}, (prevProps, nextProps) => {
  // Only re-render if user.name or settings.theme changed
  return prevProps.user.name === nextProps.user.name &&
         prevProps.settings.theme === nextProps.settings.theme;
});</code></pre>
      
      <h2 id="usememo-and-usecallback">useMemo and useCallback</h2>
      <p>Optimize expensive calculations and function references:</p>
      
      <pre><code class="language-javascript">import React, { useMemo, useCallback, useState } from 'react';

function OptimizedApp() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  
  // Memoize expensive filtering and sorting
  const processedItems = useMemo(() => {
    console.log('Processing items...');
    
    let filtered = items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });
  }, [items, filter, sortOrder]);
  
  // Memoize callback functions
  const handleAddItem = useCallback((newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  }, []);
  
  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);
  
  const handleSortChange = useCallback((newSort) => {
    setSortOrder(newSort);
  }, []);
  
  return (
    <div>
      <SearchBar 
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <ItemList 
        items={processedItems}
        onAddItem={handleAddItem}
      />
    </div>
  );
}

// Child components that benefit from memoized callbacks
const SearchBar = memo(({ onFilterChange, onSortChange }) => {
  console.log('SearchBar rendering');
  
  return (
    <div>
      <input 
        type="text"
        placeholder="Filter items..."
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
});

const ItemList = memo(({ items, onAddItem }) => {
  console.log('ItemList rendering');
  
  return (
    <div>
      <button onClick={() => onAddItem({ name: 'New Item', id: Date.now() })}>
        Add Item
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
});</code></pre>
      
      <h2 id="code-splitting">Code Splitting</h2>
      <p>Split your code to reduce initial bundle size:</p>
      
      <pre><code class="language-javascript">import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Profile = lazy(() => import('./components/Profile'));

// Component-level code splitting
const HeavyComponent = lazy(() => 
  import('./components/HeavyComponent').then(module => ({
    default: module.HeavyComponent
  }))
);

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

// Dynamic imports based on conditions
function ConditionalComponent({ shouldLoadHeavy }) {
  const [HeavyComp, setHeavyComp] = useState(null);
  
  useEffect(() => {
    if (shouldLoadHeavy && !HeavyComp) {
      import('./HeavyComponent').then(module => {
        setHeavyComp(() => module.default);
      });
    }
  }, [shouldLoadHeavy, HeavyComp]);
  
  return (
    <div>
      {HeavyComp ? <HeavyComp /> : <div>Light content</div>}
    </div>
  );
}</code></pre>
      
      <h2 id="virtualization">Virtualization</h2>
      <p>Handle large lists efficiently with virtualization:</p>
      
      <pre><code class="language-javascript">// Using react-window for virtualization
import { FixedSizeList as List } from 'react-window';

// Large list without virtualization (performance issue)
function SlowList({ items }) {
  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      {items.map((item, index) => (
        <div key={index} style={{ height: '50px', padding: '10px' }}>
          {item.name} - {item.description}
        </div>
      ))}
    </div>
  );
}

// Optimized with virtualization
function FastList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <div style={{ padding: '10px' }}>
        {items[index].name} - {items[index].description}
      </div>
    </div>
  );
  
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  );
}

// Variable size list
import { VariableSizeList } from 'react-window';

function VariableList({ items }) {
  const getItemSize = (index) => {
    // Calculate height based on content
    return items[index].description.length > 100 ? 80 : 50;
  };
  
  const Row = ({ index, style }) => (
    <div style={style}>
      <div style={{ padding: '10px' }}>
        <h4>{items[index].name}</h4>
        <p>{items[index].description}</p>
      </div>
    </div>
  );
  
  return (
    <VariableSizeList
      height={400}
      itemCount={items.length}
      itemSize={getItemSize}
      width="100%"
    >
      {Row}
    </VariableSizeList>
  );
}</code></pre>
      
      <h2 id="profiling-and-debugging">Profiling and Debugging</h2>
      <p>Use React DevTools and built-in profiling to identify performance issues:</p>
      
      <pre><code class="language-javascript">import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  console.log('Profiler:', {
    id,
    phase, // 'mount' or 'update'
    actualDuration, // Time spent rendering
    baseDuration, // Estimated time without memoization
    startTime,
    commitTime
  });
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Header />
      <Main />
      <Footer />
    </Profiler>
  );
}

// Custom performance monitoring hook
function usePerformanceMonitor(componentName) {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      console.log(\`\${componentName} render time: \${endTime - startTime}ms\`);
    };
  });
}

function MonitoredComponent() {
  usePerformanceMonitor('MonitoredComponent');
  
  // Component logic here
  return <div>Monitored content</div>;
}</code></pre>
      
      <h2 id="bundle-optimization">Bundle Optimization</h2>
      <p>Optimize your webpack bundle for better performance:</p>
      
      <pre><code class="language-javascript">// webpack.config.js optimizations
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      // Use production builds
      'react': 'react/index.js',
      'react-dom': 'react-dom/index.js',
    },
  },
};

// Tree shaking - import only what you need
// ❌ Bad: imports entire library
import _ from 'lodash';

// ✅ Good: imports only specific functions
import { debounce, throttle } from 'lodash';

// ✅ Even better: use specific imports
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';</code></pre>
      
      <h2 id="performance-best-practices">Performance Best Practices</h2>
      <ul>
        <li><strong>Use React.memo wisely:</strong> Don't wrap every component, focus on expensive ones</li>
        <li><strong>Optimize re-renders:</strong> Keep state as local as possible</li>
        <li><strong>Avoid inline objects and functions:</strong> They cause unnecessary re-renders</li>
        <li><strong>Use keys properly:</strong> Stable, unique keys help React optimize reconciliation</li>
        <li><strong>Lazy load components:</strong> Split code at route and component levels</li>
        <li><strong>Virtualize large lists:</strong> Don't render thousands of DOM elements</li>
        <li><strong>Profile regularly:</strong> Use React DevTools Profiler to identify bottlenecks</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>React performance optimization is about understanding when and why components re-render, and applying the right techniques to minimize unnecessary work. By using memoization, code splitting, virtualization, and proper profiling, you can build fast, responsive React applications that provide excellent user experiences.</p>
    `,
    featuredImage:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200",
    publishDate: "2024-02-25",
    author: {
      name: "Yusuf Jimoh",
      avatar: "/yusuf-jimoh-ceo.jpg",
    },
    readTime: "13 min read",
    category: "React",
    tags: ["React", "Performance", "Optimization"],
  },
];

const ArticleDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = blogPosts.find((post) => post.slug === slug) || blogPosts[0];

  // Get related articles (same category, excluding current article)
  const relatedArticles = blogPosts
    .filter(
      (post) => post.category === article.category && post.id !== article.id
    )
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        // You could add a toast notification here
        break;
    }
  };

  // Generate table of contents from headings with proper IDs
  const generateTableOfContents = (content: string) => {
    const headings =
      content.match(/<h[2-3][^>]*id="([^"]*)"[^>]*>(.*?)<\/h[2-3]>/g) || [];
    return headings.map((heading, index) => {
      const levelMatch = heading.match(/<h([2-3])/);
      const idMatch = heading.match(/id="([^"]*)"/);
      const textMatch = heading.match(/>([^<]*)</);

      const level = levelMatch ? parseInt(levelMatch[1]) : 2;
      const id = idMatch ? idMatch[1] : "";
      const text = textMatch ? textMatch[1] : "";

      return { level, text, id, index };
    });
  };

  const tableOfContents = generateTableOfContents(article.content);

  // Add copy button functionality to code blocks
  React.useEffect(() => {
    const addCopyButtons = () => {
      const codeBlocks = document.querySelectorAll("pre code");
      codeBlocks.forEach((block) => {
        const pre = block.parentElement;
        if (pre && !pre.querySelector(".copy-button")) {
          const button = document.createElement("button");
          button.className = "copy-button";
          button.innerHTML =
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
          button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            color: #fff;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 12px;
            opacity: 0.7;
            transition: opacity 0.2s;
          `;

          button.addEventListener("click", () => {
            navigator.clipboard.writeText(block.textContent || "");
            button.innerHTML = "Copied!";
            setTimeout(() => {
              button.innerHTML =
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
            }, 2000);
          });

          button.addEventListener("mouseenter", () => {
            button.style.opacity = "1";
          });

          button.addEventListener("mouseleave", () => {
            button.style.opacity = "0.7";
          });

          pre.style.position = "relative";
          pre.appendChild(button);
        }
      });
    };

    // Add copy buttons after content is rendered
    const timer = setTimeout(addCopyButtons, 100);
    return () => clearTimeout(timer);
  }, [article.content]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </button>
        </div>
      </section>

      {/* Article Hero */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
          </div>

          {/* Article Meta */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(article.publishDate)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{article.author.name}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Share:</span>
              <button
                onClick={() => handleShare("twitter")}
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </button>
              <button
                onClick={() => handleShare("copy")}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors"
              >
                <Copy className="w-5 h-5" />
                <span>Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            {tableOfContents.length > 0 && (
              <div className="lg:col-span-1">
                <div className="sticky top-8 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">
                      Table of Contents
                    </h3>
                  </div>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.index}
                        href={`#${item.id}`}
                        className={`block text-sm hover:text-blue-600 transition-colors ${
                          item.level === 2
                            ? "font-medium text-gray-900"
                            : "text-gray-600 ml-4"
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            )}

            {/* Article Content */}
            <div
              className={`${
                tableOfContents.length > 0 ? "lg:col-span-3" : "lg:col-span-4"
              }`}
            >
              <div
                className="prose prose-lg max-w-none 
                  prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                  prose-h2:text-2xl prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
                  prose-h3:text-xl prose-h3:text-blue-800
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-ul:my-4 prose-ul:pl-6 prose-li:mb-2 prose-li:text-gray-700
                  prose-ol:my-4 prose-ol:pl-6
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                   prose-code:text-[#d4d4d4] prose-code:bg-[#111827] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
                  prose-pre:border prose-pre:border-gray-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;
