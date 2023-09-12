
export default function Button({myClass, content, func, data}){
    return (
        <button onClick={() => func(data)} className={myClass ? myClass : 'default-button'}>
            {content}
        </button>
    )
}