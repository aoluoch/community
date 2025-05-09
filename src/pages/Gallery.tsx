import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "@/lib/data";
import { Section } from "@/components/ui/section";
import PageHeader from "@/components/shared/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", "Events", "Programs", "Community", "Workshops"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "Gallery - GetMore Centre";
  }, []);

  return (
    <>
      <PageHeader
        page="gallery"
        title="Our Gallery"
        description="Explore moments and memories from our community events and programs."
      />

      <Section>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={cn(
                "transition-standard",
                selectedCategory === category
                  ? "shadow-md"
                  : "hover:bg-primary/5"
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <GalleryGrid
          images={galleryImages}
          selectedCategory={selectedCategory}
        />
      </Section>
    </>
  );
}
