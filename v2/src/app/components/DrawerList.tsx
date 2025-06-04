'use client';

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

interface DrawerListProps {
  toggleDrawer: (open: boolean) => void;
}

const DrawerList: React.FC<DrawerListProps> = ({ toggleDrawer }) => {

  // menu list
  const drawerItems = [
    { text: 'About Me', icon: <PersonOutlinedIcon /> },
    { text: 'Resume', icon: <HistoryEduOutlinedIcon /> },
    { text: 'Portfolio', icon: <DeveloperModeOutlinedIcon /> },
    { text: 'Contacts', icon: <MailIcon /> },
  ];


  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
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
              <a href="#" aria-label="GitHub">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
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
        {drawerItems.map(({text, icon}) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerList;
