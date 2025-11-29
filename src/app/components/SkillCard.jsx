import { motion } from 'framer-motion';

import "react-multi-carousel/lib/styles.css";



const SkillCard = ({ item }) => {

    const Icon = item.icon;
   

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className='text-left   rounded-tl-4xl rounded-br-4xl font-sans p-5 text-lg sm:text-xl md:text-2xl bg-dev min-h-[350px]  shadow-cyan-500/30 shadow-lg sm:shadow-xl w-full max-w-[85%] mx-auto border-[0.5px] border-gray-600'
            >
                <h1 className='text-xl md:text-xl text-amber-50  border-4  flex items-center justify-center px-4 py-2 bg-gradient-to-r rounded-tl-xl rounded-br-xl from-purple-300 via-pink-400 to-red-400 gap-2'>
                    <Icon />
                    {item.title}
                </h1>

                <div className='text-amber-50 text-base mt-5 flex flex-wrap gap-2 '>

                    {
                        item && item.skills && item.skills.map((data, key) => {
                            const Icon2 = data.icon;  // declare inside the block
                            return (
                                <div
                                    key={key}
                                    className={`mt-2 border-b-[3px] border-r-[2px] border-gray-400 w-fit px-3 py-2 rounded flex gap-2 bg-[#1a2f38] text-md lg:text-lg items-center ${data.hoverColor} transition group active:${data.hoverColor}`}
                                >
                                    <Icon2 className='group-hover:animate-bounce active:animate-bounce' />
                                    {data.name}
                                </div>
                            );
                        })
                    }

                </div>

            </motion.div>
        </>
    );
}

export default SkillCard;