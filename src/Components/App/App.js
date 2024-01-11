import './App.css';

function App() {
  const isHomePage = location.pathname === '/'


  return (
    <main className='App'>
      <Header isHomePage={isHomePage}>
        {isHomePage ? null : <HomeButton />}
      </Header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
    
  );
}

export default App;
