import Footer from "../../components/Footer";
import SidebarTurorial from "../../components/sidebar-tutorial";
import Topbar from "../../components/top bar";

function Tutorials(){

    return(
        <>
            
            
            
            <SidebarTurorial/>
            <div className="main-content position-relative max-height-vh-100 h-100">
                <Topbar/>
                <div className="container">
                    <p>What is HTML?</p>
                    <ul>
                        <li>HTML stands for Hyper Text Markup Language</li>
                        <li>HTML is the standard markup language for creating Web pages</li>
                        <li>HTML describes the structure of a Web page</li>
                        <li>HTML consists of a series of elements</li>
                        <li>HTML elements tell the browser how to display the content</li>
                        <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                    </ul>
                    


                    <button className="btn">previous</button>
                    <button className="btn">next</button>


                </div>
                
            </div>
            
            
            <Footer/>
        </>
    )
}

export default Tutorials