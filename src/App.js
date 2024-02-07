import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "1",
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: "2",
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: "3",
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: "4",
      name: "🥭 Mango",
      color: "moccasin",
    },
    {
      id: "5",
      name: "🥝 Kiwi",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card
          key={fruit.id}
          id={fruit.id}
          name={fruit.name}
          color={fruit.color}
        />
      ))}
    </div>
  );
}
