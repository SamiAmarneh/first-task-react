import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Employees from "./employees.jsx";
import Clients from "./clients.jsx";

export default function App(){
  return (
    <div>
    <Navbar />
    <Employees />
    <Clients />
    <Footer />
    </div>
  )
}