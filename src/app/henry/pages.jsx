async function getHenry{} {
    const res = await fetch  ("https://nice-dogs.vercel.app/")
return
}
export default function HenryPage() {
    const data = await getHenry()
    console.log(data);
        
    
  return (
    <main>
      <h1>(data.name)</h1>
    
    </main>
  );
}
