import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { Section } from "@/components/ui/section";
import PageHeader from "@/components/shared/PageHeader";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Community",
  "Education",
  "Youth",
  "Development",
  "Health",
];

const featuredPosts = blogPosts.filter((post) => post.featured);

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    if (selectedCategory !== "All" && post.category !== selectedCategory)
      return false;
    if (
      searchTerm &&
      !post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return true;
  });

  useEffect(() => {
    document.title = "Blog - GetMore Centre";
  }, []);

  return (
    <>
      <PageHeader
        page="blog"
        title="Latest Articles"
        description="Insights, updates, and stories from our community."
      />

      <Section>
        {featuredPosts.length > 0 && (
          <div className="mb-12 lg:mb-16">
            <BlogCard post={featuredPosts[0]} featured />
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search blog posts..."
              className="pl-9 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
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

        {filteredPosts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No blog posts found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
