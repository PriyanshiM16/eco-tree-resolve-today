
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const authors = [
  {
    id: 1,
    name: "Priyanshi",
    role: "Environmental Researcher",
    bio: "Specializes in climate change impact assessment and sustainable development strategies.",
  },
  {
    id: 2,
    name: "Saima",
    role: "Conservation Biologist",
    bio: "Focuses on biodiversity preservation and ecosystem restoration projects.",
  },
  {
    id: 3,
    name: "Tenzin",
    role: "Sustainability Advocate",
    bio: "Works on community engagement and educational initiatives for environmental awareness.",
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sagegreen mb-4">
          About the Authors
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Our team of dedicated environmental experts has combined decades of experience in research, conservation, and sustainability advocacy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author) => (
            <Card key={author.id} className="text-center border-none shadow-lg bg-gradient-to-b from-babypink/20 to-transparent">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-sagegreen rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{author.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-sagegreen mb-2">{author.name}</h3>
                <p className="text-babypink font-medium mb-3">{author.role}</p>
                <p className="text-gray-600">{author.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-sagegreen mb-4">Our Mission</h3>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We are committed to raising awareness about pressing environmental challenges and empowering individuals and communities with the knowledge and tools to make a positive impact. Through research, education, and advocacy, we strive to create a more sustainable and equitable world for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
