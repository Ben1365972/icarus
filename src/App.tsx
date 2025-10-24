import { useState } from 'react'
import './App.css'

interface BlogPost {
  id: number;
  author: string;
  title: string;
  topic: string;
  date: string;
  excerpt: string;
  fullContent?: string;
}

function App() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      author: "Marcus Flynn",
      title: "The Philosophy of Flight",
      topic: "Philosophy",
      date: "2025-10-15",
      excerpt: "Exploring the ancient myth of Icarus and its relevance to modern ambition and the pursuit of knowledge...",
      fullContent: `The story of Icarus has captivated humanity for millennia. A young man, gifted with wings crafted by his father Daedalus, soared too close to the sun. The wax melted, and he fell into the sea. We remember this tale as a warning against hubris, against reaching too far beyond our means.

But what if we've been reading it wrong all along?

In our modern age of innovation and discovery, perhaps Icarus represents something more profound: the courage to attempt the impossible, even knowing the risks. Every great leap forward in human history has been made by those willing to fly close to the sun.

The Wright brothers defied conventional wisdom. Marie Curie pursued her research despite the dangers of radiation. The Apollo astronauts climbed into rockets knowing the tremendous risks. These modern Icari understood that the pursuit of knowledge and progress demands sacrifice.

The key lesson isn't to avoid ambitious goals—it's to respect the journey. Icarus failed not because he flew, but because he ignored his father's wisdom about the limits of his technology. Today's innovators must balance ambition with humility, pushing boundaries while understanding constraints.

We should celebrate Icarus not for his fall, but for his flight. In that brief moment before the wax melted, he achieved what no human had done before. He flew. And in doing so, he showed us that the greatest human quality isn't caution—it's the courage to reach for the impossible.

The question we must ask ourselves is not "Should we fly?" but rather "How can we fly safely?" How can we push the boundaries of human achievement while learning from those who came before us?

In the end, the myth of Icarus teaches us that falling is part of flying. Every failure brings us closer to understanding. Every setback provides data for the next attempt. The only true failure would be never to have tried at all.

So let us be like Icarus—ambitious, brave, and willing to soar. But let us also be wiser, learning from each flight, building better wings, and teaching the next generation to fly even higher than we dared to dream.`
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

  const togglePost = (postId: number) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

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

      {/* Manifesto Section */}
      <section className="manifesto">
        <div className="container">
          <h2>Manifesto</h2>
          <p>
            We believe in the power of ambitious thinking and calculated risk-taking. Like Icarus,
            we dare to soar toward new horizons, but we do so with wisdom learned from those who
            came before us. Our mission is to push the boundaries of knowledge, foster meaningful
            dialogue, and create a community where innovative ideas can take flight.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="events">
        <div className="container">
          <h2>Events</h2>
          <p>
            Join us for thought-provoking gatherings, workshops, and discussions. Our events bring
            together curious minds to explore new ideas, challenge assumptions, and build connections
            that transcend traditional boundaries. Stay tuned for upcoming events and opportunities
            to engage with our community.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <h2>Articles</h2>
          <div className="blog-list">
            {blogPosts.map(post => {
              const isExpanded = expandedPost === post.id;
              return (
                <article
                  key={post.id}
                  className={`blog-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => togglePost(post.id)}
                >
                  <div className="blog-header">
                    <div className="blog-topic">{post.topic}</div>
                    <h3 className="blog-title">{post.title}</h3>
                    <div className="blog-meta">
                      <span className="blog-author">{post.author}</span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                  </div>

                  {!isExpanded ? (
                    <p className="blog-excerpt">{post.excerpt}</p>
                  ) : (
                    <div className="blog-content">
                      {post.fullContent ? (
                        post.fullContent.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))
                      ) : (
                        <p className="blog-excerpt">{post.excerpt}</p>
                      )}
                    </div>
                  )}

                  <div className="blog-expand-indicator">
                    {isExpanded ? '← Click to collapse' : 'Click to read more →'}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-photo">
                <div className="placeholder-photo">MF</div>
              </div>
              <h3>Marcus Flynn</h3>
              <p className="team-member-role">Philosopher & Writer</p>
              <p className="team-member-bio">
                Marcus explores the intersection of ancient wisdom and modern innovation,
                challenging conventional thinking through philosophical inquiry.
              </p>
            </div>

            <div className="team-member">
              <div className="team-member-photo">
                <div className="placeholder-photo">SC</div>
              </div>
              <h3>Sophia Chen</h3>
              <p className="team-member-role">Technology Researcher</p>
              <p className="team-member-bio">
                Sophia investigates how technology shapes human behavior and society,
                focusing on responsible innovation and ethical AI development.
              </p>
            </div>

            <div className="team-member">
              <div className="team-member-photo">
                <div className="placeholder-photo">JR</div>
              </div>
              <h3>James Rivera</h3>
              <p className="team-member-role">Digital Artist</p>
              <p className="team-member-bio">
                James bridges traditional art forms with cutting-edge digital tools,
                creating immersive experiences that challenge perception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Icarusconclave. All rights reserved.</p>
            <div className="footer-links">
              <a href="#/impressum">Impressum</a>
              <a href="#/datenschutz">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
