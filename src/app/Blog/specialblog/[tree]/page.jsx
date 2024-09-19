import React from 'react';

const page = ({ params }) => {
    console.log(params.tree);
    const singleIndoorPlant = indoorPlants.find((indoorPlant)=> (indoorPlant.tree == params.tree));
    const {title, description}=singleIndoorPlant;
return (
    <div className='h-screen'>
        <h1>{title}</h1>
        <h3>{description}</h3>
    </div>
);
};


const indoorPlants = [
    {
        "tree": "best-indoor-plants-for-beginners",
        "title": "Best Indoor Plants for Beginners",
        "description": "A curated list of easy-to-care-for indoor plants perfect for beginners looking to bring greenery into their home."
    },
    {
        "tree": "how-to-care-for-succulents",
        "title": "How to Care for Succulents Indoors",
        "description": "Learn the essential tips and tricks for taking care of indoor succulents, including light, water, and soil requirements."
    },
    {
        "tree": "low-light-indoor-plants",
        "title": "Top 10 Low-Light Indoor Plants",
        "description": "Discover the best indoor plants that thrive in low-light conditions, perfect for apartments and offices."
    },
    {
        "tree": "air-purifying-indoor-plants",
        "title": "Air-Purifying Indoor Plants for a Healthier Home",
        "description": "A guide to indoor plants that help purify the air in your home, improving air quality and promoting better health."
    },
    {
        "tree": "watering-tips-for-indoor-plants",
        "title": "Watering Tips for Indoor Plants",
        "description": "Find out how to water your indoor plants properly, including how to avoid overwatering and underwatering."
    },
    {
        "tree": "common-indoor-plant-problems",
        "title": "Common Indoor Plant Problems and How to Fix Them",
        "description": "A troubleshooting guide for common indoor plant issues, including yellow leaves, root rot, and pests."
    },
    {
        "tree": "best-indoor-plants-for-clean-air",
        "title": "Best Indoor Plants for Clean Air and Better Sleep",
        "description": "Explore the top indoor plants that improve air quality and promote a restful night's sleep."
    },
    {
        "tree": "grow-herbs-indoors",
        "title": "How to Grow Herbs Indoors Year-Round",
        "description": "Learn how to grow fresh herbs indoors, providing your kitchen with a year-round supply of flavorful ingredients."
    },
    {
        "tree": "pet-safe-indoor-plants",
        "title": "Pet-Safe Indoor Plants: A Complete Guide",
        "description": "Discover indoor plants that are safe for your pets, ensuring a healthy and toxic-free environment for your furry friends."
    },
    {
        "tree": "propagating-indoor-plants",
        "title": "A Beginner's Guide to Propagating Indoor Plants",
        "description": "Step-by-step instructions on how to propagate indoor plants from cuttings, allowing you to grow more plants for free."
    }
]

export default page;