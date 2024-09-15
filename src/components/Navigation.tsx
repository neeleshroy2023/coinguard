import { AiFillDingtalkCircle } from "react-icons/ai"

const Navigation = () => (<nav>
  <div className='flex gap-2 items-center'>
    <AiFillDingtalkCircle style={{ 'width': '60px', 'height': '60px' }}/>
    <p className='text-4xl font-black'>CoinGuard</p>
  </div>
</nav>)

export default Navigation