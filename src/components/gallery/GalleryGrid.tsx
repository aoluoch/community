import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid } from "@/components/ui/grid";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GalleryImage } from "@/types";

interface GalleryGridProps {
  images: GalleryImage[];
  selectedCategory: string;
}

export default function GalleryGrid({
  images,
  selectedCategory,
}: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = images.filter((image) =>
    selectedCategory === "All" ? true : image.category === selectedCategory
  );

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  return (
    <>
      <AnimatePresence>
        <Grid cols="auto-fit" gap="md" className="auto-rows-fr">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <Badge variant="secondary" className="text-base mb-2">
                    {image.category}
                  </Badge>
                  <p className="text-white text-base lg:text-lg font-medium line-clamp-2">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Grid>
      </AnimatePresence>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-[90vw] p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <Badge variant="secondary" className="text-base mb-2">
                  {selectedImage.category}
                </Badge>
                <p className="text-white text-lg lg:text-xl font-medium">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
