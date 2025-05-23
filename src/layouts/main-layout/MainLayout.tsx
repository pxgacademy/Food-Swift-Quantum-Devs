
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";



export default function MainLayout() {
  
  return (
    <section data-theme='coffee'>
      <Header/>
      <Outlet />
    </section>
  );
}
