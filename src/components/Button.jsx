
export default function Button({myClass, content, func, data}){
    return (
        <button onClick={() => func(data)} className={myClass ? 'default-button '+myClass : 'default-button'}>
            {content}
        </button>
    )
}