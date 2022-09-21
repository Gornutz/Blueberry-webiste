import { ReactNode } from "react"
import Sidebar from './sidebar'
import Header from './header'
import Footer from './footer'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type LayoutProps = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const pathName = router.pathname
  console.log(pathName)

  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Box>
        {children}
      </Box>
      <ToastContainer />
      {
        pathName != '/' && pathName != '/verification' &&
        <Footer />
      }
    </Box>
  );
};

export default Layout;