export default function BakeryItem(props) {
    const name = props.item.name;
    const des = props.item.description
    const price = props.item.price;
    const image = props.item.image;
    return (
        <>
        <div className="BakeryItem">
            <img src={image} style={{height:'10rem', width:'20rem'}}></img>
            <p className="name">{name}</p>
            <p style={{color:"red"}}>{des}</p>
            <p className="price">Price: ${price}</p>
            <button className="btn" onClick={() => click(props)}>Add To Cart</button>
        </div>
        </>
    )
}

function click(props) {
    props.setAmount(props.amount + props.item.price);
    const tempDic = props.entry;
    if (!(props.item.name in tempDic)) {
        tempDic[props.item.name] = 0;
    }
    tempDic[props.item.name] = tempDic[props.item.name] + 1;
    props.setEntry(tempDic);
    console.log(tempDic);
}
