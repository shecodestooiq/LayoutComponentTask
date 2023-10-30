import Layout from './components/Layout'
import image from './Assets/hello-greeting.gif'

function App() {
  return (
    <div className="container">
      <Layout>
        <div className='layoutContainer'>
          <div>
            <p>Hello this is a</p>
            <h1>Layout Children!</h1>
          </div>
          <img src={image} alt="greeting" /></div>
      </Layout>
    </div>
  );
}

export default App;
