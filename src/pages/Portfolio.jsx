import React, { useState } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      name: "Burger Boys",
      description:
        "We created a modern, user-friendly website for Burger Boys, highlighting their menu, special offers, and an easy online ordering system. The responsive design ensures a seamless experience across all devices, enhancing their online presence and customer engagement.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/BURGER-BOYS-10-17-2024_01_44_AM.png?alt=media&token=5d1770a4-34f9-4fd1-a45f-83b4868de17e",
      websiteLink: "https://www.burgerboyspk.com/",
      category: " Business site",
    },
    {
      name: "Awan Builders & Real-Estate",
      description:
        "We developed a dynamic and professional website for Awan Builders & Real-Estate, enhancing their online presence and showcasing their services and projects. This transformation attracted a broader audience, leading to increased client engagement and business growth.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Awan-Builders-10-17-2024_01_55_AM.png?alt=media&token=c51495d1-f68b-4ec8-be10-bc7e19e012ab",
      websiteLink: "https://awan-builders.vercel.app/",
      category: " Business site",
    },
    {
      name: "RGB Computers & Laptops",
      description:
        "We developed a modern and user-friendly e-commerce store for RGB Computers & Laptops, allowing them to showcase their products effectively and manage sales efficiently. This enhanced their online presence, driving customer engagement and boosting business growth.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/RGB-COMPUTERS-10-17-2024_02_01_AM.png?alt=media&token=eea1a7fb-db8b-4cb6-bca3-a478b85b7931",
      websiteLink: "https://www.rgbcomputerspk.com/",
      category: " Business site",
    },
    {
      name: "Sneaky World",
      description:
        "We developed a sleek and user-friendly website for Sneaky World, a shoe brand, showcasing their products and collections. This improved their online presence, attracting more customers and driving business growth.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/SharedScreenshot.jpg?alt=media&token=c84b2483-09aa-46dc-917c-261be442ba93",
      websiteLink: "/",
      category: "  Business site",
    },
    {
      name: "The Trekkerz",
      description:
        "We developed a vibrant and user-friendly website for The Trekkerz, a travel agency, showcasing their travel packages and services. This enhancement improved their online visibility and made it easier for potential customers to explore their offerings.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Responsive-Navigation-Menu-10-17-2024_02_39_AM-min.png?alt=media&token=79b6ad2d-a6ec-4453-a37f-b85001122971",
      websiteLink: "/",
      category: "  Business site",
    },
    {
      name: "Ruya Solutions",
      description:
        "We partnered with Ruya Solutions, a software development agency, to create an intuitive and visually appealing UI for their website. This collaboration not only enhanced their online presence but also strengthened our partnership in delivering innovative solutions.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Welcome-to-Ruya-Solutions-10-17-2024_02_45_AM.png?alt=media&token=fac19375-d727-4f45-9c79-05bd7faed305",
      websiteLink: "https://ruyasolutions.vercel.app/",
      category: "  Business site",
    },
    {
      name: "Score For Outcome",
      description:
        "Score for outcome is an end-to-end platform for measuring outcome results in patients who go through psychological therapy. The platform boasts a patient management system, data visualization for therapy and custom outcome form creator for mental health practitioners. This is supplemented by my email and phone notification for clients as well as practitioners.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Score-For-Outcome-10-17-2024_02_48_AM.png?alt=media&token=0ca56a98-22a4-4e65-959e-f424972394ca",
      websiteLink: "https://scoreforoutcome.com/",
      category: "  Business site",
    },
    {
      name: "Ar-Rahman Welfare Foundation Canada",
      description:
        "Ar-Rahman Welfare Foundation Canada (AWFCA) is a welfare charity that started out in Ontario, Canada. Their aim is to provide resources and support to those in need, empowering them to overcome poverty and build a better future for themselves and their families. We worked with them a couple years ago to get their website, donation link, and email server working. We also handle their SEO and hosting.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Arrahman-Welfare-Foundation-Canada-10-17-2024_02_50_AM-min.png?alt=media&token=fe348407-cab9-408b-ba45-03b776d3575e",
      websiteLink: "https://awfca.ca/",
      category: "  Business site",
    },
    {
      name: "Client Portfolio",
      description:
        "We designed a professional and engaging website for Client Portfolio, effectively showcasing their work and services. This enhanced their online presence and helped them attract more clients.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Vite-React-10-17-2024_02_33_AM-min.png?alt=media&token=5b8c654c-4b6c-48db-b97d-d575b4f2b0df",
      websiteLink: "https://hamza-dev-bice.vercel.app/",
      category: " Premium prortfolios",
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-36 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`mr-2 mb-2 ${selectedCategory === 'all' ? 'bg-blue-700' : 'bg-blue-500'} text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-600`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory(' Premium prortfolios')}
          className={`mr-2 mb-2 ${selectedCategory === ' Premium prortfolios' ? 'bg-blue-700' : 'bg-blue-500'} text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-600`}
        >
          Premium prortfolios
        </button>
        <button
          onClick={() => setSelectedCategory('Web apps')}
          className={`mr-2 mb-2 ${selectedCategory === '   Web apps' ? 'bg-blue-700' : 'bg-blue-500'} text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-600`}
        >
          Web apps
        </button>
        <button
          onClick={() => setSelectedCategory(' Business site')}
          className={`mr-2 mb-2 ${selectedCategory === ' Business site' ? 'bg-blue-700' : 'bg-blue-500'} text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-600`}
        >
          Business site
        </button>
      </div>
      {filteredProjects.length === 0 ? (
        <p className="text-white text-center">No projects found in this category.</p>
      ) : (
        filteredProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg mb-10 p-6 flex flex-col sm:flex-row items-center"
          >
            <div className="sm:w-1/2 w-full mb-4 sm:mb-0 text-left">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">{project.name}</h2>
              <p className="text-white mb-4">{project.description}</p>
              <div className="mt-4">
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-600"
                  >
                    Website 🔗
                  </a>
                )}
              </div>
            </div>
            <div className="sm:w-1/2 w-full">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy" // Lazy loading here
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Portfolio;
