

export const Territory = ({imgage, title}) => {
    return <div className='mini-ter'>
        <div className="mini-ter__block">
            <img className="mini-ter__img" src={imgage} alt="plase" />
            <div className='mini-ter__title'>{title}</div>
        </div>
    </div>
}