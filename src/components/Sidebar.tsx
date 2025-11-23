import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquarePlus, Info, BookOpen } from 'lucide-react';
import { aircraftSystems } from '@/lib/aircraftKnowledge';

interface SidebarProps {
  onNewChat: () => void;
}

const Sidebar = ({ onNewChat }: SidebarProps) => {
  return (
    <aside className="w-80 bg-card border-r border-border p-6 space-y-6 overflow-y-auto">
      <div>
        <Button
          onClick={onNewChat}
          className="w-full"
          variant="default"
        >
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Info className="h-5 w-5" />
            About This Project
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm">
            This AI Virtual Instructor helps aviation and engineering students understand aircraft systems through interactive conversations. Ask questions, get detailed explanations, and learn at your own pace!
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5" />
            Aircraft Systems
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {Object.values(aircraftSystems).map((system) => (
            <div key={system.name} className="space-y-1">
              <h4 className="font-medium text-sm">{system.name}</h4>
              <p className="text-xs text-muted-foreground">{system.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
