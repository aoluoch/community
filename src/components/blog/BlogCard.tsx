import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    slug: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/blog/${post.slug}`}>
        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-standard group">
          <div className="relative aspect-[16/9]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Badge
              variant="secondary"
              className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm"
            >
              {post.category}
            </Badge>
          </div>
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-base lg:text-lg line-clamp-3">
              {post.excerpt}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
