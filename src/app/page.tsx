import { Testimonial } from "@/component/testimonial";
import { memo } from "react";

const HomePage = () => {
  return (
    <main className="flex justify-center">
      <Testimonial
        headshotFilename="sarahdole.png"
        fullName="Sarah Dole"
        username="sarahdole"
      >
        I&#39;ve been searching for high-quality abstract images for my design
        projects, and I&#39;m thrilled to have found this platform. The variety
        and depth of creativity are astounding!
      </Testimonial>
    </main>
  );
};

export default memo(HomePage);
