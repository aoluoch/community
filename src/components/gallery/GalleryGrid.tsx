import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from '@/types';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryGridProps {
  images: GalleryImage[];
  selectedCategory: string;
}

export default function GalleryGrid({ images, selectedCategory }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);
  
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setSelectedIndex(filteredImages.findIndex(img => img.id === image.id));
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  const goToPrevious = () => {
    const newIndex = selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };
  
  const goToNext = () => {
    const newIndex = selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              variants={item}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3 w-full">
                  <Badge variant="secondary">{image.category}</Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
          <div className="relative">
            <div className="p-4 absolute top-0 right-0 z-10">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90"
                onClick={closeLightbox}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            
            {filteredImages.length > 1 && (
              <>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next</span>
                </Button>
              </>
            )}
            
            <div className="overflow-hidden">
              {selectedImage && (
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain"
                />
              )}
            </div>
            
            {selectedImage && (
              <div className="p-4 bg-background">
                <DialogTitle className="text-lg font-medium">{selectedImage.alt}</DialogTitle>
                <div className="mt-2">
                  <Badge>{selectedImage.category}</Badge>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}