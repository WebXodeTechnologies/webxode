// app/blog/page.tsx

import ComingSoon from '@/components/CommingSoon';
import React from 'react';

export const metadata = {
  title: "Blog | Webxode - Tech Insights & Development Tips and connect and share your ideas",
  description:
    "Explore the latest updates, tutorials, and insights from Webxode. Stay ahead in web development, design trends, and tech innovations.",
};

const page = () => {
  return (
    <section>
      <ComingSoon />
    </section>
  );
};

export default page;
