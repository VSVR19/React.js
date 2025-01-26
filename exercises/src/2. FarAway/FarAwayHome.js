import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

const FarAwayHome = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList initialItems={initialItems}/>
      <Stats />
    </div>    
  )
}

export { FarAwayHome };