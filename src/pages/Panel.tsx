import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, 
  Server, 
  CreditCard, 
  MessageSquare, 
  Settings, 
  LogOut,
  MoreVertical,
  Activity,
  Users,
  HardDrive,
  Cpu,
  MemoryStick,
  Play,
  Square,
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Panel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const servers = [
    {
      id: "srv-001",
      name: "SMP Server Alpha",
      plan: "Ultimate Server",
      status: "online",
      players: "12/16",
      cpu: 45,
      ram: 68,
      disk: 23,
      ip: "play.altrahost.com:25565"
    },
    {
      id: "srv-002", 
      name: "Creative Build Server",
      plan: "Diamond Plan",
      status: "online",
      players: "8/12",
      cpu: 32,
      ram: 54,
      disk: 67,
      ip: "creative.altrahost.com:25566"
    },
    {
      id: "srv-003",
      name: "Dev Testing Server",
      plan: "Stone Plan", 
      status: "offline",
      players: "0/6",
      cpu: 0,
      ram: 0,
      disk: 15,
      ip: "dev.altrahost.com:25567"
    }
  ];

  const tickets = [
    {
      id: "#TKT-001",
      subject: "Server lag issues during peak hours",
      status: "open",
      priority: "high",
      created: "2 hours ago"
    },
    {
      id: "#TKT-002", 
      subject: "Request for plugin installation",
      status: "in-progress",
      priority: "medium", 
      created: "1 day ago"
    },
    {
      id: "#TKT-003",
      subject: "Billing question about upgrade",
      status: "resolved",
      priority: "low",
      created: "3 days ago"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "online":
        return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Online</Badge>;
      case "offline":
        return <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">Offline</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getTicketBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Open</Badge>;
      case "in-progress":
        return <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">In Progress</Badge>;
      case "resolved":
        return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Resolved</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>;
      case "medium":
        return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Medium</Badge>;
      case "low":
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="secondary">Normal</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">AltraHost Panel</span>
            </div>
            
            <nav className="space-y-2">
              <Button 
                variant={activeTab === "dashboard" ? "secondary" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("dashboard")}
              >
                <Home className="mr-3 h-4 w-4" />
                Dashboard
              </Button>
              <Button 
                variant={activeTab === "servers" ? "secondary" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("servers")}
              >
                <Server className="mr-3 h-4 w-4" />
                My Servers
              </Button>
              <Button 
                variant={activeTab === "billing" ? "secondary" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("billing")}
              >
                <CreditCard className="mr-3 h-4 w-4" />
                Billing
              </Button>
              <Button 
                variant={activeTab === "support" ? "secondary" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("support")}
              >
                <MessageSquare className="mr-3 h-4 w-4" />
                Support
              </Button>
              <Button 
                variant={activeTab === "settings" ? "secondary" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="mr-3 h-4 w-4" />
                Settings
              </Button>
            </nav>
          </div>

          <div className="absolute bottom-0 w-64 p-6 border-t border-border">
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground truncate">
                  John Doe
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  Premium Member
                </div>
              </div>
            </div>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground" onClick={() => navigate("/")}>
              <LogOut className="mr-3 h-4 w-4" />
              Back to Site
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's your hosting overview.</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-card border-border">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Servers</CardTitle>
                    <Server className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">3</div>
                    <p className="text-xs text-muted-foreground">2 active, 1 offline</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Players</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-success">20</div>
                    <p className="text-xs text-muted-foreground">+12% from last week</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">₹2,220</div>
                    <p className="text-xs text-muted-foreground">Next bill: Dec 15</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-warning">1</div>
                    <p className="text-xs text-muted-foreground">1 open, 2 resolved</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>Server Status</CardTitle>
                    <CardDescription>Current status of your servers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {servers.slice(0, 3).map((server) => (
                        <div key={server.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${server.status === 'online' ? 'bg-success' : 'bg-destructive'}`}></div>
                            <div>
                              <div className="font-medium text-foreground">{server.name}</div>
                              <div className="text-sm text-muted-foreground">{server.plan}</div>
                            </div>
                          </div>
                          {getStatusBadge(server.status)}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates and actions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <div>
                          <div className="text-sm font-medium">Server restarted successfully</div>
                          <div className="text-xs text-muted-foreground">2 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="h-4 w-4 text-warning" />
                        <div>
                          <div className="text-sm font-medium">High CPU usage detected</div>
                          <div className="text-xs text-muted-foreground">4 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <div>
                          <div className="text-sm font-medium">Backup completed</div>
                          <div className="text-xs text-muted-foreground">1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "servers" && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">My Servers</h1>
                  <p className="text-muted-foreground">Manage your Minecraft servers</p>
                </div>
                <Button variant="hero">
                  <Plus className="mr-2 h-4 w-4" />
                  New Server
                </Button>
              </div>

              <div className="grid gap-6">
                {servers.map((server) => (
                  <Card key={server.id} className="bg-gradient-card border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-3">
                            {server.name}
                            {getStatusBadge(server.status)}
                          </CardTitle>
                          <CardDescription>{server.plan} • {server.ip}</CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Play className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Square className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Players</span>
                            <span className="text-sm font-medium">{server.players}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{server.status === 'online' ? 'Active' : 'Offline'}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">CPU Usage</span>
                            <span className="text-sm font-medium">{server.cpu}%</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Cpu className="h-4 w-4 text-muted-foreground" />
                            <Progress value={server.cpu} className="flex-1" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">RAM Usage</span>
                            <span className="text-sm font-medium">{server.ram}%</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MemoryStick className="h-4 w-4 text-muted-foreground" />
                            <Progress value={server.ram} className="flex-1" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Disk Usage</span>
                            <span className="text-sm font-medium">{server.disk}%</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <HardDrive className="h-4 w-4 text-muted-foreground" />
                            <Progress value={server.disk} className="flex-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Billing</h1>
                <p className="text-muted-foreground">Manage your subscription and billing</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-gradient-card border-border lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Current Subscription</CardTitle>
                    <CardDescription>Your active plans and services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {servers.map((server) => (
                        <div key={server.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div>
                            <div className="font-medium text-foreground">{server.name}</div>
                            <div className="text-sm text-muted-foreground">{server.plan}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">₹{server.plan.includes('Ultimate') ? '1500' : server.plan.includes('Diamond') ? '420' : '159'}/month</div>
                            <div className="text-sm text-muted-foreground">Next: Dec 15</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Manage payment options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                        <CreditCard className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <div className="font-medium">•••• •••• •••• 4242</div>
                          <div className="text-sm text-muted-foreground">Expires 12/25</div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Update Payment Method
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "support" && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Support</h1>
                  <p className="text-muted-foreground">Get help with your hosting</p>
                </div>
                <Button variant="hero">
                  <Plus className="mr-2 h-4 w-4" />
                  New Ticket
                </Button>
              </div>

              <div className="grid gap-4">
                {tickets.map((ticket) => (
                  <Card key={ticket.id} className="bg-gradient-card border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{ticket.subject}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span>{ticket.id}</span>
                            <span>•</span>
                            <span>{ticket.created}</span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getPriorityBadge(ticket.priority)}
                          {getTicketBadge(ticket.status)}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle>Quick Help</CardTitle>
                  <CardDescription>Common questions and resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start h-auto p-4">
                      <FileText className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="font-medium">Documentation</div>
                        <div className="text-sm text-muted-foreground">Setup guides and tutorials</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4" asChild>
                      <a href="https://discord.gg/altracloud" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-3 h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">Discord Support</div>
                          <div className="text-sm text-muted-foreground">Chat with our team</div>
                        </div>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground">Manage your account preferences</p>
              </div>

              <div className="grid gap-6">
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Your personal account details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">Full Name</label>
                        <input className="w-full mt-1 px-3 py-2 bg-secondary border border-border rounded-md text-foreground" defaultValue="John Doe" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Email</label>
                        <input className="w-full mt-1 px-3 py-2 bg-secondary border border-border rounded-md text-foreground" defaultValue="john@example.com" />
                      </div>
                    </div>
                    <Button variant="hero">Save Changes</Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline">Change Password</Button>
                    <Button variant="outline">Enable Two-Factor Authentication</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Panel;