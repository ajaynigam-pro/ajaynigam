import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  useEffect(() => {
      const script = document.createElement("script");
  
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.defer = true;
      script.dataset.useServiceCore = 'true';
      document.body.appendChild(script);
  }, [])
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth:  '100%' ,
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons
        variant="fullWidth"
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <Tab label="Services" {...a11yProps(0)} />
        <Tab label="Industries" {...a11yProps(1)} />
        <Tab label="Portfolio" {...a11yProps(2)} />
        <Tab label="Contact Us" {...a11yProps(3)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Box>
        Describe the range of services you provide. This could include:
Custom website design
Responsive web development
E-commerce solutions
Content management systems (CMS)
SEO optimization
Maintenance and support
Use clear, concise language to explain each service.
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box>
        We’re a well-regarded company specializing in education app development. Our extensive portfolio features over 30 successful e-learning applications that dominate app stores. Elevate your education business with our intelligent e-learning apps, allowing learners to access desired courses and improve their performance in real time.
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Coming Soon...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      {/* <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script> */}
<div className="elfsight-app-0ab20a87-d2ec-4ecd-810b-0378e0b9655b" data-elfsight-app-lazy></div>
      </CustomTabPanel>
    </Box>
  );
}