import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { Button } from '@/components/ui/button';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  useEffect(() => {
    document.title = 'Gallery - GetMore Centre';
  }, []);

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

  return (
    <>
      <PageHeader 
        title="Gallery" 
        description="Browse photos and videos from our events and programs." 
      />

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <GalleryGrid 
            images={galleryImages}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>
    </>
  );
}