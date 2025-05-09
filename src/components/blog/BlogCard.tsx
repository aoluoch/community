import { motion } from 'framer-motion';
import { BlogPost } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={cn(
        "h-full border-none shadow-md overflow-hidden", 
        featured && "md:flex"
      )}>
        <div className={cn(
          "relative", 
          featured ? "md:w-1/2" : "w-full"
        )}>
          <img 
            src={post.image}
            alt={post.title}
            className={cn(
              "object-cover", 
              featured ? "w-full h-full md:aspect-auto" : "w-full aspect-[16/9]"
            )}
          />
          {post.featured && !featured && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-primary">Featured</Badge>
            </div>
          )}
        </div>
        <CardContent className={cn(
          "p-5", 
          featured ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""
        )}>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/5">
                {post.category}
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <h3 className={cn(
              "font-bold line-clamp-2", 
              featured ? "text-xl md:text-2xl" : "text-lg"
            )}>
              {post.title}
            </h3>
            
            <p className="text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.authorImage} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
              </div>
              
              <Button size="sm" variant="ghost" asChild>
                <Link to="#">Read More</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}