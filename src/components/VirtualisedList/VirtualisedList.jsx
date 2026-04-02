import './VirtualisedList.css'
import List from './List'

const VirtualisedList = () => {
    const items = new Array(1000).fill("Item").map((item, index) => `${item} ${index+1}`);
    console.log(items);
  return (
    <div>
        <h2>Virtualised List Component</h2>
        <List height={400} width={300} itemHeight={40} items={items} />
    </div>
  )
}

export default VirtualisedList