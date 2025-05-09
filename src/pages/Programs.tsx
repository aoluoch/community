import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Program } from '@/types';
import { programs } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import ProgramCard from '@/components/programs/ProgramCard';
import ProgramModal from '@/components/programs/ProgramModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = 'Programs & Services - GetMore Centre';
  }, []);

  const handleOpenModal = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const categories = ['All', ...Array.from(new Set(programs.map(program => program.category)))];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader 
        title="Programs & Services" 
        description="Explore our range of educational and support programs for the community." 
      />

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search programs..." 
                className="pl-9 w-full md:w-[300px]" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
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
            </div>
          </div>

          {filteredPrograms.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPrograms.map(program => (
                <ProgramCard 
                  key={program.id}
                  program={program}
                  onClick={() => handleOpenModal(program)}
                />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No programs found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      <ProgramModal 
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}