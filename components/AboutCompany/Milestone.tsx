
import { motion } from 'framer-motion';

const Milestone = ({ title, description, year, projectsCompleted, index, image }) => {
    return (
        <div className="">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="milestone flex  items-center mb-10 h-48 p-4 bg-gray-50 border rounded-lg"
                id={`milestone-${index}`}
            >
                <div>
                <p className=' mb-4 text-4xl mr-4 font-bold '>{year}</p>

                    <p className="text-md">{description}</p>
                    {/* <p className="text-sm">Projects Completed: {projectsCompleted}</p> */}
                </div>
                <img src={image} alt='' className='w-32  h-32'>
                </img>
            </motion.div>

        </div>
    );
};

export default Milestone;
