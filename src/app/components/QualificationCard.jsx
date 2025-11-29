import { motion } from 'framer-motion';

const Experience = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      {data &&
        data.map((item, key) => (
          <div
            className="mt-10 mb-5 border-b-[0.5px] border-gray-400 pb-5 font-sans"
            key={key}
          >
            <div className="flex justify-between">
              <div className="w-2/3">
                <h3 className="text-md md:text-xl font-bold text-slate-800">
                  {item.organization}
                </h3>
                <p className="text-sm md:text-md font-semibold text-slate-600">
                  {item.title}
                </p>
              </div>
              <p className="w-1/3 text-xs md:text-sm text-end text-slate-800 font-bold">
                {item.start_date} - {item.end_date}
              </p>
            </div>
            <p className="mt-3 text-sm md:text-base text-slate-600 font-medium">
              {item.description}
            </p>
          </div>
        ))}
    </motion.div>
  );
};

export default Experience;
