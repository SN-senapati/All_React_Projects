export function PropsDrilling(){
    let username = "sudipta"
    return(
        <div className="container-fluid p-4 border border-2">
            <h3>Main</h3>
            <Parent username={username}/>
        </div>
    )
}

export function Parent({username}){
    return(
        <div className="container-fluid p-4 border border-2">
            <h3>Parent</h3>
            <Child username={username}/>
        </div>
    )
}

export function Child({username}){
    return(
        <div className="container-fluid p-4 border border-2">
            <h3>Child</h3>
            <Grandchild username={username}/>
        </div>
    )
}

export function Grandchild(){
    return (
        <div className="border border-2 p-4">
            <h3>Grand child</h3>
        </div>
    )
}


export function Appp() {
  const user = {
    name: "Sudipta",
    age: 25,
  };

  return <Profile user={user} />;
}


export function Profile({user}) {
//   user.age = 30;
    const {name,age} = user
  return (
    <>
    <h4>hello</h4>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </>
  );
}