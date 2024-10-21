import * as React from "react"
import { GalleryVerticalEnd, Moon, Sun, ArrowUpRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const pages = [
  {
    title: "Home",
    url: "/",
    icon: "🏠"
  }, 
  {
    title: "About",
    url: "/about",
    icon: "👤"
  },
  {
    title: "Education",
    url: "/education",
    icon: "🎓"
  },
  {
    title: "Experience",
    url: "/experience",
    icon: "💼"
  },
  {
    title: "Projects",
    url: "/projects",
    icon: "💻"
  }, 
  {
    title: "Events",
    url: "/events",
    icon: "🗓️"
  }
]

const contact = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/jakebodea/",
    icon: "🖇️"
  }, 
  {
    title: "GitHub",
    url: "https://github.com/jakebodea",
    icon: "🐙"
  }, 
  {
    title: "𝕏",
    url: "https://x.com/jakebodea",
    icon: "🐦"
  }
]
  

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme, setTheme } = useTheme()
  
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex flex-col items-center gap-2 m-2"> 
              <div className="flex aspect-square size-12 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-8" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-bold text-lg">Jake Bodea</span>
              </div>  
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {pages.map((item) => (
            <SidebarMenuButton size="lg" asChild>
              <a href={item.url} className="font-medium">
                <span className="text-lg">{item.icon}</span>
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          ))}
        </SidebarGroup>
        <SidebarGroup>
          <SidebarHeader>Contact Me</SidebarHeader>
          {contact.map((item) => (
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center justify-between">
                <a href={item.url} className="font-medium flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.title}</span>
                </a>
                <ArrowUpRight className="size-4" />
              </div>
            </SidebarMenuButton>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter> 
        <div className="flex items-center justify-start">
          <Button variant="ghost" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  ) 
}
