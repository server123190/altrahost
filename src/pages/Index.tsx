import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Server, Shield, Zap, Clock, Users, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-hosting.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Powerful Servers",
      description: "High-performance servers with latest hardware"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "DDoS Protection",
      description: "Advanced security against all threats"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Optimized for maximum performance"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "99.9% Uptime",
      description: "Reliable hosting you can count on"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Expert support team always available"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Network",
      description: "Servers located worldwide for best performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-2xl font-bold text-foreground">Altrahost</span>
          </div>
          <Button variant="outline" asChild>
            <a href="https://discord.gg/altracloud" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary">
                Premium Hosting Solutions
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Altrahost
                </span>
                <br />
                <span className="text-foreground">
                  Hosting Excellence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience premium hosting with cutting-edge technology, 
                unmatched performance, and 24/7 expert support.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/plans")}
                className="text-lg px-8 py-6"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="text-lg px-8 py-6"
              >
                <a href="https://discord.gg/altracloud" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="Modern hosting infrastructure" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Why Choose Altrahost?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide industry-leading hosting solutions with enterprise-grade infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-card border-border text-center">
          <CardHeader className="space-y-6">
            <CardTitle className="text-3xl font-bold text-foreground">
              Ready to Get Started?
            </CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Altrahost for their hosting needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate("/plans")}
              className="text-lg px-12 py-6"
            >
              View All Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-muted-foreground">
              Need custom solutions?{" "}
              <a 
                href="https://discord.gg/altracloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Contact our team
              </a>
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-gradient-primary rounded"></div>
            <span className="text-lg font-semibold text-foreground">Altrahost</span>
          </div>
          <p className="text-muted-foreground">
            Premium hosting solutions for the modern web
          </p>
          <div className="text-sm text-muted-foreground">
            © 2024 Altrahost. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
