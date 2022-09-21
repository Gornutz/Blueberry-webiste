import { ReactNode } from "react"
import Sidebar from './sidebar'
import Header from './header'
import Footer from './footer'
import Box from '@mui/material/Box'

type LayoutProps = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Box>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;