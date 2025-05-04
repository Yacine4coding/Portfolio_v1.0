import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section className="flex-center section-padding" id="testimonials">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What *I* Have to Say About Me?"
          sub="⭐ Highlights from Me, Myself, and I"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(({ imgPath, name, review, mentions }) => (
            <GlowCard key={name} card={{ review }}>
              <div className="flex items-center gap-3">
                <div>
                  <div class="w-10 h-10 overflow-hidden rounded-full">
                    <img
                      src={imgPath}
                      alt={name}
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
