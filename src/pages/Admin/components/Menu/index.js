import MenuItem from "./MenuItem";

export default function Menu({ data }) {

    return (
        <div className="wrapper">
            {data.map((item, i) => (
                <div key={i}>
                    <MenuItem category={item} />
                </div>
            ))}
        </div>
    )
}