
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudRain, CloudSun, Leaf, Building2, ThermometerSun } from 'lucide-react';

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
      </div>
    </section>
  );
};

export default Challenges;
