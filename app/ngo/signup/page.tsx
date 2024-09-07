import SignUp from '@/Components/Ngo/SignUp'
import Navbar from "@/Components/Ngo/Navbar";
import Footer from "@/Components/Ngo/Footer";

export default function Home(){
  return (
    <div>
      <Navbar />
      <SignUp />
      <Footer />   
    </div>
  )
}