import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import PaidIcon from '@mui/icons-material/Paid';
import RequestPageIcon from '@mui/icons-material/RequestPage';

export const SidebarNavItems = [
  {
    display: "Project Overview",
    icon: <HomeIcon />,
    to: "/",
    section: "",
  },
  {
    display: "Project Categories",
    icon: <HomeRepairServiceIcon />,
    to: "/projectCategories",
    section: "",
  },
  {
    display: "Build Schedule",
    icon: <HomeRepairServiceIcon />,
    to: "/buildSchedule",
    section: "",
  },

  {
    display: "Tasks",
    icon: <FormatListBulletedIcon />,
    to: "/tasks",
    section: "",
  },
  {
    display: "Vendors",
    icon: <StoreMallDirectoryIcon />,
    to: "/vendorDirectory",
    section: "",
  },
  {
    display: "Finance",
    icon: <PaidIcon />,
    to: "/finance",
    section: "",
  },
  {
    display: "Estimates",
    icon: <RequestPageIcon />,
    to: "/estimates",
    section: "",
  },
  {
    display: "Bidding",
    icon: <RequestPageIcon />,
    to: "/bidding",
    section: "",
  },
];