// Each of the page.js component in a Next.js app is a react server (RSC) component
// import Counter from '../components/Counter';

export default async function Page() {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await result.json();

  console.log(data);

  return (
    <div>
      <h1>Cabins page</h1>
      <p>Here is the list of cabins</p>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
