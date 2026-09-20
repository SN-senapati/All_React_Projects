export function GrandNewChild({name}){
    return(
        <div className="p-4 border border-2">
            <h3>Grand Child</h3>
            <dl>
                <dt>Name</dt>
                <dd>{name}</dd>
            </dl>
        </div>
    )
}