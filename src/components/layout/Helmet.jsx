import React from "react";
import { Helmet } from "react-helmet";

export const Helmets = () => {
  return (
    <Helmet>
      <title>Nirvar - Inspirational Vision</title>
      <meta
        name="description"
        content="Explore the inspiring story and vision of Nirvar, a beacon of hope for those striving for success."
      />
      <meta
        name="keywords"
        content="Nirvar, Inspiration, Achievement, Vision, Success"
      />
      <meta name="author" content="Nirvar" />
      <meta property="og:title" content="Nirvar - Inspirational Vision" />
      <meta
        property="og:description"
        content="Dive into the vision of Nirvar. Discover what drives his inspiration and journey towards success."
      />
      <meta property="og:image" content={images.NIRVAR_IMAGE} />{" "}
      {/* Replace with actual image path */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://example.com/nirvar" />
      <link rel="canonical" href="https://example.com/nirvar" />
    </Helmet>
  );
};
