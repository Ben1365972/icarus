import './App.css'

interface BlogPost {
  id: number;
  author: string;
  title: string;
  topic: string;
  date: string;
  excerpt: string;
}

function App() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      author: "Marcus Flynn",
      title: "The Philosophy of Flight",
      topic: "Philosophy",
      date: "2025-10-15",
      excerpt: "Exploring the ancient myth of Icarus and its relevance to modern ambition and the pursuit of knowledge..."
    },
    {
      id: 2,
      author: "Sophia Chen",
      title: "Technology and Human Limits",
      topic: "Technology",
      date: "2025-10-12",
      excerpt: "How understanding our limitations can help us build better technology and push boundaries responsibly..."
    },
    {
      id: 3,
      author: "James Rivera",
      title: "Art in the Digital Age",
      topic: "Art",
      date: "2025-10-08",
      excerpt: "The intersection of traditional artistic expression and modern digital tools creates new possibilities..."
    }
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Icarusconclave</h1>
          <p className="hero-subtitle">Where Ideas Take Flight</p>
          <p className="hero-description">
            A gathering of minds exploring the boundaries of knowledge, creativity, and innovation
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About the Conclave</h2>
          <p>
            The Icarusconclave is a community of thinkers, creators, and innovators who share
            their insights on diverse topics. Like Icarus, we dare to reach higher, while learning
            from both our successes and our falls.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <h2>Member Insights</h2>
          <div className="blog-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-topic">{post.topic}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-author">{post.author}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Icarusconclave. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
