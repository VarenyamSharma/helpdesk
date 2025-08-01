
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Bell, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const AppHeader = () => {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-14 items-center gap-4 px-4">
        <SidebarTrigger />
        
        <div className="flex-1 flex items-center gap-4 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tickets..."
              className="pl-8 bg-ghost-white/50 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
