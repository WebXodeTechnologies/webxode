// app/careers/page.tsx

import ComingSoon from '@/components/CommingSoon';
import React from 'react';

export const metadata = {
  title: "Careers at Webxode | Join Our Innovative Tech Team",
  description:
    "Explore exciting career opportunities at Webxode. We're hiring developers, designers, and thinkers who are passionate about building modern web experiences.",
};

const page = () => {
  return (
    <section>
      <ComingSoon />
    </section>
  );
};

export default page;
