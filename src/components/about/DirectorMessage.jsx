import React from "react";
import { motion } from "framer-motion";

const DirectorMessage = ({ director }) => {
  return (
    <section className="mx-auto bg-gray-300 max-w-8xl px-5 py-20 sm:px-6">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]"
>
  {/* Soft background glow */}
  <div className="absolute inset-0 -z-10 rounded-3xl bg-purple-300/40 blur-3xl" />

  {/* Image Card */}
  <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-200">
    <div className="aspect-square w-full">
      <img
        src={director.image}
        alt={director.name}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
    </div>
  </div>
</motion.div>


        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-extrabold text-gray-900">
            {director.title}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            <span className="font-semibold text-gray-800">{director.name}</span>{" "}
            • {director.role}
          </p>

          <div className="mt-5 rounded-3xl bg-gray-50 p-6 ring-1 ring-gray-100">
            <p className="text-sm leading-relaxed text-gray-700">
              {director.message}
            </p>
          </div>

          <div className="mt-6 inline-flex rounded-full bg-purple-700 px-5 py-2 text-xs font-semibold text-white shadow-sm">
            A trusted learning environment
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DirectorMessage;
