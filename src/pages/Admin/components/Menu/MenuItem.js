import Button from '../../../../components/Button'

export default function MenuItem({ category }) {

    return (
        <div className="wrapper">
            <Button to={category.path}>{category.title}</Button>
        </div>
    )
}