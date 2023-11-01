import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      
    </Layout>
  )
}

export default App;
