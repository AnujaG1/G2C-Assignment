
import './App.css';
// import Car from './text';
// import Vehicle from './text';
//import ShowTable from './table';
import  Header   from './Header';
import SideNav from './SideNav';
import MainContent from './MainContent';
import Footer from './Footer';


const App= () => {
  
  return (
     <div className="App">
     {
     /* <Vehicle name = "cars "/> */
      // <ShowTable/>
     
      <div>
      <Header title = "REACTJS"/>
      
      <SideNav hint = "Hello!" />
      
      <MainContent name = "Girls To Code : A 3 days long workshop on reactjs for girls."/>
      
      
      <Footer name = "&copy; Organized by LOCUS2024"/>
     
      </div>
     
       }
    </div>
  );
}

export default App;
