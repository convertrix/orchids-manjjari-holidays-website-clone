import React from 'react';

/**
 * VideoTestimonials Component
 * 
 * A pixel-perfect clone of the "Video Testimonials" section.
 * Features a 3-column layout of embedded YouTube video players.
 * 
 * Theme: Light
 * Design: Montserrat for headings, Lato for body. 
 * Colors: Primary Green (#8eb93e), Text Heading (#547721).
 */

const VideoTestimonials = () => {
  // Video assets from the provided list
  const videoUrls = [
    "https://www.youtube.com/embed/VR4bds80nMg",
    "https://www.youtube.com/embed/oP3ejPsak54?si=jbELTbniKACi9VHl?wmode=opaque",
    "https://www.youtube.com/embed/mb-GpuvvzB0?si=Ht4KUwK_8qh_cx-X?wmode=opaque"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-[15px] max-w-[1200px]">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-[32px] font-bold uppercase tracking-[0.5px] text-[#547721] mb-8 leading-[1.2]">
            Video Testimonials
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {videoUrls.map((url, index) => (
            <div 
              key={index} 
              className="relative w-full overflow-hidden rounded-[5px] bg-black aspect-video shadow-card"
              style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
            >
              <iframe
                src={url}
                title={`Video Testimonial ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;