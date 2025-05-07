
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Bus, Car, Recycle, Trash, Wind, CloudRain } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const solutionsData = [
  {
    id: 1,
    title: "Reduce, Reuse, Recycle",
    description: "Implementing the three Rs can decrease waste by up to 70%, reducing greenhouse gas emissions significantly.",
    details: "The EPA estimates that recycling and composting prevented 193 million metric tons of carbon dioxide from being released in 2018, equivalent to removing 42 million cars from the road for a year. Reducing food waste alone could cut global emissions by 8-10% according to Project Drawdown.",
    icon: Recycle,
    source: "mixed" // Both human and AI content
  },
  {
    id: 2,
    title: "Sustainable Transportation",
    description: "Switching to eco-friendly transportation can reduce your carbon footprint by up to 30%.",
    details: "A study by the European Cyclists' Federation found that cycling produces just 21g of CO2 per km compared to 271g for car travel. Electric vehicles produce about 50% less greenhouse gas emissions over their lifetime than average gas-powered vehicles, according to the Union of Concerned Scientists. Public transportation can reduce CO2 emissions by 45% per passenger mile compared to driving alone.",
    icons: [Bike, Bus, Car],
    source: "ai" // AI generated content
  },
  {
    id: 3,
    title: "Waste Reduction",
    description: "Reducing waste prevents pollution, conserves resources, and reduces greenhouse gas emissions.",
    details: "The World Bank projects that global waste generation will increase by 70% by 2050 without urgent action. Single-use plastics account for 40% of the plastic produced every year, with items typically used for just minutes but persisting in the environment for hundreds of years. Composting food scraps and yard waste can reduce the volume of garbage sent to landfills by up to 30%, according to the EPA.",
    icon: Trash,
    source: "human" // Human provided content
  },
  {
    id: 4,
    title: "Renewable Energy",
    description: "Transitioning to renewable energy sources could reduce global CO2 emissions by 70% by 2050.",
    details: "According to the International Renewable Energy Agency (IRENA), renewable energy and energy efficiency measures can achieve 90% of the carbon reductions needed by 2050. The cost of solar photovoltaic electricity has fallen 85% since 2010, making it competitive with or cheaper than fossil fuels in many markets. Wind energy prices have decreased by 49% over the same period.",
    icon: Wind,
    source: "ai" // AI generated content
  }
];

const solutionPhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Low angle view of trees",
    caption: "Reforestation efforts help combat climate change"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    alt: "Sustainable architecture",
    caption: "Green building design reduces environmental impact"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Sunlight through trees",
    caption: "Protecting forests preserves biodiversity"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    alt: "Sustainable agriculture",
    caption: "Sustainable farming practices protect soil health"
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-16 bg-babypink/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sagegreen mb-4">
          Solutions for a Sustainable Future
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 mb-12">
          There are numerous effective ways we can all contribute to protecting our planet and creating a sustainable future.
        </p>
        
        {/* Photo Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {solutionPhotos.map((photo) => (
            <div key={photo.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <AspectRatio ratio={1}>
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs md:text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((solution) => (
            <Card key={solution.id} className="border-l-4 border-l-sagegreen shadow-md hover:shadow-lg transition-shadow relative">
              {/* Source indicator */}
              <div className="absolute top-2 right-2 flex space-x-1">
                {solution.source === "human" && (
                  <div className="h-6 w-6 rounded-full bg-sagegreen/20 text-sagegreen flex items-center justify-center text-xs font-semibold">
                    H
                  </div>
                )}
                {solution.source === "ai" && (
                  <div className="h-6 w-6 rounded-full bg-babypink/30 text-pink-700 flex items-center justify-center text-xs font-semibold">
                    A
                  </div>
                )}
                {solution.source === "mixed" && (
                  <>
                    <div className="h-6 w-6 rounded-full bg-sagegreen/20 text-sagegreen flex items-center justify-center text-xs font-semibold">
                      H
                    </div>
                    <div className="h-6 w-6 rounded-full bg-babypink/30 text-pink-700 flex items-center justify-center text-xs font-semibold">
                      A
                    </div>
                  </>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  {solution.icon && (
                    <div className="p-2 bg-sagegreen/20 rounded-full mr-4">
                      <solution.icon className="h-6 w-6 text-sagegreen" />
                    </div>
                  )}
                  {solution.icons && (
                    <div className="flex space-x-2 mr-4">
                      {solution.icons.map((Icon, idx) => (
                        <div key={idx} className="p-2 bg-sagegreen/20 rounded-full">
                          <Icon className="h-5 w-5 text-sagegreen" />
                        </div>
                      ))}
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-xl text-sagegreen">
                      {solution.source === "human" ? (
                        <span className="border-b-2 border-sagegreen">{solution.title}</span>
                      ) : solution.source === "ai" ? (
                        <span className="border-b-2 border-babypink">{solution.title}</span>
                      ) : (
                        solution.title
                      )}
                    </CardTitle>
                    <CardDescription className="text-gray-500 mt-1">
                      {solution.source === "human" ? (
                        <span className="border-b-2 border-sagegreen">{solution.description}</span>
                      ) : solution.source === "ai" ? (
                        <span className="border-b-2 border-babypink">{solution.description}</span>
                      ) : (
                        <span>{solution.description}</span>
                      )}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {solution.source === "human" ? (
                    <span className="border-b-2 border-sagegreen">{solution.details}</span>
                  ) : solution.source === "ai" ? (
                    <span className="border-b-2 border-babypink">{solution.details}</span>
                  ) : (
                    <span>
                      <span className="border-b-2 border-sagegreen">The EPA estimates that recycling and composting prevented 193 million metric tons of carbon dioxide from being released in 2018,</span>
                      <span className="border-b-2 border-babypink"> equivalent to removing 42 million cars from the road for a year. Reducing food waste alone could cut global emissions by 8-10% according to Project Drawdown.</span>
                    </span>
                  )}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
