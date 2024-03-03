
import Milestone from './Milestone';

const CompanyJourney = () => {
    const milestones = [
        { 
            year: 2017, 
            title: "Founded", 
            description: "In 2017, our company was founded with a vision to revolutionize the industry, marking the beginning of an exciting journey of growth and innovation.",
            projectsCompleted: 0, 
            image: "/images/journey/journey1.png" 

        },
        { 
            year: 2018, 
            title: "Year 1", 
            description: "In our first year, we focused on growth and innovation, completing key projects and establishing ourselves as a trusted partner in the industry.",
            projectsCompleted: 5, 
            image: "/images/journey/year2.png" 
        },
        { 
            year: 2019, 
            title: "Year 2", 
            description: "The second year brought significant growth and expansion as we launched new products and services, solidifying our position in the market.",
            projectsCompleted: 5, 
            image: "/images/journey/journey2.png" 
        },
        { 
            year: 2020, 
            title: "Year 3", 
            description: "Despite challenges, our third year was marked by resilience and adaptability, as we navigated the changing landscape and continued to deliver value.",
            projectsCompleted: 5, 
            image: "/images/journey/journey3.jpg" 
        },
        { 
            year: 2021, 
            title: "Year 4", 
            description: "In our fourth year, we expanded into new markets and acquired key clients, further strengthening our position as a leader in the industry.",
            projectsCompleted: 5, 
            image: "/images/journey/journey4.png" 
        },
        { 
            year: 2022, 
            title: "Year 5", 
            description: "As we celebrated our 5th anniversary, we launched a major rebranding campaign, positioning ourselves for continued growth and success.",
            projectsCompleted: 5, 
            image: "/images/journey/year2.png" 
        },
        { 
            year: 2023, 
            title: "Year 6", 
            description: "Looking ahead to our sixth year, we remain committed to driving sustainable growth and delivering value to our clients .",
            projectsCompleted: 5, 
            image: "/images/journey/year2.png" 
        },
    ];
    

    return (
         <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-x-10">
            {milestones.map((milestone, index) => (
                <Milestone
                    key={index}
                    index={index}
                    image={milestone.image}
                    title={milestone.title}
                    description={milestone.description}
                    year={milestone.year}
                    projectsCompleted={milestone.projectsCompleted}
                />
            ))}
        </div>
    );
};

export default CompanyJourney;
