export default function Head() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://webxode.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WebXode Technologies",
              url: "https://webxode.vercel.app",
              logo: "https://webxode.vercel.app/webxodelogoc.png",
              sameAs: [
                "https://www.instagram.com/webxode/",
              ]
            }),
          }}
        />
      </>
    );
  }
  