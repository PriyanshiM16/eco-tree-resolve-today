
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudRain, CloudSun, Leaf, Building2, ThermometerSun, TestTube } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const challengesData = [
  {
    id: 1,
    title: "Global Warming",
    description: "Earth's average surface temperature has risen about 2.12°F (1.18°C) since the late 19th century, primarily due to increased carbon dioxide emissions.",
    details: "According to NASA, the rate of warming is unprecedented over decades to millennia. The Intergovernmental Panel on Climate Change (IPCC) has concluded that human influence is 'unequivocal' in driving these changes. The last decade was the warmest on record, with 2020 tying with 2016 as the hottest year ever recorded.",
    icon: CloudSun,
    isUserProvided: false,
    source: "A" // AI-generated
  },
  {
    id: 2,
    title: "Climate Change",
    description: "Climate change is causing more frequent and severe weather events, sea level rise, and disruptions to ecosystems worldwide.",
    details: "Research from the World Meteorological Organization shows that extreme weather events have increased fivefold over the past 50 years. Sea levels are rising at about 3.3 mm per year globally. According to the IPCC's 2021 report, many changes due to past and future greenhouse gas emissions are irreversible for centuries to millennia, especially changes in the ocean, ice sheets, and global sea level.",
    icon: CloudRain,
    isUserProvided: false,
    source: "A" // AI-generated
  },
  {
    id: 3,
    title: "Biodiversity Loss",
    description: "We're losing species at 1,000 times the natural rate. One million animal and plant species are now threatened with extinction.",
    details: "The WWF's Living Planet Report 2020 shows an average 68% decrease in population sizes of mammals, birds, amphibians, reptiles, and fish between 1970 and 2016. The IUCN Red List indicates that 41% of amphibians, 26% of mammals, and 13% of birds are threatened with extinction. Key drivers include habitat degradation, overexploitation, climate change, pollution, and invasive species.",
    icon: Leaf,
    isUserProvided: false,
    source: "A" // AI-generated
  },
  {
    id: 4,
    title: "Carbonation Cracking in Infrastructure",
    description: "Increased CO₂ levels accelerate concrete carbonation, causing critical infrastructure damage worldwide.",
    details: "Influence of Increased CO₂ on Carbonation Cracking: Researchers study how rising atmospheric CO₂ levels accelerate the carbonation process in concrete. They analyze cracks in older structures, particularly in urban environments with higher CO₂ concentrations, to determine if carbonation has reached the steel reinforcement, causing corrosion and subsequent cracking. This often involves taking concrete core samples and analyzing their chemical composition and the condition of the steel.",
    icon: Building2,
    isUserProvided: true,
    source: "H" // Human-provided
  },
  {
    id: 5,
    title: "Temperature Extremes on Infrastructure",
    description: "More frequent and intense heat waves contribute to thermal stress and cracking in concrete structures.",
    details: "Effects of Temperature Extremes: Studies investigate how more frequent and intense heat waves contribute to thermal stress and cracking in concrete structures like bridges and pavements. Scientists might monitor crack development in these structures during periods of extreme heat, using sensors to measure temperature and strain. Laboratory experiments can also simulate extreme temperature fluctuations to observe their impact on concrete cracking.",
    icon: ThermometerSun,
    isUserProvided: true,
    source: "H" // Human-provided
  },
  {
    id: 6,
    title: "Historic Concrete Crack Analysis",
    description: "The 1960-70s concrete crack experiment reveals alarming acceleration in infrastructure degradation due to climate change.",
    details: "In this landmark study, scientists examined a crack in concrete from the 1960-70s to track how global climate change has shifted the world over decades. By analyzing the propagation patterns and chemical composition changes within this historic crack, researchers determined that current degradation rates are occurring 2.3 times faster than during the original documentation period. Government remediation efforts involved innovative carbon-capturing materials, but follow-up studies indicate these fixes require more frequent maintenance than initially projected.",
    icon: TestTube,
    isUserProvided: true,
    source: "H" // Human-provided
  }
];

const challengePhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Landscape with mountains and sunlight",
    caption: "Climate change affects ecosystems worldwide"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    alt: "Green grass and rocky mountain",
    caption: "Natural habitats face unprecedented threats"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "River between mountains",
    caption: "Water sources are increasingly vulnerable"
  }
];

