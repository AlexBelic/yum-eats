import TopNav from './components/TopNav'
import Featured from './components/Featured'
import Delivery from './components/Delivery'
import TopPicks from './components/TopPicks'
import Meal from './components/Meal'
import Categories from './components/Categories'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'


export default function App() {
  return (
    <main>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <NewsLetter />
      <Categories />      
      <Footer />
    </main>
  )
}
