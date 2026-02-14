import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const TourCard: React.FC<TourCardProps> = ({ image, title, description, link }) => (
  <div className="bg-white rounded-[5px] overflow-hidden card-shadow flex flex-col h-full border border-border/50">
    <div className="relative h-[220px] w-full">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div className="p-[20px] flex flex-col items-center flex-grow text-center">
      <h4 className="font-display font-semibold text-[18px] leading-[1.2] text-heading uppercase mb-[15px] min-h-[44px] flex items-center justify-center">{title}</h4>
      <p className="font-body text-[15px] text-foreground leading-[1.6] mb-[20px] line-clamp-3">{description}</p>
      <div className="mt-auto">
        <Link href={link} className="inline-block bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[13px] px-[25px] py-[10px] rounded-[5px] transition-colors duration-300">Read More</Link>
      </div>
    </div>
  </div>
);

const ChhattisgarhIndiaTours: React.FC = () => {
  const chhattisgarhPackages = [
    { image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tiger-sister-16.jpg", title: "PHOTOGRAPHY TOUR CHHATTISGARH", description: "The Central part of India having the states of Madhya Pradesh and Chhattisgarh is frequently visited by travelers to view the diverse..", link: "/packages?cat=chhattisgarh" },
    { image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tn_20180513_142033-18.jpg", title: "CHHATTISGARH TRIBAL TOUR", description: "The rich and vibrant cultural diversity of incredible India celebrates each and every fairs and festivals in high spirit...", link: "/packages?cat=chhattisgarh" },
    { image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr7-19.jpg", title: "SPECIAL INTEREST TOUR CG", description: "The Indian subcontinent is the land of religion and cultural diversity and yet the hearts of its people beat as one...", link: "/packages?cat=chhattisgarh" },
  ];
  const indiaPackages = [
    { image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr8-20.jpg", title: "NORTHEAST TRIPS", description: "The land of West Bengal has the greatest historical significance due to its immense contribution...", link: "/packages?cat=india" },
    { image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr6-21.jpg", title: "SOUTH INDIA TOURS", description: "In the southeastern part of India, the state of Andhra Pradesh has one of the longest coastlines...", link: "/packages?cat=india" },
    { image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr7-19.jpg", title: "SPECIAL INTEREST TOURS INDIA", description: "The Indian subcontinent is the land of religion and cultural diversity...", link: "/packages?cat=india" },
  ];

  return (
    <section className="py-[80px] bg-[#f9f9f9]/50">
      <div className="container px-[15px]">
        <div className="mb-[80px]">
          <h2 className="font-display font-bold text-[32px] text-heading text-center uppercase mb-[50px] tracking-[0.5px]">ODISHA & CHHATTISGARH TOURS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {chhattisgarhPackages.map((pkg, idx) => <TourCard key={`cg-${idx}`} {...pkg} />)}
          </div>
        </div>
        <div>
          <h2 className="font-display font-bold text-[32px] text-heading text-center uppercase mb-[50px] tracking-[0.5px]">INDIA TOURS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {indiaPackages.map((pkg, idx) => <TourCard key={`in-${idx}`} {...pkg} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChhattisgarhIndiaTours;
