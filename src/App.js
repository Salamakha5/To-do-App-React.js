import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import TodoPage from './components/Todo.component';
import NavBar from './components/navbar.component';
import LeftMenu from './components/leftMenu.component';
import FooterCom from './components/footer.component';

function App() {
  return (
    <div className='app w-100'>
    <NavBar></NavBar>
  <div className='d-flex h100vh w-100'>
    <LeftMenu></LeftMenu>
    <TodoPage></TodoPage>
  </div>
  <div>
  <FooterCom></FooterCom>
  </div>
</div>
  );
}

export default App;
