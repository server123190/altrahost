import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Server, Gamepad2, Globe, Check, Crown, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const [activeTab, setActiveTab] = useState<"vps" | "minecraft" | "domain">("vps");
  const navigate = useNavigate();

  const domainExtensions = [
    ".com", ".fun", ".oi", ".net", ".org", ".online", ".cloud", ".gg", ".ai"
  ];

  const minecraftPlans = {
    premium: [
      {
        name: "SMP Plan",
        cpu: "200% Ryzen 9",
        disk: "10GB",
        ram: "8GB",
        price: "₹800/month",
        icon: <Gamepad2 className="h-6 w-6" />,
        features: ["DDoS Protection", "24/7 Support", "Auto Backups", "Plugin Support"]
      },
      {
        name: "Ultimate Server",
        cpu: "600% Ryzen 9",
        disk: "16GB",
        ram: "16GB",
        price: "₹1500/month",
        icon: <Crown className="h-6 w-6" />,
        features: ["Everything in SMP", "Priority Support", "Custom Plugins", "Advanced Monitoring"]
      },
      {
        name: "AltraCloud Plan",
        cpu: "3000% Ryzen 9",
        disk: "64GB",
        ram: "64GB",
        price: "₹3600/month",
        icon: <Zap className="h-6 w-6" />,
        features: ["Everything in Ultimate", "Dedicated Resources", "Custom Setup", "VIP Support"]
      }
    ],
    cheap: [
      {
        name: "Stone Plan",
        cpu: "200% Intel i3",
        disk: "4GB",
        ram: "6GB",
        price: "₹159/month",
        icon: <Shield className="h-6 w-6" />,
        features: ["Basic DDoS Protection", "Community Support", "Daily Backups"]
      },
      {
        name: "Iron Plan",
        cpu: "350% Intel i5",
        disk: "8GB",
        ram: "8GB",
        price: "₹300/month",
        icon: <Server className="h-6 w-6" />,
        features: ["Enhanced Protection", "Email Support", "Auto Backups", "Plugin Support"]
      },
      {
        name: "Diamond Plan",
        cpu: "400% Intel i5",
        disk: "12GB",
        ram: "12GB",
        price: "₹420/month",
        icon: <Crown className="h-6 w-6" />,
        features: ["Premium Protection", "Priority Support", "Advanced Plugins", "Performance Monitoring"]
      }
    ],
    ultraPremium: [
      {
        name: "Legit Plan",
        cpu: "5000% Ryzen 9",
        disk: "128GB",
        ram: "128GB",
        price: "₹6000/month",
        icon: <Zap className="h-6 w-6" />,
        features: ["Extreme Performance", "Dedicated Hardware", "Custom Configuration", "24/7 VIP Support"]
      },
      {
        name: "Ultra Pro Plan",
        cpu: "10000% Ryzen 9",
        disk: "1TB",
        ram: "1TB",
        price: "₹9000/month",
        icon: <Crown className="h-6 w-6" />,
        features: ["Ultimate Performance", "Exclusive Hardware", "Full Customization", "Personal Account Manager"]
      }
    ]
  };

  const PlanCard = ({ plan, category }: { plan: any, category: string }) => (
    <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            {plan.icon}
          </div>
          <div>
            <CardTitle className="text-foreground">{plan.name}</CardTitle>
            <CardDescription>{category}</CardDescription>
          </div>
        </div>
        <div className="text-3xl font-bold text-primary">{plan.price}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">CPU:</span>
              <span className="font-medium">{plan.cpu}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Storage:</span>
              <span className="font-medium">{plan.disk}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">RAM:</span>
              <span className="font-medium">{plan.ram}</span>
            </div>
          </div>
          <div className="space-y-2">
            {plan.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          <Button className="w-full" variant="hero" asChild>
            <a href="https://discord.gg/7vqgvQQdks" target="_blank" rel="noopener noreferrer">
              Buy via Discord
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/")}
            className="text-foreground hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful hosting solutions designed for your needs. All purchases are made through our Discord server.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-secondary rounded-lg p-1">
            <Button
              variant={activeTab === "vps" ? "default" : "ghost"}
              onClick={() => setActiveTab("vps")}
              className="flex items-center gap-2"
            >
              <Server className="h-4 w-4" />
              VPS Plans
            </Button>
            <Button
              variant={activeTab === "minecraft" ? "default" : "ghost"}
              onClick={() => setActiveTab("minecraft")}
              className="flex items-center gap-2"
            >
              <Gamepad2 className="h-4 w-4" />
              Minecraft Servers
            </Button>
            <Button
              variant={activeTab === "domain" ? "default" : "ghost"}
              onClick={() => setActiveTab("domain")}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              Domains
            </Button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "minecraft" && (
          <div className="space-y-16">
            {/* Premium Plans */}
            <section>
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4">Premium Plans</Badge>
                <h2 className="text-3xl font-bold text-foreground">High-Performance Minecraft Hosting</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {minecraftPlans.premium.map((plan, index) => (
                  <PlanCard key={index} plan={plan} category="Premium" />
                ))}
              </div>
            </section>

            {/* Cheap Plans */}
            <section>
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4">Affordable Plans</Badge>
                <h2 className="text-3xl font-bold text-foreground">Budget-Friendly Options</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {minecraftPlans.cheap.map((plan, index) => (
                  <PlanCard key={index} plan={plan} category="Budget" />
                ))}
              </div>
            </section>

            {/* Ultra Premium Plans */}
            <section>
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4">Ultra Premium Plans</Badge>
                <h2 className="text-3xl font-bold text-foreground">Ultimate Performance</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {minecraftPlans.ultraPremium.map((plan, index) => (
                  <PlanCard key={index} plan={plan} category="Ultra Premium" />
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "domain" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Domain Registration</h2>
              <p className="text-muted-foreground">Secure your perfect domain name today</p>
            </div>
            
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-center">Available Domain Extensions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                  {domainExtensions.map((ext, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                      <span className="font-medium">yourdomain{ext}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://discord.gg/7vqgvQQdks" target="_blank" rel="noopener noreferrer">
                      Buy Domains via Discord
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "vps" && (
          <div className="text-center">
            <Card className="bg-gradient-card border-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>VPS Plans Coming Soon</CardTitle>
                <CardDescription>
                  We're working on bringing you the best VPS hosting solutions. 
                  Contact us for custom VPS requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="hero" asChild>
                  <a href="https://discord.gg/7vqgvQQdks" target="_blank" rel="noopener noreferrer">
                    Contact Us on Discord
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Contact Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-border max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Ready to Purchase?</CardTitle>
              <CardDescription>
                All orders and purchases are handled through our Discord server
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="premium" asChild>
                <a href="https://discord.gg/7vqgvQQdks" target="_blank" rel="noopener noreferrer">
                  Purchase via Discord
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Plans;
