export default function RestaurantSchema() {
  const schema = {
    "@context": "https://" + "schema.org",
    "@type": "Organization",
    name: "Chocolate City Kenya",
    telephone: "+254703827955",
    subOrganization: [
      {
        "@type": "Restaurant",
        name: "Chocolate City Kileleshwa",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mbooni Road",
          addressLocality: "Kileleshwa",
          addressRegion: "Nairobi",
          addressCountry: "KE"
        },
        telephone: "+254703827955",
        openingHours: ["Mo-Su 00:00-23:59"]
      },
      {
        "@type": "Restaurant",
        name: "Chocolate City Karen",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mbandu Complex",
          addressLocality: "Karen",
          addressRegion: "Nairobi",
          addressCountry: "KE"
        },
        telephone: "+254703827955",
        openingHours: ["Mo-Sa 09:00-17:00"]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