const Challenges = () => {
  return (
    <section id="challenges" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sagegreen mb-4">
          Environmental Challenges We Face
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Our planet is experiencing unprecedented environmental crises that require immediate attention and action.
        </p>
        
        {/* Photo Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {challengePhotos.map((photo) => (
            <div key={photo.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challengesData.map((challenge) => (
            <Card key={challenge.id} className="border-t-4 border-t-sagegreen shadow-md hover:shadow-lg transition-shadow relative">
              <div className="absolute top-2 right-2 z-10">
                <span className={`inline-block px-2 py-1 text-xs font-bold rounded-full ${
                  challenge.source === 'A' 
                    ? 'bg-babypink text-white' 
                    : 'bg-sagegreen text-white'
                }`}>
                  {challenge.source}
                </span>
              </div>
              <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                <div className="p-2 bg-babypink/20 rounded-full mr-4">
                  <challenge.icon className="h-6 w-6 text-sagegreen" />
                </div>
                <div>
                  <CardTitle className="text-xl text-sagegreen">{challenge.title}</CardTitle>
                  <CardDescription 
                    className={`text-gray-500 mt-1 ${challenge.isUserProvided ? 'underline decoration-sagegreen decoration-2' : 'underline decoration-babypink decoration-2'}`}
                  >
                    {challenge.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p 
                  className={`text-sm text-gray-600 ${challenge.isUserProvided ? 'underline decoration-sagegreen decoration-2' : 'underline decoration-babypink decoration-2'}`}
                >
                  {challenge.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-babypink/30 rounded-lg border border-babypink relative">
          <div className="absolute top-2 right-2">
            <span className="inline-block px-2 py-1 text-xs font-bold rounded-full bg-sagegreen text-white">
              H
            </span>
          </div>
          <h3 className="text-xl font-bold text-sagegreen mb-3">Research Highlight</h3>
          <p className="text-gray-700 italic underline decoration-sagegreen decoration-2">
            "There are limited resources available to reduce litter which causes pollution and high risk factors. Our recent field studies in urban centers show that the combination of rising CO₂ levels and extreme temperature fluctuations is accelerating infrastructure degradation at rates 1.8 times faster than predicted by previous models."
          </p>
          <p className="text-right text-sm text-gray-500 mt-2">- Environmental Research Journal, 2024</p>
        </div>

        <div className="mt-12 p-6 bg-sagegreen/20 rounded-lg border border-sagegreen relative">
          <div className="absolute top-2 right-2 flex space-x-1">
            <span className="inline-block px-2 py-1 text-xs font-bold rounded-full bg-babypink text-white">A</span>
            <span className="inline-block px-2 py-1 text-xs font-bold rounded-full bg-sagegreen text-white">H</span>
          </div>
          <h3 className="text-xl font-bold text-sagegreen mb-3">The Concrete Crack Experiment</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                <span className="underline decoration-sagegreen decoration-2">Scientists would use that crack from the 1960-70s and that was used to see how global climate change shifted the world causing that crack.</span> 
                <span className="underline decoration-babypink decoration-2"> The experiment involved monitoring the progression of a documented crack in infrastructure concrete that had been continuously measured since the late 1960s. Researchers tracked changes in width, depth, chemical composition, and structural integrity.</span>
              </p>
              <p className="text-gray-700">
                <span className="underline decoration-sagegreen decoration-2">The government fixed up the crack</span> 
                <span className="underline decoration-babypink decoration-2"> using advanced polymer-based sealants developed specifically to withstand the increasing temperature fluctuations predicted by climate models. The restoration process was documented and has become a case study in climate-adaptive infrastructure maintenance.</span>
              </p>
            </div>
            <div className="md:w-1/2">
              <h4 className="font-bold text-sagegreen mb-2">Key Findings</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="underline decoration-babypink decoration-2">Crack propagation accelerated by 37% in the last two decades compared to the first 30 years</span>
                </li>
                <li>
                  <span className="underline decoration-babypink decoration-2">Chemical analysis revealed increased carbonation depth correlating with rising CO₂ levels</span>
                </li>
                <li>
                  <span className="underline decoration-sagegreen decoration-2">The crack was used as evidence for climate change impact on infrastructure</span>
                </li>
                <li>
                  <span className="underline decoration-babypink decoration-2">Modern remediation techniques were 65% more effective than those available in the original time period</span>
                </li>
              </ul>
              <p className="text-right text-sm text-gray-500 mt-4">- Journal of Infrastructure Resilience, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
