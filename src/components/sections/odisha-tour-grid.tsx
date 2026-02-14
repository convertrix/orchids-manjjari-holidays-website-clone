import React from "react";
import Image from "next/image";
import Link from "next/link";

const tourCategories = [
  { title: "BEST OFFERS ODISHA TOURS", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr1-8.jpg", description: "Odisha, the land that bridges the northern and southern halves of the country pulsates with the spirit of Indian Culture....", link: "/packages?cat=best-offers" },
  { title: "ECO WILDLIFE TOURS ODISHA", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr2-9.jpg", description: "The state filled with renowned number of wildlife sanctuaries in India that presents a remarkable opportunity for visitors....", link: "/packages?cat=eco-wildlife" },
  { title: "SPECIAL INTEREST TOURS ODISHA", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/3-30-10.jpg", description: "Odisha is the land of religion and cultural diversity and yet the hearts of its people beat as one...", link: "/packages?cat=special-interest" },
  { title: "ODISHA GOLDEN TRIANGLE TOURS", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/Screenshot_17-11.jpg", description: "The golden triangle of Odisha covering Bhubaneswar, Puri & Konark offers a perfect blend of spirituality and architecture...", link: "/packages?cat=best-offers" },
  { title: "CULTURE-TEMPLES PILGRIM-HERITAGE", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/Avalokiteswar-12.jpg", description: "Discover the rich cultural heritage and ancient temples that make Odisha a spiritual paradise...", link: "/packages?cat=culture-heritage" },
  { title: "BUDDHIST TOURS ODISHA", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tn_IMG_0880-13.jpg", description: "Explore the Buddhist heritage of Odisha with ancient monasteries, stupas and rock-cut caves...", link: "/packages?cat=culture-heritage" },
  { title: "TRIBAL ODISHA TOURS", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr5-17.jpg", description: "Immerse yourself in the rich tribal culture of Odisha visiting remote tribal villages and markets...", link: "/packages?cat=special-interest" },
  { title: "FESTIVAL TOURS ODISHA", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/puri-rath-yatra-14.jpg", description: "The rich and vibrant cultural diversity of Odisha celebrates festivals in high spirit...", link: "/packages?cat=special-interest" },
  { title: "TEXTILE TOURS ODISHA", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/textile-tour-15.jpg", description: "Explore the rich textile heritage of Odisha from Sambalpuri Ikat to Pattachitra paintings...", link: "/packages?cat=special-interest" },
];

const TourCard = ({ title, image, description, link }: { title: string; image: string; description: string; link: string }) => (
  <div className="flex flex-col h-full bg-white rounded-[2px] card-shadow overflow-hidden text-center">
    <div className="relative h-[220px] w-full overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 hover:scale-110" />
    </div>
    <div className="p-[30px_20px] flex flex-col items-center grow">
      <h4 className="font-display font-semibold text-[18px] leading-[1.3] text-[#547721] mb-[15px] uppercase tracking-[0.5px]">{title}</h4>
      <p className="font-body text-[15px] leading-[1.6] text-[#444444] mb-[25px] flex-grow">{description}</p>
      <Link href={link} className="inline-block bg-[#8eb93e] text-white font-body font-bold text-[13px] tracking-[1px] px-[25px] py-[10px] rounded-[5px] uppercase transition-colors duration-300 hover:bg-[#191c14]">
        READ MORE
      </Link>
    </div>
  </div>
);

export default function OdishaTourGrid() {
  return (
    <section
      className="relative py-[80px]"
      style={{
        backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/bg-22.jpg')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-[15px]">
        <div className="text-center mb-[50px]">
          <h2 className="font-display font-bold text-[32px] text-[#547721] tracking-[0.5px] uppercase">EXPLORE & EXPERIENCE ODISHA</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {tourCategories.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
