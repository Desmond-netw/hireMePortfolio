'use client';
import { useRouter } from 'next/navigation';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import profile from '@../../../public/profile0.png';
import FullScreenDialog from './fullDialog';
import React from 'react';

interface DrawerListProps {
  toggleDrawer?: (open: boolean) => void;
  onResumeClick?: () => void;
}

const DrawerList: React.FC<DrawerListProps> = ({ toggleDrawer }) => {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = React.useState(false);

// Menu items with optional click handlers or routes
  const drawerItems = [
    { text: 'About Me', icon: <PersonOutlinedIcon />, route: '/' },
    { text: 'Resume', icon: <HistoryEduOutlinedIcon />, onClick: () => setDialogOpen(true) },
    { text: 'Portfolio', icon: <DeveloperModeOutlinedIcon />, route: '/portfolio' },
    { text: 'Contacts', icon: <MailIcon />, route: '/contacts' },
  ];


  return (
    // =========== USER Profile sidebar
     <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem className="flex flex-col items-center gap-4 py-4">
          {/* Profile photo */}
          <div className="w-24 h-24 relative">
            <Image
              src={profile}
              alt="Profilephoto"
              layout="fill"
              objectFit="cover"
              className="rounded-full border border-gray-300"
            />
          </div>

          {/* Name and title */}
          <div className="text-center">
            <h2 className="text-lg font-semibold">DESMOND DEVEH</h2>
            <p className="text-sm text-gray-600 leading-tight">
              Full Stack Engineer <br />
              Network Engineer
            </p>
          </div>

          {/* Social media icons */}
          <ul className="flex flex-row justify-center gap-4 pt-2">
            <li>
             <a
            href="#"
            aria-label="GitHub"
            className="p-2 rounded-full hover:bg-slate-500 transition-colors duration-200"
          >
            <GitHubIcon />
          </a>
            </li>
            <li>
              <a href="#" 
              aria-label="Facebook"
              className="hover:bg-blue-600"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </ListItem>
      </List>

      <Divider />

      {/* Drawer items */}
      <List>
        {drawerItems.map(({ text, icon, route, onClick }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
               onClick={() => {
                if (onClick) {
                  onClick(); // Trigger Resume dialog
                  // Do NOT close drawer here
                } else if (route) {
                  toggleDrawer?.(false); // Close drawer only on navigation
                  router.push(route);
                }
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <FullScreenDialog
        title="Digital Resume"
        
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <div>Resume</div>
      </FullScreenDialog>
    </Box>
  );
};

export default DrawerList;
