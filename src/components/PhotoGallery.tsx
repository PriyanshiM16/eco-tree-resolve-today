
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const photoData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Ocean wave at beach",
    caption: "Our oceans need protection"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    alt: "Forest heat by sunbeam",
    caption: "Forests are vital carbon sinks"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Body of water surrounded by trees",
    caption: "Clean water is essential for all life"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    alt: "Bird's eye view of green mountains",
    caption: "Biodiversity is crucial for ecosystem health"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    alt: "White concrete building with sustainable architecture",
    caption: "Sustainable urban planning"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    alt: "Herd of sheep running on green grass field",
    caption: "Sustainable agriculture"
  }
];

const PhotoGallery = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-sagegreen/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sagegreen mb-4">
          Our Planet in Pictures
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Visual reminders of what we're working to protect and restore for future generations.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoData.map((photo) => (
            <Card key={photo.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sagegreen italic">
            "The Earth does not belong to us: we belong to the Earth." — Marlee Matlin
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
