// app/terms-and-conditions/page.tsx

import ComingSoon from '@/components/CommingSoon';
import React from 'react';

export const metadata = {
  title: "Terms and Conditions | Webxode",
  description:
    "Read the terms and conditions for using Webxode's website and services. Understand your rights, responsibilities, and our legal disclaimers.",
  keywords: [
    "Webxode terms",
    "Webxode conditions",
    "terms and conditions",
    "website usage policy",
    "Webxode legal",
    "user agreement Webxode"
  ]
};

const page = () => {
  return (
    <section>
      <ComingSoon />
    </section>
  );
};

export default page;
