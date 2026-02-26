import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Volume2 } from 'lucide-react';

const testimonials = [
   {
    type: 'text',
    name: 'Yashas Karne',
    role: 'CEO, TechStart',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEk3YJQb6o9lA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728450772955?e=1773878400&v=beta&t=J1iv29raxd-yYf95PNTQSrASRT5do5rMYkkdMnal8Z4',
    content: 'Aman transformed our outdated website into a modern, high-converting platform. His attention to detail and technical expertise are unmatched.',
  },
  {
    type: 'video',
    name: 'Arundeep Singh',
    role: 'Founder, GrowthAgency',
    image: 'HwxNzE0NTY3ODkw&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Replace with your actual video URL
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzE0NTY3ODkw&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Working with Aman was a breeze. He understood our requirements perfectly and delivered the project ahead of schedule.',
  },
  {
    type: 'text',
    name: 'Aryan Kapoor',
    role: 'Marketing Director',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQF-80g4UvWHJQ/profile-displayphoto-scale_100_100/B56ZxiHMQsKMAc-/0/1771172590027?e=1773878400&v=beta&t=-d762J7taxkc5EYA-HAMbQH6tDX8_bHXVI4hl-QgUDI',
    content: 'The website speed optimization service was a game-changer for our SEO. Our rankings improved significantly within weeks. Fantastic work!',
  },
   {
    type: 'text',
    name: 'Mayank Gupta',
    role: 'CEO, TechStart',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEk3YJQb6o9lA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728450772955?e=1773878400&v=beta&t=J1iv29raxd-yYf95PNTQSrASRT5do5rMYkkdMnal8Z4',
    content: 'Aman transformed our outdated website into a modern, high-converting platform. His attention to detail and technical expertise are unmatched.',
  },
  {
    type: 'text',
    name: 'Kushagra Singh Rajpoot',
    role: 'Startup Owner',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQFeZp4f8n7h_w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723379430975?e=1773878400&v=beta&t=uI4t3nAsyrhRk9HyGP4yltmZzMWAfFLec8_K1CKQvfo',
    content: 'Aman built us a custom WordPress solution that perfectly fits our needs. The site is fast, secure, and easy to manage. Couldn\'t be happier!',
  },
  {
    type: 'text',
    name: 'Ashutosh Pathak',
    role: 'E-commerce Manager',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGD1inFCJC5cg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1731327544019?e=1773878400&v=beta&t=exmisfbxHhcw5e3eiN4tQun6_F9yepOLxj_bm9fsswQ',
    content: 'Our new e-commerce platform exceeded all expectations. Conversion rates are up 40% since launch. Aman is a true professional!',
  },
  {
    type: 'text',
    name: 'Thomas Anderson',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ1Njc4OTA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'The React dashboard Aman developed is incredibly smooth and responsive. Our team uses it daily and loves the experience.',
  },
  {
    type: 'text',
    name: 'Lisa Thompson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhlYWRzaG90fGVufDB8fHx8MTcxNDU2Nzg5MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Aman has an eye for design and a deep understanding of web technologies. He brought our vision to life beautifully.',
  },
  {
    type: 'text',
    name: 'Robert Williams',
    role: 'Business Consultant',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNDU2Nzg5MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Responsive, professional, and delivers quality work on time. Aman has become my go-to developer for all web projects.',
  },
];

const ITEMS_PER_PAGE = 3;

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  
  const currentTestimonials = testimonials.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setPlayingVideo(null); // Stop video when changing page
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setPlayingVideo(null); // Stop video when changing page
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Testimonials</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid with Animation */}
        <div className="relative min-h-[500px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="group p-8 bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800 relative hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] flex flex-col"
                >
                  {testimonial.type === 'video' ? (
                    // Video Testimonial
                    <>
                      <div className="absolute top-8 right-8 flex gap-2 z-20">
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-red-500/90 backdrop-blur-sm rounded-full text-white text-xs font-bold">
                          <Play size={12} fill="white" />
                          VIDEO
                        </div>
                      </div>

                      <div className="relative mb-6 -mx-8 -mt-8 rounded-t-3xl overflow-hidden">
                        {playingVideo === testimonial.name ? (
                          <video 
                            src={testimonial.videoUrl}
                            controls
                            autoPlay
                            className="w-full h-64 object-cover"
                            onEnded={() => setPlayingVideo(null)}
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <div 
                            className="relative h-64 cursor-pointer group/video"
                            onClick={() => setPlayingVideo(testimonial.name)}
                          >
                            <img 
                              src={testimonial.thumbnail}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)] group-hover/video:scale-110 group-hover/video:bg-violet-500 transition-all duration-300">
                                <Play size={28} fill="white" className="text-white ml-1" />
                              </div>
                            </div>

                            {/* Duration Badge */}
                            <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg text-white text-xs font-bold flex items-center gap-1">
                              <Volume2 size={12} />
                              0:45
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-1 text-yellow-500 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={18} fill="currentColor" className="drop-shadow-sm" />
                        ))}
                      </div>

                      <p className="text-slate-300 leading-relaxed mb-6 relative z-10 italic flex-grow">
                        "{testimonial.content}"
                      </p>

                      <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50 group-hover:border-slate-700/50 transition-colors">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-14 h-14 rounded-full object-cover border-2 border-slate-800 relative z-10 group-hover:border-transparent transition-all duration-300"
                          />
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">{testimonial.name}</div>
                          <div className="text-slate-500 text-sm font-medium">{testimonial.role}</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Text Testimonial
                    <>
                      <Quote className="absolute top-8 right-8 text-slate-800 w-12 h-12 rotate-180 group-hover:text-cyan-500/20 transition-colors duration-500" />
                      
                      <div className="flex gap-1 text-yellow-500 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={18} fill="currentColor" className="drop-shadow-sm" />
                        ))}
                      </div>

                      <p className="text-slate-300 leading-relaxed mb-8 relative z-10 text-lg italic flex-grow">
                        "{testimonial.content}"
                      </p>

                      <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50 group-hover:border-slate-700/50 transition-colors">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-14 h-14 rounded-full object-cover border-2 border-slate-800 relative z-10 group-hover:border-transparent transition-all duration-300"
                          />
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">{testimonial.name}</div>
                          <div className="text-slate-500 text-sm font-medium">{testimonial.role}</div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prevPage}
            className="p-3 bg-slate-900/60 hover:bg-slate-800 text-white rounded-full border border-white/10 hover:border-cyan-500/50 transition-all group"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Page Indicators */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'w-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="p-3 bg-slate-900/60 hover:bg-slate-800 text-white rounded-full border border-white/10 hover:border-cyan-500/50 transition-all group"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mt-6 text-slate-500 text-sm">
          Showing {currentPage * ITEMS_PER_PAGE + 1}-{Math.min((currentPage + 1) * ITEMS_PER_PAGE, testimonials.length)} of {testimonials.length} testimonials
        </div>
      </div>
    </section>
  );
}