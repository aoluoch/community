import { motion } from "framer-motion";
import { BlogPost } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card
        className={cn(
          "h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden",
          featured && "md:flex"
        )}
      >
        <div className={cn("relative", featured ? "md:w-1/2" : "w-full")}>
          <img
            src={post.image}
            alt={post.title}
            className={cn(
              "object-cover",
              featured ? "w-full h-full md:aspect-auto" : "w-full aspect-[16/9]"
            )}
            loading="lazy"
          />
          {post.featured && !featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-primary text-base">Featured</Badge>
            </div>
          )}
        </div>
        <CardContent
          className={cn(
            "p-6 lg:p-8",
            featured ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""
          )}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-primary/5 text-base">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <h3
              className={cn(
                "font-bold line-clamp-2 leading-tight",
                featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
              )}
            >
              {post.title}
            </h3>

            <p className="text-muted-foreground text-base lg:text-lg line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.authorImage} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-base font-medium">{post.author}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                </div>
              </div>

              <Button variant="ghost" className="text-base" asChild>
                <Link to="#" className="flex items-center">
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
