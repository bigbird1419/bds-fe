import MenuItem from "./MenuItem";

export default function Menu({ data }) {

    return (
        <div className="wrapper h-full">
            {data.map((item, i) => (
                <div key={i}>
                    <MenuItem category={item} />
                </div>
            ))}
        </div>
    )
}