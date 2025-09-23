import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const LawFirmWebsiteDesignSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050706] mb-8 leading-tight">
              Grow Your Practice with a Website That Converts
            </h2>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-0 leading-relaxed">
              Fast, mobile‑first websites for law firms with clear messaging and calls‑to‑action that turn visitors into consultations.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default LawFirmWebsiteDesignSection;
