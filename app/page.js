import { Header, Categories } from '@/components/Header'
import BottomBar from '@/components/BottomBar'

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between pt-20 pb-20">
      <Header />
      <Categories />
      {/* Other content */}
      <BottomBar />
    </div>
  )
}

export default Menu
