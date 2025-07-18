import React from 'react';
import { ThumbsUp, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { trackBusinessEvent } from '../utils/analytics';
import { useLoadingState } from '../utils/useLoadingState';
import { SkeletonTestimonial } from './SkeletonLoader';

const Testimonials = React.memo(() => {
  const [isLoading] = useLoadingState(true, 1000);

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <SkeletonTestimonial key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <ThumbsUp className="w-4 h-4" />
            <span>CUSTOMER REVIEWS</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real experiences from satisfied customers across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative mb-4">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-6">{testimonial.text}</p>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {testimonial.project}
                </span>
                <span className="text-gray-500">Verified Purchase</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Video Reviews</h3>
            <p className="text-gray-600">See what our dealers and customers have to say</p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl w-full">
              <video 
                controls 
                className="w-full h-auto rounded-lg"
                poster="/images/hero.png"
                preload="none"
                controlsList="download"
                crossOrigin="anonymous"
                onPlay={() => trackBusinessEvent.videoPlay('dealer_review')}
              >
                <source src="/videos/dealer_review.mp4" type="video/mp4" />
                <p className="text-center text-gray-600 p-4">
                  Your browser does not support the video tag. 
                  <a href="/videos/dealer_review.mp4" className="text-blue-600 hover:underline ml-1" download>
                    Download video instead
                  </a>
                </p>
              </video>
              <div className="mt-4 text-center">
                <h4 className="font-semibold text-gray-900">Dealer Experience Review</h4>
                <p className="text-sm text-gray-600">Our authorized dealer shares their experience with KB Switches</p>
                <div className="mt-2">
                  <a 
                    href="/videos/dealer_review.mp4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm underline"
                  >
                    Open video in new tab
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">4.8/5</div>
                <div className="text-sm text-gray-500">Average Rating</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-500">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;